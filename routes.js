module.exports = function(app){

    const controller = require('./controller');

    // INDEX PAGE (CORS TEST)
    app.get('/',controller.index);

    // SHOW SINGLE DATAS
    app.get('/notes/:id',controller.getNote);
    
    app.post('/notes',controller.createNote);
    app.delete('/notes/:id',controller.deleteNote);
    app.patch('/notes/:id',controller.updateNote);

    // QUERY STRING
    app.get('/notes',controller.notes);

/************* TABLE CATEGORY ******************/
    app.get('/categories',controller.getCategories);
    app.post('/categories',controller.createCategory);
    // app.delete('/categories/:id',controller.deleteCategory);
    app.get('/categories/:id',controller.getCategoriesById);
    app.patch('/categories/:id',controller.updateCategory);
    app.delete('/categories/:id',controller.deleteCategory);
}