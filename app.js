const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const app = express()
const PORT = 3000
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 設定路由
// 首頁
app.get('/', (req, res) => {
  res.send('hello world')
})

// 認證系統的路由
// 登入頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})

// 登入檢查
app.post('users/login', (req, res) => {
  res.send('login')
})

// 註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})

// 註冊檢查
app.post('users/register', (req, res) => {
  res.send('register')
})

// 登出
app.get('/users/logout', (req, res) => {
  res.send('logout')
})

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})

