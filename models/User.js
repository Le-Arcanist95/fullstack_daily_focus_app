const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    entries: [{
        type: Schema.Types.ObjectId,
        ref: 'Entry'
    }]
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', function(next) {
    let user = this;
    if(!user.isModified('password')) return next();
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next();
});

userSchema.methods.withoutPassword = function(){
    const user = this.toObject();
    delete user.password;
    return user;
}

userSchema.methods.comparePassword = function(enteredPassword, callback){
    bcrypt.compare(enteredPassword, this.password, (err, isMatch) => {
        if(err) return callback(err);
        callback(null, isMatch);
    });
}

module.exports = mongoose.model('User', userSchema);