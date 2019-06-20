const connection = require('./config');
const time = Date();
const queryString = require('querystring');
// const url = require('url');
const isEmpty = require('lodash.isempty');

exports.index = (req,res,next)=>{
    res.json({msg : "This is from cors but still manual phase"});
}
//  USING QUERY STRING METHOD
exports.notes = (req,res,next)=>{
    const search = req.query.search;
    const sort = req.query.sort;
    const pages = req.query.pages;
    const limit = req.query.limit;

    var query = "SELECT desc_id, title,note,time,category_name FROM description INNER JOIN category ON description.category = category.category_id";

    const id = req.query.id;

    if(!isEmpty(id)){
        query += ` WHERE desc_id=${id}`;
    }
    if(!isEmpty(search)){
        query += ` WHERE description.title LIKE '%${req.query.search}%'`;
    }

    if(!isEmpty(sort)){
        query += ` ORDER BY time ${sort}`;
    }

    if(!isEmpty(pages)){
        // let limit = 2;
        var offset = pages== 1 ? 0 : (pages-1)* limit;

        query += ` LIMIT ${limit} OFFSET ${offset}`;
    }

    if(req.url == "/notes"){
        query += ` ORDER BY time ASC LIMIT 10`;
    }
    
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
                connection.query('SELECT *FROM description',(err,row,field)=>{
                    res.status(200).json({
                        status : 200,
                        data : rows,
                        pages: pages,
                        totalDatas : row.length,
                        totalPages : Math.ceil(row.length / limit)
                    });
                });
            }
        }
    });
}
////////////////////////////////// THIS IS PARAMS METHOD //////////////////////////////////
exports.getNotes = (req,res,next)=>{
    var urlParse = url.parse(req.url,true);
    var query = urlParse.query;

    // res.json(query.search);
    console.log(query.id);
    if(query.id){
        connection.query("SELECT desc_id,title,note,time,category_name FROM description INNER JOIN category ON description.category = category.category_id WHERE desc_id=?",[query.id],(err,rows,field)=>{
            if(err){
                return next(new Error(err));
            }else{
                if(rows != ""){
                    res.send(rows);
                }else{
                    res.send({
                        message : "Error data not found"
                    });
                }
            }
        }); 
    }
}


exports.getNote = (req,res,next)=>{
    // res.json(query.search);
    console.log(query.id);
    if(query.id){
        connection.query("SELECT desc_id,title,note,time,category_name FROM description INNER JOIN category ON description.category = category.category_id WHERE desc_id=?",[query.id],(err,rows,field)=>{
            // if(err){
            //     return next(new Error(err));
            // }else{
            //     if(rows != ""){
            //         res.send(rows);
            //     }else{
            //         res.send({
            //             message : "Error data not found"
            //         });
            //     }
            // }
            res.send(rows);
        }); 
    }
}

exports.createNote = (req,res,next)=>{
    let note_title = req.body.title;
    let notes = req.body.note;
    let note_category = req.body.category;

    connection.query("INSERT INTO description SET title=?, note=?,category=?",[note_title,notes,note_category],(err,rows,field)=>{
            if(err){
                return next(new Error(err));
            }else{
                if(rows != ""){
                    return res.send({
                        error : false,
                        data  : rows,
                        message: 'Data has been created'
                    });
                }else{
                    res.send({message : 'Error data not found'});
                }

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
                    error   : false
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
    let categories = req.body.category;

    connection.query("UPDATE description SET title=?, note=?,category=? WHERE desc_id=?",[titles,notes,categories,id],(err,rows,field)=>{
            if(err){
                return next(new Error(err));
            }else{
                if(titles == ''){res.send({message : 'Titles cant be null'});}
                else if(notes == ''){res.send({message : 'Notes cant be null'});}
                else if(categories == ''){res.send({message : 'Categories cant be null'});}
                
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

