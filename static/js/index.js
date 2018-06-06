$(document).ready(Ready)

function Ready () {
  //导航栏悬浮二级菜单
  $('.nav a').mouseover((e)=>{
    let $t = $(e.currentTarget)
    let type = $t.data('type')
    if(type) $(`.dropdown-nav[data-value="${type}"]`).show()
  }).mouseout(()=>{
    $('.dropdown-nav').hide()
  })

}
