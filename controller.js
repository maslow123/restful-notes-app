const connection = require('./config');
const queryString = require('querystring');
// const url = require('url');
const isEmpty = require('lodash.isempty');
const timestamp = require('time-stamp');

exports.index = (req,res,next)=>{
    res.json({msg : "This is from cors but still manual phase"});
}
//  USING QUERY STRING METHOD
exports.notes = (req,res,next)=>{
    const search = req.query.search;
    const sort = req.query.sort;
    const id = req.query.id;

    let page = req.query.page;
    let limit = req.query.limit || 10;

    let offset;

    let query = "SELECT * FROM description LEFT JOIN category ON description.category = category.category_id";


    if(!isEmpty(id)){
        query += ` WHERE desc_id=${id}`;
    }
    if(!isEmpty(search)){
        query += ` WHERE description.title LIKE '%${req.query.search}%'`;
    }

    if(!isEmpty(sort)){
        query += ` ORDER BY updatedAt ${sort}`;
    }
    else{
        query += ` ORDER BY updatedAt desc`;
    }

    if(!isEmpty(page)){
        offset = (page-1)*limit;
    }
    else{
        offset = 0;
        page = 1;
    }
    
    query += ` LIMIT ${limit} OFFSET ${offset}`;
    
    connection.query(query,(err,rows,field)=>{
        if(err){
            return next(new Error(err));
        }else{
            if(rows == ""){
                res.json({
                    message : 'Data not found',
                    error : true
                });
            }else{
                if(!isEmpty(search)){
                    connection.query(query,(err,row,field)=>{
                        res.status(200).json({
                            status : 200,
                            data : rows,
                            currentPage: parseInt(page),
                            totalDatas : row.length,
                            totalpage : Math.ceil(row.length / limit)
                        });
                    });
                }
                else{
                    connection.query('SELECT *FROM description',(err,row,field)=>{
                        res.status(200).json({
                            status : 200,
                            data : rows,
                            currentPage: parseInt(page),
                            totalDatas : row.length,
                            totalpage : Math.ceil(row.length / limit)
                        });
                    });
                }
            }
        }
    });
}
////////////////////////////////// THIS IS PARAMS METHOD //////////////////////////////////

exports.getNote = (req,res,next)=>{
    console.log(query.id);
    if(query.id){
        connection.query("SELECT desc_id,title,note,time,category_name FROM description LEFT JOIN category ON description.category = category.category_id WHERE desc_id=?",[query.id],(err,rows,field)=>{
            
            res.send(rows);
        }); 
    }
}

exports.createNote = (req,res,next)=>{
    let note_title = req.body.title;
    let notes = req.body.note;
    let note_category = req.body.category;
    let updatedAt = timestamp("YYYY-MM-DD HH:mm:ss");

    connection.query("INSERT INTO description SET title=?, note=?,category=?,updatedAt=?",[note_title,notes,note_category,updatedAt],(err,rows,field)=>{
            if(err){
                return next(new Error(err));
            }else{
                // if(rows != ""){
                //     return res.send({
                //         error : false,
                //         data  : rows,
                //         message: 'Data has been created',
                //         results:{
                //             'title' : note_title,
                //             'notes' : notes,
                //             'category': note_category,
                //             'updatedAt': updatedAt
                //         }
                //     });
                // }else{
                //     res.send({message : 'Error data not found'});
                // }
                connection.query("SELECT category_name,category_id,desc_id FROM description LEFT JOIN category ON description.category = category.category_id WHERE category.category_id=? LIMIT 0,1",[note_category],(err,categoryName,field)=>{

                    return res.json({
                        results:{
                                'desc_id': rows.insertId,
                                'category_id': categoryName[0].category_id,
                                'title': note_title,
                                'note': notes,
                                 'category_name': categoryName[0].category_name,
                                'updatedAt': updatedAt
                            }
                    })
                })
            }
    });
}

