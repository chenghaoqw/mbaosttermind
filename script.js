console.log("init");
if (document.getElementsByClassName("login-box-content returning-customers clearfix").length > 0) {
    document.getElementsByClassName("login-box-content returning-customers clearfix")[0].getElementsByTagName("input")[0].value = "chenghaplki@163.com";
    document.getElementsByClassName("login-box-content returning-customers clearfix")[0].getElementsByTagName("input")[1].value = "chh123698";
    document.getElementsByClassName("form-row form-row-button")[0].getElementsByTagName("button")[0].click();
}

if (document.getElementsByClassName("content-asset myaccount-contents").length > 0) {
    window.location = "https://www.mastermindtokyo.com/all/all-mastermindworld/all-mastermindworld-newarrival/";
}

var goods = document.getElementsByClassName("searchResultList-item");
for (var i = 0; i < goods.length; i++) {
    var good = goods[i].getElementsByTagName("a")[1];
    if (good.innerText.indexOf("UGG") >= 0) {
        console.log(good.href);
        console.log(good.innerText);
        window.location = good.href;
    }
}
var sizes = document.getElementsByClassName("productDetailCart-select")[1];
if (sizes != null) {
    sizes = sizes.getElementsByTagName("a");
    if (sizes.length > 0) {
        for (var i = 0; i < sizes.length; i++) {
            if (sizes[i].getElementsByTagName("em").length <= 0) {
                sizes[i].click();
                break;
            }
        }
        setTimeout(function () {
            document.getElementsByClassName("productDetailCart-button-add")[0].click();
            document.getElementsByClassName("headerCart-button")[0].click();
        }, 3000);
    }
}
if(document.getElementsByClassName("button-fancy-large").length>0){
    document.getElementsByClassName("button-fancy-large")[0].click();
}

