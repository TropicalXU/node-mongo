const assert = require('assert');

//post
exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
     return coll.insertDocument(document);

};

//get
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

//delete
exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

//update
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};