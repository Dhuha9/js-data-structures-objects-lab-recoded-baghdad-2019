// Write your solution in this file!
let driver={name:'Dhuha',filedStudy:'computer science'};
let newDriver=driver;

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key, value){
  driver[key] = value;

  return driver;
 
}

function deleteFromDriverByKey(driver,key){
  
  newDriver=driver;
  delete newDriver[key];
  return newDriver;
 
}

function deleteFromDriverByKey(driver,key){
  
  delete driver[key];
  return driver;
 
}
