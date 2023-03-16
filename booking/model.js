const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    startTime: {
      hour: { type: Number },
      minutes: { type: Number },
    },
    endTime: { hour: { type: Number }, minutes: { type: Number } },
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "customer",
      required: true,
    },
    salon: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "salon",
        required: true,
      },
    ],
    date: {
      type: Date,
      require: true,
    },
    services: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "service",
        required: true,
      },
    ],
    noOfService: {
      type: Number,
      require: true,
    },
    totalAmount: {
      type: Number,
      require: true,
    },
    paymentMethod: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isCancelledByCustomer: {
      type: Boolean,
      default: false,
    },
    cancellationReason: {
      type: String,
    },
    bookingStatus: {
      type: String,
      enum: {
        values: ["PENDING", "ACCEPTED", "CANCELLED", "COMPLETED"],
        default: "PENDING",
      },
    },
    paymentStatus: {
      type: String,
      enum: ["PAID", "UNPAID"],
      default: "UNPAID",
    },
        // shifts: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "shift",
    //     required: true,
    //   },
    // ],
  }
  // { timestamps: true }
);

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
