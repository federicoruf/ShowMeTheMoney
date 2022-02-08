# Show me the money

## Prerequisits

Paste .env file inside frontend folder. This file got Mongo DB key

## Running

### Front

In the project /frontend directory, you can run:

`npm start`

The page will reload when you make changes.

Open [http://localhost:3005/mark](http://localhost:3000) to view it in your browser.

### Back

In the project /backend directory, you can run:

To run the app in the development mode use

`npm run dev`

The page will reload when you make changes.

### Updating stocks and bonds values:

curl --location --requestPUT'http://localhost:3000/investments' --header'Content-Type: application/json' --data-raw'{"updates": [{"name": "Amazon", "unitPrice": 1000}]}'

## Package versions

React
Node
