import User from "../modal/User.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const JWT_SECRET_KEY = "12345678910";
import jwt from "jsonwebtoken";

export const Signup = async (req, res) => {
  try {
    let email = req.body.email;
    let x = await User.find({ email: email });

    if (x.length !== 0) {
      return res.json("Sorry a user already exists with this email");
    }

    let pass = await bcrypt.hash(req.body.password, salt);
    let user = new User({ ...req.body, password: pass });

    let r = await user.save();
    if (!r) {
      return res.status(404).json("unable to save user");
    }
    const getuser = await User.findOne({ email: req.body.email });

    const token = jwt.sign({ id: getuser._id }, JWT_SECRET_KEY, {
      expiresIn: "24hr",
    });
    res.cookie(String("token"), token, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 1000 * 86400),
    });

    console.log("the cookies are", res.cookies);

    return res
      .status(200)
      .json({ message: "successfully logged in", token: token, user: getuser });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error");
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from req.body
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json("Invalid Email Or Password");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(404).json("Invalid Email Or Password");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
      expiresIn: "24hr",
    });
    res.cookie("token", token, {
     
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 1000 * 86400),
    });
    return res
      .status(200)
      .json("success");
  } catch (e) {
    return res.status(500).json("Internal Server Error");
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json('Successfully logged out');
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server Error")
  }
}


export const Getuser = async (req, res) => {

  try {

    console.log(req.cookies);
    const token = req.cookies.token;
    console.log("Token is", req.cookies.token);
    if (!token) {
      return res.status(200).json("Token Not Found");
    }
    jwt.verify(String(token), JWT_SECRET_KEY, async (error, info) => {
      if (error) {
        return res.status(404).json("Invalid Token");
      }
      let user = await User.findById(info.id);
      return res.status(200).json(user);
    });
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};