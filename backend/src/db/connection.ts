import { connect } from "mongoose";
import { disconnect } from "process";

export default async function connectToDatabase(){
    try{
        await connect(process.env.MONGO_URL);
    }catch(error){
        console.log(error);
        throw new Error("Cannot Connect to MongoDB!")
    }
}


async function disconnectFromDatabase(){
    try {

        await disconnect();
        
    } catch (error) {

        console.log(error);
        throw new Error("Could not Disconnect from MongoDB!");
        
    }
}

export {connectToDatabase,disconnectFromDatabase}