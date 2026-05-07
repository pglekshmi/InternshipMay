import {Router} from 'express';

const router = Router();

let Id;

router.post('/setData',(req,res)=>{
    const {id} = req.body;
    Id = id;
    console.log("The value of Id",Id);
    res.status(200).json(Id);
    
})

router.get('/getData',(req,res)=>{
    console.log("Id",Id);
    res.status(200).json(Id)
    
})

export default router;