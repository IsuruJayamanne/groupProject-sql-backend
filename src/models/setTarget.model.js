// setTarget model

// Default constructor
var SetTarget = function(division, field, date, month, target) {
    this.division = division;
    this.field= field;
    this.date = date;
    this.month = month;
    this.target = target;
  }
  
  // Export lset target model
  module.exports = SetTarget;