import Wishlist from "./wishlist.model.js";
import Listing from "../listing/listing.model.js";

export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await Listing.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    let wishlist = await Wishlist.findOne({
      user: req.user.id,
    });

    if (!wishlist) {
      wishlist = await Wishlist.create({
        user: req.user.id,
        items: [],
      });
    }

    const alreadyExists = wishlist.items.find(
      (item) => item.product.toString() === productId
    );

    if (alreadyExists) {
      return res.status(400).json({
        success: false,
        message: "Already in wishlist",
      });
    }

    wishlist.items.push({
      product: productId,
    });

    await wishlist.save();

    res.status(201).json({
      success: true,
      message: "Added to wishlist",
      wishlist,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

export const getWishlist = async (req, res) => {

  try {

    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    }).populate("items.product");

    res.status(200).json({
      success: true,
      wishlist: wishlist || {
        items: [],
      },
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

};

export const removeWishlistItem = async (req, res) => {

  try {

    const { productId } = req.params;

    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
      });
    }

    wishlist.items = wishlist.items.filter(
      (item) => item.product.toString() !== productId
    );

    await wishlist.save();

    res.json({
      success: true,
      message: "Removed",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

};

export const clearWishlist = async (req, res) => {

  try {

    const wishlist = await Wishlist.findOne({
      user: req.user.id,
    });

    if (wishlist) {
      wishlist.items = [];
      await wishlist.save();
    }

    res.json({
      success: true,
      message: "Wishlist cleared",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

};