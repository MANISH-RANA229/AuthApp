const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    MobileNumber:{
        type:String,
        required: true,
        unique: true,
    },

    Password:{
        type:String,
        required:true,
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], 
        required: true
    },
    DOB: {
        type: Date,
        required: true,
        validate: {
          validator: function (dob) {
            // Custom validation logic for DOB, e.g., ensuring it's in the past
            return dob <= new Date();
          },
          message: 'Invalid Date of Birth'
        }
      },
      AddictionYears: {
        type: Number,
        required: true,
        min: 0,
        max: 100
      },
      role: {
        type: String,
        default: 'user', // Default role for a new user
        required: false,
      },
      RecovringStatus: {
        type: String,
        default: 'Active', // Default role for a new user
        required: false,
      },
});

module.exports = mongoose.model("SignUp", SignUpSchema);
