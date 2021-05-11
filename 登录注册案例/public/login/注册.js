//获取元素
const username=document.querySelector('input[name=username]')
const password=document.querySelector('input[name=password]')
const password1=document.querySelector('input[name=password1]')
const namespan=document.querySelector('#namespan')
const passspan=document.querySelector('#passspan')
const passspan2=document.querySelector('#passspan2')
const userbit=document.querySelector('#btn')
//绑定表单事件
username.oninput=function(e){
    //获取用户输入的信息
    const value=this.value.trim();
    if(!value) return
    //使用正则去校验
    let reg=/^\w{6,12}$/
    if(reg.test(value)){
        //如果进来的则证明符合规则
        namespan.textContent='输入正确'
        namespan.style.color='green'
    }
    else{namespan.textContent='输入错误请重新输入'
        namespan.style.color='red'
    }
}
password.oninput=function(e){
    //获取用户输入的信息
    const value=this.value.trim();
    if(!value) return
    //使用正则去校验
    let reg=/^[A-Z]+\w{7,16}$/
    if(reg.test(value)){
        //如果进来的则证明符合规则
        passspan.textContent='输入正确'
        passspan.style.color='green'
    }
    else{passspan.textContent='输入错误请重新输入'
        passspan.style.color='red'
    }
}
password1.oninput=function(e){
    //获取用户输入的信息
    const value=this.value.trim();
    if(!value) return
    //使用正则去校验
   if(value===password.value){
       passspan2.textContent='输入正确'
       passspan2.style.color='green'

   }else{
       passspan2.textContent="两次密码不一致"
       passspan2.style.color='red'
   }
}
userbit.onclick=function(e){
    if(!namespan.style.color||!passspan.style.color||!passspan.style.color) return e.preventDefault()
    if(!(namespan.style.color==="green"&&passspan.style.color==='green'&&passspan2.style.color==="green")) e.preventDefault()
}
