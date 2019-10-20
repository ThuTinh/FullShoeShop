const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
 * @swagger
 *
 * definitions:
 *   Suplier:
 *     type: object
 *     properties:
 *       _id: 
 *         type: string
 *         readOnly: true
 *       name:
 *         type: string
 *        phone:
 *          type: string
 *        email:
 *          type: string
 *        address:
 *          type: string
 *       products:
 *         example: []
 *       deleted:
 *         type: boolean
 *         default: false
 *         readOnly: true
 *     required:
 *       - name

 */
const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      trim: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: String
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "product"
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
module.exports = mongoose.model("supplier", schema, "suppliers");
