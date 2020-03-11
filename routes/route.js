const Controller = require('../controllers/controller');

module.exports=[
    {
        method:"GET",
        path:'/',
        handler:Controller.home
    },
    { 
        method:"GET",
        path:'/user',
        handler:Controller.user
    },
    //Keep adding new routes here

]