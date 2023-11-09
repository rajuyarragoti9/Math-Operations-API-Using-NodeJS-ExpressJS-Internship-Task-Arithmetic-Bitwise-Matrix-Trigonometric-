# Math Operations API

## Description

Math Operations API is a Node.js-based web application that provides a set of mathematical operations accessible via RESTful API endpoints. This project is designed to make various mathematical calculations accessible through a simple and easy-to-use API.

## Technologies Used

- Node.js
- Express.js
- mathjs

## Table of Contents

- [Usage](#usage)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Usage

To use this API, you need to have Node.js and npm (Node Package Manager) installed on your machine. Here's how to get started:

1. Clone the repository to your local machine:

`git clone https://github.com/your-username/MathOperationsAPI.git`
` cd MathOperationsAPI` 2. Install the required dependencies:
`npm install`

3. Start the server:
   `node app/index.js`
   The server will start, and you can access the API at `http://localhost:4000/mathserver/`.

# Endpoints

The API provides several mathematical operations categorized into different controllers:

- Arithmetic Controller (/mathserver/arithmetic): Perform basic arithmetic operations.
- Bitwise Controller (/mathserver/bitwise): Perform bitwise operations.
- Trigonometric Controller (/mathserver/trigonometric): Calculate trigonometric functions.
- Matrix Operation Controller (/mathserver/matrixoperation): Perform operations on matrices.

You can make GET and POST requests to these controllers using the specified endpoints and parameters.

# Examples

1. Example 1: Basic Arithmetic

- Endpoint: `/mathserver/arithmetic/add/5/3`
  HTTP Method: GET
- Response:
  `{"result":8}`

2.  Example 2: Bitwise AND

- Endpoint: /mathserver/bitwise/and/12/7
  HTTP Method: GET
- Response:
  `{"result":4}`

3. Example 3: Matrix Determinant

- Endpoint: /mathserver/matrixoperation/det
  HTTP Method: POST
- Request Body:
  `{"mat1":[[2,3],[4,5]]}`
- Response:
  `{ "result" : -2}`
