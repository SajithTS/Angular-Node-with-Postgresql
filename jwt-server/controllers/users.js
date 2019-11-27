//const mongoose = require('mongoose');

const User = require('../models/users');

const jwt  =require('jsonwebtoken');
const connUri = process.env.MONGO_LOCAL_CONN_URL;

const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool({
    user:'postgres',
    password:'admin',
    database:'Test'
})


  
// const pool = new Pool({
//     user: 'postgres',
//     host: 'http://127.0.0.1/',
//     database: 'Test',
//     password: 'admin',
//     port: 57105,
//   })

  


module.exports = {
    login: (req,response) => {
        console.log(req.body)
        let username  = req.body.username;
        let password = req.body.password;
        let status = 200;
        let result = {};
        try{
            pool.query('SELECT * from public.users where email= $1 and password= $2',[username,password], (err, res) => {
                console.log(err, res);
                if(res.rowCount > 0){
                    const payload = {user_ID : res.rows[0].Id};
                    const options = {expiresIn: '2d',issuer:'http://localhost:3000'};
                    const secret = '11111222233334444';//process.env.JWT_SECRET;
                    const token = jwt.sign(payload,secret,options);
                    result.token = token;
                    result.status = status;
                    result.expiresIn = jwt.verify(token,secret).exp;
                }
                else{
                    status = 500;
                    result.status = status;
                    result.error = `Authentication error`;
                }
                pool.end();
                response.status(status).send(result);
              });
            
        }
        catch(err){
            status = 500;
            result.status = status;
            result.error = `Authentication error`;
            response.status(status).send(result);
        }

        
    },

    getUser: (req,res) => {
        let userDetails = {};
        userDetails.name = "helloworld";
        userDetails.mobile = "98765455";
        userDetails.email = "hello@gmail.com";
        res.status(200).send(userDetails);
    },

    register:(req,response) => {
        const query = 'INSERT INTO public.users VALUES($1,$2,$3,$4) RETURNING *';
        const values = ['',req.body.firstName,req.body.username,req.body.password];
        try{
            pool.query(query,values,(err,res) => {
                console.log(err);
            })
        }
        catch(exc){
            console.log(exc);
        }
    }

    
}