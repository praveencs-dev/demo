const staffmodel=require('../Model/staffModel');
const {ressender,validator}=require('../utils/globalfunctions');

async function getstaff(req,res){
    let result=await staffmodel.getstaff();
    ressender(res,200,result);
}
async function insertstaff(req,res){
    let staff=req.body;

    let staff_needs={
        name: /^[a-zA-Z\s]+$/,
        role: /^[a-zA-Z\s]+$/,
        dept_id: /^\d/,
        onboarding_date:/^\d{4}-\d{2}-\d{2}/,
        email: /\w@+\w/,
        phone: /^\d{10}/,
        address: /\w+/,
        experience_in_year: /^\d{2}$/
    }

    
    let result=await staffmodel.insertstaff(staff);
    if(result=="inserted"){
        ressender(res,200,{message:result})
    }
    else{
        ressender(res,400,{message:result})
    }
}
async function updatestaff(req,res){
    let staff=req.body;
    let result= await staffmodel.updatestaff(staff);
    if(result=="updated"){
        ressender(res,200,{message:result})
    }
    else{
        ressender(res,400,{message:result})
    }

}
module.exports={
    getstaff,
    insertstaff,
    updatestaff
}