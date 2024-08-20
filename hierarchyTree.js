function init() {
    var $ = go.GraphObject.make;

    var myDiagram = $(go.Diagram, "myDiagramDiv", {
      initialContentAlignment: go.Spot.Center,
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, {
        angle: 90,  // Initial angle
        layerSpacing: 35
      }),
      // padding: 10, // Không có khoảng cách bên ngoài
      // contentAlignment: go.Spot.Center, // Căn giữa nội dung
      initialAutoScale: go.Diagram.Uniform, // Cân chỉnh tự động để vừa vặn

    });

    myDiagram.nodeTemplate = $(
      go.Node,
      "Auto",
      {
        cursor: "pointer",
        // Sự kiện click để mở liên kết
        click: function(e, node) {
          // URL bạn muốn mở khi nhấp vào khối
          var url = node.data.url; // Thay đổi URL theo nhu cầu của bạn
          if (url) {
            // Mở liên kết trong tab mới
            // window.open(url, "_blank"); 
            // Chuyển hướng đến trang html nội bộ
            window.location.href = url;
          }
        }
      },
      $(go.Shape, "RoundedRectangle", {
        fill: "#121212",
        stroke: "#ffffe4",
        strokeWidth: "1",
        parameter1: 20
      }),
      $(go.TextBlock, {
        margin: 12,
        stroke: "beige",
        font: "bold 16px sans-serif",
        editable: false
      }, new go.Binding("text", "name").makeTwoWay())
    );

    myDiagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 3, stroke: "#555" })
    );

    var model = $(go.TreeModel);
    model.nodeDataArray = [
      { key: "1", name: "Blockchain", url: "vasco-articles.html" },
      { key: "2", parent: "1", name: "Basics" },
      { key: "3", parent: "1", name: "Cryptocurrencies" },
      { key: "4", parent: "1", name: "Applications" },
      { key: "5", parent: "1", name: "Challenges" },
      { key: "6", parent: "1", name: "Future" },
      { key: "7", parent: "2", name: "What is Blockchain?" },
      { key: "8", parent: "2", name: "How it works" },
      { key: "9", parent: "2", name: "History" },
      { key: "10", parent: "3", name: "Bitcoin" },
      { key: "11", parent: "3", name: "Ethereum" },
      { key: "12", parent: "3", name: "Altcoins" },
      { key: "13", parent: "4", name: "Smart Contracts" },
      { key: "14", parent: "4", name: "Supply Chain" },
      { key: "15", parent: "4", name: "Healthcare" },
      { key: "16", parent: "5", name: "Scalability" },
      { key: "17", parent: "5", name: "Security" },
      { key: "18", parent: "5", name: "Regulation" },
      { key: "19", parent: "6", name: "Trends" },
      { key: "20", parent: "6", name: "Predictions" },
      { key: "21", parent: "6", name: "Innovations" },
    ];
    myDiagram.model = model;

    var currentAngle = 90;  // Initial angle of rotation
    document.getElementById('rotateButton').addEventListener('click', function() {
      currentAngle = (currentAngle + 90) % 180; // Update angle
      myDiagram.layout.angle = currentAngle;  // Apply new angle
      myDiagram.layout.invalidateLayout();  // Recalculate layout
    });

    // Đảm bảo sơ đồ hiển thị đầy đủ sau khi layout hoàn thành
    // myDiagram.addDiagramListener("InitialLayoutCompleted", function(e) {
    //   myDiagram.zoomToFit();
    // });

    // Điều chỉnh lại sơ đồ khi cửa sổ thay đổi kích thước
    // window.addEventListener('resize', function() {
    //   myDiagram.zoomToFit();
    // });

  }

  window.addEventListener('DOMContentLoaded', init);