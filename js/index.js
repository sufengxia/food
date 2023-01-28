window.onload = function () {
  // 模态框
  model();
  function model() {
    let h2 = document.querySelectorAll("h2");
    let wrong = document.querySelector(".wrong");
    let content = document.querySelectorAll(".content");
    let modal = document.querySelector(".modal-box");
    let title = document.querySelector(".title");
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    // 模态框开始
    title.addEventListener("mousedown", function (e) {
      let x = e.pageX - modal.offsetLeft;
      let y = e.pageY - modal.offsetTop;
      document.addEventListener("mousemove", move);
      function move(e) {
        modal.style.left = e.pageX - x + "px";
        modal.style.top = e.pageY - y + "px";
      }
      document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", move);
      });
    });
    // 模态框结束
    h2[0].addEventListener("click", () => {
      wrong.style.color = "#fff";
    });
    h2[1].addEventListener("click", () => {
      wrong.style.color = "black";
    });
    wrong.addEventListener("click", () => {
      modal.style.display = "none";
    });
    login.addEventListener("click", () => {
      modal.style.display = "block";
      h2[1].className = "colorful";
      h2[0].className = "";
      content[1].style.display = "block";
      content[0].style.display = "none";
      wrong.style.color = "black";
    });
    register.addEventListener("click", () => {
      modal.style.display = "block";
      h2[0].className = "colorful";
      h2[1].className = "";
      content[0].style.display = "block";
      content[1].style.display = "none";
      wrong.style.color = "#fff";
    });
    for (let i = 0; i < h2.length; i++) {
      h2[i].setAttribute("index", i);
      h2[i].addEventListener("click", function () {
        for (let i = 0; i < h2.length; i++) {
          h2[i].className = "";
        }
        this.className = "colorful";
        let index = this.getAttribute("index");
        console.log(index);
        for (let j = 0; j < content.length; j++) {
          content[j].style.display = "none";
        }
        content[index].style.display = "block";
      });
    }
  }

  //正则表达式--表单验证
  rgbexp();
  function rgbexp() {
    // 正则表达式表单验证
    let username = document.querySelectorAll(".username");
    let email = document.querySelectorAll(".email");
    let password = document.querySelectorAll(".password");
    let Confirm = document.querySelector("#Confirm-Password");
    let register = document.querySelector("#register");
    let login = document.querySelector("#login");
    let login0 =document.querySelectorAll('.login0')
    let register0 =document.querySelectorAll('.register0')
    let E_rgbexp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let P = /^(?=.*\d)(?=.*[A-z])[\da-zA-Z]{1,9}$/;
    // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线
    let U_rgbexp =/^[\w\u4E00-\u9FA5]{4,20}$/;
    // 用户名 4-20位，只能包含汉字/数字/字母和下划线
    register.addEventListener("click", function () {
      if(password[0].value==Confirm.value){
        Confirm.nextElementSibling.innerHTML = "&#xe8bd";
        Confirm.nextElementSibling.style.color = "green";
        Confirm.style.borderColor = "#547558";
        Confirm.nextElementSibling.nextElementSibling.innerHTML='';
      }else{
        Confirm.nextElementSibling.innerHTML = "&#xe62f;";
        Confirm.nextElementSibling.style.color = "red";
        Confirm.nextElementSibling.nextElementSibling.innerHTML = "两次密码输入不一致";
        Confirm.style.borderColor = "red";
      }
    })
    //点击登录注册密码不能为空
    function empty(a,b){
      a.addEventListener("click", function () {
        for (let i = 0; i < b.length; i++) {
        if (b[i].value == "") {
          b[i].nextElementSibling.innerHTML = "&#xe62f;";
          b[i].nextElementSibling.style.color = "red";
         b[i].style.borderColor = "red";
          b[i].nextElementSibling.nextElementSibling.innerHTML =
            "内容不能为空";
        }else{
          b[i].nextElementSibling.nextElementSibling.display='none'
        }
      }
      });
    }
    empty(login,login0)
    empty(register,register0)
//点击注册 验证两次密码是否一致
     



//输入的内容格式是否正确
    function rgb(a, b, c) {
      for (let i = 0; i < a.length; i++) {
        a[i].onblur = function () {
          if (b.test(this.value)) {
            this.nextElementSibling.innerHTML = "&#xe8bd";
            this.nextElementSibling.style.color = "green";
            this.style.borderColor = "#547558";
           
          } else {
            this.nextElementSibling.innerHTML = "&#xe62f;";
            this.nextElementSibling.style.color = "red";
            this.nextElementSibling.nextElementSibling.innerHTML = c;
           this.style.borderColor = "red";
          }
        };
      }
    }
    rgb(email, E_rgbexp, "邮箱格式有误");
    rgb(password, P, "密码格式有误");
    rgb(username, U_rgbexp, "用户名格式有误");
   
}
back()
   //返回顶部
   function back(){
 //动画函数
 function animates(start, end, callback) {
  clearInterval(start.timer)
  start.timer = setInterval(function () {

      var step = (end - window.pageYOffset) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset == end) {
          clearInterval(start.timer)
          // if(callback){
          //     callback()
          // }
          callback && callback()
      }
      window.scroll(0, window.pageYOffset + step)
  }, 15)
}
//返回顶部
let back = document.querySelector('.back')
window.onscroll = function () {
  if (window.pageYOffset > 480) {
      back.style.opacity = 1
  } else {
      back.style.opacity = 0
  }
}

back.addEventListener('click', function () {
  animates(window, 0)
})
   }
   
  

  //下拉菜单
  menu();
  function menu() {
    let menu = document.querySelector(".menu");
    let btn_list = document.querySelector(".btn_list");
    let n = 0;
    menu.addEventListener("click", () => {
      if (n == 0) {
        btn_list.style.height = 400 + "px";
        n = 1;
      } else {
        btn_list.style.height = 0 + "px";
        n = 0;
      }
    });
  }
}

