function openNav() {
    const sidebar = document.getElementById("mySidebar");
    const containerContent = document.querySelector(".container__content");
    const containerNavbar = document.querySelector(".container__navbar");

    if (window.innerWidth > 360 && window.innerWidth < 950) {
        sidebar.style.width = "300px";
        containerContent.style.marginLeft = "0";
        containerNavbar.style.marginLeft = "0";
    } else if (window.innerWidth >= 950) {
        sidebar.style.width = "300px";
        containerContent.style.marginLeft = "300px";
        containerNavbar.style.marginLeft = "360px";
    } else {
        sidebar.style.width = "300px";
        containerContent.style.marginLeft = "0";
        containerNavbar.style.marginLeft = "0";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".container__content").style.marginLeft= "0";
    document.querySelector(".container__navbar").style.marginLeft= "0";
}

function toggleDropdown(containerId) {
$('#' + containerId).toggle();
}