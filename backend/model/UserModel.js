const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const {UsersSchema} =  require("../schemas/UserSchema");

UsersSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", UsersSchema);