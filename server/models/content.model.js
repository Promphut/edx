import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import setting from '../../config/setting'
/**
 * Content Schema
 */
const ContentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type: String,
        trim: true,
        maxlength: setting.DESC_LENGTH
    },
    objective:{
        type: String,
        trim: true,
        maxlength: setting.DESC_LENGTH,
        required: true
    },
    cover:Schema.Types.Mixed,
    contentType:{
        type: String,
        required: [true, 'Content type is required.'],
        enum: setting.CONTENT_TYPES,
    },
    proofReader:[
        {
            type: String
        }
    ]
    ,
    id:{
        type:String,
        unique:true,
        required: true
    }
}); 
                            
/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
ContentSchema.method({
});

/**
 * Statics
 */
ContentSchema.statics = {

};


export default mongoose.model('User', ContentSchema);
