import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./Routes/userRoute";
dotenv.config()

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
}
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
