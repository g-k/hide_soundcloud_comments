console.info('Using hide soundcloud comments extension content script');

// Assuming the player loads after the page
$(document).on('DOMNodeInserted', '.player, .playlist-item', function() {
  $(this).addClass('no-comments');
});
