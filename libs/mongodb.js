import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}; 
let mongoClient;
if(!uri){
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const connectMongoDB = async () => {
  try {
    if(mongoClient){
      return console.log("MongoDB already connected.");
    }
    mongoClient = await mongoose.connect(uri, options);
    console.log("Connected to MongoDB.");
    return mongoClient;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
