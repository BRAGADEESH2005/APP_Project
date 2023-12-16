import mongoose, { Schema, model, models } from "mongoose";

const problemSchema = new Schema({
    problem_type: {
        type: String,
        required: [true, "Please enter problem type"],
        trim: true,
        maxlength: 32,
    },
    problem:[
        {
           heading: {
               type: String,
               required: [true, "Please enter problem statement"],
               trim: true,
               maxlength: 200,
           },
           description: {
                type: String,
                required: [true, "Please enter problem description"],
                trim: true,
                maxlength: 2000,
              },
            constraints: {
                type: String,
                required: [true, "Please enter problem constraints"],
                trim: true,
                maxlength: 2000,
            },
        }
    ],
});

const Problem = models.Problem || model("Problem", problemSchema);
export default Problem;


