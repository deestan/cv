var randy = require('randy');

var sillies = [
  { href: "javascript:confirm('Are you sure you want to confirm? Confirmation dialogs are evil.');void(0)", name: "confirm" },
  { href: "http://wattimeisit.com", name: "wat" },
  { href: "javascript:$('*').toggleClass('woah');void(0)", name: "woah" },
  { href: "javascript:$('.dragon').toggleClass('summoned');void(0)", name: "dragon" }
];

module.exports = function generateSilly() {
  return randy.choice(sillies);
}
