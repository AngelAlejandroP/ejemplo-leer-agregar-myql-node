const dbConnection=require('../../config/dbConnection');

module.exports = app =>{
    const connection=dbConnection()

    app.get('/', (req, res)=>{
        connection.query('SELECT * FROM news', (err, result) => {
            console.log(result);
            res.render('news/news', {
                news:result
            });
        });
    });
    
    app.post('/news', (req, res) => {
//esto es para obtener la informacion que le pasa el formulario
//con el nombre que le hemos dado a los input (title y text)
        const { title, news } = req.body;
//aqui lo insertamos a la base de datos
        connection.query('INSERT INTO news SET?', { 
            tittle: title, 
            news: news
        }, (err, result) => {
            res.redirect('/');
        });
    });
}