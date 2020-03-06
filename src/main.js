//leap year -- every 4 years we have an extra day
//input 2040 is equal to leap year or not
//365 days in normal year 
//366 days in a leap year 

function checkLeapYear(year, resultDiv){
  // var result = 0;
  
   if (year % 4 == 0 && year %100 !=0){
    resultDiv.innerHTML = `${year} is a leap year`
    return true
  }
  else {
    resultDiv.innerHTML = "nope"
    return false
  }

};

// console.log(checkLeapYear)
