let detail = {
  summer: [{ name: "Lassi" }, { name: "Lemon Juice" }, { name: "Badam juice" }],
  winter: [{ name: "hot tea" }, { name: "soup" }, { name: "hot water" }],
  rainy: [{ name: "rain" }, { name: "rain2" }, { name: "rain3" }],
};
let finalData = { summer: [{ name: "lassi" }] };
let category = "summer";
let category2 = "winter";
console.log(finalData[category2]); //undefined (if category is not defined) or category is defined but no values
// console.log(detail);
console.log(finalData);
