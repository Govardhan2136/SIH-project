document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("close-menu").addEventListener("click", hidemenu);
    document.getElementById("open-menu").addEventListener("click", showmenu);

    function showmenu() {
        var navlinks = document.getElementById("navlinks");
        navlinks.style.right = "0";
    }

    function hidemenu() {
        var navlinks = document.getElementById("navlinks");
        navlinks.style.right = "-200px";
    }
});
