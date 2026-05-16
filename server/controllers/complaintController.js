const Complaint = require("../models/Complaint");


// CREATE COMPLAINT
const createComplaint = async(req, res) => {
    try {

        const { title, description, category } = req.body;

        const complaint = await Complaint.create({
            title,
            description,
            category,
        });

        res.status(201).json({
            message: "Complaint submitted successfully",
            complaint,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};


// GET ALL COMPLAINTS
const getComplaints = async(req, res) => {

    try {

        const complaints = await Complaint.find();

        res.status(200).json(complaints);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};


// UPDATE COMPLAINT
const updateComplaint = async(req, res) => {

    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );

        res.status(200).json({
            message: "Complaint updated",
            complaint,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};


// DELETE COMPLAINT
const deleteComplaint = async(req, res) => {

    try {

        await Complaint.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Complaint deleted",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};


module.exports = {
    createComplaint,
    getComplaints,
    updateComplaint,
    deleteComplaint,
};