/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySum = {};
  transactions.forEach((element) => {
    if (!categorySum[element.category]) {
      categorySum[element.category] = 0;
    }
    categorySum[element.category] += element.price;
  });

  return Object.entries(categorySum).map(([key, value]) => ({
    category: key,
    totalSpent: value,
  }));
}

module.exports = calculateTotalSpentByCategory;
