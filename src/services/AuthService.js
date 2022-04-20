const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const Service = require("./Service");

class AuthService extends Service {

  async signup(data) { /* User data */
    const { password, ...userData } = data;
    const user = new User({
      ...userData,
      passwordHash: crypto.createHash("sha256").update(password, "utf8").digest("hex")
    });
    const { _id, email } = await user.save();

    return { _id, email };
  }

  async login(data) {
    const { email, password } = data;
    const passwordHash = crypto.createHash("sha256").update(password, "utf8").digest("hex");

    const users = await User.find({
      email: email,
      passwordHash,
    });

    if (users.length === 1) {
      const user = users[0];
      //Create jwt
      const token = jwt.sign({
        user: {
          id: user.id
        },
      },process.env.JWT_SECRET,{ expiresIn: "2h" });

      return {
        user: {
          _id: user._id,
          email: user.email,
        },
        token
      };

    } else {
      throw new Error("Unauthorized");
    }

  }


}

module.exports = AuthService;
