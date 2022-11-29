import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const { Schema} = mongoose;

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: [true, "Kullanıcı adı kısmı zorunludur"],
        lowecase:true,
        validate: [validator.isAlphanumeric, "Sadece harf ve sayı giriniz"]
    },
    email: {
        type: String,
        required: [true, "Email kısmı zorunludur"],
        unique: true,
        validate: [validator.isEmail, "Geçerli email gereklidir"],
    },
    password:{
        type: String,
        required: [true, "Şifre kısmı zorunludur"],
        minLength:[4, "En az 4 haneli olmalıdır"],
    },
    followers:[
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    followings:[
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],

   },

    { 
        timestamps: true,
    }
);

userSchema.pre("save",function(next) {
    const user = this;
    bcrypt.hash(user.password,10,(err,hash) => {
        user.password = hash;

        next();
    });

});

const User = mongoose.model("User",userSchema);

export default User;