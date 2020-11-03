async function callApi(){
  // APIを取ってくる
  const res = await fetch("https://jsondata.okiba.me/v1/json/0hxL6200611030517");
  
  // jsonで返す
  const jobs = await res.json();

  // IDが2の場合を取り出す。
    const Filter1 = jobs.filter(job1 => {
      return job1.grpId === 2;
    });


    // ソート順に並べ替え
    Filter1.sort(function(a, b){
        a = a.jobName.toString().toLowerCase();
        b = b.jobName.toString().toLowerCase();
        if(a < b){
            return -1;
        }else if(a > b){
            return 1;
        }
        return 0;
    });

    // IDが1の場合を取り出す。
    const Filter2 = jobs.filter(job => {
      return job.grpId === 1;
    });

    // ソート順に並べ替え
    Filter2.sort(function(a, b){
      a = a.jobName.toString().toLowerCase();
      b = b.jobName.toString().toLowerCase();
      if(a < b){
          return -1;
      }else if(a > b){
          return 1;
      }
      return 0;
    });

    // ID 1 と ID 2をつなげる。
    const result = Filter1.concat(Filter2);


    // 結果を出力
    console.log(result);

};

callApi();

