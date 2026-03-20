const { Signup, Login, Me, Logout } = require("../controllers/AuthController");
const router = require("express").Router();
const { requireAuth } = require("../middleware/authMiddleware");


router.post("/signup", Signup);
router.post("/login", Login);
router.get("/me", requireAuth, Me);
router.post("/logout", Logout);

module.exports = router;
