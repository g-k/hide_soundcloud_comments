console.info('Using hide soundcloud comments extension content script');

// Hide comments on page
$(document).find('.player, .playlist-item').addClass('no-comments');

// Hide comments on async loaded players 
$(document).on('DOMNodeInserted', '.player, .playlist-item', function() {
  $(this).addClass('no-comments');
});
