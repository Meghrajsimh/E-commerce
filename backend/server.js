const app = require('./app');
const dotenv= require("dotenv");
const database = require("./config/database");

//handeling Uncaught exceptions
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception" );
    process.exit(1);
});

// config
dotenv.config({path:"backend/config/config.env"});
database();

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is worling on http://localhost:${process.env.PORT}`)
})

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandle Promice rejection ");
    server.close(()=>{
        process.exit(1);
    });
})