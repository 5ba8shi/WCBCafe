window.addEventListener("load", function(){
    let btn = document.querySelector("button#Button");

    btn.addEventListener("click", function(){
        console.log("Hello world");
    });

    let btn2 = document.querySelector("button#Button2");
    let changeText = document.querySelector("p");

    btn2.addEventListener("click", function(){
        changeText.innerHTML = '変更されました';
    });

    let btn3 = document.querySelector("#Button3");

    btn3.addEventListener("click", function(){
        changeText.classList.add("red");
    });

    let btn4 = document.querySelector("#Button4");

    let obj = document.querySelector("div");

    btn4.addEventListener("click", function(){
        obj.classList.remove("blue");
    });
});


window.addEventListener("load", function(){
    let tabs = document.getElementsByClassName("menu_item");

    tabsAry = Array.prototype.slice.call(tabs);

    function tabSwitch(){
        document.getElementsByClassName("active")[0].classList.remove("active");

        this.classList.add("active");

        document.getElementsByClassName("show")[0].classList.remove("show");

        const index = tabsAry.indexOf(this);

        document.getElementsByClassName("content")[index].classList.add("show");


    }

    tabsAry.forEach(function(value){
        value.addEventListener("click", tabSwitch);
    });
});