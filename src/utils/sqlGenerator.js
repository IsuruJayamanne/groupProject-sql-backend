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

// Export SQL generator
module.exports = SqlGenerator;