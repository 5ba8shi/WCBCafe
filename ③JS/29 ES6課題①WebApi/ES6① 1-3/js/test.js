async function callApi(){
  // APIを取ってくる
  const res = await fetch("https://jsondata.okiba.me/v1/json/0hxL6200611030517");
  
  // jsonで返す
  const jobs = await res.json();


  console.log("第1ソート")

    // IDが2の場合を取り出す。
    const jobsFilter1 = jobs.filter(job => {
      return job.grpId === 2;
    });

    // IDが1の場合を取り出す。
    const jobsFilter2 = jobs.filter(job => {
      return job.grpId === 1;
    });

    // ID2、ID１の順で結合
    const sort1 = jobsFilter1.concat(jobsFilter2);

    // 第1ソートを出力
    console.log(sort1);



  console.log("第2ソート");

    let names = [];

    names.push(jobs[0].jobName);
    names.push(jobs[1].jobName);
    names.push(jobs[2].jobName);
    names.push(jobs[3].jobName);
    names.push(jobs[4].jobName);

    names.sort(function(a, b){
      a = a.toString().toLowerCase();
      b = b.toString().toLowerCase();
      if(a < b){
          return -1;
      }else if(a > b){
          return 1;
      }
      return 0;
    });

    console.log(names);

};

callApi();


