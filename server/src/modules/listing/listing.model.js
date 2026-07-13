import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    is_primary: {
      type: Boolean,
      default: false,
    },
    sort_order: {
      type: Number,
      default: 0,
    },
    aspect_ratio: {
      type: String,
      default: "4:5",
    },
  },
  { _id: false }
);

const listingSchema = new mongoose.Schema(
  {
    // Seller/Admin
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Product Details
    product_name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    // Images
    media: [mediaSchema],

    // Attributes
    sizes: [
      {
        type: String,
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
      },
    ],

    colors: [
      {
        type: String,
      },
    ],

    collections: [
      {
        type: String,
      },
    ],

    // Pricing
    base_price: {
      type: Number,
      required: true,
    },

    sale_price: {
      type: Number,
      default: 0,
    },

    // Inventory
    sku: {
      type: String,
      unique: true,
      required: true,
    },

    initial_stock: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    // ⭐ Review Information
    average_rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    total_reviews: {
      type: Number,
      default: 0,
    },

    // Flags
    is_featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Listing", listingSchema);