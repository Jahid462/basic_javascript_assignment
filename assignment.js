
// function cubeNumber(number) {
//     const cube = number * number * number;
//     if(typeof number !== 'number'){
//         return 'This is invalid';
//     }
//     return cube;
// }





// function matchFinder(string1, string2) {
//     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return 'This is invalid';
//     }
//     let match = string1.includes(string2);
//     return match;
// }





// function sortMaker(arr) {
//     if(arr[0] === arr[1]){
//         return "equal"
//     }
//     else if(arr[0] < 0 || arr[1] < 0){
//         return 'invalid'
//     }
//     else if(typeof arr[0] !== 'number' || typeof arr[1] !== 'number'){
//         return "input only number"
//     }
//     else if(arr[0] !== arr[1]){
//         if(arr[0] < arr[1]){
//             return [arr[1], arr[0]];
//         }
//         else if(arr[0] > arr[1]){
//             return [arr[0], arr[1]];
//         }
//     }
// }





// function findAddress(obj) {
//     if(typeof obj === "object"){
//         const street = obj.street || "__";
//         const house = obj.house || "__";
//         const society = obj.society || "__";

//         return street+','+house+','+society;
//     }
// }




function canPay(changeArray, totalDue) {
    let myTotalTaka = 0;
    for(let i = 0; i < changeArray.length; i++){
        const element = changeArray[i];
        myTotalTaka = element + myTotalTaka;
    }
    if(changeArray.length === 0){
        return "You don't have any Money"
    }
    else if (myTotalTaka >= totalDue){
        return true;
    }
    else if(myTotalTaka < totalDue){
        return false
    }

}
const arr = [];
const price = 10;
const calculation = canPay(arr, price);
console.log(calculation);



