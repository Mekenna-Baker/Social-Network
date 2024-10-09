# Social-Network

## Description

The Social Network API is a backend solution for a social networking platform, where users can set up accounts, post thoughts, react to friends' posts, and manage their friend lists. I built this to practice working with MongoDB and Mongoose, which are perfect for handling lots of unstructured data and creating a flexible backend. This project helped me sharpen my skills in building RESTful APIs with Express.js, setting up CRUD operations, and organizing code with routes and controllers. Along the way, I got a much better handle on NoSQL databases, creating modular code, and designing an API that can easily scale as a platform grows. 

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Here are the steps to get this project up and running: 

First clone this repository. Once that is done, navigate to the projects directory. 
Run npm install in the root directory to install required packages.
Ensure that you have MongoDB installed and running on your machine. 
run npm run build to build the TypeScript files.
And finally, start the server by running npm start. 

## Usage

This API provides a variety of endpoints to interact with users, thoughts, reactions, and friend lists. 
You can test each route using Insomnia or Postman.

Walkthrough video below!
https://youtu.be/6-uQmOwE9Ts

## Features

User Management: CRUD (create, read, update, and delete) users with username and email. 
Thought Management: Allows users to create, edit, and delete thoughts. Each thought is associated with the user who created it. 
Reaction System: Enables users to react to thoughts with a sub-document schema for reactions. 
Friendship Functionality: Allows users to add and remove friends. Friend lists are automatically updated. 
