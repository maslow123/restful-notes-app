module.exports = function(app,cors){

    const controller = require('./controller');
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