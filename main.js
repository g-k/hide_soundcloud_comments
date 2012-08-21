console.info('Using hide soundcloud comments extension content script');

// From: http://webapps.stackexchange.com/questions/20868/hide-comments-by-default-on-soundcloud

// Assuming the player loads after the page
$(document).on('DOMNodeInserted', '.player', function() {
  $(this).addClass('no-comments');
});
