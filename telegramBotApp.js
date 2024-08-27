document.addEventListener("DOMContentLoaded", function() {
    // Gọi phương thức expand để mở rộng bot app ra toàn màn hình
    Telegram.WebApp.expand();

    // Tự động tắt vuốt dọc khi khởi động
    Telegram.WebApp.disableVerticalSwipes();
});
