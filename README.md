# Zumba_Backend_Code 
[Running Server Link](https://zumba.onrender.com/api/v1)

# Backend API Documentation

This repository contains the backend code for an application that handles orders and user authentication. Below are the details of the routes defined in the code:

## Installation

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file and set the necessary environment variables.

## Routes

### Order Routes

#### `POST /createorder`

Creates a new order.

#### `POST /createorderonline`

Creates a new online order.

#### `POST /paymentverification`

Verifies payment for an order. Requires authentication.

#### `GET /myorders`

Retrieves the orders associated with the authenticated user. Requires authentication.

#### `GET /order/:id`

Retrieves details of a specific order by ID. Requires authentication.

### Admin Routes

#### `GET /admin/orders`

Retrieves all orders. Requires authentication and admin authorization.

#### `GET /admin/order/:id`

Processes an order by ID. Requires authentication and admin authorization.

### User Authentication Routes

#### `GET /googlelogin`

Initiates the Google login process.

#### `GET /login`

Handles the Google login callback and redirects to the frontend URL upon successful login.

#### `GET /me`

Retrieves the profile of the authenticated user. Requires authentication.

#### `GET /logout`

Logs out the user.

#### Admin Routes

##### `GET /admin/users`

Retrieves all users. Requires authentication and admin authorization.

##### `GET /admin/stats`

Retrieves statistics for the application. Requires authentication and admin authorization.

## Usage

1. Make sure you have the required environment variables set in your `.env` file.
2. Run `npm start` to start the server.
3. Access the API routes using a tool like Postman or integrate them into your frontend application.

## Contributing

If you find any issues or would like to contribute, feel free to submit a pull request.


