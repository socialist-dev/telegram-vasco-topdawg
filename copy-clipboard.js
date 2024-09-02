document.getElementById("shareButton").addEventListener("click", function() {
    // Liên kết cụ thể bạn muốn sao chép
    const specificLink = "https://t.me/vascotopdawg_bot";

    // Sử dụng Clipboard API để sao chép liên kết
    navigator.clipboard.writeText(specificLink).then(function() {
        alert("Liên kết đã được sao chép vào clipboard!");
    }).catch(function(error) {
        console.error("Không thể sao chép liên kết: ", error);
    });
});
