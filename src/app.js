var UI = require('ui');

var main = new UI.Card({
    title: 'Pebble.js',
    icon: 'images/menu_icon.png',
    subtitle: 'Hello Nick!',
    body: 'Is it updated?!',
    subtitleColor: 'indigo', // Named colors
    bodyColor: '#9a0036' // Hex colors
});

main.show();