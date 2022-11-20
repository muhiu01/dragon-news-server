const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News API Running on')
})

app.get('/news', (req, res)=>{
    res.send(news)
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(n => id === n.category_id)
        res.send(selectedCategory)
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => id === n._id)
    res.send(selectedNews)
})
app.listen(port, () => {
    console.log('Dragon news running on server', port)
})