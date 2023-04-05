const Salon = require("./model");


async function createSalon(req,res) {
    try {
        const{ businessName, city, country, email, password, phoneNo, address, isEmailVerified, isActive, image, services }=req.body;
        console.log("body",req.body);

        const salonExists=await Salon.findOne({businessName})

        if(!salonExists){
            const salon=await Salon.create([
                {
                   businessName, 
                   city, 
                   country, 
                   email, 
                   password, 
                   phoneNo, 
                   address, 
                   isEmailVerified, 
                   isActive, 
                   image, 
                   services
                },
            ]);
            console.log("Salon created")  
            res.send("Salon created")        
        }
        else{
            res.send("invalid data")
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
    }   

module.exports = {
    createSalon
}