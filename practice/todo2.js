
{
  class User{
    constructor(tag,type){
      this.tag=tag;
      this.type=type;
      this._img=document.createElement("img");

      this._img.addEventListener("click",()=>{
        this.click();
      });
    }
  }
}