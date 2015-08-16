var randy = require('randy');

var sillies = [
  { href: "javascript:confirm('Are you sure you want to confirm? Confirmation dialogs are evil.')", name: "confirm" },
  { href: "http://wattimeisit.com", name: "wat" },
  { href: "javascript:$('*').addClass('woah').each(function(_,e){var t=(Math.random()*9+1)+'s';$(e).css('-webkit-animation-duration',t).css('animation-duration',t);})", name: "woah" }
];

module.exports = function generateSilly() {
  return randy.choice(sillies);
}
