import mongoose from "mongoose";
import config from "./config";
import app from "./app";
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://university_admin:TTI9kiPYZ4Oh4cK0@cluster0.eqk9iwm.mongodb.net/university-management?retryWrites=true&w=majority&appName=Cluster0" as string
    );
    console.log(`🤖 Database is connected successfuly`);

    console.log(config.database_url);
    
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

main();
