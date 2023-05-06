function findRestaurant(list1, list2) {
    const map = new Map();
    let minSum = Infinity;
    const result = [];
    
    for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], i);
    }
    
    for (let j = 0; j < list2.length; j++) {
      if (map.has(list2[j])) {
        const sum = j + map.get(list2[j]);
        if (sum < minSum) {
          minSum = sum;
          result.length = 0;
          result.push(list2[j]);
        } else if (sum === minSum) {
          result.push(list2[j]);
        }
      }
    }
    
    return result;
  }
  