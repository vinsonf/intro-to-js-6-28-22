import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.post('/', function(req, res){
    console.log(req.body);
    res.json({message: 'Hello World'});
});
app.patch('/', function(req, res){
    console.log(req.body);
    res.json({message: 'Hello World'});
});
app.put('/', function(req, res){
    console.log(req.body);
    res.json({message: 'Hello World'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});