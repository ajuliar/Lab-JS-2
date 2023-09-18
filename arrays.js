'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);

  }

  // for i in range(len(items)):
  // print(f'{items[i]} {i}')
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  

  }
  console.log(result)

  // result = []

  // for i in range(len(items)):
  //     if i % 2 == 0:
  //         result.append(items[i])

  // print(result)
}

// 3. smallestNItems
function smallestNItems(items, n) {
  /*
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b});
  */
  // let sortedItems = Arrays.sort(items);
  items.sort( function(a, b){return a - b} ); // Sort the items
  const sortedItems = items.slice(0, n); //Slices

  sortedItems.reverse();

  console.log(sortedItems);
  // sorted_items = sorted(items)
  // sorted_n_items = sorted_items[:n]
  // sorted_n_items.reverse()

  // print(sorted_n_items)
}

