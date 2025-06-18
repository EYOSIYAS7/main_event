import { Schema, models, model} from "mongoose";
import { title } from "process";
export interface IEvent {
    _id: string;
    title: string;
    description?: string;
    location: string;
    createdAt?: Date;
    startTime: Date;
    endTime: Date;
    imageUrl: string;
    price?: string;
    isFree?: boolean;
    url?: string;
    organizer: { _id:string, firstName:string, LastName:string}; // Reference to the user model
    category: {id:string, name:string}; // Reference to the category model 
}

const Eventschema = new Schema ({
    title: { type: String, required: true },
    description: { type: String},
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    imageUrl: { type: String, required: true },
    price: {type : String},
    isFree : { type: Boolean, default: false },
    url: {type: String},
    organizer: { type : Schema.Types.ObjectId, ref: 'user'}, // ref is used to link to the user model
    category: { type: Schema.Types.ObjectId, ref: 'category' }, // ref is used to link to the category model 

})

const Event = models.Event || model('Event', Eventschema);

export default Event;