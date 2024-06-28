import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
    origin: '*', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow cookies to be sent
    optionsSuccessStatus: 204 // Response status for successful OPTIONS requests
  };

// Middleware to enable CORS
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({ msg: "root working" });
});

app.listen(PORT, () => {
  console.log(`running on port http://127.0.0.1:${PORT}......`);
});

export default app;
