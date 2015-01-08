;(function initIndex(){
  var $ul = $('.index ul');
  var $pages = $('.page');
  $pages.eq(0).addClass('page_active');
  for(var i=0; i<$pages.length; i++){
    // 给目录增加项目
    var $newLi = $('<li>');
    $newLi.text($pages.eq(i).data('title'));
    $newLi.appendTo($ul);

    // 为个个页面加上页码
    $pages.eq(i).data('num', i+1);
  }
})();

;(function initEvent(){
  $(document).keydown(function(e){
    if(e.keyCode == 40){
      nextPage();
    }else if(e.keyCode == 38){
      prePage();
    }
  });
})();

function changePage(num){
  var $currentPage = $('.page_active'),
      $pages = $('.page');
  var $targetPage = null;
  for(var i=0; i<$pages.length; i++){
    if($pages.eq(i).data('num') == num){
      $targetPage = $pages.eq(i);
    }
  }
  if($targetPage){
    $currentPage.removeClass('page_active');
    $targetPage.addClass('page_active');
  }
}
function nextPage(){
  var $currentPage = $('.page_active'),
      $pages = $('.page');
  var nextNum = $currentPage.data('num') + 1;
  if(nextNum > $pages.length){
    nextNum = 1;
  }
  changePage(nextNum);
}
function prePage(){
  var $currentPage = $('.page_active'),
      $pages = $('.page');
  var preNum = $currentPage.data('num') - 1;
  if(preNum < 1){
    preNum = $pages.length;
  }
  changePage(preNum);
}
