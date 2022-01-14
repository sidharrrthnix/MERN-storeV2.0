const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: "Nmae is required",
      minlength: [6, "Too short"],
      maxlength: [12, "Too long"],
    },
    expiry: {
      type: Date,
      required: true,
    },
      type: Number,
      requred: true,
    },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
