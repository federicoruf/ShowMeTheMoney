# Show me the money

## Prerequisits

1. Run npm install inside both folder (backend and frontend)

## Running

### Front

In the project /frontend directory, you can run:

`npm start`

The page will reload when you make changes.

Open [http://localhost:3005/Mark](http://localhost:3000) to view it in your browser. Or [http://localhost:3005/John](http://localhost:3000)
This are the only two users on the system

### Back

In the project /backend directory, you can run:

To run the app in the development mode use

`npm run dev`

The page will reload when you make changes.

### Updating stocks and bonds values:

You have to udpate the --data-raw parameter, sending always something with this format:
'{"updates": [{"name": "Stock name1", "unitPrice": integer value}, {"name": "Stock name2", "unitPrice": integer value}, ... ,{"name": "Stock nameN", "unitPrice": integer value}]}'

Example:

curl --location --request PUT 'http://localhost:3000/investments' \

--header 'Content-Type: application/json' \

--data-raw '{"updates": [

    {"name": "Amazon", "unitPrice": 1000}

]}

## Package versions

React 17.0.2
Node 16.3.0
