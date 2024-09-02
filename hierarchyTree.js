function init() {
    var $ = go.GraphObject.make;

    var myDiagram = $(go.Diagram, "myDiagramDiv", {
      initialContentAlignment: go.Spot.Center,
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, {
        angle: 0,  // Initial angle
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
        font: "bold 30px sans-serif",
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
      { key: "11", parent: "1", name: "1.1.Khái niệm" },
      { key: "111", parent: "11", name: "1.1.1.Blockchain là gì?" },
      { key: "112", parent: "11", name: "1.1.2.Lịch sử và sự phát triển" },
      { key: "113", parent: "11", name: "1.1.3.Cách hoạt động của Blockchain" },

      { key: "12", parent: "1", name: "1.2.Thành phần chính của Blockchain" },
      { key: "121", parent: "12", name: "1.2.1.Khối - Block" },
      { key: "122", parent: "12", name: "1.2.2.Chuỗi khối - Chain" },
      { key: "123", parent: "12", name: "1.2.3.Mã hóa mật mã học - Cryptography" },
      { key: "124", parent: "12", name: "1.2.4.Hợp đồng thông minh - Smart Contracts" },
      { key: "1241", parent: "124", name: "1.2.4.1.Khái niệm"},
      { key: "12411", parent: "1241", name: "1.2.4.1.1.Hợp đồng thông minh là gì?"},
      { key: "12412", parent: "1241", name: "1.2.4.1.2.Lịch sử phát triển"},
      { key: "1242", parent: "124", name: "1.2.4.2.Ứng dụng của hợp đồng thông minh" },
      { key: "12421", parent: "1242", name: "1.2.4.2.1.Tài chính phi tập trung - DeFi" },
      { key: "12422", parent: "1242", name: "1.2.4.2.2.Quyền sở hữu tài sản kỹ thuật số - NFT" },
      { key: "12423", parent: "1242", name: "1.2.4.2.3.Ứng dụng trong quản trị phi tập trung - DAO" },
      { key: "1243", parent: "124", name: "1.2.4.3.Thách thức và hạn chế" },
      { key: "12431", parent: "1243", name: "1.2.4.3.1.Khả năng mở rộng" },
      { key: "12432", parent: "1243", name: "1.2.4.3.2.Lỗi lập trình" },
      { key: "12433", parent: "1243", name: "1.2.4.3.3.Vấn đề pháp lý" },

      { key: "13", parent: "1", name: "1.3.Các loại Blockchain" },
      { key: "131", parent: "13", name: "1.3.1.Blockchain công khai - Public Blockchain" },
      { key: "132", parent: "13", name: "1.3.2.Blockchain riêng tư - Private Blockchain" },
      { key: "133", parent: "13", name: "1.3.3.Blockchain liên minh - Consortium Blockchain" },
      { key: "134", parent: "13", name: "1.3.4.Blockchain lai - Hybrid Blockchain" },
      { key: "135", parent: "13", name: "1.3.5.Blockchain phân mảnh - Sharded Blockchain" },

      { key: "14", parent: "1", name: "1.4.Ứng dụng của Blockchain" },
      { key: "141", parent: "14", name: "1.4.1.Tiền mã hóa - Cryptocurrency"},
      { key: "1411", parent: "141", name: "1.4.1.1.Khái niệm"},
      { key: "14111", parent: "1411", name: "1.4.1.1.1.Tiền mã hóa là gì"},
      { key: "14112", parent: "1411", name: "1.4.1.1.2.Cách hoạt động của tiền mã hóa"},
      { key: "1412", parent: "141", name: "1.4.1.2.Các loại tiền mã hóa phổ biến"},
      { key: "14121", parent: "1412", name: "1.4.1.2.1.Bitcoin - BTC"},
      { key: "14122", parent: "1412", name: "1.4.1.2.2.Ethereum - ETH"},
      { key: "14123", parent: "1412", name: "1.4.1.2.3.Altcoins và Token"},
      { key: "1413", parent: "141", name: "1.4.1.3.Các cơ chế đồng thuận"},
      { key: "14131", parent: "1413", name: "1.4.1.3.1.Proof of Work - PoW"},
      { key: "14132", parent: "1413", name: "1.4.1.3.2.Proof of Stake - PoS"},
      { key: "14133", parent: "1413", name: "1.4.1.3.3.Proof of History - PoH"},
      { key: "14134", parent: "1413", name: "1.4.1.3.4.Proof of Space - PoS"},
      { key: "14135", parent: "1413", name: "1.4.1.3.5.Các cơ chế đồng thuận kết hợp"},
      { key: "1414", parent: "141", name: "1.4.1.4.Sàn giao dịch tiền mã hóa"},
      { key: "14141", parent: "1414", name: "1.4.1.4.1.Sàn giao dịch tập trung - CEX"},
      { key: "14142", parent: "1414", name: "1.4.1.4.2.Sàn giao dịch phi tập trung - DEX"},
      { key: "1415", parent: "141", name: "1.4.1.5.Ví tiền mã hóa"},
      { key: "14151", parent: "1415", name: "1.4.1.5.Ví nóng - Hot Wallet"},
      { key: "14152", parent: "1415", name: "1.4.1.5.Ví lạnh - Cold Wallet"},
      { key: "14153", parent: "1415", name: "1.4.1.5.Ví không giám hộ - Non-custodial Wallets"},
      { key: "142", parent: "14", name: "1.4.2.Quản lý chuỗi cung ứng" },
      { key: "143", parent: "14", name: "1.4.3.Hệ thống tài chính phi tập trung - DeFi" },
      { key: "1431", parent: "143", name: "1.4.3.1.Khái niệm" },
      { key: "14311", parent: "1431", name: "1.4.3.1.1.DeFi là gì?" },
      { key: "14312", parent: "1431", name: "1.4.3.1.2.Các thành phần chính trong DeFi" },
      { key: "14313", parent: "1431", name: "1.4.3.1.3.Lợi ích và rủi ro của DeFi" },
      { key: "14314", parent: "1431", name: "1.4.3.1.4.DeFi 2.0" },
      { key: "1432", parent: "143", name: "1.4.3.2.Các giao thức DeFi phổ biến" },
      { key: "14321", parent: "1432", name: "1.4.3.2.1.Uniswap" },
      { key: "14322", parent: "1432", name: "1.4.3.2.2.Aave" },
      { key: "14323", parent: "1432", name: "1.4.3.2.3.Compound" },
      { key: "1433", parent: "143", name: "1.4.3.3.Các xu hướng và dự án mới trong DeFi" },
      { key: "14331", parent: "1433", name: "1.4.3.3.1.Staking" },
      { key: "14332", parent: "1433", name: "1.4.3.3.2.Yield Farming" },
      { key: "14333", parent: "1433", name: "1.4.3.3.3.Liquidity Mining" },
      { key: "14334", parent: "1433", name: "1.4.3.3.4.DeFi NFT" },
      { key: "14335", parent: "1433", name: "1.4.3.3.5.Metaverse và DeFi" },
      { key: "144", parent: "14", name: "1.4.4.Trò chơi & tài chính phi tập trung - GameFi" },
      { key: "145", parent: "14", name: "1.4.5.Quyền sở hữu tài sản số" },
      { key: "146", parent: "14", name: "1.4.7.Mạng lưới Oracle phi tập trung - Decentralized Oracles" },
      { key: "147", parent: "14", name: "1.4.7.Ứng dụng trong quản trị phi tập trung - DAO" },

      { key: "15", parent: "1", name: "1.5.Lợi ích và thách thức của Blockchain" },
      { key: "151", parent: "15", name: "1.5.1.Lợi ích" },
      { key: "1511", parent: "151", name: "1.5.1.1.Tính minh bạch" },
      { key: "1512", parent: "151", name: "1.5.1.2.Tính bảo mật" },
      { key: "1513", parent: "151", name: "1.5.1.3.Tính phi tập trung" },
      { key: "152", parent: "15", name: "1.5.2.Thách thức"},
      { key: "1521", parent: "152", name: "1.5.2.1.Vấn đề mở rộng"},
      { key: "1522", parent: "152", name: "1.5.2.2.Tính pháp lý"},
      { key: "1523", parent: "152", name: "1.5.2.3.Sự chấp nhận từ công chúng"},
      { key: "1523", parent: "152", name: "1.5.2.4.Tính tương tác giữa các blockchain"},
    ];

    myDiagram.model = model;

    var currentAngle = 90;  // Initial angle of rotation
    // Rotate button was hided
    // document.getElementById('rotateButton').addEventListener('click', function() {
    //   currentAngle = (currentAngle + 90) % 180; // Update angle
    //   myDiagram.layout.angle = currentAngle;  // Apply new angle
    //   myDiagram.layout.invalidateLayout();  // Recalculate layout
    // });

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