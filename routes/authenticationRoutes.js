const mongoose = require('mongoose');
const Account = mongoose.model('accounts');

const Counter = require('./Counter');

const argon2i = require('argon2-ffi').argon2i;
const crypto = require('crypto');


module.exports = app =>  {
// Routes
app.post('/account/login', async (req, res) =>{ // request and respons 
   //console.log(req.body.rUsername);
  //console.log(req.body); 
    var response = {};

    const { rUsername, rPassword } = req.body;
    if(rUsername == null || rPassword == null)
    {
        response.code = 1;
        response.msg = "Invalid credentials";
        res.send(response);
        return;
    }

    var userAccount = await Account.findOne({ username: rUsername}, 'username adminFlag password');
    //console.log(userAccount);
    if( userAccount != null){
        argon2i.verify(userAccount.password, rPassword).then(async (success) => {
            console.log(success);
            if(success){
                userAccount.lastAuthentication = Date.now();
                await userAccount.save();

                response.code = 0;
                response.msg = "Account found";
                response.data = (({username, adminFlag}) =>({username,adminFlag }))(userAccount);
                res.send(response);
               
                return;
               
            }else{
                response.code = 1;
                response.msg = "Invalid credentials";
                res.send(response);
                return;
            }
            
        });
       
    }
    else{
        response.code = 1;
            response.msg = "Invalid credentials";
            res.send(response);
            return;

    }

  
});


// Routes

app.post('/account/create', async (req, res) =>{ // request and respons 
    //console.log(req.body.rUsername);

    var response = {};

    const { rUsername, rPassword } = req.body;
    if(rUsername == null || rPassword == null)
    {
        response.code = 1;
        response.msg = "Invalid credentials";
        res.send(response);
        return;
    }


    var userAccount = await Account.findOne({ username: rUsername}, '_id');
    //console.log(userAccount);
    if( userAccount == null){
        // Create a new account

        const update = await Counter.findByIdAndUpdate({_id: 'accountId'}, {$inc: { seq: 1}}, {new: true, upsert: true});
        console.log("Create new account..");

        //1. Generate a unique access token
        
        crypto.randomBytes(32, function(err, salt){
            if(err){
                console.log(err);
            }
            
            argon2i.hash(rPassword, salt).then(async (hash) => {

            var newAccount = new Account({
                accountId: update.seq,
                username : rUsername,
                password : hash,
                salt: salt,
           

                lastAuthentication : Date.now()
        });
             await newAccount.save();

                response.code = 0;
                response.msg = "Account found";
                response.data = (({ username }) =>({ username }))(newAccount);
                res.send(response);
               
                return;
            });
        });

    }else {
        response.code = 2;
        response.msg = "Username is already taken";
        res.send(response);
         return;

    }


  return;
});






}
