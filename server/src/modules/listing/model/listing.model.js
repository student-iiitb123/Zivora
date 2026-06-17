//making listing models
import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  is_primary: { type: Boolean, default: false },
  sort_order: { type: Number, default: 0 },
  aspect_ratio: { type: String, default: "4:5" },
});

const attributeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["size", "color", "material"],
    required: true,
  },
  value: { type: String, required: true },
});

const listingSchema = new mongoose.Schema(
  {
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product_name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    is_featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },

    media: {
      type: [mediaSchema],
      validate: {
        validator: function (value) {
          return value.length <= 5;
        },
        message: "Maximum 5 images allowed",
      },
    },

    attributes: [attributeSchema],

    pricing: {
      base_price: {
        type: Number,
        required: true,
        min: 0,
      },
      sale_price: {
        type: Number,
        default: null,
      default:null,
        min: 0,
      },
      currency: {
        type: String,
        default: "USD",
        
      },
    },

    inventory: {
      sku: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      initial_stock: {
        type: Number,
        required: true,
        min: 0,
      },
      available_stock: {
        type: Number,
        default: 0,
        min: 0,
      },
      reserved_stock: {
        type: Number,
        default: 0,
        min: 0,
      },
    },

    collections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
  },
  { timestamps: true }
);

listingSchema.pre("save", function (next) {
  if (
    this.pricing.sale_price &&
    this.pricing.sale_price >= this.pricing.base_price
  ) {
    return next(new Error("Sale price must be less than base price"));
  }

  const primaryImages = this.media.filter((img) => img.is_primary);

  if (primaryImages.length > 1) {
    return next(new Error("Only one primary image allowed"));
  }

  this.inventory.available_stock =
    this.inventory.initial_stock - this.inventory.reserved_stock;

  next();
});

export default mongoose.model("Listing", listingSchema);
export default mongoose.model("Listing",listingSchema);
export default mongoose.model("Listing",listingSchema);
export default mongoose.model("Listing",listingSchema);







