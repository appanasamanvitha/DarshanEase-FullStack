const express = require('express');
const router = express.Router();
const multer = require('multer');
const Organizer = require('../db/Organizer/OrganizerSchema');
const temples = require('../db/Organizer/TempleSchema');
const darshan = require('../db/Organizer/DarshanSchema');
const bookings = require('../db/User/UserBooking');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });
router.use('/uploads', express.static('uploads'));

router.post('/ologin', (req, res) => {
    const { email, password } = req.body;
    Organizer.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.status(200).json({ Status: "Success", user: { id: user.id, name: user.name, email: user.email } });
                } else {
                    return res.status(401).json({ Status: "Failure", message: "Invalid email or password" });
                }
            } else {
                return res.status(404).json({ Status: "Failure", message: "User not found" });
            }
        })
        .catch(error => {
            console.error('Error logging in:', error);
            return res.status(500).json({ Status: "Error", message: "Internal Server Error" });
        });
});

router.post('/osignup', (req, res) => {
    const { name, email, password } = req.body;
    Organizer.findOne({ email: email })
        .then(use => {
            if (use) {
                res.json("Already have an account");
            } else {
                Organizer.create({ email: email, name: name, password: password })
                    .then(result => res.json(" Account Created"))
                    .catch(err => res.json(err));
            }
        }).catch(err => res.json("failed"));
});

router.get('/organizers', (req, res) => {
    Organizer.find()
        .then((user) => {
            res.status(200).json(user);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.get('/organizers/:id', (req, res) => {
    const id = req.params.id;
    Organizer.findById({ _id: id })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch(() => {
            res.sendStatus(500);
        });
});

router.put('/organizeredit/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    Organizer.findByIdAndUpdate(id, { name, email, password }, { new: true })
        .then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});

router.delete('/organizerdelete/:id', (req, res) => {
    const _id = req.params.id;
    Organizer.deleteOne({ _id })
        .then((item) => {
            if (item) {
                res.status(200).json('Organizer has been deleted');
            } else {
                res.status(400).json('No such organizer is found to delete');
            }
        })
        .catch((er) => {
            console.log(er);
            res.status(500).json('Server Error');
        });
});

// create temple
router.post('/createtemple', upload.single('templeImage'), (req, res) => {
    const { organizerId, organizerName, templeName, location, open, close, description } = req.body;

    if (!req.file) {
        return res.status(400).json({ error: 'No templeImage file uploaded' });
    }

    const templeImage = req.file.path;
    const Temple = require('../db/Organizer/TempleSchema');
    const temple = new Temple({ organizerId, organizerName, templeName, location, open, close, description, templeImage });

    temple.save()
        .then((savedTemple) => {
            res.status(201).json(savedTemple);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Failed to create temple' });
        });
});

router.get('/gettemple/:organizerId', async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const templesData = await temples.find({ organizerId: organizerId }).sort('position');
        res.json(templesData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch temples' });
    }
});

router.get('/gettemples', (req, res) => {
    temples.find()
        .then((savedDarshan) => {
            res.status(201).json(savedDarshan);
        })
        .catch((error) => {
            console.error(error);
            res.status(400).json({ error: 'Failed to get temples' });
        });
});

router.get('/gettemplebyid/:templeId', async (req, res) => {
    const templeId = req.params.templeId;
    try {
        const templeData = await temples.findById(templeId);
        res.json(templeData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch temple by Id' });
    }
});

router.put('/updatetemple/:templeId', upload.single('templeImage'), async (req, res) => {
    const templeId = req.params.templeId;
    const { templeName, open, close, description, location } = req.body;
    try {
        let updateData = { templeName, open, close, description, location };
        if (req.file) {
            updateData.templeImage = req.file.path;
        }
        const updatedTemple = await temples.findByIdAndUpdate(
            templeId,
            updateData,
            { new: true }
        );

        res.json(updatedTemple);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update temple' });
    }
});

router.delete('/templedelete/:id', (req, res) => {
    const id = req.params.id;
    temples.deleteOne({ _id: id })
        .then((item) => {
            res.status(200).json(item);
        })
        .catch(() => {
            res.status(400).json({ msg: "No item found" });
        });
});

router.post('/createdarshan', (req, res) => {
    const { darshanName, open, close, vip, normal, description, prices, organizerId, organizerName, templeName, location } = req.body;
    const darsh = new darshan({ darshanName, open, close, vip, normal, description, prices, organizerId, organizerName, templeName, location });

    darsh.save()
        .then((savedDarshan) => {
            res.status(201).json(savedDarshan);
        })
        .catch((error) => {
            console.error(error);
            res.status(400).json({ error: 'Failed to create darshan' });
        });
});

router.get('/getdarshans/:organizerId', async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const darshanData = await darshan.find({ organizerId: organizerId }).sort('position');
        res.json(darshanData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch darshans' });
    }
});

router.get('/getdarshanbyid/:organizerId', async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const darshanData = await darshan.find({ organizerId: organizerId });
        res.json(darshanData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch darshan by ID' });
    }
});

router.get('/getdarshans', (req, res) => {
    darshan.find()
        .then((savedDarshan) => {
            res.status(201).json(savedDarshan);
        })
        .catch((error) => {
            console.error(error);
            res.status(400).json({ error: 'Failed to get darshan' });
        });
});

router.get('/getorganizerbookings/:userId', async (req, res) => {
    const organizerId = req.params.userId;
    try {
        const tasks = await bookings.find({ organizerId }).sort('position');
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

router.delete('/eventdelete/:id', (req, res) => {
    const { id } = req.params;
    bookings.findByIdAndDelete(id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
