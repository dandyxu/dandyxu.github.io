(function () {
  if (!$('.reading-progress-bar').length) return //no progress bar found
  var supportsPassive = false
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true
      }
    })
    window.addEventListener("test", null, opts)
  } catch (e) { }

  $(document).ready(function () {
    window.addEventListener('scroll', function () {
      var $post = $('.post-block')
      var h = $(window).scrollTop() - $post.position().top
      var percent = Math.round(h / $post.height() * 100)
      if (percent < 0) percent = 0
      if (percent > 100) percent = 100
      $('.reading-progress-bar').css('width', percent + '%')
    }, supportsPassive ? { passive: true } : false)
  })
})()
