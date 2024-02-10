const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v)
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^[a-zA-Z ]*$/.test(v)
                },
                message: props => `only alphabets and space are allowed`
            }
        },
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /\d{5}-\d{4}/.test(v)
                },
                message: props => `Zipcode must be in the format DDDDD-DDDD, D = digit`
            }
        },
        geo: {
            lat: {
                type: String,
                required: true,
                validate: {
                    validator: function(v) {
                        return /^-?([0-8]?[0-9]|90)(\.[0-9]{1,4})$/.test(v)
                    },
                    message: props => `${props.value} is not a valid value`
                }
            },
            lng: {
                type: String,
                required: true,
                validate: {
                    validator: function(v) {
                        return /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,4})$/.test(v)
                    },
                    message: props => `${props.value} is not a valid value`
                }
            }
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{1}-\d{3}-\d{3}-\d{4}/.test(v)
            },
            message: props => `Phone must be in the format D-DDD-DDD-DDDD, D = digit`
        }
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const newUrl = new URL(v)
                return newUrl.protocol === 'http:' || newUrl.protocol === 'https:'
            },
            message: props => `${props.value} is not a valid URL`
        }
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('user', userSchema)