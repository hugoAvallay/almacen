module.exports = {
    login: (rq,res) => {
        return res.render('users/login')
    },
    register: (req,res) => {
        return res.render('users/registro')
    }
}