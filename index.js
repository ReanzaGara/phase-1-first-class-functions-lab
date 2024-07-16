// Code your solution in this file!
const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
const firstTwoDrivers = returnFirstTwoDrivers(allDrivers);

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
const lastTwoDrivers = returnLastTwoDrivers(allDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// function selectingDrivers() {
    //return [returnFirstTwoDrivers, returnLastTwoDrivers];
  //}


function createFareMultiplier(integer) {
    return function(value) {
    return (integer * value);
    }
}

function fareDoubler(value) {
    const doubleFare = createFareMultiplier(2);
    return doubleFare(value);
}

function fareTripler(value) {
    const tripleFare = createFareMultiplier(3);
    return tripleFare(value);
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
}