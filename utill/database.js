
const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_by_zuber','root','Zuber@786',{
    dialect : 'mysql',
    host : 'localhost'
})


module.exports = sequelize;








// const mySql = require('mysql2');

// const pool = mySql.createPool({
//     host : 'localhost',
//     user : 'root',
//     database : 'node_by_zuber',
//     password : 'Zuber@786'
// })

// module.exports = pool.promise();

