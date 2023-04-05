const Booking = require("./model");

async function createBooking(req,res) {
    try {
        const{ createdatTime, salon, date, services, noOfService, totalAmount, paymentMethod, isActive, isCancelledByCustomer,cancellationReason, bookingStatus, paymentStatus}=req.body;
        console.log("body",req.body);

        const bookingExists=await Booking.findOne({createdatTime,shift,services})

        if(!bookingExists){
            const booking=await Booking.create([
                {
                    createdatTime,
                    salon,
                    date,
                    services,
                    noOfService,
                    totalAmount,
                    paymentMethod,
                    isActive,
                    isCancelledByCustomer,
                    cancellationReason,
                    bookingStatus,
                    paymentStatus
                } ,
            ]);
            /* console.log("slot created")  */
            res.send("booking created")         
        }
        else{
            res.send({
                message: "invalid data for new booking"
            })
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
    }   
    async function bookingbycustomername(req,res){
    try {
        const{name }=req.query;
        console.log(req.body);

       const booking = await Booking.findOne({name})

        if(!booking){
            res.send("Invalid details");
        }
            else {
                res.send({
                    message: "successfully fetched booking",
                    data: {booking}
                });
            }
        }      
         catch (error) {
                console.log(error);
        }
    }

        async function getallbooking(req,res){
            try {
                const{_id }=req.query;
                console.log(req.body);
        
               const booking = await Booking.find({_id})
        
                if(!booking){
                    res.send("Invalid details");
                }
                    else {
                        res.send({
                            message: "successfully fetched bookings",
                            data: {booking}
                        });
                    }
                }      
                 catch (error) {
                        console.log(error);
                }
            }

        async function deletebooking(req,res){
            try{
                const{name}=req.body;

                const booking=await Booking.deleteOne({name});
                    if(!booking){
                        res.send("Invalid booking name");

                    }
                    else {
                        res.send({
                            messsage:"booking deleted",
                            data:booking,
                        });
                    } 
                }catch (error) {
                        console.log(error);
                      }
                    }

            
                    module.exports = {
                        createBooking,
                        getallbooking,
                        bookingbycustomername,                        
                        deletebooking
                      };
                      