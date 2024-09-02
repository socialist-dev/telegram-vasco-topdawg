document.getElementById("shareButton").addEventListener("click", function() {
    // Lấy liên kết từ thuộc tính data-link
    const linkToCopy = this.getAttribute("data-link");

    // Sao chép liên kết vào clipboard
    navigator.clipboard.writeText(linkToCopy).then(function() {
        alert("Liên kết đã được sao chép vào clipboard!");
    }).catch(function(error) {
        console.error("Không thể sao chép liên kết: ", error);
    });
});
