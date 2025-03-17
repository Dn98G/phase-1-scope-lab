// Write your solution in this file!

customerName = "bob";
console.log(customerName);

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
console.log(upperCaseCustomerName);

function setBestCustomer() {
  bestCustomer = "not bob";
}
bestCustomer;

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}
console.log(overwriteBestCustomer());

const leastFavoriteCustomer = "doe";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jane";
  return leastFavoriteCustomer;
}
