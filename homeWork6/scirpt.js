const mongoose = require("mongoose");
const onerSchema = require("./oners");
const petsSchema = require("./myPets");
const vatrinarSchema = require("./vatrinar");


try{
    mongoose.connect("mongodb://localhost:27017/pets");
    console.log("im connected !")
}catch(e){
    console.log("error"+e)
}finally{}

async function insertPets(){
    const Pet1 = new petsSchema({
        fullName:"firat pet",
        favFood:"fish",
        age:2
    });
    const Pet2 = new petsSchema({
        fullName:"scond pet",
        favFood:"tuna",
        age:5
    });
    await Pet1.save();
    await Pet2.save();
    console.log(Pet1);
    console.log(Pet2);
};
//insertPets()
async function insertVatrinar(){
    const vet1 = new vatrinarSchema({
        firstName:"shimi",
        lastName:"bukshpan",
        phone:547735899
    });
    const vet2 = new vatrinarSchema({
        firstName:"moshe",
        lastName:"viner",
        phone:25361977
    });
    await vet1.save();
    await vet2.save();
    console.log(vet1);
    console.log(vet2);
};
//insertVatrinar()

async function insertOner(){
    const oner1 = new onerSchema({
        firstName:"israel",
        lastName:"choen",
        email:"buki8060@gmail.com",
        age:35,
        vatrinarId:"62986d74d4a5b6ba741f1690",
        petsArr:["62986becbeb66321cf5aed6d"]
    });
    const oner2 = new onerSchema({
        firstName:"chaim",
        lastName:"segal",
        email:"shimi123@gmail.com",
        age:67,
        vatrinarId:"62986d74d4a5b6ba741f1691",
        petsArr:["62986becbeb66321cf5aed6d", "62986becbeb66321cf5aed6e"]
    });
    await oner1.save();
    await oner2.save();
    console.log(oner1);
    console.log(oner2);
};
//insertOner()

async function getDate(findByOner){
    const getPetsByOner = await onerSchema.find(findByOner);
    getPetsByOner.forEach(async(element)=>{
            element.petsArr.forEach(async(pet) =>{
            console.log(await petsSchema.find({"_id":pet}));
         }); 
    });

    const getVetsByOner = await onerSchema.find(findByOner);
    getVetsByOner.forEach(async(element)=>{
            element.vatrinarId.forEach(async(vet) =>{
            console.log(await vatrinarSchema.find({"_id":vet}));
         }); 
    });
};
getDate({firstName:"chaim"});
