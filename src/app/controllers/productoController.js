const dbConnection = require('../../config/dbConnection');
const conn= dbConnection();
const controller= {};

controller.list = (req,res)=> {

conn.query('SELECT * FROM producto', (err, result)=>{

    if(err){
        res.json(err);
    }

res.render ('producto', {
    news:result

});
});
}

controller.add = (req,res)=>{
const {nombreP,valorP} =req.body;

    conn.query('INSERT INTO producto SET ?',
{
    nombreP,
    valorP
}, (err,result)=>{
    res.redirect('/ir');
});
};
controller.eliminar = (req,res)=>{
        

    const id=req.params.id_productos;
        conn.query('DELETE from producto where id_producto = ?',
   
        id
    
    , (err,result)=>{
        res.redirect('/ir');
    });
};

controller.updatePro= (req,res)=>{
   
    const id=req.params.id_productos;

    res.render ('actualizaP', {
        actualizado:id
    
    });
    
}

controller.Actualizarpro = (req,res)=>{
    const {nombreP,valorP,id_producto} =req.body;
    
    
        conn.query('UPDATE producto SET nombreP = ?, valorP = ? where id_producto = ?',
        [nombreP, valorP,id_producto]
        
        ,(err,result)=>{

        if(err){

        res.json(err);
    }

        res.redirect('/ir');
       
    });
    
}





module.exports= controller;