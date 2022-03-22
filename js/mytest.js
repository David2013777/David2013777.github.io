document.body.oncopy = function () {
    iziToast.info({
        timeout: 4000, // 关闭弹窗的时间
        icon: 'Fontawesome', // 图标类别
        closeOnEscape: 'true', // 允许使用Esc键关闭弹窗
        transitionIn: 'bounceInLeft', // 弹窗打开动画
        transitionOut: 'fadeOutRight', // 弹窗关闭动画
        displayMode: 'replace', // 替换已经打开的弹窗
        layout: '2', // Medium模式
        position: 'topRight', // 弹窗位置
        icon: 'iconfont icon-mail', // 图标类名
        backgroundColor: '#fff', // 弹窗背景色
        title: '复制成功', // 通知标题
        message: '请遵守 CC BY-NC-SA 4.0 协议' // 通知消息内容
    });
}

var myDate = new Date;
var mon = myDate.getMonth() + 1;
var date = myDate.getDate();
var days = ['4.4', '5.12', '7.7', '9.9', '9.18', '12.13']; // 自定义纪念日
for (var day of days) {
    var d = day.split('.');
    if (mon == d[0] && date == d[1]) {
        iziToast.info({
            timeout: 14000,
            icon: 'Fontawesome',
            closeOnEscape: 'true',
            transitionOut: 'fadeOutRight',
            layout: '2',
            transitionIn: 'bounceInLeft',
            position: 'topRight',
            icon: 'iconfont icon-mail',
            backgroundColor: '#fff',
            title: '东航03.21空难',
            message: '<p style="margin-top: 4px;">全站已切换为黑白模式</p>'
        });
        document.write('<style>html{-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none}</style>')
        break;
    }
}