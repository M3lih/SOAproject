import mongoose from "mongoose";

const conn = () =>{
    mongoose.connect(process.env.DB_URI,{
        dbNAme:"soaproject_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    }).then(()=> {
        console.log("Veritabanına başarıyla bağlanıldı!");
    }).catch((err)=>{
        console.log(`Veritabanı hatası:, ${err}`);
    })
};



export default conn;