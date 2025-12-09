import Booking from "../models/Booking.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
       
   export      const   createBooking    =async(req, res)=>
    {  const   booking =await Booking.create(req.body);
                                res.json(booking);
                                };
// Booking.create(req.body) creates a new document in the Booking collection using the data received.
//Booking.find() retrieves all documents from the Booking collection.
   export const getBookings= async(req,res) =>
    {
        const bookings=await Booking.find();
        res.json(bookings);
    };                     