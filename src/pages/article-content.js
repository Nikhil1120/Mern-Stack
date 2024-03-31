const articles = [
    {
        name: "learn-react",
        title: "The Fastest Way to Learn React",
        thumbnail: "/images/blog1.jpeg",
        content: [
            `React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.`,
            <p><b>Recommended Toolchains</b></p>,
            <p><b>*</b> If you’re learning React or creating a new single-page app, use Create React App.</p>,
            <p><b>*</b> If you’re building a server-rendered website with Node.js, try Next.js.</p>,
            <p><b>*</b> If you’re building a static content-oriented website, try Gatsby.</p>,
            <p><b>*</b> If you’re building a component library or integrating with an existing codebase, try More Flexible Toolchains.
            </p>,
            <p><b>1) Create React App</b></p>,
            <p><b>*</b> npx create-react-app my-app
            </p>,
            <p><b>*</b> cd my-app
            </p>,
            <p><b>*</b> npm start
            </p>,
            <p><b>1) Next.js</b></p>,
            `Next.js is a popular and lightweight framework for static and server‑rendered applications built with React. It includes styling and routing solutions out of the box, and assumes that you’re using Node.js as the server environment.`,
            <p><b>1) Gatsby</b></p>,
            `Gatsby is the best way to create static websites with React. It lets you use React components, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.`,




        ],
    },
    {
        name: "learn-node",
        title: "How to Build a Node Server in 10 Minutes",
        thumbnail: "/images/blog2.jpeg",
        content: [
            `Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.`,
            <p>Step 1: Set up your Node.js environment   --><b>node -v</b></p>,
            <p>Step 2: Initialize your project   --><b>npm init -y</b></p>,
            <p>Step 3: Install the Express module  --><b>npm install express</b></p>,
            <p>Step 4: Create your server file   --><b>server.mjs</b></p>,
              
            <p>Step 5: Launch your server  --><b>node server.mjs</b></p>,
            <p>Step 6: Your server is up and running  --><b>http://localhost:3000</b></p>,


        ],
    },
    {
        name: "my-thoughts-on-learning-react",
        title: "Setup an ExpressJs Application",
        thumbnail: "/images/blog3.jpeg",
        content: [
            `Express is the most popular minimalistic framework. It is built upon the built-in module HTTP of NodeJS to facilitate the simple and easy interaction between frontend and backend logic through API, and also it enables us to organize our business logic in so much pretty manner. It is much flexible and we can use it for both the web and android. Also, it provides a very simple error handling procedure.`,
            <p><b>Step 1: </b> Write this command in your terminal, to create a nodejs application, because our express server will work inside the node application. --> <b>npm init</b></p>,
            <p><b>Step 2: </b> Install necessary dependencies for our application. --> <b>npm install express</b></p>,
            <p><b>Step 3: </b> Create a File app.js . --> <b>app.js</b></p>,
            `
const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,
                   and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
)`,
            <p><b>Step 4: </b>Step to run the application --><b>node app.js</b></p>


        ],
    },
];
export default articles;