const Blog = require("../models/blog");
const User = require("../models/user");
const bcrypt = require("bcrypt");   

async function populate() {
    const blogs = await Blog.bulkCreate([
        {
            title: "Getting Started with Node.js: A Beginner’s Guide",
            subtitle: "Learn the basics of Node.js, its installation, and how to build your first application in this beginner-friendly guide.",
            description: ` <header>
            <h1>Getting Started with Node.js: A Beginner’s Guide</h1>
            <p>Discover the power of Node.js and kickstart your journey into server-side JavaScript development.</p>
        </header>
        
        <section>
            <h2>What is Node.js?</h2>
            <p>Node.js is a powerful runtime environment that allows developers to run JavaScript on the server side. Built on Chrome's V8 engine, it is known for its speed, scalability, and non-blocking I/O model.</p>
        </section>

        <section>
            <h2>Why Choose Node.js?</h2>
            <p>Node.js offers numerous benefits, including:</p>
            <ul>
                <li>Fast execution of code.</li>
                <li>Wide adoption and a vast ecosystem of packages via npm.</li>
                <li>Perfect for real-time applications like chat apps and online gaming.</li>
                <li>Unified development using JavaScript on both the client and server side.</li>
            </ul>
        </section>

        <section>
            <h2>Installing Node.js</h2>
            <p>Follow these simple steps to install Node.js on your machine:</p>
            <ol>
                <li>Visit the official <a href="https://nodejs.org" target="_blank">Node.js website</a>.</li>
                <li>Download the version suitable for your operating system.</li>
                <li>Run the installer and follow the prompts.</li>
                <li>Verify the installation by running <code>node -v</code> and <code>npm -v</code> in your terminal.</li>
            </ol>
        </section>

        <section>
            <h2>Your First Node.js Application</h2>
            <p>Let’s create a simple application:</p>
            <pre>
                <code>
// Load the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node.js!');
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
                </code>
            </pre>
            <p>Save the code in a file named <code>app.js</code>, then run it using <code>node app.js</code>. Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to see the result.</p>
        </section>

        <section>
            <h2>Next Steps</h2>
            <p>Now that you’ve built your first Node.js application, here are some ideas to explore further:</p>
            <ul>
                <li>Learn about npm and package management.</li>
                <li>Dive into Express.js for building web applications.</li>
                <li>Explore asynchronous programming with promises and async/await.</li>
            </ul>
        </section>`,
            slug: "node-js-a-beginner",
            image: "1.jpg"
        },
        {
            title: "10 Must-Know Node.js Libraries for Developers in 2024",
            subtitle: "Explore the top Node.js libraries that every developer should know in 2024. Learn about their features, use cases, and why they're essential.",
            description: `<article>
        <header>
            <h1>10 Must-Know Node.js Libraries for Developers in 2024</h1>
            <p>Stay ahead in the world of Node.js development by familiarizing yourself with these essential libraries.</p>
        </header>
        
        <section>
            <h2>1. Express.js</h2>
            <p>Express.js remains the go-to library for building web applications and APIs. Known for its minimalist framework, it provides a robust set of features for routing, middleware, and HTTP handling.</p>
            <p><strong>Why Use Express.js?</strong></p>
            <ul>
                <li>Simple and flexible API.</li>
                <li>Perfect for RESTful API development.</li>
                <li>Large and active community.</li>
            </ul>
        </section>

        <section>
            <h2>2. Lodash</h2>
            <p>Lodash is a popular utility library that simplifies working with arrays, objects, and strings. It’s a must-have for cleaner and more efficient code.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Deep object manipulation.</li>
                <li>Powerful functions for sorting, mapping, and filtering.</li>
                <li>Improves code readability and maintainability.</li>
            </ul>
        </section>

        <section>
            <h2>3. Mongoose</h2>
            <p>Mongoose is an ODM (Object Data Modeling) library for MongoDB. It helps manage data schemas and interactions with MongoDB in an intuitive way.</p>
            <p><strong>Best For:</strong> MongoDB projects requiring structured schemas and validation.</p>
        </section>

        <section>
            <h2>4. Socket.IO</h2>
            <p>Socket.IO is the go-to library for real-time communication, enabling features like live chat, notifications, and collaborative tools.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Real-time, bidirectional communication.</li>
                <li>Works with WebSocket protocol.</li>
                <li>Simple integration with Node.js.</li>
            </ul>
        </section>

        <section>
            <h2>5. Axios</h2>
            <p>Axios is a promise-based HTTP client for Node.js. It's lightweight, easy to use, and supports async/await syntax.</p>
            <p><strong>Why Developers Love It:</strong></p>
            <ul>
                <li>Automatic JSON parsing.</li>
                <li>Supports request cancellation.</li>
                <li>Easy error handling.</li>
            </ul>
        </section>

        <section>
            <h2>6. Passport.js</h2>
            <p>Passport.js is a flexible authentication library for Node.js. It supports a wide range of strategies, including OAuth, JWT, and local authentication.</p>
            <p><strong>Perfect For:</strong> Building secure authentication systems with minimal effort.</p>
        </section>

        <section>
            <h2>7. Chalk</h2>
            <p>Chalk is a simple but effective library for styling terminal output with colors and emphasis. It's perfect for creating user-friendly CLI tools.</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>Customizable colors and styles.</li>
                <li>Improves debugging and logging.</li>
            </ul>
        </section>

        <section>
            <h2>8. Winston</h2>
            <p>Winston is a versatile logging library that supports multiple transports, formats, and levels of logging.</p>
            <p><strong>Use Cases:</strong></p>
            <ul>
                <li>Error tracking.</li>
                <li>Application performance monitoring.</li>
            </ul>
        </section>

        <section>
            <h2>9. Moment.js (or Alternatives like Day.js)</h2>
            <p>While Moment.js remains popular, newer alternatives like Day.js are more lightweight and modern for handling date and time in Node.js applications.</p>
            <p><strong>Why It’s Essential:</strong> Simplifies date parsing, formatting, and manipulation.</p>
        </section>

        <section>
            <h2>10. PM2</h2>
            <p>PM2 is a process manager for Node.js applications, providing features like load balancing, monitoring, and auto-restart for seamless deployment.</p>
            <p><strong>Top Features:</strong></p>
            <ul>
                <li>Keeps apps running continuously.</li>
                <li>Detailed process management and monitoring.</li>
            </ul>
        </section>

        <footer>
            <p>These libraries are essential tools for Node.js developers in 2024. Mastering them can significantly boost your productivity and streamline your projects!</p>
        </footer>
    </article>`,
            slug: "10-must-now-nodejs",
            image: "2.jpg"
        },
        {
            title: "Building RESTful APIs with Node.js and Express: A Step-by-Step Tutorial",
            subtitle: "Learn how to build a RESTful API using Node.js and Express with this step-by-step tutorial. Includes examples and best practices.",
            description: `<article>
        <header>
            <h1>Building RESTful APIs with Node.js and Express: A Step-by-Step Tutorial</h1>
            <p>Learn how to create powerful and scalable RESTful APIs using Node.js and Express.js. This tutorial will guide you through the entire process.</p>
        </header>
        
        <section>
            <h2>What is a RESTful API?</h2>
            <p>A RESTful API is a way to communicate between different applications using HTTP methods like GET, POST, PUT, and DELETE. It follows REST principles to ensure scalability, statelessness, and simplicity.</p>
        </section>

        <section>
            <h2>Why Use Node.js and Express for APIs?</h2>
            <p>Node.js and Express are excellent choices for building APIs because:</p>
            <ul>
                <li>Node.js provides a fast and efficient runtime for JavaScript.</li>
                <li>Express simplifies server-side programming with its robust features.</li>
                <li>They offer great scalability and flexibility.</li>
            </ul>
        </section>

        <section>
            <h2>Setting Up Your Environment</h2>
            <p>Before we start, make sure you have Node.js and npm installed. Follow these steps:</p>
            <ol>
                <li>Install Node.js from the official <a href="https://nodejs.org" target="_blank">Node.js website</a>.</li>
                <li>Initialize a new project with <code>npm init -y</code>.</li>
                <li>Install Express with <code>npm install express</code>.</li>
            </ol>
        </section>

        <section>
            <h2>Creating a Basic Express Server</h2>
            <p>Start by creating a file named <code>server.js</code> and writing this code:</p>
            <pre>
                <code>
const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Start server
app.listen(port, () => {
    console.log("Server running at http://localhost:port");
});
                </code>
            </pre>
            <p>Run the server with <code>node server.js</code> and visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</p>
        </section>

        <section>
            <h2>Defining Routes for CRUD Operations</h2>
            <p>Let’s add routes for common CRUD operations:</p>
            <pre>
                <code>
// Mock data
const items = [];

// Create
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read
app.get('/items', (req, res) => {
    res.status(200).send(items);
});

// Update
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.status(200).send(updatedItem);
});

// Delete
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items.splice(id, 1);
    res.status(204).send();
});
                </code>
            </pre>
        </section>

        <section>
            <h2>Using Middleware for JSON Parsing</h2>
            <p>To handle JSON data, use the built-in Express middleware:</p>
            <pre>
                <code>
app.use(express.json());
                </code>
            </pre>
            <p>This enables Express to parse incoming JSON requests.</p>
        </section>

        <section>
            <h2>Testing the API</h2>
            <p>Use tools like <a href="https://www.postman.com/" target="_blank">Postman</a> or <a href="https://insomnia.rest/" target="_blank">Insomnia</a> to test your API routes. Ensure each route works as expected for creating, reading, updating, and deleting data.</p>
        </section>

        <section>
            <h2>Deploying Your API</h2>
            <p>Once your API is ready, deploy it using platforms like:</p>
            <ul>
                <li><a href="https://www.heroku.com/" target="_blank">Heroku</a></li>
                <li><a href="https://vercel.com/" target="_blank">Vercel</a></li>
                <li><a href="https://aws.amazon.com/" target="_blank">AWS</a></li>
            </ul>
        </section>

        <footer>
            <p>By following this tutorial, you’ve built a RESTful API using Node.js and Express. Keep experimenting and adding features to create more advanced APIs!</p>
        </footer>
    </article>`,
            slug: "building-restful-api",
            image: "3.jpg"
        },
        {
            title: "Top 5 Tips to Optimize Performance in Node.js Applications",
            subtitle: "Discover the top 5 tips to optimize the performance of your Node.js applications. Improve speed, efficiency, and scalability with these best practices.",
            description: `<article>
        <header>
            <h1>Top 5 Tips to Optimize Performance in Node.js Applications</h1>
            <p>Learn how to boost the performance of your Node.js applications with these essential optimization tips. Improve efficiency and speed while handling large-scale traffic.</p>
        </header>
        
        <section>
            <h2>1. Use Asynchronous Code for Non-Blocking I/O</h2>
            <p>Node.js is built on an asynchronous, event-driven architecture, allowing it to handle many tasks simultaneously without blocking the main thread.</p>
            <p><strong>Why It Matters:</strong> Synchronous code can block your application, leading to slower response times. Always prefer asynchronous APIs, such as using <code>async/await</code> or promises, for operations like file reading, database queries, or network requests.</p>
            <pre>
                <code>
const fs = require('fs');

fs.readFile('large-file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
                </code>
            </pre>
        </section>

        <section>
            <h2>2. Optimize Database Queries</h2>
            <p>Database queries are often the bottleneck in applications. To improve performance, optimize the queries to minimize response times.</p>
            <p><strong>Tips for Optimization:</strong></p>
            <ul>
                <li>Use indexing to speed up search operations.</li>
                <li>Batch requests to reduce the number of queries.</li>
                <li>Consider using a caching layer like Redis to cache frequent queries.</li>
            </ul>
        </section>

        <section>
            <h2>3. Use Clustering to Take Advantage of Multi-Core Systems</h2>
            <p>Node.js runs on a single thread by default, which means it can only use one CPU core. However, you can take advantage of multi-core systems by using Node's clustering module to spawn child processes and balance the load across them.</p>
            <p><strong>How to Use Clustering:</strong></p>
            <pre>
                <code>
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello, Node.js Clustering!');
    }).listen(8000);
}
                </code>
            </pre>
        </section>

        <section>
            <h2>4. Minimize Memory Usage</h2>
            <p>Memory leaks and inefficient memory usage can degrade performance in Node.js applications. It's important to monitor and optimize your memory consumption to ensure smooth performance.</p>
            <p><strong>Tips for Minimizing Memory Usage:</strong></p>
            <ul>
                <li>Use the <code>heapdump</code> module to analyze memory leaks.</li>
                <li>Avoid keeping large objects in memory for long periods.</li>
                <li>Use streaming for handling large files and data processing.</li>
            </ul>
        </section>

        <section>
            <h2>5. Leverage HTTP/2 for Better Performance</h2>
            <p>HTTP/2 offers improved performance over HTTP/1 by allowing multiplexing, header compression, and more efficient resource loading.</p>
            <p><strong>How to Enable HTTP/2 in Node.js:</strong></p>
            <pre>
                <code>
const http2 = require('http2');
const fs = require('fs');

const server = http2.createServer({
    key: fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-cert.pem')
}, (req, res) => {
    res.writeHead(200);
    res.end('Hello, HTTP/2!');
});

server.listen(3000);
                </code>
            </pre>
            <p>Switching to HTTP/2 can improve performance, especially for applications with many resources like images and scripts.</p>
        </section>

        <footer>
            <p>By implementing these five tips, you can significantly enhance the performance of your Node.js applications, ensuring they run faster, handle more users, and scale efficiently.</p>
        </footer>
    </article>`,
            slug: "top-5-nodejs-tips",
            image: "4.jpg"
        },
        {
            title: "Real-Time Web Apps with Node.js and WebSocket",
            subtitle: "Learn how to build real-time web applications using Node.js and WebSocket. This tutorial covers the basics of creating chat apps, live notifications, and other real-time features.",
            description: ` <article>
        <header>
            <h1>Real-Time Web Apps with Node.js and WebSocket</h1>
            <p>Learn how to create real-time web applications with Node.js and WebSocket. This guide will walk you through setting up a simple chat application to demonstrate real-time communication.</p>
        </header>
        
        <section>
            <h2>What is WebSocket?</h2>
            <p>WebSocket is a protocol that allows for full-duplex communication channels over a single TCP connection. Unlike traditional HTTP requests, WebSocket allows servers to push updates to clients in real-time, which is essential for building interactive, real-time web applications.</p>
        </section>

        <section>
            <h2>Why Use WebSocket with Node.js?</h2>
            <p>Node.js, being event-driven and non-blocking, is an ideal environment for handling WebSocket connections. WebSocket allows for real-time bidirectional communication between clients and the server with low latency.</p>
            <ul>
                <li>Real-time data transfer without constant HTTP requests.</li>
                <li>Efficient communication for chat apps, live notifications, gaming, and more.</li>
                <li>Easy integration with Node.js using the <code>ws</code> package.</li>
            </ul>
        </section>

        <section>
            <h2>Setting Up the Project</h2>
            <p>To get started, first initialize a Node.js project and install the necessary packages:</p>
            <ol>
                <li>Initialize a new Node.js project: <code>npm init -y</code></li>
                <li>Install the <code>ws</code> WebSocket package: <code>npm install ws</code></li>
                <li>Create a file named <code>server.js</code>.</li>
            </ol>
        </section>

        <section>
            <h2>Creating a Simple WebSocket Server</h2>
            <p>In the <code>server.js</code> file, write the following code to create a basic WebSocket server:</p>
            <pre>
                <code>
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
    });
    
    ws.send('Hello from the WebSocket server!');
});
                </code>
            </pre>
            <p>This server listens for WebSocket connections on port 8080 and sends a greeting message to clients that connect. It also logs any messages received from the clients.</p>
        </section>

        <section>
            <h2>Creating a Simple WebSocket Client</h2>
            <p>Now, let's create a simple HTML client that connects to our WebSocket server:</p>
            <pre>
                <code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Client</title>
</head>
<body>
    <h1>WebSocket Client</h1>
    <button id="sendMessage">Send Message</button>
    <div id="messages"></div>

    <script>
        const socket = new WebSocket('ws://localhost:8080');
        
        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const messagesDiv = document.getElementById('messages');
        };

        document.getElementById('sendMessage').onclick = () => {
            socket.send('Hello from the client!');
        };
    </script>
</body>
</html>
                </code>
            </pre>
            <p>This simple HTML page connects to the WebSocket server and allows the user to send a message by clicking a button. It also displays any messages received from the server.</p>
        </section>

        <section>
            <h2>Real-Time Chat Application Example</h2>
            <p>With WebSocket, you can easily extend this setup to create a real-time chat application. Here’s a basic approach:</p>
            <ul>
                <li>When a new message is received by the server, broadcast it to all connected clients.</li>
                <li>Handle events such as user joining and leaving the chat.</li>
                <li>Persist messages to a database if needed.</li>
            </ul>
            <p>By doing this, all connected clients will instantly receive new messages without needing to refresh the page or send repeated HTTP requests.</p>
        </section>

        <section>
            <h2>Scaling WebSocket Applications</h2>
            <p>As your application grows, scaling WebSocket connections can become challenging. Consider using a message broker like <a href="https://socket.io/" target="_blank">Socket.IO</a> or <a href="https://www.ably.io/" target="_blank">Ably</a> for better scalability. These tools provide advanced features like clustering, reconnection strategies, and more.</p>
        </section>

        <footer>
            <p>WebSocket and Node.js provide the perfect combination for building fast, real-time web applications. Whether you’re building a chat app, live notifications, or a multiplayer game, WebSocket will help you deliver low-latency, interactive experiences to your users.</p>
        </footer>
    </article>`,
            slug: "real-time-web-app-nodejs",
            image: "5.jpg"
        },
    ])
    const users = await User.bulkCreate([
        {
            fullname: "Admin",
            email: "admin@blog.com",
            password: await bcrypt.hash("123", 10)
        },
        {
            fullname: "Moderator",
            email: "moderator@blog.com",
            password: await bcrypt.hash("123", 10)
        },
        {
            fullname: "Guess",
            email: "guess@blog.com",
            password: await bcrypt.hash("123", 10)
        }
    ])
}

module.exports = populate;