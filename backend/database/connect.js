const mongoose = require("mongoose");
const { connect } = require("http2");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connect To Database 🌞🍔,\n Host :: ${connect.connection.host},\n NAME :: ${connect.connection.name}`
    );
  } catch (error) {
    console.log(`Error while connecting to database ${error} 😵‍💫 `);
    process.exit(1);
  }
};

module.exports = connectDb;
