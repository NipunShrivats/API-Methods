const express = require("express");
const router = new express.Router();
const Student = require("../models/students")


// ----------------------------------------
// post
// router.post("/students", async (req, res) => {
//     try {
//         const user = new Student(req.body);
//         const createUser = await user.save();
//         res.status(201).send(createUser);
//     } catch (err) {
//         res.status(400).send(err)
//     }
// })

// get all data
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (err) {
        res.send(err)
    }
})


//// get :name//
// router.get("/students/:name", async (req, res) => {
//     try {
//         const name = req.params.name;
//         const studentData = await Student.find({ name });
//         res.status(201).send(studentData);
//         // res.status(201).send(name);
//         // console.log(name);
//     }
//     catch (err) {
//         res.status(500).send(err);
//     }
// })

//// get :id//
// router.get("/students/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const studentData = await Student.findById(id);
//         res.status(201).send(studentData);
//     }
//     catch (err) {
//         res.status(404).send(err);
//     }
// })
// --------------------------------------------------

//// update - patch "patch will change a particular piece of data"
// router.patch("/students/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body);
//         res.send(updateStudents);
//         console.log(updateStudents)
//     } catch (err) {
//         res.status(404).send(err);
//     }
// })
// put- upsert:update or will insert if not found//
// router.put("/students/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body);
//         res.send(updateStudents);
//         console.log(updateStudents)
//     } catch (err) {
//         res.status(404).send(err);
//     }
// })

// --------------------------------------------------
// delete

// router.delete("/students/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const deleteStudents = await Student.findByIdAndDelete(_id);
//         console.log(deleteStudents)
//         res.send(deleteStudents);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// })

module.exports = router;