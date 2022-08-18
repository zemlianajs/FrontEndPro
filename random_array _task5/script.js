let arr = [],
    lengthOfArr,
    minLengthOfArr = 2,
    maxLengthOfArr = 10,
    minValueArr,
    maxValuetArr,
    minValueArrFrom = -10,
    minValueArrTo = 10,
    maxValuetArrTo = 50,
    minElement,
    maxElement,
    indexOfMin,
    indexOfMax;

do{
    lengthOfArr = +prompt(`Enter the length of array from 2 to 10`);
    lengthOfArr = Math.abs(lengthOfArr);
    lengthOfArr = Math.round(lengthOfArr);
} while (!lengthOfArr || lengthOfArr<minLengthOfArr || lengthOfArr>maxLengthOfArr);

arr.length = lengthOfArr;

do{
    minValueArr = +prompt(`Enter the minimum value of random array element from -10 to 10`);
    minValueArr = Math.round(minValueArr);
} while (!minValueArr || minValueArr<minValueArrFrom || minValueArr>minValueArrTo)

do{
    maxValuetArr = +prompt(`Enter the maximum value of random array element up to 50, but not less than the minimum`);
    maxValuetArr = Math.round(maxValuetArr);
} while (!maxValuetArr || maxValuetArr<=minValueArr || maxValuetArr>maxValuetArrTo)

for(let i=0; i<arr.length; i++){
    arr[i] = Math.round(Math.random() * (maxValuetArr - minValueArr + 1) + minValueArr);
}
console.log(arr);

minElement = arr[0];
maxElement = minElement;

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



