const express = require('express');
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('class');
})
const port = process.env.PORT || 3001;
app.listen(port,(req,res)=>{
    console.log(`Listening on port ${port}`);
})
