const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      require: true,
    },
    bookings: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "booking",
      },
    ],
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  }
  // { timestamps: true }
);

customerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
