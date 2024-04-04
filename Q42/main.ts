let magicians: string[] = ["Alice", "David", "Chris"];

function showMagicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

showMagicians(magicians);

function makeGreat(magicians: String[]){
for (let i = 0; i < magicians.length; i++ ){
magicians[i] = magicians[i] + "The Great"
}
}

makeGreat(magicians);
showMagicians(magicians); 