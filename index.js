// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, { [key]: value });
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign(driver, { [key]: value });
    return newDriver;
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}