$(function(){
  let tabs = $(".menu_item");
  function tabSwitch(){
    (".active").removeClass("active");
    
    (this).addClass("active");

    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("")
  }
  tabs.click(tabSwitch);
});