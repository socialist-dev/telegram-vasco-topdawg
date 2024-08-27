// Gọi phương thức expand để mở rộng bot app ra toàn màn hình
document.addEventListener("DOMContentLoaded", function() {
    Telegram.WebApp.expand();
});

window.onload = function() {
    Telegram.WebApp.disableVerticalSwipes();
};
