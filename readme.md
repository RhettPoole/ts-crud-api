## Overview

**Project Title**: TS-Crud-API

**Project Description**: Using TS and Express, this project allows the user to add products to an array, update the products' information, read all products info or call them by ID, and delete a product from the array. The server and data are hosted locally in the progam. Because of this, there is a new array created everytime that the program starts and restarts.

**Project Goals**: Set up my environment to use TypeScript, download any necessary extensions or packages in VSCode. Create a HelloWorld project to make sure it works correctly. Study each of the 5 requirements and stretch requirement for the TypeScript module.
I will need Node and Express.js. I plan to work with VSCode as my IDE. I have already worked with Node, so that should be simple to set up and start. I have yet to learn about Express.js so I will need to find out any extensions to download or packages to install.
I will also need to know the differences - if any - between TypeScript and Javascript.
The topics will you learn first to build a good foundation:
Express.js, TypeScript.js, Node, and Postman
Classes, Arrays, and Tuples. I have worked with variables, functions, and data types already. The three topics I mentioned at the beginning of this statement will be my focus for enhancing my abilities in JS and TS.

## Instructions for Build and Use

Steps to build and/or run the software:

1. Commands to initialize and install needed packages/extensions.
mkdir ts-crud-api -> Makes directory to work in.
cd ts-crud-api -> Navigates to needed directory
npm init -y -> Generates needed package.json file with default settings.
npm install -g express -> Globally "-g" installs express.js which interacts with Node. Updates package.json and package-lock.json to include express as a dependency for this project.
npm install --save-dev typescript ts-node-dev @types/express -> Installs typescript, installs ts-node, which allows the program to regenerate automatically when you save the file. Installs TypeScript definitions for Express, helps with error detection. save-dev ensures that correct packages are installed.
npx tsc --init -> Initializes tsconfig.json file which controls the TypeScript compiler. This controls what files are included and other specific compiler settings. 

2. Use npm run dev to start local server and instantiate array.

3. Ensure your tsconfig.json file is structured as the following snippet:
{
  "target": "ES6",
  "module": "commonjs",
  "rootDir": "./src",
  "outDir": "./dist",
  "strict": true,
  "esModuleInterop": true
}

## Instructions for using the software:

1. Navigate to http://localhost:3000/products to see the empty array
2. Use Postman to run CRUD operations. You can see the results in postman, or you can refresh your browser and see the results.

## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* VSCode
* Node v20.11.0
* Postman 11.46.6
* Express v4 -> I tried to use v5 but it is still in the beta phase and did not work for me.
* JavaScript and TypeScript Nightly v5

## Useful Websites to Learn More

I found these websites useful in developing this software:

* https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
* https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
* https://www.typescriptlang.org/docs/handbook/2/basic-types.html\
* https://www.geeksforgeeks.org/express-js-app-post-function/
* https://www.youtube.com/watch?v=CLG0ha_a0q8 
* https://rapidapi.com/guides/how-to-use-rapidapi-client-for-vscode-to-test-apis 

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* I could eventually add a function to my program that will all the customer's to search by ID, Price, or name and then return the product from the array.
* Make a front-end interface
* Make a "quantity" section where we can check how many of each item we have in stock.