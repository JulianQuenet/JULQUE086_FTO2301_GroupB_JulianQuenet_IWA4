const date = 2050;
const yourStatus = "Parent";
let count = 0;

if (date === 2050) {
  console.log("January:", "New Year's Day");
  console.log("March:", "Human Rights Day");
  console.log("April:", "Family Day");
  console.log("April:", "Freedom Day");
  console.log("August:", "Women's Day");
  console.log("September:", "Heritage Day");
  console.log("December:", "Day of Reconciliation");
  console.log("December:", "Day of Goodwill");
  count += 8;

  if (yourStatus === "student") {
    console.log("June:", "Youth Day");
    count += 1;
  } else if (yourStatus === "Parent") {
    console.log("December:", "Christmas Day");
    count += 1;
  }
}

console.log("Your status is:", yourStatus);
console.log("The year is:", date);
console.log("The total holidays are:", count);
