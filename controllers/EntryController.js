import Entry from '../models/Entry';

// Get all entries -- ADMIN ONLY
exports.getAllEntries = (req, res) => {
    Entry.find((err, entries) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(entries);
    });
};

// Get one entry -- ADMIN ONLY
exports.getOneEntry = (req, res) => {
    Entry.findById(req.params.entryId, (err, entry) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(entry);
    });
}

// Create a new entry -- ADMIN ONLY
exports.createEntry = (req, res) => {
    const newEntry = new Entry(req.body);
    newEntry.save((err, savedEntry) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedEntry);
    });
}

// Update an entry -- ADMIN ONLY
exports.updateEntry = (req, res) => {
    Entry.findOneAndUpdate(
        { _id: req.params.entryId },
        req.body,
        { new: true },
        (err, updatedEntry) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(updatedEntry);
        }
    );
}

// Delete an entry -- ADMIN ONLY
exports.deleteEntry = (req, res) => {
    Entry.findOneAndDelete({ _id: req.params.entryId }, (err, deletedEntry) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(`Successfully deleted entry ${deletedEntry.title} from the database.`);
    });
}

// Get all entries for a user
exports.getAllEntriesForUser = (req, res) => {
    Entry.find({ user: req.params.userId }, (err, entries) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(entries);
    });
}

// Get one entry for a user
exports.getOneEntryForUser = (req, res) => {
    Entry.findOne({ user: req.params.userId, _id: req.params.entryId }, (err, entry) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(entry);
    });
}

// Create a new entry for a user
exports.createEntryForUser = (req, res) => {
    const newEntry = new Entry(req.body);
    newEntry.user = req.params.userId;
    newEntry.save((err, savedEntry) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(savedEntry);
    });
}

// Update an entry for a user
exports.updateEntryForUser = (req, res) => {
    Entry.findOneAndUpdate(
        { user: req.params.userId, _id: req.params.entryId },
        req.body,
        { new: true },
        (err, updatedEntry) => {
            if(err) {
                res.status(500);
                return next(err);
            };
            return res.status(201).send(updatedEntry);
        }
    );
}

// Delete an entry for a user
exports.deleteEntryForUser = (req, res) => {
    Entry.findOneAndDelete({ user: req.params.userId, _id: req.params.entryId }, (err, deletedEntry) => {
        if(err) {
            res.status(500);
            return next(err);
        };
        return res.status(200).send(`Successfully deleted entry ${deletedEntry.title} from the database.`);
    });
}