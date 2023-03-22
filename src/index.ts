import dotenv from "dotenv"
import App from "./app"
// import PlaceController from "./controllers/placeController";
import UserController from "./controllers/userController";
dotenv.config()


const app = new App(
  [
  new UserController(),
  // new PlaceController()
],
  Number(process.env.PORT))


app.listen()



