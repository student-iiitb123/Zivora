import express from "express";

import { createListing } from "./listing.controller.js";
import { getAllListings } from "./listing.controller.js";
import { getSingleListing } from "./listing.controller.js";
import { updateListing } from "./listing.controller.js";
import { deleteListing } from "./listing.controller.js";

const router = express.Router();

router.post("/", createListing);
router.get("/", getAllListings);
router.get("/:id", getSingleListing);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);

export default router;