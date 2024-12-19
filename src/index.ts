import express from "express";
import * as dotenv from "dotenv";
import { contactsRouter } from "./contacts/contacts.router";


dotenv.config();
const app = express();



app.use(express.json());
app.use("/api/contact", contactsRouter);

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});
