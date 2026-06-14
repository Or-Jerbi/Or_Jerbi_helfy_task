const properties = ['low', 'medium', 'high'];

const validateTasks = (req, res, next) => {
    const { title, description, priority } = req.body; 
    if (!title || typeof title !== "string") {
        return res.status(400).json({ msg: "title is required and must be a string" });
    }
    if (!description || typeof description !== "string") {
        return res.status(400).json({ msg: "description is required and must be a string" });
    }
    if (!properties.includes(priority)) {
        return res.status(400).json({ msg: "priority must be one of the following: low, medium, high" });
    } 
    next();
};    

module.exports = validateTasks;