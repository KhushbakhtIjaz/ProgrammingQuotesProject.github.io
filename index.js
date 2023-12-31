import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port=3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let result; // to store a random quote
let result2 = []; // to store 10 random quotes


app.use(express.static("Public"));
const API_URL ="https://programming-quotesapi.vercel.app/api";

app.listen(port, ()=>{
    console.log(`server is running at the port ${port}`);
});

app.get("/", async(req,res)=>{
    try
    {
     const response= await axios.get(API_URL +"/random");
     result=response.data;
     console.log(result);
     res.render("index.ejs", {quote: result.quote, author:result.author});
    }
    catch(error)
    {
        console.error("Failed to make request:", error.message);
        res.send(500);
    }
    });

    app.post("/show10Quotes", async(req,res)=>{
        try
        {
         const response= await axios.get(API_URL+ "/bulk");
         result2=response.data;
         res.render("quotes.ejs", {Quotes10Results:result2 });
        }
        catch(error)
        {
            console.error("Failed to make request:", error.message);
            res.send(500);
        }
        });

        function previous() {
            window.history.back();
        }

        app.get("/index.ejs", (req,res)=>{
           
             res.render("index.ejs", {quote: result.quote, author:result.author});
            });

        