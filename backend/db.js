const mongoose = require("mongoose") ;

mongoose.connect("mongodb+srv://vveksngh:v2N8N9eQAVEMg5De@cluster1.mvn0kym.mongodb.net/").then(()=>{
    console.log("connected");
});
const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true,
        minLength: 3,
        maxLength: 30
    },
    password :{
        type: String,
        required: true,
        minLength:6
    },
    firstName :{
        type: String,
        required:true,
        maxLength:50,
        trim:true
    },
    lastName : {
        type: String,
        required : true,
        trim: true,
        maxLength :50
    }
});

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId, // Reference to User model,
        ref: "User",
        required: true
    },
    balance:{
       type:Number,
       required:true
    }

})

 const User = mongoose.model("User",userSchema);
 const Account = mongoose.model("Account",accountSchema);

module.exports ={
    User,
    Account
};




