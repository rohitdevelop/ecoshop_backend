// // middleware/auth.js
// import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

// // Basic auth middleware using Clerk
// export const authMiddleware = ClerkExpressRequireAuth({
//   onError: (error) => {
//     console.error('Auth error:', error);
//     return {
//       success: false,
//       message: 'Authentication required'
//     };
//   }
// });

// // Admin check middleware
// export const adminMiddleware = (req, res, next) => {
//   try {
//     // Check if user is admin (you'll need to implement this based on your user model)
//     const user = req.auth?.user;
    
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: 'Authentication required'
//       });
//     }
    
//     // Check if user has admin role
//     // This depends on how you store admin info in Clerk
//     const isAdmin = user.publicMetadata?.role === 'admin' || user.privateMetadata?.role === 'admin';
    
//     if (!isAdmin) {
//       return res.status(403).json({
//         success: false,
//         message: 'Admin access required'
//       });
//     }
    
//     next();
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Authorization error',
//       error: error.message
//     });
//   }
// };