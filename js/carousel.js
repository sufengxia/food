function choosePic(){
    var myPic=new Array("./images/煎饼果子.jpg","./images/a01.jpg","./images/a02.jpg","./images/a07.jpg","./images/a04.jpg");
    var randomNum=Math.floor((Math.random()*myPic.length));
    document.getElementById("myPicture").src=myPic[randomNum];
}
setInterval(choosePic,1500);