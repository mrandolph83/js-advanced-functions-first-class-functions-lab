// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers
}

const returnLastTwoDrivers = function(drivers){
    let lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){ 
    return function(fare){
    return fare * int;}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(driversArray, func){
    return func(driversArray);
} 