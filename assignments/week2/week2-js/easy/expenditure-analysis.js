const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800001, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800002, price: 15, category: 'Travel', itemName: 'Taxi' },
];

function totalSpentCategory(transactions){
    const map = {};

    for(const trans of transactions){
        const {category , price} = trans;

        if(!map[category]){
            map[category] = 0;
    }

    map[category] += price;
}
    return Object.keys(map).map(category => ({
        category,
        totalSpent : map[category],
    }));
}

console.log(totalSpentCategory(transactions));
