import express from "express";
import upload from "../../middlewares/upload.js";

import {
  createListing,
  getAllListings,
  getListingById,
  updateListing,
  deleteListing,
} from "./listing.controller.js";

const router = express.Router();

router.post(
  "/",
  (req, res, next) => {
    console.log("STEP 1");
    next();
  },
  upload.array("images", 5),
  (req, res, next) => {
    console.log("STEP 2");
    next();
  },
  createListing
);
router.get("/", getAllListings);
router.get("/:id", getListingById);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);
router.get("/best-sellers", getBestSellers);

export default router;