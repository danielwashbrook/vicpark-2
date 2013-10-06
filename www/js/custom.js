$(document).ready(function() {

  $('body').addClass('js');

  var $menu = $('#side-menu'),
    $menulink = $('.side-menu-link'),
    $wrap = $('#wrap');
    $logo = $('.navbar-brand');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $wrap.toggleClass('active');
    $logo.toggleClass('active');
    return false;
  });
});
