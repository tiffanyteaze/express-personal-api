const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "https://git.heroku.com/tiffany-gamerlog.git", {useMongoClient: true});

// module.exports.Campsite = require("./campsite.js.example");
