

//loop
// const getSumgetSumValueOfEvenIndOf99 = () => ({
// 	sum: 2450,
// 	count: 50,
// })


//ar
const getMinElemOfArr = array => {

	if (!array.length) {
		return -1;
	}

	let minElem = array[0];

	for(let i = 1; i < array.length; i++) {

		if (array[i] < minElem) {
			minElem = array[i];
		}

	}

	return minElem;
}

const getMaxElemOfArr = array => {

	if(!array.length) {
		return -1;
	}

	let maxElem = array[0];

	for(let i = 1; i < array.length; i++) {

		if(array[i] > maxElem) {
			maxElem = array[i];
		}

	}

	return maxElem;
}

const getMinIndex = array => {
    if (!array.length) {
        return -1;
    }

    let minIndex = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }

    return minIndex;
}

const getMaxIndex = array => {
	if(!array.length) {
		return -1;
	}
	
	let maxIndex = 0;

	for(let i = 0; i < array.length; i++) {

		if (array[i] > array[maxIndex]) {
			maxIndex = i;
		}
	}

	return maxIndex;
}

const getSumOfEvenIndex = array => {
	if(!array.length) {
		return -1;
	}

	let sum = 0;

	for(let i = 0; i < array.length; i++) {

		 if(i % 2 === 0) {
		 	sum += array[i];
		}
	}

	return sum;
}

const reverseArr = array => {
	if(!array.length) {
		return -1;
	}

	for(let i = 0, j = array.length - 1; i < j; i++) {
		array[j] = array[j] + array[i];
		array[i] = array[j] - array[i];
		j--;
	}

	return array;
}