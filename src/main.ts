import Express from 'express'

const app = Express()
const port = 3000
const test = 'test'

app.get('/', (req, res) => {
    const data = { message: 'Hello' }
    res.send(data)
})

app.listen(port, () => {
  console.log('server start')
})
