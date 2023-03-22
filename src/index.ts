import express       from "express"
import mongoose      from "mongoose"

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Estate');
  console.log("Connected to MongoDB");
}
  const app = express()

app.use(express.urlencoded({extended: false}));



app.listen(4000, () => {
  console.log("listening on port 4000")
})