const Movie = require("../models/event");

function newEvent(req, res) {
    res.render("events/new", { title: "Add Event });
  }

const event = new Event(req.body);
event.save(function (err) { // mongoose talking 
  //to mongodb and saying put this object in the movies collection in the database
  // one way to handle errors
  console.log(err, " this err");
  if (err) return res.redirect("/event/new");
  console.log(event);
  // for now, redirect right back to new.ejs
  res.redirect(`/events/${event._id}`);
});

module.exports = {
    new: newMovie,
    index
    
  };
  