const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const { secretOrKey } = require("./keys");

passport.use(
  new LocalStrategy(
    {
      session: false,
      usernameField: "login",
      passwordField: "password",
    },
    async function (login, password, done) {
      // Find the user by username or email
      const user = await User.findOne({
        $or: [{ email: login }, { username: login }],
      });

      if (user) {
        bcrypt.compare(password, user.hashedPassword, (err, isMatch) => {
          if (err || !isMatch) done(null, false);
          else done(null, user);
        });
      } else {
        done(null, false);
      }
    }
  )
);

exports.loginUser = async function (user) {
  const userInfo = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  const token = await jwt.sign(
    userInfo, // payload
    secretOrKey, // sign with secretOrKey
    { expiresIn: 3600 } // expires in 1 hour
  );
  return {
    user: userInfo,
    token,
  };
};
