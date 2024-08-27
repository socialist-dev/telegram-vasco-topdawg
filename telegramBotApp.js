document.addEventListener("DOMContentLoaded", function() {
    // Gọi phương thức expand để mở rộng bot app ra toàn màn hình
    Telegram.WebApp.expand();

    // Tự động tắt vuốt dọc khi khởi động
    Telegram.WebApp.disableVerticalSwipes();

    // Thay đổi màu của phần đầu (header)
    Telegram.WebApp.themeParams.headerColor = "#FF5733"; // Sử dụng giá trị phù hợp cho màu sắc
});
