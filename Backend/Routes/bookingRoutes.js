import express from 'express';
import { createBooking,getBookings } from '../Controllers/bookingController.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router=express.Router();

router.get('/',getBookings);
router.post('/',createBooking);/// inside router.get or router.post is relative to /bookings, which you specified in app.use.

export default router;