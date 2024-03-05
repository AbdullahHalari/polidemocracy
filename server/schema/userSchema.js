const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens:[
    {
        token :{
            type:String,
            required:true
        }
    }
  ]
});

userSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
    }
    next();
});
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id: this._id},process.env.SECRETKEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('polidemocracyusers',userSchema);
module.exports = User