const express = require('express');
const entryRouter = express.Router();
const { getAllEntriesForUser, getOneEntryForUser, createEntryForUser, updateEntryForUser, deleteEntryForUser } = require('../controllers/entryController');

entryRouter.route('/:userId')
    .get(getAllEntriesForUser)
    .post(createEntryForUser);

entryRouter.route('/:userId/:entryId')
    .get(getOneEntryForUser)
    .put(updateEntryForUser)
    .delete(deleteEntryForUser);

module.exports = entryRouter;