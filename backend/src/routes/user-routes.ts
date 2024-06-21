import { Router } from "express";
import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";
import appRouter from "./index.js";


const userRoutes = Router();

userRoutes.get("/",getAllUsers);
userRoutes.post("/signup",userSignUp)


export default userRoutes;