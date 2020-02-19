$(function(){
  let search_list = $(".contens.row");

  function appendTweet(tweet) {
    let current_user = tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id ?
                '<li>
                  <a href="/tweets/${tweet.id}/edit" data-method="get" >編集</a>'
  }

  $(".search-input").on("keyup", function(){
    let input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/tweets/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(tweets){
      serarch_list.empty();
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else{
        appendErrToHTML("一致するツイートがありません。")
      }
    })
    })
  })

});