// const { User } = require('../models/users.models');

// // Create and Save a new User
// module.exports.createUser = (req, res) => {
//     User.create(req.body)
//         .then(newUser => res.json(newUser))
//         .catch(err => res.status(400).json(err))
// };

// // Retrieve all User from the database.
// module.exports.getAllUsers = (req, res) => {
//     User.find()
//         .then(allUsers => res.json(allUsers))
//         .catch(err => res.json({ message: "Something went wrong",
//         error: err }));
// };

// module.exports.existingUser = (req, res) => {
//     User.exists({setup: req.body.setup})
//         .then(userExists => {
//             if (userExists) {
//                 return Promise.reject('Please Add An Unique User');
//             }
//             return User.create(req.body);
//         })
//         .then(saveResult => res.json({user: saveResult}))
//         .catch(err => res.json({message: "User already exists", error: err}));

// };

// // Find a single User with an id
// module.exports.findOneUser = (req, res) => {
//     const {id} = req.params
//     User.findOne({_id: id})
//         .then(oneUser => res.json(oneUser))
//         .catch(err => res.json(err))
// };

// // Update a User by the id in the request
// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.status(400).json(err))
// };

// // Delete a User with the specified id in the request
// module.exports.deleteExistingUser = (req, res) => {
//     const {id} = req.params
//     User.deleteOne({_id: id})
//         .then(confirmation => res.json(confirmation))
//         .catch(err => res.status(400).json(err))
// };