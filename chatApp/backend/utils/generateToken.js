import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token, {
        // 15 days in milliseconds
        maxAge: 15 * 24 * 60 * 60 * 1000,
        // to prevent certain attacks
        httpOnly: true,
        sameSite: true
    })
};

export default generateTokenAndSetCookie;