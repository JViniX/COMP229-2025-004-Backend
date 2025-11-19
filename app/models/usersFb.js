const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let crypto = require('crypto');

const UserFbSchema = new Schema(
    {
        uid: {
            type: String,
            unique: true
        },
        displayName: String,
        email: {
            type: String,
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
        },
        created: {
            type: Date,
            default: Date.now,
            immutable: true
        },
        updated: {
            type: Date,
            default: Date.now
        },
        admin: {
            type: Boolean,
            default: false
        }

    },
    {
        collection: "usersFb"
    }
);

// Ensure virtual fields are serialised.
UserFbSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model('UserFb', UserFbSchema);