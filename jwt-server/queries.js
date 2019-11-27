const Pool = require('pg').Pool;

const pool = new Pool({
    user:'openpg',
    host:'http://127.0.0.1/',
    database:'Test',
    password: 'admin',
    port:'57105'
});