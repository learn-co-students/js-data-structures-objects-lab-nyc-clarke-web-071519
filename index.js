
// Write your solution in this file!

const driver = {};
//doesn't mutate the driver
function updateDriverWithKeyAndValue(driver,key,value){
    const newOfferings = {[key]:value}
    const newDriver = Object.assign({},driver,newOfferings)
    return newDriver
    //return {...driver, ..{ [key]: value } }
}

//mutates the driver
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    const newValues = {[key]:value};
    return Object.assign(driver,newValues)
}

//doesn't mutate the driver
function deleteFromDriverByKey(driver,key){
    const newDriver = Object.assign({}, driver)

    delete newDriver[key];

    return newDriver;
}

//mutates the driver
function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver[key];

    return driver;
}
