
$(document).ready(function() {
    $('#tree').jstree({
        'core': {
            'data': [
                {
                    'text': 'Blockchain',
                    'id': 'child1',
                    'state': { 'opened': true }, // Expand original node
                    'a_attr': { 'href': 'insights-page-for-test.html' },
                    'children': [
                        { 
                            'text': '1.Khái niệm cơ bản',
                            'id': 'child1.1', // Add ID for child-node
                            'state': { 'opened': true},
                            'children': [
                                {
                                  'text': '1.1.1.Blockchain là gì?',
                                  'id': 'child1.1.1',
                                  'state': { 'opened': true},
                                },
                                {
                                  'text': '1.1.2.Lịch sử và sự phát triển của Blockchain',
                                  'id': 'child1.1.2',
                                  'state': { 'opened': true},
                                },
                                {
                                  'text': '1.1.3.Cách hoạt động của Blockchain',
                                  'id': 'child1.1.3',
                                  'state': { 'opened': true},
                                },
                            ]
                        },
                        { 
                            'text': '1.2.Thành phần chính của Blockchain',
                            'id': 'child1.2', // Add ID for child-node
                            'state': { 'opened': true},
                            'children': [
                              {
                                'text': '1.2.1.Khối (Block)',
                                'id': 'child1.2.1',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.2.2.Chuỗi khối (Chain)',
                                'id': 'child1.2.2',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.2.3.Mã hóa mật mã học (Cryptography)',
                                'id': 'child1.2.3',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.2.4.Hợp đồng thông minh (Smart Contracts)',
                                'id': 'child1.2.4',
                                'state': { 'opened': true},
                              },
                            ]
                        },
                        { 
                            'text': '1.3.Các loại Blockchain',
                            'id': 'child1.3', // Add ID for child-node
                            'state': { 'opened': true},
                            'children': [
                              {
                                'text': '1.3.1.Blockchain công khai (Public Blockchain)',
                                'id': 'child1.3.1',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.3.2.Blockchain riêng tư (Private Blockchain)',
                                'id': 'child1.3.2',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.3.3.Blockchain liên minh (Consortium Blockchain)',
                                'id': 'child1.3.3',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.3.4.Blockchain lai (Hybrid Blockchain)',
                                'id': 'child1.3.4',
                                'state': { 'opened': true},
                              },
                              {
                                'text': '1.3.5.Blockchain phân mảnh (Sharded Blockchain)',
                                'id': 'child1.3.5',
                                'state': { 'opened': true},
                              },
                            ]
                        },
                        { 
                          'text': '1.4.Ứng dụng của Blockchain',
                          'id': 'child1.4', // Add ID for child-node
                          'state': { 'opened': true},
                          'children': [
                            {
                              'text': '1.4.1.Tiền mã hóa (Cryptocurrency)',
                              'id': 'child1.4.1',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.4.2.Quản lý chuỗi cung ứng',
                              'id': 'child1.4.2',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.4.3.Hệ thống tài chính phi tập trung (DeFi)',
                              'id': 'child1.4.3',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.4.4.GameFi',
                              'id': 'child1.4.4',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.4.5.Quyền sở hữu tài sản số',
                              'id': 'child1.4.5',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.4.6.Mạng lưới oracle phi tập trung (Decentralized Oracles)',
                              'id': 'child1.4.6',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.4.7.Ứng dụng trong quản trị phi tập trung (DAO)',
                              'id': 'child1.4.7',
                              'state': { 'opened': true},
                            },
                          ]
                        },
                        { 
                          'text': '1.5.Lợi ích và thách thức của Blockchain',
                          'id': 'child1.5', // Add ID for child-node
                          'state': { 'opened': true},
                          'children': [
                            {
                              'text': '1.5.1.Lợi ích',
                              'id': 'child1.5.1',
                              'state': { 'opened': true},
                            },
                            {
                              'text': '1.5.2.Thách thức',
                              'id': 'child1.5.2',
                              'state': { 'opened': true},
                            },
                          ]
                        },
                    ]
                },
                // {
                //   'text': 'Cryptocurrencies',
                //   'id': 'child2',
                //   'state': { 'opened': true }, // Mở rộng nút gốc
                //   'children': [
                //       { 
                //         'text': '2.1.Khái niệm cơ bản',
                //         'id': 'child2.1', // Thêm id cho mục con
                //         'state': { 'opened': true},
                //         'children': [
                //             {
                //               'text': '2.1.1.Tiền mã hóa là gì?',
                //               'id': 'child2.1.1',
                //               'state': { 'opened': true},
                //             },
                //             {
                //               'text': '2.1.2.Cách hoạt động của tiền mã hóa',
                //               'id': 'child2.1.2',
                //               'state': { 'opened': true},
                //             },
                //         ]
                //       },
                //       { 
                //         'text': '2.2.Các loại tiền mã hóa phổ biến',
                //         'id': 'child2.2', // Thêm id cho mục con
                //         'state': { 'opened': true},
                //         'children': [
                //             {
                //               'text': '2.2.1.Bitcoin (BTC)',
                //               'id': 'child2.2.1',
                //               'state': { 'opened': true},
                //             },
                //             {
                //               'text': '2.2.2.Ethereum (ETH)',
                //               'id': 'child2.2.2',
                //               'state': { 'opened': true},
                //             },
                //             {
                //               'text': '2.2.3.Altcoins và Token',
                //               'id': 'child2.2.3',
                //               'state': { 'opened': true},
                //             },
                //         ]
                //     },
                //     { 
                //       'text': '2.3.Các cơ chế đồng thuận',
                //       'id': 'child2.3', // Thêm id cho mục con
                //       'state': { 'opened': true},
                //       'children': [
                //           {
                //             'text': '2.3.1.Proof of Work (PoW)',
                //             'id': 'child2.3.1',
                //             'state': { 'opened': true},
                //           },
                //           {
                //             'text': '2.3.2.Proof of Stake (PoS)',
                //             'id': 'child2.3.2',
                //             'state': { 'opened': true},
                //           },
                //           {
                //             'text': '2.3.3.Các cơ chế đồng thuận mới',
                //             'id': 'child2.3.3',
                //             'state': { 'opened': true},
                //           },
                //       ]
                //     },
                //     { 
                //       'text': '2.4.Sàn giao dịch tiền mã hóa',
                //       'id': 'child2.4', // Thêm id cho mục con
                //       'state': { 'opened': true},
                //       'children': [
                //           {
                //             'text': '2.4.1.Sàn giao dịch tập trung (CEX)',
                //             'id': 'child2.4.1',
                //             'state': { 'opened': true},
                //           },
                //           {
                //             'text': '2.4.2.Sàn giao dịch phi tập trung (DEX)',
                //             'id': 'child2.4.2',
                //             'state': { 'opened': true},
                //           },
                //       ]
                //     },
                //     { 
                //       'text': '2.5.Ví tiền mã hóa',
                //       'id': 'child2.5', // Thêm id cho mục con
                //       'state': { 'opened': true},
                //       'children': [
                //           {
                //             'text': '2.5.1.Ví nóng (Hot Wallet)',
                //             'id': 'child2.5.1',
                //             'state': { 'opened': true},
                //           },
                //           {
                //             'text': '2.5.2.Ví lạnh (Cold Wallet)',
                //             'id': 'child2.5.2',
                //             'state': { 'opened': true},
                //           },
                //           {
                //             'text': '2.5.3.Ví không giám hộ (Non-custodial Wallets)',
                //             'id': 'child2.5.3',
                //             'state': { 'opened': true},
                //           },
                //       ]
                //     },
                //   ]
                // },
                // {
                //   'text': 'Smart Contracts',
                //   'id': 'child3',
                //   'state': {'opened': true},
                //   'children': [
                //     {
                //       'text': '3.1.Khái niệm cơ bản',
                //       'id': 'child3.1',
                //       'state': {'opened': true},
                //       'children': [
                //         {
                //           'text': '3.1.1.Hợp đồng thông minh là gì?',
                //           'id': 'child3.1.1',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.1.2.Lịch sử phát triển',
                //           'id': 'child3.1.1',
                //           'state': {'opened': true},
                //         },
                //       ]
                //     },
                //     {
                //       'text': '3.2.Cách thức hoạt động',
                //       'id': 'child3.2',
                //       'state': {'opened': true},
                //       'children': [
                //         {
                //           'text': '3.2.1.Cơ chế tự động hóa',
                //           'id': 'child3.2.1',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.1.2.Điều kiện và quy tắc (If-Then statements)',
                //           'id': 'child3.1.2',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.1.3.Hợp đồng thông minh tương tác (Composable Smart Contracts)',
                //           'id': 'child3.1.3',
                //           'state': {'opened': true},
                //         },
                //       ]
                //     },
                //     {
                //       'text': '3.3.Ứng dụng của hợp đồng thông minh',
                //       'id': 'child3.3',
                //       'state': {'opened': true},
                //       'children': [
                //         {
                //           'text': '3.3.1.Tài chính phi tập trung (DeFi)',
                //           'id': 'child3.3.1',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.3.2.Quyền sở hữu tài sản kỹ thuật số',
                //           'id': 'child3.3.2',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.3.3.Ứng dụng trong quản trị phi tập trung (DAO)',
                //           'id': 'child3.3.3',
                //           'state': {'opened': true},
                //         },
                //       ]
                //     },
                //     {
                //       'text': '3.4.Ứng dụng của hợp đồng thông minh',
                //       'id': 'child3.3',
                //       'state': {'opened': true},
                //       'children': [
                //         {
                //           'text': '3.3.1.Tài chính phi tập trung (DeFi)',
                //           'id': 'child3.3.1',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.3.2.Quyền sở hữu tài sản kỹ thuật số',
                //           'id': 'child3.3.2',
                //           'state': {'opened': true},
                //         },
                //         {
                //           'text': '3.3.3.Ứng dụng trong quản trị phi tập trung (DAO)',
                //           'id': 'child3.3.3',
                //           'state': {'opened': true},
                //         },
                //       ]
                //     },
                //   ]
                // },
                // {
                //   'text': '',
                //   'id': '',
                //   'state': {'opened': true},
                //   'children': [
                //     {
                //       'text': '',
                //       'id': '',
                //       'state': {'opened': true},
                //     }                    
                //   ]
                // },
                // {
                //   'text': '',
                //   'id': '',
                //   'state': {'opened': true},
                //   'children': [
                //     {
                //       'text': '',
                //       'id': '',
                //       'state': {'opened': true},
                //     }                    
                //   ]
                // },
            ]
        }
    });
    // Để tiện cho việc cập nhật nội dung, bỏ chức năng mở ra nội dung trên cùng một trang
    // // Ẩn tất cả các nội dung khi mới tải
    // $('.article-section').hide();
    
    // // Xử lý sự kiện khi nhấp vào một mục
    // // Cập nhật nội dung container__content khi nhấp vào một mục con
    // $('#tree').on('select_node.jstree', function(e, data) {
    //     // Ẩn tất cả các nội dung
    //     $('.article-section').hide();

    //     // Hiển thị nội dung tương ứng
    //     $('#article-' + data.node.id).show();
    //     // Ẩn nội dung trang đầu tiên
    //     $('.container__content').hide();
    // });

    // Tùy chỉnh sự kiện nhấp vào để mở trang trong cùng một tab
    $('#tree').on('select_node.jstree', function (e, data) {
      var href = data.node.a_attr.href;
      if(href) {
          window.location.href = href; // Mở trang trong cùng một tab
      }
  });
});