exports.deleteNote = (req,res,next)=>{
    connection.query("DELETE FROM description WHERE desc_id=?",[req.params.id],(err,rows,field)=>{
        if(err){
            return next(new Error(err));
        }else{
            if(rows.affectedRows == 1 || rows.affectedRows != ""){
                res.send({
                    message : "Data has been deleted successfully",
                    error   : false,
                    results : req.params.id
                });
            }else{
                res.json({
                    message : 'Data not found, please enter the id correctly',
                    error   : true
                });
            }    
        }
    });
}

exports.updateNote = (req,res,next)=>{
    let id = req.params.id;
    let titles = req.body.title;
    let notes = req.body.note;
    let categories = req.body.category_name;
    let updateNow = timestamp('YYYY-MM-DD HH-mm-ss');

    connection.query(`UPDATE description SET title=?, note=?,category=?,updatedAt=? WHERE desc_id=?`,[titles,notes,categories,updateNow,id],(err,rows,field)=>{
            if(err){
                return next(new Error(err));
            }else{
                connection.query("SELECT category_id,category_name FROM description LEFT JOIN category ON description.category = category.category_id WHERE category.category_id=? LIMIT 0,1",[categories],(err,categoryName,field)=>{

                    return res.json({
                        results:{
                                'desc_id': parseInt(id),
                                'title': titles,
                                'note': notes,
                                'category_id': categoryName[0].category_id,
                                'category_name': categoryName[0].category_name,
                                'updatedAt': updateNow
                            }
                    })
                })
            }
        }
    );
}
////////////////////////////// THIS TABLE CATEGORY //////////////////////////////
exports.getCategories = (req,res,next)=>{

    connection.query(`SELECT *FROM category`,(err,rows,field)=>{
        if(err){
            return next(new Error(err));
        }else{
            return res.send({
                error : false,
                data  : rows
            });
           
        }
    });
}

exports.getCategoriesById = (req,res,next)=>{
    let id = req.params.id

        connection.query("SELECT * FROM description LEFT JOIN category ON description.category = category.category_id WHERE category.category_id=?",[id],(err,rows,field)=>{
            
            res.send({
                data : rows
            });
        }); 
    }


exports.createCategory = (req,res,next)=>{
    let categoryName = req.body.category_name;
    let image_url = req.body.image_url

    connection.query(`INSERT INTO category SET category_name=?, image_url=?`,[categoryName,image_url],(err,rows,field)=>{
        if(err){
            return next(new Error(err));
        }else{
            if(rows != ""){
                return res.send({
                    error : false,
                    data  : rows,
                    message: 'Data has been created',
                    results:{
                        'category_id':rows.insertId,
                        'category_name' : categoryName,
                        'image_url' : image_url
                    }
                });
            }else{
                res.send({message : 'Error data not found'});
                }
            }
        }
    );
}

exports.updateCategory = (req,res,next)=>{
    let categoryName = req.body.category_name;
    let id = req.params.id;

    connection.query(`UPDATE category SET category_name=? WHERE category_id=?`,[categoryName,id],(err,rows,field)=>{
            if(err){
                return next(new Error(err));
            }else{
                if(categoryName == ''){res.send({message : 'Name category cant be null'});}
                
                if(rows.affectedRows != 0 || rows.affectedRows != ""){
                    return res.send({
                        error : false,
                        data  : rows,
                        message: 'Data has been updated'
                    });
                }else{
                    res.send({message : 'Error data not found'});
                }
            }
        }
    );
}

exports.deleteCategory = (req,res,next)=>{
    let id = req.params.id;

    connection.query(`DELETE FROM category WHERE category_id=? `,[id],(err,rows,field)=>{
        if(err){
            return next(new Error(err));
        }else{
            if(rows != ""){
                return res.send({
                    error : false,
                    data  : rows,
                    message: 'Data has been deleted',
                    results : id
                });
            }else{
                res.send({message : 'Error data not found'});
                }
            }
        }
    );
}
