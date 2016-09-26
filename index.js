
var graduates = {};

graduates.read_static = function() {
  var data = "greenify:DE\ndaviddao:HK\nmhelvens:NL\ntimruffles:UK\niriscshih:TW\n\n";
  return graduates.parse(data);
};

graduates.parse = function(data) {
  // you need to fill this
  return {};
};

module.exports = graduates;
