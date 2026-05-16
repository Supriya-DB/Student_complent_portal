const express = require("express");

const router = express.Router();

const {
    createComplaint,
    getComplaints,
    updateComplaint,
    deleteComplaint,
} = require("../controllers/complaintController");


// CREATE
router.post("/", createComplaint);


// READ
router.get("/", getComplaints);


// UPDATE
router.put("/:id", updateComplaint);


// DELETE
router.delete("/:id", deleteComplaint);


module.exports = router;