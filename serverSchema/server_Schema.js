import mongoose from "mongoose"
const {Schema,model}=mongoose


const serverSchema = mongoose.Schema({
    
    first_name: {
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    date_birth: {
        type: String,
        require: true
    },
    school: {
        type: String,
        require: true
    }
});
const ServerModel = model("User", serverSchema);
export default ServerModel;
