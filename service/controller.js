const service = require("./model");



async function createservice(req,res) {
    try {
        const{ name, description, duration, image, price, isActive, shifts  }=req.body;
        console.log("body",req.body);

        const serviceExists=await service.findOne({name})

        if(!serviceExists){
            const shift=await service.create([
                {
                    name, 
                    description, 
                    duration, 
                    image, 
                    price,
                    isActive,
                    shifts 
                } ,
            ]);
            console.log("Service created")  
            res.send("Service created")        
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
    async function getservicebyserviceID(req,res){
    try {
        const{_id }=req.query;
        console.log(req.body);

       const oneService = await service.findOne({_id})

        if(!oneService){
            res.send("Invalid details");
        }
            else {
                res.send({
                    message: "successfully fetched data slots",
                    data: {oneService}
                });
            }
        }      
         catch (error) {
                console.log(error);
        }
    }

    async function getServiceBySalonId(req, res) {
        try {
          const { salonId } = req.query;
          console.log(req.body);
      
          const services = await service.find({ salons: salonId });
      
          if (!services || services.length === 0) {
            return res.status(404).send("No services found for this salon id");
          }
      
          res.send({
            message: "Successfully fetched services",
            data: { services },
          });
        } catch (error) {
          console.log(error);
          res.status(500).send("Internal server error");
        }
      }
      

        async function deleteservicebyserviceid(req,res){
            try{
                const{_id}=req.query;

                const oneservice=await service.deleteOne({_id});
                    if(!oneservice){
                        res.send("Invalid shift id");

                    }
                    else {
                        res.send({
                            messsage:"service deleted",
                            data:oneservice,
                        });
                    } 
                }catch (error) {
                        console.log(error);
                      }
                    }

            
                    module.exports = {
                        createservice,
                        getservicebyserviceID,
                        getServiceBySalonId,
                        deleteservicebyserviceid
                      }