const Hospital = require('../models/Hospital');

exports.getHospitals = async(req, res, next) => { 
    try{
        const hospitals = await Hospital.find();
        
       res.status(200).json({success: true,count : hospitals.length, data:hospitals}); 
    }catch(err){
        res.status(400).json({success: false});
    }
};

exports.getHospital = async(req,res, next)=>{
    try{
        const hospitals = await Hospital.find();
        if(!hospitals){
            return res.status(400).json({success: false});
        }
       res.status(200).json({success: true,data: hospitals}); 
    }catch(err){
        res.status(400).json({success: false});
    }
}; 
  
exports.createHospital=async(req,res, next)=>{ 
    console.log(req.body);
    //const hospital =await Hospital.create(req.body)
    //res.status(200).json({success: true, msg: 'Create new hospitals'}); 
    res.status(201).json({success:true,data:hospital});
};
   
exports.updateHospital = async(req, res, next)=>{ 
    try{
        const hospitals = await Hospital.findByIdAndUpdate(req.params.id, req.body , {
            new : true,
            runValidators : true
        });
        if(!hospitals){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data: hospitals
        }); 
    }catch(err){
        res.status(400).json({success: false});
    }
};
    
exports.deleteHospital=async(req, res, next)=>{
    try{
        const hospitals = await Hospital.findByIdAndDelete(req.params.id);
        if(!hospital){
            return res.status(400).json({success: false});
        }
       res.status(200).json({success: true,data:{ }}); 
    }catch(err){
        res.status(400).json({success: false});
    }
};