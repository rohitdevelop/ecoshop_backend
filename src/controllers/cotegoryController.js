// import { Category } from "../models/category.models.js";

// // Create new category
// export const createCategory = async (req, res) => {
//   try {
//     const { name } = req.body;

//     if (!name || name.trim() === "") {
//       return res.status(404).json({
//         success: false,
//         message: "Category name is required",
//       });
//     }

//     // Check if category with same name exists
//     const existing = await Category.findOne({ name: name.trim() });
//     if (existing) {
//       return res.status(404).json({
//         success: false,
//         message: "Category already exists",
//       });
//     }

//     const category = new Category({ name: name.trim() });
//     await category.save();

//     res.status(200).json({
//       success: true,
//       message: "Category created successfully",
//       data: category,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error creating category",
//       error: error.message,
//     });
//   }
// };

// // Get all categories
// export const getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.find({ isActive: true }).sort({ name: 1 });
//     res.status(200).json({
//       success: true,
//       data: categories,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching categories",
//       error: error.message,
//     });
//   }
// };
