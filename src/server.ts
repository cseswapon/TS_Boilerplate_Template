import mongoose from "mongoose";
import app from ".";
import config from "./config";

(async function () {
  try {
    await mongoose.connect(config.db_uri as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
