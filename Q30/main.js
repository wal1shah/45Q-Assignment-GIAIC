"use strict";
let members = ["Admin", "User1", "User2", "User3"];
members.forEach(members => {
    if (members == "Admin") {
        console.log("Hello Admin, would you like to see the status report?");
    }
    else {
        console.log(`${members}, Thankyou for loging in`);
    }
});
