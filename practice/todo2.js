const lang = document.querySelector('html').lang;

if(lang === 'ja'){
  document.querySelector('option[value="index.html"]').selected = true;
} else if(lang === 'en') {

} else if(lang === 'zh') {

}

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}