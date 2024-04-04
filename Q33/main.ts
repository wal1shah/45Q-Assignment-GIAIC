let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((numbers) => {
  let suffix: string = "th";
  if (numbers === 1) {
    suffix = "st";
  } else if (numbers === 2) {
    suffix = "nd";
  } else if (numbers === 3) {
    suffix = "rd";
  }
  console.log(`${numbers}${suffix}`);
});
