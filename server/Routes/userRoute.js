const express = require('express')
const router = express.Router();
const { pg } = require('../models/modelUser')
const jwt = require('jsonwebtoken')






router.post('/login', (req,res) => {

    DBSearch( ' "email"=$1', req.body.email, (err, userInfo) => {
        if(err) { res.status(400).json({ Success: error, err }) }
        
        if(userInfo) {
            //jwt.sign(payload, "secret", options, [callBack])
            // payload : 저장되는 정보로 key: value 형태로 구성
            // secret : 서명을 만들때 사용되는 문자열
            // options : 각종 옵션들 => 여러가지 있음 ex) 유효기간 설정 등 => 필요할 때 찾아 쓰기
            let token =  jwt.sign(req.body.email, "jjoly")
            userInfo.token = token

            let query = { 
                text: ' update "table_Information" set "token" = $1 where "email" = $2; ',
                values : [ token, req.body.email ]
            }
            pg.query(query, (err) => {
                if(err) { return res.status(400).json({ Success: false, err: err }) }
                console.log(query)
                console.log(token)
            })
            
            res.status(200).json({ Success: true, user: userInfo })
        }else {
            console.log("no user")
            res.status(200).json({ Success: false, user: "No User" })
        }
    });
})


const DBSearch = ( where, values, cb) => {
    const logInQuery = {
        text: 'select * from "table_Information" where'
    }
    logInQuery.text +=  where
    logInQuery.values = [values]
    pg.query(logInQuery,(err, res) => {
        if (err) { return cb(err, null) }
        else{
            let userInfo = res.rows[0]
            cb(null, res.rows[0]);
        }
    })
}

module.exports = router;