const supabase = require("../Config/dbSystem.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const WarehouseModel = {};

WarehouseModel.loginUser = async (body, callback) => {
  try {
    const { username, password } = body;
    console.log("Login attempt for user:", username, password);
    // 1. Get user from Supabase
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .limit(1);
    // Assuming you have a function to authenticate the user
    if (!users || users.length === 0) {
      throw new Error("Invalid username or password");
    }

    const user = users[0];

    // 2. Compare password
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid username or password");
    }

    // 3. Sign JWT (expires in 30 min)
    const token = jwt.sign(
      { username: user.username },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );

    callback(null, {
      message: "Login successful",
      token: token,
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (error) {
    callback("Invalid username or password", null);
  }
};

WarehouseModel.fetchOrders = async (username, status, callback) => {
  try {
    // Fetch orders from Supabase
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .eq("recipient_name", username)
      .eq("status", status)
      .order("created_at", { ascending: false });
    // Check for errors
    if (error) {
      throw error;
    }
    callback(null, orders);
  } catch (error) {
    callback(error, null);
  }
};

module.exports = WarehouseModel;
