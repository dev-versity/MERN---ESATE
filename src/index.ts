import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
}
const app = express();

app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
