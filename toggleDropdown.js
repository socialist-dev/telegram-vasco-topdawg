function toggleDropdownBtn() {
    var content = document.getElementById('content');
    var button = document.getElementById('toggleBtn');
    
    // Kiểm tra trạng thái hiện tại của `div`
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.innerHTML = '<p style="color: #ffffe4;">Đóng lại ✖</p>'; // Thay đổi nội dung của nút
    } else {
        content.style.display = 'none';
        button.innerHTML = '<p style="color: #ffffe4;">Nhấp để hiện QR</p>'; // Thay đổi nội dung của nút
    }
}