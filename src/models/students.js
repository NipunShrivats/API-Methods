const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "alt least 3 needed"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email alread present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10,
        // max: 11,
        unique: true
    },
    address: {
        type: "String",
        required: true
    }
})

// new colection
//model- 1 wrapper on the mongoose schema.
const Student = new mongoose.model("Student", studentSchema)

module.exports = Student;