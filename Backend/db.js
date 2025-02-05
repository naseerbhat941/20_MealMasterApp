import {connect} from "mongoose";
 export const connectToDb =  (url) => {
  try {
    connect(url);
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ Database Connection Error:", err.message);
    process.exit(1);
  }
};

