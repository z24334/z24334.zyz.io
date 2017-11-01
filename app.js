/**
 * Created by lenovo on 2017/10/29.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var cons = require('consolidate');
//var cors = require("cors");
app.set('view engine','ejs');
app.set('views','views');
app.engine('ejs',cons.ejs);
app.use("/sz",express.static('src'))
app.get('/create',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render(`index1`)
})
app.get('/create2',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render(`index2`)
})
app.get('/create3',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render(`index3`)
})
app.get('/create4',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render(`index4`)
})
app.get('/create5',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render(`index5`)
})
app.get('/create6',bodyParser.urlencoded({extended:true}),function(req,res){
    res.render(`index6`)
})
app.listen(8088);
