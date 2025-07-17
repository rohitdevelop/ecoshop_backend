// // middleware/upload.js
// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads/'));
//   },
//   filename: (req, file, cb) => {
//     // Generate unique filename
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//   }
// });

// // File filter function
// const fileFilter = (req, file, cb) => {
//   // Check file type
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only image files are allowed!'), false);
//   }
// };

// // Configure multer
// export const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024 // 5MB limit
//   },
//   fileFilter: fileFilter
// });

// // Error handling middleware for multer
// export const handleMulterError = (error, req, res, next) => {
//   if (error instanceof multer.MulterError) {
//     if (error.code === 'LIMIT_FILE_SIZE') {
//       return res.status(400).json({
//         success: false,
//         message: 'File too large. Maximum size is 5MB.'
//       });
//     }
//   }
  
//   if (error.message === 'Only image files are allowed!') {
//     return res.status(400).json({
//       success: false,
//       message: 'Only image files are allowed!'
//     });
//   }
  
//   next(error);
// };