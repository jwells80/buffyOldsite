// $(function () {
//     $('head').load("/includes/header.html");
//     $('#navigation').load("/includes/nav.html");
//     $('#banner').load('/includes/banner.html')
//     $('#footer').load("/includes/footer.html");

//   });

getAndSetHtml = (selector, file) => {
    fetch(file).then(function(response) {
        return response.text();
    }).then(function(body) {
        document.querySelector(selector).innerHTML = body
    })
}
init = () => {
    getAndSetHtml('head', 'includes/header.html')
    getAndSetHtml('#navigation', "includes/nav.html")
    getAndSetHtml('#banner', 'includes/banner.html')
    getAndSetHtml('#footer', "includes/footer.html")
    getAndSetHtml('#audio-player', "includes/audio-player.html")

}

init()