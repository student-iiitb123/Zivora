import Listing from "./listing.model.js";

export const createListing = async (req, res) => {
  try {
    const images = req.files.map((file, index) => ({
      url: file.path,
      is_primary: index === 0,
      sort_order: index + 1,
    }));

    const listing = await Listing.create({
      seller_id: req.body.seller_id,
      product_name: req.body.product_name,
      description: req.body.description,
      category: req.body.category,

      sizes: JSON.parse(req.body.sizes),
      colors: JSON.parse(req.body.colors),
      collections: JSON.parse(req.body.collections),

      base_price: req.body.base_price,
      sale_price: req.body.sale_price,

      sku: req.body.sku,

      initial_stock: req.body.initial_stock,
      stock: req.body.initial_stock,

      is_featured: req.body.is_featured,
      status: req.body.status,

      media: images,
    });

    res.status(201).json({
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

export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
      .populate("seller_id", "name email")
      .sort("-createdAt");

    res.json({
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


export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    res.json({
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


export const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
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

export const deleteListing = async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);

    res.json({
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