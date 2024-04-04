let person: {
    nam: string;
    age: number;
    religion: string;
    nationality: string;
    maritalStatus: string;
  } = {
    nam: "Ali",
    age: 23,
    religion: "Islam",
    nationality: "Pakistani",
    maritalStatus: "single",
  };
  console.log(person.nam.includes("Ali"));
  console.log(!person.nam.includes("Ali"));
  console.log(person.age<23);
  console.log(person.religion=="Islam");
  console.log(person.maritalStatus=="Maried");
  console.log(5>10);
  console.log(2*5>12);
  console.log(true||false);


  