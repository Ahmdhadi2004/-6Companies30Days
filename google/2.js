/* Maximum Good People Based on Statements */
var maxGoodPeopleBasedOnStatements = function(statements) {
    var people = {};
    for (var i = 0; i < statements.length; i++) {
      var statement = statements[i];
      var person = statement[0];
      var isGood = statement[1];
      if (people[person] === undefined) {
        people[person] = isGood;
      } else {
        if (people[person] !== isGood) {
          delete people[person];
        }
      }
    }
    return Object.keys(people).length;
  };