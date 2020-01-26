// field areas model

// Default constructor
var FieldAreas = function(field, area, status, division) {
    this.division = division;
    this.field= field;
    this.status = status;
    this.area = area;
  }
  
  // Export lset target model
  module.exports = FieldAreas;