const express = require("express");
const parser = require("xml-js");
const request=require("request");
const bodyParser = require("body-parser");
const app = express();
var matnr = 1;

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","*");
    next();
  });

app.post('/login',function(req,res){

    user = req.body.uname;
    pass = req.body.pass1;
    console.log(req.body);

   const postData=`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:dsr="http://dsr.com">
    <soapenv:Header/>
    <soapenv:Body>
       <dsr:MT_cust_sr_request>
          <username>`+user+`</username>
          <password>`+pass+`</password>
       </dsr:MT_cust_sr_request>
    </soapenv:Body>
 </soapenv:Envelope>`;
 var options={
    url:'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_dsr_cust&receiverParty=&receiverService=&interface=SI_dsr_interface&interfaceNamespace=http://dsr.com',
    headers: { 'Content-Type': 'application/xml',
    'Authorization':'Basic UE9VU0VSOlRlY2hAMjAyMQ=='},

    body : postData

    }

request.post(options,function (error, response, body) {        

        if (!error && response.statusCode == 200) {

            var result1 = parser.xml2json(body, {compact: true, spaces: 4});

            result1=JSON.parse(result1);

            

            res.send(result1);

        }

    })



})
app.listen(3000,()=>{
    console.log("Server connected");

})
