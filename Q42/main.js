"use strict";
let magicians = ["Alice", "David", "Chris"];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
showMagicians(magicians);
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "The Great";
    }
}
makeGreat(magicians);
showMagicians(magicians);
