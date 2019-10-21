const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order"
      }
    ],
    deleted: {
      type: Boolean,
      select: false,
      default: false
    }
  },
  { timestamps: true }
);

schema.pre("find", function() {
  this.where({ deleted: false });
});
schema.pre("findOne", function() {
  this.where({ deleted: false });
});
schema.pre("findById", function() {
  this.where({ deleted: false });
});
schema.pre("findOneAndUpdate", function() {
  this.where({ deleted: false });
});
schema.pre("findByIdAndUpdate", function() {
  this.where({ deleted: false });
});
module.exports = mongoose.model("shipper", schema, "shippers");
