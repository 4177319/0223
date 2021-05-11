//获取表单元素
const username=document.querySelector('input[name=username]')
const password=document.querySelector('input[name=password]')
const userSpan=document.querySelector('#userspan')
const passwordSpan=document.querySelector('#passwordspan')
const loginBtn=document.querySelector('input[type=submit]')
//给表单绑定失去焦点
username.onchange=function(e){
    //在事件处理函数中获取输入的值
    const value=this.value.trim()
    if(!value) return
    //按正则去校验
    let reg=/^\w{8,16}$/
    if(reg.test(value)){
    //如果可以进来说明符合要求
    userSpan.textContent='输入正确';
    userSpan.style.color='green'
    }
    else{
        //说明不符合要求
        userSpan.textContent='输入错误';
        userSpan.style.color='red'
    }
}
password.onchange=function(e){
    //在事件处理函数中获取输入的值
    const value=this.value.trim()
    if(!value) return
    //按正则去校验
    let reg=/^[A-Z]+\w{7,15}$/
    if(reg.test(value)){
    //如果可以进来说明符合要求
    passwordSpan.textContent='输入正确'
    passwordSpan.style.color='green'
    }
    else{
        //说明不符合要求
        passwordSpan.textContent='输入错误'
        passwordSpan.style.color='red'
    }
}
loginBtn.onclick=function(e){
    //先判断style是否存在
    if(!(userSpan.style.color||passwordSpan.style.color))return e.preventDefault()
    if(!(userSpan.style.color==='green'&&passwordSpan.style.color==='green')) e.preventDefault()
}