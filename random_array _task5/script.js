let arr = [],
    lengthOfArr,
    minValueArr = 0,
    maxValuetArr = 0,
    minLengthOfArr = 2,
    maxLengthOfArr = 10,
    minValueArrFrom = -10,
    minValueArrTo = 10,
    maxValuetArrTo = 50,
    indexOfMin,
    indexOfMax;

do{
    lengthOfArr = prompt(`Enter the length of array from ${minLengthOfArr} to ${maxLengthOfArr}`);
    lengthOfArr = Math.round(Math.abs(lengthOfArr));
} while (!lengthOfArr || lengthOfArr<minLengthOfArr || lengthOfArr>maxLengthOfArr);

arr.length = lengthOfArr;

do{
    minValueArr = prompt(`Enter the minimum value of random array element from ${minValueArrFrom} to ${minValueArrTo}`);
    if(typeof minValueArr === "number") minValueArr = Math.round(minValueArr);  
} while (!minValueArr || isNaN(minValueArr) || minValueArr<minValueArrFrom || minValueArr>minValueArrTo);

// do{
//     minValueArr = prompt(`Enter the minimum value of random array element from ${minValueArrFrom} to ${minValueArrTo}`);
//     if(minValueArr !== null) minValueArr = Math.round(minValueArr);  
// } while (minValueArr === null || isNaN(minValueArr) || minValueArr<minValueArrFrom || minValueArr>minValueArrTo);

minValueArr = parseInt(minValueArr);

do{
    maxValuetArr = prompt(`Enter the maximum value of random array element up to ${maxValuetArrTo}, but not less than the ${minValueArr}`);
    if(typeof maxValuetArr === "number") maxValuetArr = Math.round(maxValuetArr);
} while (!maxValuetArr || isNaN(maxValuetArr) || maxValuetArr<=minValueArr || maxValuetArr>maxValuetArrTo)

maxValuetArr = parseInt(maxValuetArr);

for(let i=0; i<arr.length; i++){
    arr[i] = Math.floor(Math.random() * (maxValuetArr - minValueArr + 1) + minValueArr);
}
console.log(arr);

let minElement = arr[0];
let maxElement = minElement;

for(let i=1; i<arr.length; i++){
    if(arr[i] <= minElement) minElement = arr[i];
    if(arr[i] >= maxElement) maxElement = arr[i];    
}

console.log(minElement);
console.log(maxElement);

indexOfMin = arr.indexOf(minElement);
indexOfMax = arr.indexOf(maxElement);
arr[indexOfMin] = maxElement;
arr[indexOfMax] = minElement;

console.log(arr);



