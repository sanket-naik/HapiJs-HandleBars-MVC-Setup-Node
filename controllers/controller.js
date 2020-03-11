
module.exports = {
    
    home:(request, v)=>{
        let data={
            content:"This is home"
        }
        return v.view('home.hbs',data);
    },
    user: (request, v) => {
        let user={
            name:"kavya",
            age:23
        }
        return v.view('user.hbs',user);
    },
    //Add new controller options here
}