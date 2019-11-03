const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ogPath, path200 } = require("../common/constant");
// const host = require("../common/host");

const rating = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    
    rate: {
      type: Number,
      max: [5, "max rate is 5"],
      min: [0, "min rate is 0"],
      required: true
    },

    time: {
      type: Number,
      required: true
    }
  },
  { _id: false }
);

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "is required"],
      trim: true,
      index: true
    },

    inventory: {
      type: Number,
      trim: true
    },
    nameShow: {
      type: String,
      trim: true
    },
    rating: [rating],
    price: {
      type: Number,
      min: 0
    },
    description: {
      type: String,
      trim: true
    },
    sale: {
      type: Number,
      trim: true
    },
    categories: {
      type: Schema.Types.ObjectId,
      required: [true, "is required"],
      ref: "category"
    },

    rate: {
      type: Number,
      min: 0,
      max: 500,
      default: 0
    },

    images: [
      {
        type: String,
        trim: true
      }
    ],

    Detail: [
      {
        size: {
          type: [String],
          trim: true
        },
        color: {
          type: [String],
          trim: true
        },
        price: {
          type: Number,
          trim: true
        },
        inventory: {
          type: Number,
          default: 0,
          min: 0
        },
        amountSold: {
          type: Number,
          default: 0,
          min: 0
        }
      }
    ],
    amountSold: {
      type: Number,
      default: 0,
      min: 0
    },
    status: {
      type: Boolean,
      select: true,
      default: true,
      required: true
    },

    favorited: {
      type: Number,
      default: 0,
      min: 0
    },
    deleted: {
      type: Boolean,
      select: false,
      default: false,
      
    }
  },
  {
    timestamps: true
  }
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
module.exports = mongoose.model("product", schema, "products");
