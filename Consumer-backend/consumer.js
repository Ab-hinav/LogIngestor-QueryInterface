const amqp = require("amqplib");
const axios = require("axios");

async function consumeMessages() {
  await sleep(10000);
  let connection = null;
  let channel = null;

  try {
    connection = await amqp.connect("amqp://guest:guest@localhost:5672");
    channel = await connection.createChannel();

    const queueName = "all_logs";
    await channel.assertQueue(queueName, { durable: true });

    console.log(`Waiting for messages from queue: ${queueName}`);

    channel.consume(
      queueName,
      async (msg) => {
        if (msg.content) {
          console.log(`Received message: ${msg.content.toString()}`);
          // Process the message as needed
          await consumeAndPostMessage(msg.content.toString());
        }
      },
      { noAck: true },
    );
  } catch (error) {
    console.error("Error:", error.message);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function consumeAndPostMessage(mssg) {
  mssg = JSON.parse(mssg);
  const response = await axios.post("http://localhost:8081/consumeLog", {
    message: mssg,
  });
}

module.exports = consumeMessages;
