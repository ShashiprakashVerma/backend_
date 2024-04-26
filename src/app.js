import  Express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=Express();


app.use(cors({
  origin:process.env.CORS_ORIGIN, credentials:true
}))

app.use(Express.json({limit:"16kb"}))
app.use(Express.urlencoded({extended:true,limit:"14kb"}))
app.use(Express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)

//http://localhost:8008/api/v1/user/register
export { app }
