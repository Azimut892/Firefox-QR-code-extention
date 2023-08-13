document.addEventListener('DOMContentLoaded', function() {
    browser.tabs.query({ active: true, currentWindow: true }).then(function(tabs) {
        var currentUrl = tabs[0].url;

        var container = document.getElementById("qrcode-container");
        
        // Create a new QRCode instance
        var qrcode = new QRCode(container, {
            text: currentUrl,
            width: 128,
            height: 128
        });
    });
});
