const chat = [
  'Hello ! Welcome to AI chat !',
  'What is your name ?',
  'How are you today ?',
  [['Alright !'], ['Oh really!'], ['Ok!']],
  'Where are you from?',
  [['Perfect !!'], ['Great!!'], ['I want live there!'], ['I think crazy place!!'], ['I have been there. When I was kids.'],['Fuck You!!']]
];

let chatCount = 0;

function output(val, person){
  const ul = document.getElementById('chat-ul');
  const li = document.getElementById('li');

  const div = document.createElement('div');
  div.textContent = val;

  if(person === 'me') {
    li.classList.add('chat-right');
    ul.appendChild(li);
    li.appendChild(div);
  }else if (person === 'other'){
    chatBtn.disabled = true;
    setTimeout( () =>{
      chatBtn.disabled = false;
      li.classList.add('chat-left');
      ul.appendChild(li);
      li.appendChild(div);

      chatCont++;
    }, 2000);
  }
}

const chatBtn = document.getElementById('chat-button');
const inputText = document.getElementById('chat-input');

function btnFunc(){
  if (!inputText.value) return false;
  output(inputText.value,'me');

  setTimeout( ()=> {
    inputText.value = '';
  }, 1);

  switch(chatCount){
    case 2:
      output('Hi, ' + inputText.value + ' !', 'other');    
      setTimeout( ()=>{
        output(chat[2], 'other');
      }, 2000);

    case 4:
      output(chat[3][Math.floor(Math.floor(Math.random() * chat[3].length))], 'other');
      setTimeout( ()=> {
        output(chat[4], 'other');
      }, 2000);
      break;

    case 6:
      output(chat[5][Mathj.floor(Math.floor(Math.random()* chat[5].length))], 'other');
      break;
  }
}

output(chat[0], 'other');

setTimeout( ()=> {
  output(chat[1], 'other');
}, 2000);



function fizzbuzz(num){
  if(num %  3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if(num % 3 === 0){
    return 'fizz';
  } else if(num % 5 === 0){
    return 'buzz';
  } else {
    return num;
  }
}

let i = 1;
while(i <= 30){
  console.log(fizzbuzz(i));
  i += 1;
}


$(function(){
  $('form').on('submit', function(e){
    let output = '';
    let checkboxes = $(this).find('input[type="checkbox"]');

    checkboxes.each(function(i, checkbox){
      checkbox = $(checkboxes[i]);
      if (checkbox.prop('checked')){
        output += checkbox.attr('value') + '\n';
      }
    });

    e.preventDefault();
    alert('あなたが選んだ果物:')
  })
})


$(function(){
  let tabs = $(".menu_item");
  function tabSwitch(){
    $('active').removeClass('active');
    $(this).addClass('active');
    const index = tabs.index(this);

    $(".content").removeClass("show").eq(index).addClass("show");
  }
  tabs.click(tabSwitch);
})

navigator.geolocation.getCurrentPosition(success, fail);

function success(pos){
}

function fail(error){
}

function utcToJSTime(utcTime){
  return utcTime * 1000;
}

function ajaxRequest(lat, long){
  const url = 'https://api.openweathermap.org/data/2.5/forecast';
  const appId = '保存しておいたAPI KEY';

  $.ajax({
    url: url,
    data: {
      appid: appId,
      lat: lat,
      lon: long,
      units: 'metric',
      lang: 'ja'
    }
  })
  .done(function(data){
    $('#place').text(data.city.name + ', ' + data.city.country);

    data.list.forEach(function(forecast, index){
      const dateTime = newDate(utcToJSTime(forecast.dt));
      const month = dateTime.getMonth() + 1;
      const date = dateTime.getDate();
      const hours = dateTime.getHours();
      const min = String(dateTime.getMinutes()).padStart(2, '0');
    }
  })
}

