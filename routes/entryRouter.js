const express = require('express');
const entryRouter = express.Router();
const { getEntriesForUser, createEntryForUser, updateEntryForUser, deleteEntryForUser } = require('../controllers/entryController');

entryRouter.route('/:userId')
    .get(getEntriesForUser)
    .post(createEntryForUser);

entryRouter.route('/:userId/:entryId')
    .put(updateEntryForUser)
    .delete(deleteEntryForUser);

module.exports = entryRouter;