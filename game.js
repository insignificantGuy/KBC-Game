var express = require("express")
var app = express()
console.log("Server Online")

var parser = require("body-parser")
var url = parser.urlencoded({ extended: false })
console.log("Post Service Online")

app.set("view engine", 'ejs')

app.use('/', express.static("css"))

app.get('/', (req, res) => {
    let num = Number(req.query.check || 0)
    res.render('index', { score: num ,msg:null})
})

app.post('/', url, (req, res) => {
    let num = 0;
    let ans = req.body.radioone
    let ans2 = req.body.radiotwo
    let ans3 = req.body.radiothree
    let ans4 = req.body.radiofour
    let ans5 = req.body.radiofive
    let ans6 = req.body.radiosix
    let ans7 = req.body.radioseven
    let ans8 = req.body.radioeight
    let ans9 = req.body.radionine
    let ans0 = req.body.radioten
    let a = [ans, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans0];
    let b = ["7", "so", "32", "ms", "vd", "p", "a", "c", "k", "f"];
    if (req.body.check == "chk") {
        for (var i = 0; i < 10; i++) {
            if (a[i] == b[i]) {
                num = num + 1
            }
            else {
                num = num;
            }
        }
        if(num>=7){
        res.render('index', { score: num,msg:"GREAT JOB YOU PASSED BRILLIANTLY" })
        }
        else if(num>=5&&num<=7){
        res.render('index', { score: num,msg:"GREAT JOB YOU PASSED BUT TRY HARDER NEXT TIME" })    
        }
        else{
        res.render('index', { score: num,msg:"YOU NEED TO IMPROVE YOUR G.K" })
        }
    }
})

app.listen(3002)
