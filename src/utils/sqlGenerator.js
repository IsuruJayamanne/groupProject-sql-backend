// SQL Generator
function SqlGenerator() { }

// --------------------------- Laborer Table --------------------------------

// Get laborer by NIC query
SqlGenerator.prototype.getLaborerByNIC = function(nic) {
  var query = "SELECT * FROM laborer WHERE lNIC='" + nic + "'";
  return query;
}

// Get all laborers
SqlGenerator.prototype.getAllLaborers = function() {
  var query = "SELECT * FROM laborer";
  console.log(query);
  return query;
}

// Insert laborer query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.insertLaborer = function(laborer) {
  var query = "INSERT INTO laborer (lNIC, lName, lAddress, mobileNo,lStatus) VALUES (" + 
    "'" + laborer.nic + "', " +
    "'" + laborer.name + "', " +
    "'" + laborer.address + "', " +
    "'" + laborer.mobile_no + "', " +
    "'" + laborer.status + "')";

    // *** use a console.log to view query before do other things.
    // console.log(query);
  return query;
}

// Update laborer query
// *** input param should be a Laborer Object (in js cannot define type)
SqlGenerator.prototype.updateLaborer = function(laborer) {
  var query = "UPDATE laborer SET" +
    " lName='" + laborer.name + "'," +
    " lAddress='" + laborer.address + "'," +
    " mobileNo='" + laborer.mobile_no + "'," +
    " lStatus='" + laborer.status + "' WHERE" +
    " lNIC='" + laborer.nic + "'";

    // *** use a console.log to view query before do other things.
    // console.log(query);
  return query;
}

// Delete laborer by NIC query
SqlGenerator.prototype.deleteLaborerByNIC = function(nic) {
  var query = "DELETE FROM laborer WHERE lNIC='" + nic + "'";
  return query;
}

// ----------------- DB quering method for Insert & Update ------------------

SqlGenerator.prototype.executeSql = function (connection, query, callback) {
  connection.query(query, function (err, result) {
    if (err) {
      callback(null, err);
    } else {
      callback(result)
    }
  });
}

// --------------------------- weather Table --------------------------------

// Insert weather query
// *** input param should be a weather Object (in js cannot define type)
SqlGenerator.prototype.insertWeather = function(weather) {
  var query = "INSERT INTO dailyweather (divNo, curDate, weather) VALUES (" + 
    "'" + weather.division + "', " +
    "'" + weather.date + "', " +
    "'" + weather.status + "')";

    // *** use a console.log to view query before do other things.
    // console.log(query);
  return query;
}

// --------------------------- Dailywork-workassign Table --------------------------------

// Insert work assign query
// *** input param should be a worker Object (in js cannot define type)
SqlGenerator.prototype.insertWorkAssign = function(workAssign) {
  var query = "INSERT INTO dailywork (curDate, lMobile, typeID, fieldID, amount) VALUES (" + 
    "'" + workAssign.date + "', " +
    "'" + workAssign.lMobile + "', " +
    "" + workAssign.typeID + ", " +
    "" + workAssign.field + ", " +
    "" + workAssign.amount + ")";

    // *** use a console.log to view query before do other things.
     //console.log(query);
  return query;
}

// ------------------------------ Set targets table ---------------------------------------

// Get all fields' areas by division
SqlGenerator.prototype.getAllFieldAreas = function(div) {
  var query = "SELECT * FROM field WHERE divNo =" + div;
  //console.log(query);
  return query;
}

// Insert set target query
SqlGenerator.prototype.insertSetTarget = function(target) {
  var query = "INSERT INTO targets (divNo, field, target, curDate, month) VALUES (" + 
    target.division + ",1," +target.field1 + ",'"+target.date+"','"+target.month+ "'),(" +
    target.division + ",2," +target.field2 + ",'"+target.date+"','"+target.month+ "'),(" +
    target.division + ",3," +target.field3 + ",'"+target.date+"','"+target.month+ "');" ;

    // *** use a console.log to view query before do other things.
    console.log(query);
  return query;
}

//----------------------------summery table (month)---------------------------
// Get all fields' areas by division
// SqlGenerator.prototype.getAllTargets = function(div) {
//   var sy = Math.floor(div/100);
//   var sm = div % 100;
//   var ey = Math.floor(div/100);
//   var em = (div % 100) + 1;
//   if(em==13){
//     em = 1;
//     ey+=1;
//   }
//   var query = "SELECT divNo, field, target FROM targets WHERE times BETWEEN '"+sy+"-"+sm+"-01 00:00:00' AND '"+ey+"-"+em+"-01 00:00:00'";
//   //var query = "SELECT divNo, field, target FROM targets";
//   console.log(query);
//   return query;
// }
SqlGenerator.prototype.getAllTargets = function(div,sm,sy,em,ey) {
  // var sy = Math.floor(div/100);
  // var sm = div % 100;
  // var ey = Math.floor(div/100);
  // var em = (div % 100) + 1;
  // if(em==13){
  //   em = 1;
  //   ey+=1;
  // }
  //var query = "SELECT divNo, field, target FROM targets WHERE times BETWEEN '"+sy+"-"+sm+"-01 00:00:00' AND '"+ey+"-"+em+"-01 00:00:00'";
  //var query = "SELECT divNo, field, target FROM targets";
  var query = "SELECT dailywork.fieldID, SUM(amount) AS totaly, target FROM dailywork,field,targets WHERE dailywork.fieldID=field.fieldID AND field.fieldID=targets.field AND targets.status is null AND field.divNo='" + 
  div + "' AND typeID=1 AND dailywork.curDate BETWEEN '"+sy+"-"+sm+"-01' AND '"+ey+"-"+em+"-01' Group BY dailywork.fieldID ";
  console.log(query);
  return query;
  
}

//-------------------clerk-------------------------------------------
// Get all laborers
SqlGenerator.prototype.getClerkBysNIC = function(mobile_no) {
  var query = "SELECT sNIC,sPosition,sName,sMobile,sDOB,sAddress,sStatus FROM staff WHERE sMobile = '" + mobile_no + "' AND sPosition='clerk'";

  console.log(query);
  return query;
}

// Update clerk query
// *** input param should be a clerk Object (in js cannot define type)
SqlGenerator.prototype.updateClerk = function(clerk) {
  var query = "UPDATE staff SET" +
    " sNIC='" + clerk.nic + "'," +
    " sName='" + clerk.name + "'," +
    " sAddress='" + clerk.address + "'," +
    " sDOB='" + clerk.dob + "' WHERE" +
    " smobile='" + clerk.mobile + "'";
    
    // *** use a console.log to view query before do other things.
     console.log(query);
  return query;
}

// Export SQL generator
module.exports = SqlGenerator;