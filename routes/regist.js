const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.render('regist', {
        title: 'Регистрация',
        isRegist: true
    })
})

module.exports = router