document.getElementById("menu-button").addEventListener("click", function () {
    var iframeContainer = document.getElementById("menu-container");
    var iframe = iframeContainer.querySelector("iframe");
    iframeContainer.classList.toggle("visible");
    iframe.classList.toggle("visible");
});
