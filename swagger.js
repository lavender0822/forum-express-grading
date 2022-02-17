const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: '1.0.0',
    title: '餐廳論壇 API',
    description: '在前後端分離情境下建造的 API'
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [ // by default: empty Array
    {
      name: 'Users',
      description: '使用者 router'
    },
    {
      name: 'Restaurants',
      description: '餐廳 router'
    },
    {
      name: 'Favorite',
      description: '收藏 router'
    },
    {
      name: 'Followship',
      description: '追隨 router'
    },
    {
      name: 'Like',
      description: '喜歡 router'
    },
    {
      name: 'Comment  ',
      description: '評論 router'
    },
    {
      name: 'Admin ',
      description: '管理者 router'
    }
  ],
  definitions: {
    User: {
      name: 'root',
      email: 'root@example.com',
      password: '12345678'
    },
    AddUser: {
      name: 'CCC',
      email: 'ccc@ccc.ccc',
      password: 'ccc'
    }
  }
}

const outputFile = './swagger_output.json' // 輸出的文件名稱
const endpointsFiles = ['./routes/apis/index.js'] // 要指向的 API，通常使用 Express 直接指向到 app.js 就可以

swaggerAutogen(outputFile, endpointsFiles, doc)
