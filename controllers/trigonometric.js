var express=require('express');
const { cos,sin,tan,cot,sec,csc,acos,asin,atan,acot,asec,acsc } = require('mathjs');
var router=express.Router();

router.get('/sin/:value', (req, res) => {
  try {
    let value = Number(req.params.value);
  let result = sin(value);
  res.send({result});
  } catch (err) {
    console.log(err);
  }
});
router.get('/cos/:value',(req,res) =>
{
    try {
        let value = Number(req.params.value);
  let result = cos(value);
    res.send({result});
    } catch (err) {
        console.log(err);
    }
});
router.get('/tan/:value',(req,res) =>
{
    try {
        let value = Number(req.params.value);
  let result = tan(value);
    res.send({result});
    } catch (err) {
        console.log(err);
    }
});
router.get('/cot/:value',(req,res) =>
{
    try {
        let value = Number(req.params.value);
        let result = cot(value);
    res.send({result});
    } catch (err) {
        console.log(err);
    }
});
router.get('/sec/:value',(req,res) =>
{
    try {
        let value = Number(req.params.value);
  let result = sec(value);
    res.send({result});
    } catch (err) {
        console.log(err);
    }
});
router.get('/csc/:value',(req,res) =>
{
    try {
        let value = Number(req.params.value);
        let result = csc(value);
    res.send({result});
    } catch (err) {
        console.log(err);
    }
});


router.get('/asin/:value', (req, res) => {
    try {
        let value = Number(req.params.value);
        let result = asin(value);
    res.send({result});
    } catch (err) {
      console.log(err);
    }
  });
  router.get('/acos/:value',(req,res) =>
  {
      try {
        let value = Number(req.params.value);
        let result = acos(value);
      res.send({result});
      } catch (err) {
          console.log(err);
      }
  });
  router.get('/atan/:value',(req,res) =>
  {
      try {
        let value = Number(req.params.value);
        let result = atan(value);
      res.send({result});
      } catch (err) {
          console.log(err);
      }
  });
  router.get('/acot/:value',(req,res) =>
  {
      try {
        let value = Number(req.params.value);
  let result = acot(value);
      res.send({result});
      } catch (err) {
          console.log(err);
      }
  });
  router.get('/asec/:value',(req,res) =>
  {
      try {
        let value = Number(req.params.value);
        let result = asec(value);
      res.send({result});
      } catch (err) {
          console.log(err);
      }
  });
  router.get('/acsc/:value',(req,res) =>
  {
      try {
        let value = Number(req.params.value);
        let result = acsc(value);
      res.send({result});
      } catch (err) {
          console.log(err);
      }
  });

module.exports=router;
