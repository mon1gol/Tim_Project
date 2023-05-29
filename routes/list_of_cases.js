const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.render('list_of_cases', {
        title: 'Список задач',
        isList_of_cases: true
    })
})

module.exports = router