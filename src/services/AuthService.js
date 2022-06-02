const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const Service = require("./Service");
const UnauthorizedError = require("../errors/UnauthorizedError");
const DidiIssuerSdk = require("../libs/DidiIssuerSdk");

const { DIDI_USER, DIDI_PASSWORD } = process.env;

class AuthService extends Service {

  async signup(data) { /* User data, comprobar que venga con un token a llamar a esto, sino cualquier req va a crear un usuario */
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

    const user = await User.findOne({
      email: email,
      passwordHash,
    });

    if (!user) throw new UnauthorizedError();

    const token = jwt.sign({
      user: {
        id: user.id,
        email: email
      },
    }, process.env.JWT_SECRET, { expiresIn: "2h" });

    const result = await new DidiIssuerSdk().auth().login({
      name: DIDI_USER,
      password: DIDI_PASSWORD,
    });   

    return {
      user: {
        _id: user._id,
        email: user.email,
      },
      token,
      tokenDidi: result?.token
    };


  }


}

module.exports = AuthService;
