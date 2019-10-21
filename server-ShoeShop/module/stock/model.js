const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    // products: [
    //   {
    //     product: {
    //       type: Schema.Types.ObjectId,
    //       ref: "product"
    //     },
    //     quantity: {
    //       type: Number,
    //       required: true
    //     },
    //     size: {
    //       type: Number,
    //       required: true
    //     },
    //     price: {
    //       type: Number,
    //       required: true
    //     }
    //   }
    // ],
    // brandId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "brand"
    // },
    // status: {
    //   type: String
    // },
    productCode:{
      type: String,
      required:true
    },
    name:{
      type: String,
      required: true
    },
    quantity: {
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
module.exports = mongoose.model("stock", schema, "stocks");
