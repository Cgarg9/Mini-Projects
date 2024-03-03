import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        // check if the user is already in db
        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ error: "User already in db" });
        }
        // HASH password here 
        const salt = await bcrypt.genSalt(10);
        // higher value would mean more secure but takes more time to generate salt
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender
        })
        if (newUser) {
            // generate JWT token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            // successfully created user
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
            })
        }
        else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        // check password
        // if not user compare with empty string
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password or username" });
        };

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName
        });

    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "User logged out" });
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};