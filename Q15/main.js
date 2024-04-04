"use strict";
let guests = ["Ironman", "Batman", "Thor"];
guests[1] = "Superman";
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for a dinner?`);
});
