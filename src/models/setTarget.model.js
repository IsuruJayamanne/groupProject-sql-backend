// setTarget model

// Default constructor
var SetTarget = function(division, field1, field2, field3, date, month) {
    this.division = division;
    this.field1= field1;
    this.field2= field2;
    this.field3= field3;
    this.date= date;
    this.month= month;
    //this.target = target;
  }
  
  // Export lset target model
  module.exports = SetTarget;