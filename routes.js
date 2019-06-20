module.exports = function(app,cors){

    const controller = require('./controller');
    // const whiteList = '127.0.0.1';
    // const corsOptions = {
    //     origin : function(origin,callback){
    //         // if(whiteList.indexOf(origin) !== -1 || !origin){ 
    //         if(whiteList.indexOf(origin) !== -1){
    //             callback(origin,true);
    //         }else{
    //             callback(new Error('Not allowed by CORS'));
    //         }
    //     }
    // }

    //GET
    // var data = {origin : 'http://localhost:3000'};

    // if(data.origin != 'http://localhost:3000'){
    //     app.get('/',cors(data),controller.index);
    // }else{
    //     app.get('/',cors(),controller.index);
    // }
    var whitelist = ['http://192.168.100.65']

    var corsOptions = {
        origin: function (origin, callback) {
          if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
            callback(new Error('This system is safe by CORS'))
          }
        }
    }
    // INDEX PAGE (CORS TEST)
    app.get('/',cors(corsOptions),controller.index);

    // SHOW SINGLE DATAS
    app.get('/notes/:id',controller.getNote);


    app.post('/notes',controller.createNote);
    app.delete('/notes/:id',controller.deleteNote);
    app.patch('/notes/:id',controller.updateNote);

    // QUERY STRING
    app.get('/notes',controller.notes);
}