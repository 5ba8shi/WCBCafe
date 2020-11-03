window.addEventListener("load", function() {
  let tabs = document.getElementsByClassName("menu_item");

  tabsAry = Array.prototype.slice.call(tabs);

  function tabSwitch() {
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);

    document.getElementsByClassName("content")[index].classList.add("show");
  }
  tabsAry.forEach(function(value) {
    value.addEventListener("click", tabSwitch);
  });
});

document.getElementById('form').onsubmit = function(event) {
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = `「${search}」の検索...`;
};

async function callApi() {
  const res = await fetch("https://jsondata.okiba.me/v1/json/0hxL6200611030517");

  const jobs = await res.json();

  const Filter1 = jobs.filter(job1 => {
    return job1.grpId === 2;
  });

  Filter1.sort(function(a, b){
    a = a.jobName.toString().toLowerCase();
    b = b.jobName.toString().toLowerCase();
    if(a < b){
      return -1;
    } else if(a > b){
      return 1;
    }
    return 0;
  });

  const Filter2 = jobs.filter(job => {
    return job1.grpId === 2;
  });

  Filter1.sort(function(a, b){
    a = a.jobName.toString().toLowerCase();
    b = b.jobName.toString().toLowerCase();
    if(a < b){
      return -1;
    } else if(a > b){
      return 1;
    }
      return 0;
  });
}