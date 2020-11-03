// async function callApi(){
//   // APIを取ってくる
//   const res = await fetch("https://jsondata.okiba.me/v1/json/XZWzb200610085258");
//   // jsonで返す
//   const jobs = await res.json();
//   console.log(jobs);
// }

// callApi();


// ↓の方法でgrpId 2を取り出そうにも取り出せないです。


 async function callApi(){
   // APIを取ってくる
   const res = await fetch("https://jsondata.okiba.me/v1/json/0hxL6200611030517");
  
   // jsonで返す
   const jobs = await res.json();

   const jobsFilter = jobs.filter(job => {
     return job.grpId === 2;
  });

   console.log(jobsFilter);

  //  let jobsName =  jobs.jobName;

   console.log(jobs[0,1].jobName);

  //  jobsName.sort(function(a, b){
  //   a = a.toString().toLowerCase();
  //   b = b.toString().toLowerCase();
  //   if(a < b){
  //       return -1;
  //   }else if(a > b){
  //       return 1;
  //   }
  //   return 0;
  // });


 }

 callApi();


