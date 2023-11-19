const express = require("express");
const bodyParser = require("body-parser");
const amqp = require("amqplib");

const app = express();

app.use(bodyParser.json());

const rabbitMQUrl = "amqp://guest:guest@rabbitmq:5672";
const exchangeName = "system_logs";

// health check
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// posting the logs to message queue
app.post("/logs", async (req, res) => {
  try {
    const logData = req.body;
    console.log(logData);
    // Validate log format
    const requiredFields = [
      "level",
      "message",
      "resourceId",
      "timestamp",
      "traceId",
      "spanId",
      "commit",
      "metadata",
    ];
    const missingFields = requiredFields.filter((field) => !(field in logData));

    if (missingFields.length > 0) {
      return res
        .status(400)
        .json({
          error: `Missing required fields: ${missingFields.join(", ")}`,
        });
    }

    //metadata check
    if (!"parentResourceId" in logData.metadata) {
      return res
        .status(400)
        .json({ error: `Missing required field: parentResourceId` });
    }

    // Connect to RabbitMQ
    // const connection = await amqp.connect(rabbitMQUrl);
    const connection = await amqp.connect(rabbitMQUrl, "heartbeat=60");
    const channel = await connection.createChannel();
    const queue = "all_logs";
    const routingKey = "normal";

    // Declare the exchange
    await channel.assertExchange(exchangeName, "direct", { durable: true });
    await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchangeName, routingKey);

    // Publish the log message to the exchange
    await channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(logData)),
    );

    // Close the channel and connection
    await channel.close();
    await connection.close();

    return res.status(200).send("Log published to RabbitMQ");
  } catch (error) {
    console.log("Error publishing log to RabbitMQ:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
