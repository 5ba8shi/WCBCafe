function total(price) {
  const tax = 0.1;
  return price + price * tax;
}

console.log('コーヒーメーカーの値段は' + total(8000) + '円(税込みです。');
document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円(税込み)です。';

function fizzbuzz(num) {
  if(num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }else if(num % 3 === 0) {
    return 'fizz';
  } else if(num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

let i = 1;
while(i <= 30) {
  console.log(fizzbuzz(i));
  i += 1;
}