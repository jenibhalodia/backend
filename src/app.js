import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))   //it is used to limit the json data which is comming in backend
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // it is use to simplify url that is comming in th backend
app.use(express.static("public"))     //it is used to store data in folder
app.use(cookieParser())   //it is use to access cookie of user

// routes import 
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)

export default app; 