(function () {

var names = ["Sarath", "Bharadwaj", "Prasanna", "Kiru", "Bannu", "Barath", "Killer", "Vara", "Kirthana", "Acid"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
