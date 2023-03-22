;(function ($) {
  'use strict'
  /*========================
     Dark local storage setting js
      ==========================*/

  $('body').attr('class', localStorage.getItem('body'))
  $('.dark-mode-styles').attr(
    'href',
    localStorage.getItem('body') === 'dark' ? 'css/dark.css' : ''
  )
})(jQuery)
