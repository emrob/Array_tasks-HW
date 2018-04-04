var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = arr1.concat(arr2);
		return newArray;

	},

	insertAt: function (arr, itemToAdd, index) {
   arr.splice(index,0,itemToAdd);
	 return arr;
	},

	square: function (arr) {
	  return arr.map(function (x) {
	    return Math.pow(x, 2);
	  });
	},

	sum: function (arr) {
     const add = (a, b) => a + b;
		 const sum = arr.reduce(add);
		 return sum;
	},


	findDuplicates: function (arr) {
	  let result = [];

	  arr.forEach(function(element, index) {

	    // Find if there is a duplicate or not
	    if (arr.indexOf(element, index + 1) > -1) {

	      // Find if the element is already in the result array or not
	      if (result.indexOf(element) === -1) {
	        result.push(element);
	      }
	    }
	  });

	  return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		var filtered_array = [];
    for (var num of arr) {
	  if (num === valueToRemove) {
		var index = arr.indexOf(num);
		filtered_array.push(arr.splice(index, 1));
	}
}
return arr;

},


//
// let filtered_array = Array.from(new Set(arr));
// return filtered_array;

// Use the Set data structure, which automatically takes an iterable and removes duplicates. Then, use the from function of the Array object which will then take an iterable and convert it into an array.
// ---> so returns array without any duplicated.... but not working as keeps the 1, want to remove all 1s


	// findIndexesOf: function (arr, itemToFind) {

	// },

	sumOfAllEvenNumbersSquared: function (arr) {
		const add = (a, b) => a + b;
		let even = [];
		for(var i = 0; i < arr.length; i++) {
		  if (arr[i] % 2 === 0) even.push(arr[i]);
		}
		  // arr.map(function (x) {
	    // Math.pow(x, 2);
			return even.reduce(add);
	  // });

	}


}

module.exports = arrayTasks


// square: function (arr) {
// 	return arr.map(function (x) {
// 		return Math.pow(x, 2);
// 	});
// },
