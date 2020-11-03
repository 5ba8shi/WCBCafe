async function callApi(){
  // APIを取ってくる
  const res = await fetch("https://jsondata.okiba.me/v1/json/XZWzb200610085258");
  // jsonで返す
  const jobs = await res.json();
  console.log(jobs);
}

callApi();

