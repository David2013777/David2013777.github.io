function welcome(){
    let welcome_text = '欢迎来到我的网站！'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";//获取用户来源域名
    }
    swal({
        title: " 欢迎来到我的网站！",
        text: welcome_text+'\n继续浏览发现更多内容！',//欢迎文本，可自行修改
        imageUrl: "../img/avatar.png",//图片，自行修改位置
        timer: 5000,//弹出时间
        showConfirmButton: true
    });
}
$(document).ready(()=>{//若未引用JQuery，请引用
    welcome()
})