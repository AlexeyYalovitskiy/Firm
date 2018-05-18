// ПООЧЕРЕДНОЕ ОТКРЫТИЕ ЭЛЕМЕНТОВ
//	function listShow() {
// $(function() {
//   $('.parent .showmore').click(function() {
//     $('.active').add(
//         $(this).toggleClass('open')
//         .parent()
//       ).toggleClass('active')
//       .children('ul')
//       .toggle();
//   });
// });
// }


//ОТКРЫТЫ ВСЕ
function listShow() {
$(function() {
  $('.parent .showmore').click(function() {
    $(this).siblings(".parent ul").toggle();
    $(this).toggleClass('open');
  });
});
}