$(function () {
    $('.main-container').height(document.body.clientWidth);
    var isWeixin = (function () {
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    })();
    if (isWeixin) {
        $('.share-layer').show();
    } else {
        window.location.href = 'https://render.alipay.com/p/f/fd-j6lzqrgm/guiderofmklvtvw.html?shareId=2088502275749742&campStr=p1j%2BdzkZl018zOczaHT4Z5CLdPVCgrEXq89JsWOx1gdt05SIDMPg3PTxZbdPw9dL&sign=LIzkREwXOJhcNfHTESZv8LM57Tl8d4bj16CVfqOkvmw%3D&scene=offlinePaymentNewSns&channel=ALPContact';
        return;
    }
})