async function callApi(){
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
    } else if(a > b) {
      return 1;
    }
    return 0;
  });

  const Filter2 = jobs.filter(job => {
    return job.grpId === 1;
  });

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

  const result = Filter1.concat(Filter2);

  console.log(result);
};

callApi();