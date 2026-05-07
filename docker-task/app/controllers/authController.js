const User = require("../models/User");
const bcrypt = require("bcryptjs");

// REGISTER
exports.register = async (req, res) => {

    try {

        const { username, password } = req.body;

        if (!username || !password) {

            return res.status(400).json({
                message: "All fields required"
            });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        res.json({
            message: "Registered successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Register error"
        });
    }
};

// LOGIN
exports.login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {

            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        req.session.userId = user._id;

        res.json({
            message: "Login successful"
        });

    } catch (error) {

        res.status(500).json({
            message: "Login error"
        });
    }
};

// LOGOUT
exports.logout = (req, res) => {

    req.session.destroy();

    res.json({
        message: "Logged out"
    });
};