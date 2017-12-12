$(function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var isWeixin = u.toLowerCase().indexOf('micromessenger') !== -1; //微信
    var isIosQQ = (isIos && / QQ/i.test(u));
    var isAndroidQQ = (isAndroid && /MQQBrowser/i.test(u) && /QQ/i.test((u).split('MQQBrowser')));
    if (isWeixin || isIosQQ || isAndroidQQ) {
        $('.share-layer').show();
    } else {
        window.location.href = 'https://render.alipay.com/p/f/fd-j6lzqrgm/guiderofmklvtvw.html?shareId=2088502275749742&campStr=p1j%2BdzkZl018zOczaHT4Z5CLdPVCgrEXq89JsWOx1gdt05SIDMPg3PTxZbdPw9dL&sign=LIzkREwXOJhcNfHTESZv8LM57Tl8d4bj16CVfqOkvmw%3D&scene=offlinePaymentNewSns&channel=ALPContact';
        return;
    }
})