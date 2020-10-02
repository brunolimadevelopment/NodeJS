# NodeJS ❇
NodeJS repository 

## NPM Packages 📦

    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.10.7",
    "mongoose-paginate": "^5.0.3",
    "require-dir": "^1.2.0"

    # Install Nodemon - every time we save the server.js file, the nodemon will observe the changes

        npm install -D nodemon 

        "devDependencies": {
            "nodemon": "^2.0.4"
        }
        
    # Run nodemon

        Create an script in package.json called: "dev": "nodemon server.js"

        Run in terminal the command: npm run dev

## Details about packages 📑

    "cors" : Allow other addresses to access the API.

    "express": Micro framework, helps to handle routes, views and server configuration.

    "mongoose": Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

    "mongoose-paginate": Pagination plugin for Mongoose

    "require-dir": Node helper to require() directories. 

## Terminal Command Mongoose

    Run the mongo: 
        
        $ mongo

    Show the data bases: 
        
        $ show databases

    Run some database: 
        
        $ use nome_do_banco
    
    Show the "tables" COLLECTIONS: 
        
        $ show collections

    Show the registers of collections: 
    
        $ db.nome_da_collection.find()


### Important point 🚨

    - req.body   -> for body the request body 
    - req.params -> for the ID's defined in routes
    - req.query  -> for parameters GET exemple: {{ base_url }}/products/?page=2