$(document).ready(Ready)

function Ready () {
  //二级导航显示隐藏
  $('.nav li').hover(function (e) {
    console.log('hover')
    let $t = $(e.currentTarget)
    let type = $t.data('type')
    $(`.dropdown-nav[data-value="${type}"]`).show()
  }, function (e) {
    let $t = $(e.currentTarget)
    let type = $t.data('type')
    $(`.dropdown-nav[data-value="${type}"]`).hide()
  })
}
