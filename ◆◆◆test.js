function total(price) {
  const tax = 0.1;
  return price + price * tax;
}

console.log('コーヒーメーカーの値段は' + total(8000) + '円(税込み)です。');
document.getElementById('output').textContent = 'コーヒーメーカの値段は' + total(8000) + '円(税込)です。';
