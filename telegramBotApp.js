// Gọi phương thức expand để mở rộng bot app ra toàn màn hình
document.addEventListener("DOMContentLoaded", function() {
    Telegram.WebApp.expand();
    Telegram.WebApp.disableVerticalSwipes();
});

// function initializeApp() {
//     // Tự động tắt vuốt dọc khi khởi động
//     Telegram.WebApp.disableVerticalSwipes();
    
//     // Các thao tác khởi tạo khác
// }

// document.addEventListener("DOMContentLoaded", function() {
//     initializeApp();
// });
