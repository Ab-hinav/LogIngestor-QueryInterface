
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="./images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Log Ingestor & Query Interface</h3>

  <p align="center">
    This is my solution to the SDE 1 assignment from Dyte
    <br />
   
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#list-of-features-present">List Of Features</a></li>
    <li><a href="#further-thoughts">Further Thoughts</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### System Design of The Project

![Untitled-2023-10-07-1753](https://github.com/dyte-submissions/november-2023-hiring-Ab-hinav/assets/31389745/09bd9e46-d985-480a-9e02-54355bc41e4f)

#### About Each Component<br>
1 Nginx endpoint at 3000 will function as a load balancer distributing the incoming req b/w the two express servers (we can add more as required) <br>
2 Express web servers - there only job is to publish the log message to a message queue , in our case RabbitMQ <br>
3 RabbitMq - its job is to fill the queue and provide consumers a steady flow to consume log messages <br>
4 Message Consumer & REST server - its job is to consume the messages and post them to a datasource in this case Postgres RDBMS , here i am posting messages via a simple POST request <br>
5 PostGres RDBMS - its job is to function as a datasource , provide queryable interface to other consumers


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [React - library]()
* [Express - HTTP server](https://expressjs.com/)
* [RabbitMq - Message Broker]()
* [Tailwind - CSS]()
* [Seqlize - ORM ]()
* [Postgres - RDBMS]()
* [nginx - loadbalancer]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

First clone client-nginx folder.<br>
Make sure you have Docker installed in your PC<br>
Then checkout to the folder you just cloned and run the following
* docker-compose
  ```sh
  docker-compose up --build
  ```
You should now see 1 nginx , 2 node servers, 1 posgres rds ,1 rabbitmq containers <br>

### Installation of Consumer-backend and front-end

1. Clone the Consumer-backend & Consumer-frontend repos
2. After cloning the Consumer-backend run (inside the Consumer-backend) - 
   ```sh
    npm i 
   ```
   Ensure that all dependencies are installed. After that we need to run some db migrations
   ```sh
    npx sequelize-cli db:migrate  
   ```
3. After running the migrations we can start up our consumer-backend server
   ```sh
   npm run dev
   ```
4. To Verify if the consumer-backend is working fine check the following endpoints
   ``` sh
   http://localhost:8081/
   http://localhost:8081/hello
   ```
  These endpoints ensure your backend is up and connected to db

5. Now we can run our frontEnd , clone the Consumer-fronend repo and simply run
    ```sh
   npm run dev
   ```
6. Now you can view the frontend at http://localhost:5173/   

7. Hurray your system setup is complete

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can post log messages in the given format
```json
    {
      "level": "problem",
      "message": " a new message to abhi",
      "resourceId": "server-1434",
      "timestamp": "2023-09-15T08:00:00Z",
      "traceId": "abc-xyz-123",
      "spanId": "span-456",
      "commit": "5e5342f",
      "metadata": {
        "parentResourceId": "server-0987"
      }
}
```
Use Postman to post these messages to 
```html
http://localhost:3000/logs
```
Now you can use the frontend to filter and search through the message with the filters provided
<br>
Filters work on [And] basis.


_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## List Of Features Present

- [ ] Find all logs with the level set to "error".
- [ ] Search for logs with the message containing the term "Failed to connect"
- [ ] Retrieve all logs related to resourceId "server-1234"
- [ ] Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z". (Bonus)
- [ ] Allow combining multiple filters


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Further Thoughts

There are many improvements that could be made to the system. Given the time constraint I could not explore and implement.

Some of the Improvements/Explorations that could be made  - 

1. Implementing a full text search vector feature of postgres for faster search 
2. Implementing a role based login for the query UI
3. Using a time-series DB or something like https://www.mongodb.com/docs/manual/core/timeseries-collections/ as a datasource
3. Exploring a cloud based saving solution to save old logs to something like an S3
4. Maybe using something other than http calls
5. Exploring possibilities with elastic search

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Abhinav Singh -  abhinav16197@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Thanks to the Dyte team for providing this problem statement .
* It was an amazing learning experience for me building this system end to end
* Would love to know what you guys think of my solution/submission

