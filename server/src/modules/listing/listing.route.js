import express from "express";
import upload from "../../middlewares/upload.js";

import { createListing } from "./listing.controller.js";
import { getAllListings } from "./listing.controller.js";
import {  getListingById} from "./listing.controller.js";
import { updateListing } from "./listing.controller.js";
import { deleteListing } from "./listing.controller.js";

const router = express.Router();

router.post(
  "/",
  upload.array("images", 5),
  createListing
);

router.post("/", createListing);
router.get("/", getAllListings);
router.get("/:id",getListingById);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);

export default router;