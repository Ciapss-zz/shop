var Product = require('../models/product');

var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'World of Warcraft',
        description: 'Awesome game!!!',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Call of duty',
        description: 'Awesome game!!!',
        price: 14
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Medal of honor',
        description: 'Awesome game!!!',
        price: 30
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Minecraft',
        description: 'Awesome game!!!',
        price: 20
    }),
];

var done = 0;

for (var i = 0; i <products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}