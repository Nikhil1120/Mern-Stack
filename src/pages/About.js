import React from "react";

const About = () => {
    return (
        <div className='mb-20'>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 '>
                About
            </h1>
            <h3 className='sm:text-2xl text-2xl font-bold my-6 text-gray-900'>What is the MERN stack?</h3>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
               
            </p>
            <p className='sm:text-xl text-xl font-bold my-6 text-gray-500'>
                MongoDB — document database<br />
                Express(.js) — Node.js web framework <br />
                React(.js) — a client-side JavaScript framework <br />
                Node(.js) — the premier JavaScript web server
            </p>
            <p className='sm:text-3xl text-2xl font-bold my-6 text-gray-900 '>How does the MERN stack work?</p>

            <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/0*ts5ZiPwkjmOJ4x8q.png' alt="mern" />
            <p className='sm:text-3xl text-2xl font-bold my-6 text-gray-900 '>React.js front end</p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.

                React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.
                
            </p>

            <p className='sm:text-3xl text-2xl font-bold my-6 text-gray-900 '>Express.js and Node.js server tier</p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.
            </p>

            <p className='mx-auto leading-relaxed text-base mb-4'>
                By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.
            </p>

            <p className='sm:text-3xl text-2xl font-bold my-6 text-gray-900 '>MongoDB database tier</p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.

                React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.

            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval</p>
        </div>
    );
};

export default About;