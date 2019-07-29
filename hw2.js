//1
const multiplyOrSumUp = (a, b) => a % 2 === 0 ? a * b : a + b;

const getCoordinateQuarter = (x, y) => {
    let quarter = "";

    if (x > 0 && y > 0) {
        quarter = "I quarter";
    } else if (x < 0 && y > 0) {
        quarter = "II quarter";
    } else if (x < 0 && y < 0) {
        quarter = "III quarter";
    } else if (x >0 && y < 0) {
        quarter = "IV quarter";
    }

    return quarter;
}

const getSum = (a, b, c) => {
    let sum = 0;

    if (a > 0) {
        sum += a;
    }
    if (b > 0) {
        sum += b;
    }
    if (c > 0) {
        sum += c;
    }

    return sum;
}

const sumUpMaxExpression = (a, b, c) => a * b * c > a + b + c ? a * b * c + 3 : a + b + c + 3;


const getMarkByRating = rating => {
    let mark = "";
            
    if (rating >= 0 && rating < 20) {
        mark = "F";
    } else if (rating >= 20 && rating < 40) {
        mark = "E";
    } else if (rating >= 40 && rating < 60) {
        mark = "D";
    } else if (rating >= 60 && rating < 75) {
        mark = "C";
    } else if (rating >= 75 && rating < 90) {
        mark = "B";
    } else if (rating >= 90 && rating <= 100) {
        mark = "A";
    } else {
        throw new Error('Invalid argument provided!');
    }

    return mark;
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

//3
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






// const getDay = (num) => {

// }