let guests : string[] = ['Ironman', 'Batman', 'Thor'];
guests.push("Superman");
let newGuests = [...guests , 'Aquaman', 'Flash', 'Cyborg']
newGuests.forEach(newGuests => {
    
    console.log(`Dear ${newGuests} would you like to join me for dinner?`);
});