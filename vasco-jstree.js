
$(document).ready(function() {
    $('#tree').jstree({
        'core': {
            'data': [
                {
                    'text': 'Blockchain',
                    'state': { 'opened': true }, // Expand original node
                    'children': [
                        { 
                            'text': 'Blockchain là gì?',
                            'id': 'child1', // Add ID for child-node
                            'state': { 'opened': true},
                            'children': [
                                {
                                  'text': 'Child 1.1',
                                  'id': 'child1.1',
                                  'state': { 'opened': true},
                                  'children': [
                                    { 
                                      'text': 'Child 1.1.1',
                                      'state': { 'opened': true},
                                    }
                                  ]
                                }
                            ]
                        },
                        { 
                            'text': 'Child 2',
                            'id': 'child2' // Add ID for child-node
                        }
                    ]
                },
                {
                    'text': 'Cryptocurrencies',
                    'state': { 'opened': true }, // Mở rộng nút gốc
                    'children': [
                        { 
                            'text': 'Cryptocurrency là gì? Làm sao để hiểu được về giao dịch',
                            'id': 'child3', // Thêm id cho mục con
                            'state': { 'opened': true},
                            'children': [
                                {
                                  'text': 'Child 3.1',
                                  'id': 'child3.1',
                                  'state': { 'opened': true},
                                  'children': [
                                    { 
                                      'text': 'Child 3.1.1',
                                      'state': { 'opened': true},
                                    }
                                  ]
                                }
                            ]
                        },
                        { 
                            'text': 'Child 4',
                            'id': 'child4' // Thêm id cho mục con
                        }
                    ]
                },
                {
                    'text': 'Blockchain',
                    'state': { 'opened': true }, // Mở rộng nút gốc
                    'children': [
                        { 
                            'text': 'Blockchain là gì?',
                            'id': 'child5', // Thêm id cho mục con
                            'state': { 'opened': true},
                            'children': [
                                {
                                  'text': 'Child 5.1',
                                  'id': 'child5.1',
                                  'state': { 'opened': true},
                                  'children': [
                                    { 
                                      'text': 'Child 5.1.1',
                                      'state': { 'opened': true},
                                    }
                                  ]
                                }
                            ]
                        },
                        { 
                            'text': 'Child 6',
                            'id': 'child6' // Thêm id cho mục con
                        }
                    ]
                },
                {
                    'text': 'Blockchain',
                    'state': { 'opened': true }, // Mở rộng nút gốc
                    'children': [
                        { 
                            'text': 'Blockchain là gì?',
                            'id': 'child7', // Thêm id cho mục con
                            'state': { 'opened': true},
                            'children': [
                                {
                                  'text': 'Child 7.1',
                                  'id': 'child7.1',
                                  'state': { 'opened': true},
                                  'children': [
                                    { 
                                      'text': 'Child 7.1.1',
                                      'state': { 'opened': true},
                                    }
                                  ]
                                }
                            ]
                        },
                        { 
                            'text': 'Child 8',
                            'id': 'child8' // Thêm id cho mục con
                        }
                    ]
                },
                {
                    'text': 'Blockchain',
                    'state': { 'opened': true }, // Mở rộng nút gốc
                    'children': [
                        { 
                            'text': 'Blockchain là gì?',
                            'id': 'child9', // Thêm id cho mục con
                            'state': { 'opened': true},
                            'children': [
                                {
                                  'text': 'Child 9.1',
                                  'id': 'child9.1',
                                  'state': { 'opened': true},
                                  'children': [
                                    { 
                                      'text': 'Child 9.1.1',
                                      'state': { 'opened': true},
                                    }
                                  ]
                                }
                            ]
                        },
                        { 
                            'text': 'Child 10',
                            'id': 'child10' // Thêm id cho mục con
                        }
                    ]
                },
            ]
        }
    });
    // Ẩn tất cả các nội dung khi mới tải
    $('.content-section').hide();
    
    // Xử lý sự kiện khi nhấp vào một mục
    // Cập nhật nội dung main-content khi nhấp vào một mục con
    $('#tree').on('select_node.jstree', function(e, data) {
        // Ẩn tất cả các nội dung
        $('.content-section').hide();

        // Hiển thị nội dung tương ứng
        $('#content-' + data.node.id).show();
        // Ẩn nội dung trang đầu tiên
        $('.main-content__initial-page').hide();
    });
});