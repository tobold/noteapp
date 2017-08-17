var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      document.getElementById("tests").innerHTML += ("<b>🔴" + "</b><br> <ul>failed: " + assertionToCheck + " is not truthy</ul><br>");
    } else {
      document.getElementById("tests").innerHTML += ("<b>✅" + "</b><br> <ul>completed successfully!" + "</ul><br>");
    }
  }
};

var describe = function(description, test) {
  document.getElementById("tests").innerHTML += "<b>" + description + "</b>";
  try { test(); }
  catch(err) {
    document.getElementById("tests").innerHTML += ("<b>⚠️" + "</b><br> <ul> error: " + err.message + "</ul><br>");
    console.error(err);
  }
};

// var it = function(description, test) {
//   document.getElementById("tests").innerHTML += "<b>" + description + "</b>";
//   try { test(); }
//   catch(err) {
//     document.getElementById("tests").innerHTML += ("<b>⚠️" + "</b><br> <ul> error: " + err.message + "</ul><br>");
//     console.error(err);
//   }
//   document.getElementById("tests").innerHTML += ("<b>✅" + "</b><br> <ul>completed successfully!" + "</ul><br>");
// };
