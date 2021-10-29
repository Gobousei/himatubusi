  var sec = 394863856734984;
 
  // 開始日時を設定
  var dt = new Date();
  console.log("Start: ", dt);
  // 終了時刻を開始日時+カウントダウンする秒数に設定
  var endDt = new Date(dt.getTime() + sec * 1000);
  console.log("End : ", dt);

  // 1秒おきにカウントダウン
  var cnt = sec;
  var id = setInterval(function(){
    cnt--;
    document.getElementById('edit_area').innerHTML =  Math.floor(  cnt/60  );

    // 現在日時と終了日時を比較
    dt = new Date();
    if(dt.getTime() >= endDt.getTime()){
    window.open('http://htmlpreview.github.io/?https://github.com/Gobousei/himatubusi/blob/main/index.html');
    }
  }
