// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('/api/userlist', 'get', {
  status: 200,
  message: '获取员工信息成功',
  'orderdata|50': [
    {
      orderDate: '@date()', // 随机日期
      customerId: '@natural(1, 100)',
      orderId: '@natural()',
      goodsName: '@cword(6,10)',
      goodsType: '@character()',
      goodsCount: '@increment(1)', // 返回一个随机的整数。
      goodsPrice: '@natural(1, 100)',
      goodsSumPrice: '@natural(1, 1000000)',
      Seller: '@cname()' // 随机生成名字,
    }
  ]

})
