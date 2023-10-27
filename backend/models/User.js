const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      sparse: true, // This ensures the unique constraint applies to non-null values only
      trim: true,
      lowercase: true,
      required: true,
      validate: {
        validator: function (email) {
          // Simple email regex for validation
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },

    username: {
      type: String,
      unique: true,
      sparse: true, // This ensures the unique constraint applies to non-null values only
      trim: true,
      required: true,
      validate: {
        validator: function (username) {
          // Simple username regex for validation
          return /^[a-zA-Z0-9_]+$/.test(username); // No spaces allowed
        },
        message: (props) => `${props.value} is not a valid username!`,
      },
    },

    password: {
      type: String,
      required: true,
      validate: {
        validator: function (password) {
          // Password should be at least 8 characters, include at least one number and one special character
          return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(
            password
          );
        },
        message: `Password must be at least 8 characters, include at least one number and one special character!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
