
import Listing from "./listing.model.js";

// CREATE LISTING
export const createListing = async (req, res) => {
  try {
    const listing = await Listing.create(req.body);

    res.status(201).json({
      success: true,
      message: "Listing created successfully",
      data: listing,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL LISTINGS
export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
      .populate("seller_id", "name email")
      .populate("collections");

    res.status(200).json({
      success: true,
      count: listings.length,
      data: listings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE LISTING
export const getSingleListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate("seller_id", "name email")
      .populate("collections");

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.status(200).json({
      success: true,
      data: listing,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE LISTING
export const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Listing updated successfully",
      data: listing,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE LISTING
export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Listing deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};