var express=require('express');
var router=express.Router();

//console.log("HI in Router")
const { sqrt,pow,abs,ceil,cube,floor,fix,round,gcd} =require('mathjs');
router.get('/add/:n1/:n2',(req,res)=> {
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=n1+n2;
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
   
});
router.get('/subtract/:n1/:n2',(req,res)=> {
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=n1-n2;
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
   
});
router.get('/multiply/:n1/:n2',(req,res)=> {
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=n1*n2;
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
   
});
router.get('/division/:n1/:n2',(req,res)=> {
    try{
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=n1/n2;
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
   
});
router.get('/squareroot/:n1',(req,res)=> {
    try{
        let n1=Number(req.params.n1);
        let result=sqrt(n1);
        res.send({squarerootResult});
    }catch(err)
    {
        console.log(err);
    }
});
router.get('/power/:n1/:n2',(req,res)=>{
    try{
        let base=Number(req.params.n1);
        let power=Number(req.params.n2);
        let result=pow(base,power);
        res.send({ powerResult});
    }catch(err)
    {
        console.log(err);
    }
});

router.get('/cube/:n1',(req,res)=> {
    try{
        let n1=Number(req.params.n1);
        let result=cube(n1);
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
   
});
router.get('/absolute/:n1',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let result=abs(n1);
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
});
router.get('/ceil/:n1',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let result=ceil(n1);
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
});
router.get('/floor/:n1',(req,res)=>{
    try{
        let n1=Number(req.params.n1);
        let result=floor(n1);
        res.send({result});
    }catch(err)
    {
        console.log(err);
    }
});

router.get('fix/:n1/:n2',(req,res)=>{
    try {
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=fix(n1,n2);
        res.send({result});
    } catch (err) {
        console.log(err);
    }
});

router.get('/round/:n1',(req,res)=>{
    try {
        let n1=Number(req.params.n1);
        let result=round(n1);
        res.send({result});
    } catch (err) {
        console.log(err);
    }
});

router.get('/gcd/:n1/:n2',(req,res)=>{
    try {
        let n1=Number(req.params.n1);
        let n2=Number(req.params.n2);
        let result=gcd(n1,n2);
        res.send({ result });
    } catch (err) {
        console.log(err);
    }
});

module.exports=router;
