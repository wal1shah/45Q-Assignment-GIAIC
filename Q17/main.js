"use strict";
let guests = ['Ironman', 'Batman', 'Thor'];
guests.push('Superman', 'Aquaman', 'Flash', 'Cyborg');
guests.splice(2, 5);
guests.forEach(guests => {
    console.log(`Dear ${guests} would you like to join me for dinner?`);
});
