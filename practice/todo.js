// JavaScript側のコード
function validate(objTd, objId){

    var objCtrl = document.getElementById(objId);
    var objRegExp = null;
    var msg = "";

    switch(objId)
    {
        // 本当は他にもあるけど、今回は省略。
        case 'form_name':
            if("" == objCtrl.value) {
                msg = "お名前は必須です。";
            }else{
                if (objCtrl.value.length > 10) {
                    msg = "お名前は10文字以内で入力して下さい。";
                }else{
                    // 正規表現による文字チェック
                    objRegExp = new RegExp(/^[\sa-zA-Z0-9!#$%&=-~^@+.ぁ-んーァ-ヶー一-龠１-９Ａ-Ｚａ-ｚ！＃＄％＆＝－～＾＠＋．、。？-]+$/);
                    if (!objRegExp.test(objCtrl.value)) {
                        msg = "お名前の値が不正です。";
                    }
                }
            }
        break;
    }

  displayErrorInfo(objTd, objId, msg);
}



function displayErrorInfo(objTd,objId, msg){

    var objParent = document.getElementById(objTd);
    var objCtrl = document.getElementById(objId);
    // objIdの文字を末尾に追加しているのは、他のコントロールで使用した際IDがかぶるのを防ぐため。
    var objChild = document.getElementById('form_childDiv' + objId);
    // 同じエラーメッセージが何個も表示されないように、既存のエラーメッセージは削除する。

    if(null != objChild){
      objParent.removeChild(objChild);
    }

    if("" != msg) {
        // エラーが有る場合
        objCtrl.style.backgroundColor = "#FADBDA";
        var errorNode = document.createElement("div");
        errorNode.id = "form_childDiv" + objId;
        errorNode.style.color = "#FF0000";
        errorNode.innerText = msg;
        objParent.appendChild(errorNode);
    }else{
        // エラーがない場合
        objCtrl.style.backgroundColor = "#FFFFFF";
    }
}