const app=require('./config/server');
const news=require('./app/routs/news')(app);

//startind server
app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto: ', app.get('port'));
});