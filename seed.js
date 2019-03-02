// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

const new_game = {
    title: "Majora's Mask",
    avatar: "Link"
}

db.Game.create(new_game, function(err, game){
    if (err){
        return console.log("Error:", err);
    }
    console.log("Created new game entry", game._id)
    process.exit();
})

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
