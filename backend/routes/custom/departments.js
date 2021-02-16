const express = require('express')
const router = express.Router({ caseSensitive: true })
//https://grokonez.com/frontend/vue-js/vue-js-nodejs-express-restapis-sequelize-orm-mysql-crud-example

router.get('/', (req, res, next) => {
    //list departments
    const db = req.app.get('db')
    //console.log('start')
    //console.log(req)
    //console.log(req.query.sort)
    //console.log(req.query.page)
    //console.log(req.query.per_page)
    //db.accountType.findAll({raw : true}).then(data => {console.log(data)})

    //console.log('end')

    return db.accountType.findAll({
        raw : true,
        //limit: parseInt(req.query.per_page),
        //page: parseInt(req.query.page)
    })
        .then((departments) => res.send(departments))
        .catch((err) => {
            console.log('There was an error querying departments', JSON.stringify(err))
            return res.send(err)
        });
})

router.post('/api/departments', (req, res, next) => {
    //create departments
})

router.put('/api/departments/:department_id', (req, res, next) => {
    //create departments
})

router.delete('/api/departments/:department_id', (req, res, next) => {
    //create departments
})

module.exports = router