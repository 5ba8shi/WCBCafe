window.addEventListener("load", function(){
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch(){
    document.getElementsByClassName("active")[0].classList.remove("active");
    
  }
  tabsAry.forEach(function(value) {
    value.addEventListener("click", tabSwitch);
  });
});