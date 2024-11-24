// File: middleware/validation.js
const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        // Validate and sanitize fields.
        body('firstName').notEmpty().withMessage('First name is required').trim().escape(),
        body('lastName').notEmpty().withMessage('Last name is required').trim().escape(),
        body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
        body('favoriteColor').notEmpty().withMessage('Favorite Color is required').trim().escape(),
        body('birthday').notEmpty().withMessage('Birthday is required').trim().escape(),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    userValidationRules,
    validate
};
