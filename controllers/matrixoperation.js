var express=require('express');
const { det,diag,sum,multiply ,count, concat, transpose} = require('mathjs');
var router=express.Router();
router.post('/diag', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        console.log(mat1)
        let result = diag(mat1);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
router.post('/multiply', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        let mat2 = req.body.mat2;
        console.log(mat1);
        console.log(mat2);
        let result = multiply(mat1,mat2);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
router.post('/det', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        console.log(mat1);
        let result = det(mat1);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
router.post('/count', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        console.log(mat1);
        let result =count(mat1);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
router.post('/sum', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        console.log(mat1);
        let result =sum(mat1);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
router.post('/transpose', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        console.log(mat1);
        let result =transpose(mat1);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
router.post('/concat', (req,res)=>{
    try{
        let mat1 = req.body.mat1;
        console.log(mat1);
        let mat2 = req.body.mat2;
        console.log(mat2);
        let result =concat(mat1,mat2);
        res.send({result});
    }
    catch(error){
        res.send({error});
    }
});
module.exports=router;