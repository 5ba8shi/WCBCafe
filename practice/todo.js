var parent = document.getElementById("parent");
var idx = 4;


function addChildCreate() {
    var child = document.createElement("div");
    addChild(child);
}

function addChildCopy(){
    var child = document.getElementById("parent").firstElementChild.cloneNode(true);
    addChild(child);
}

function addChild(child) {
    child.id = "child" + idx;
    child.innerText = "子要素" + idx;
    idx++;
    child = parent.appendChild(child);
    console.log(child);
}