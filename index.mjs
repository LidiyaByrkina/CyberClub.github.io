
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const mysql = require('mysql');
const authRouter = require('./scripts/authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'testdb'
        });
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
};

start();

// получаем модуль Express
import express from "express";
// создаем приложение
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);

//.mjs формат файла модуль javascript