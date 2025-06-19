import {Schema,models,model } from 'mongoose'

const userSchema = new Schema({
    clerkID :{type :String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true},

})
// Define the user model 
// If the model already exists, use it; otherwise, create a new one using the schema
const User = models.User || model('User', userSchema);
export default User;