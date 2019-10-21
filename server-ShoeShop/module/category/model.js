const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
 * @swagger
 *
 * definitions:
 *   Category:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *         readOnly: true
 *       name:
 *         type: string
 *       slug:
 *         type: string
 *       content:
 *         type: string
 *       parent:
 *         type: objectId
 *       ancestors:
 *         type: array
 *         items:
 *           type: object
 *           $ref: "#definitions/Ancestor"
 *       type:
 *         type: string
 *     required:
 *         - name
 *         - slug
 */
/**
 * @swagger
 *
 * definitions:
 *   Ancestor:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *         readOnly: true
 *       name:
 *         type: string
 *       slug:
 *         type: string
 *       type:
 *         type: string
 */
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  type: {
    type: String
  },
  image: {
    type: String
  }
});
const index = { parent: 1 };
schema.index(index);
schema.pre("validate", function(next) {
  if (this.name) {
    this.slug = this.name
      .toLowerCase()
      .split(" ")
      .join("-");
  }
  next();
});

module.exports = mongoose.model("category", schema, "categories");
