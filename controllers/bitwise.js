var express=require('express');
const { bitAnd ,bitNot ,bitOr,bitXor,} = require('mathjs');
var router=express.Router();

router.get('/and/:n1/:n2',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=bitAnd(n1,n2);
        res.send({ result });
    }catch(err)
    {
        console.log(err);
    }
});
router.get('/or/:n1/:n2',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=bitOr(n1,n2);
        res.send({ result });
    }catch(err)
    {
        console.log(err);
    }
});
router.get('/not/:n1',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=bitNot(n1);
        res.send({ result });
    }catch(err)
    {
        console.log(err);
    }
});
router.get('/xor/:n1/:n2',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=bitXor(n1,n2);
        res.send({ result });
    }catch(err)
    {
        console.log(err);
    }
});
module.exports=router;