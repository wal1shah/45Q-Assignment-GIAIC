let usernames : string[] = ["Admin", "User1", "User2"];
let newusers : string[] = ["ADMIN", "USER1", "USER2"];
newusers.forEach(newusers => {
    if (usernames.some(usernames => usernames.toLowerCase() === newusers.toUpperCase())) {
        console.log(`${newusers} will need to add a new username`);
    } else {
        console.log(`${newusers} is available.`);
    }
});