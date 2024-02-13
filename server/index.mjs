import http from 'http'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Загрузка переменных окружения из файла .env
dotenv.config()

const server = http.createServer((req, res) => {
  const decodedUrl = decodeURIComponent(req.url)
  let filePath = path.join(__dirname, '../src', decodedUrl)

  // Если URL оканчивается на '/', добавляем к нему 'index.html'
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html')
  }

  // Читаем файл и отправляем его содержимое клиенту
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Файл не найден, отправляем страницу 404
        fs.readFile(path.join(__dirname, '../src', '404.html'), (err, content) => {
          if (err) {
            res.writeHead(500)
            res.end('Error on server: ' + err.code)
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(content, 'utf-8')
          }
        })
      } else {
        // Внутренняя ошибка сервера
        res.writeHead(500)
        res.end(`Error on server ${err.code}`, 'utf-8')
      }
    } else {
      // Определяем расширение файла
      const extname = String(path.extname(filePath)).toLowerCase()

      // Устанавливаем тип контента для заголовка ответа
      let contentType = 'text/html'
      const contentTypeMapping = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.ico': 'image/x-icon'
        // Другие типы файлов можно добавить по аналогии
      }
      contentType = contentTypeMapping[extname] || 'application/octet-stream'

      // Успешный запрос, отправляем содержимое файла
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

// Запуск сервера
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})
