import express,{json} from 'express';
import router from './routes/userRoute.js';

const app = express();
app.use(json())

app.use('/',router)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(8000,()=>{
    console.log("Server is listening to port 8000");
    
})