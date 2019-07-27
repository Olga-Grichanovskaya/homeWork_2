//1
const multiplyOrSumUp = (a, b) => a % 2 === 0 ? a * b : a + b;

function getCoordinateQuarter(x, y) {
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

function getSum(a, b, c) {
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


function getMarkByRating(rating) {
    let mark = "";
            
    if (rating > 0 && rating < 20) {
        mark = "Оценка - F";
    } else if (rating >= 20 && rating < 40) {
        mark = "Оценка - E";
    } else if (rating >= 40 && rating < 60) {
        mark = "Оценка - D";
    } else if (rating >= 60 && rating < 75) {
        mark = "Оценка - C";
    } else if (rating >= 75 && rating < 90) {
        mark = "Оценка - B";
    } else if (rating >= 90 && rating < 100) {
        mark = "Оценка - A";
    }

    return mark;
}