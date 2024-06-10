const express = require('express');
const router = express.Router();
const multer = require('multer');
const Organizer = require('../db/Organizer/OrganizerSchema')
const Darshan = require('../db/Organizer/DarshanSchema')
const Temple = require('../db/Organizer/TempleSchema')
const Bookings=require('../db/User/UserBooking')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });
router.use('/uploads', express.static('uploads'));

// Organizer login
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

// Organizer signup
router.post('/osignup', (req, res) => {
    const { name, email, password } = req.body;
    Organizer.findOne({ email: email })
        .then(use => {
            if (use) {
                res.json("Already have an account");
            } else {
                Organizer.create({ email, name, password })
                    .then(() => res.json("Account Created"))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => {
            console.error('Organizer signup error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


// Organizer routes
router.get('/organizers', (req, res) => {
    Organizer.find()
        .then((user)=>{
            res.status(200).json(user)
        })
        .catch(() => {
            console.error('Error fetching organizers:');
            res.sendStatus(500);
        });
});

router.get('/organizers/:id', (req, res) => {
    const id = req.params.id;
    Organizer.findById({_id:id})
        .then((user) => {res.status(200).json(user)})
        .catch(() => {
            console.error('Error fetching organizer by ID:');
            res.sendStatus(500);
        });
});

router.put('/organizeredit/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    Organizer.findByIdAndUpdate(id, { name, email, password }, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(error => {
            console.error('Error updating organizer:', error);
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
                res.status(400).json('No such organizer found to delete');
            }
        })
        .catch((error) => {
            console.error('Error deleting organizer:', error);
            res.status(500).json('Server Error');
        });
});

router.post('/createtemple', upload.single('templeImage'), (req, res) => {
    try {
        const { organizerId, organizerName, templeName, location, open, close, description } = req.body;

        console.log('Received data:', req.body);
        console.log('File:', req.file);

        if (!req.file) {
            return res.status(400).json({ error: 'No templeImage file uploaded' });
        }

        const templeImage = req.file.path;
        const temple = new Temple({
            organizerId,
            organizerName,
            templeName,
            location,
            open,
            close,
            description,
            templeImage,
        });

        temple.save()
            .then((savedTemple) => {
                console.log('Temple saved successfully:', savedTemple);
                res.status(201).json(savedTemple);
            })
            .catch((error) => {
                console.error('Error saving temple:', error);
                res.status(500).json({ error: 'Failed to create temple', details: error.message });
            });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Unexpected error occurred', details: error.message });
    }
});



router.get('/gettemple/:organizerId', async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const templesData = await Temple.find({ organizerId }).sort('position');
        res.json(templesData);
    } catch (error) {
        console.error('Error fetching temples by organizer ID:', error);
        res.status(500).json({ error: 'Failed to fetch temples' });
    }
});

router.get('/gettemples', (req, res) => {
    Temple.find()
        .then((user)=>{
            res.status(200).json(user)
        })
        .catch(() => {
            console.error('Error fetching temples');
            res.sendStatus(500);
        });
});

router.get('/gettemplebyid/:templeId', async (req, res) => {
    const templeId = req.params.templeId;
    try {
        const templeData = await Temple.findById(templeId);
        res.json(templeData);
    } catch (error) {
        console.error('Error fetching temple by ID:', error);
        res.status(500).json({ error: 'Failed to fetch temple by ID' });
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
        const updatedTemple = await Temple.findByIdAndUpdate(templeId, updateData, { new: true });
        res.json(updatedTemple);
    } catch (error) {
        console.error('Error updating temple:', error);
        res.status(500).json({ error: 'Failed to update temple' });
    }
});


router.delete('/templedelete/:id', (req, res) => {
    const id = req.params.id;
    Temple.deleteOne({ _id: id })
        .then(result => {
            if (result.deletedCount) {
                res.status(200).json('Temple has been deleted');
            } else {
                res.status(400).json({ error: 'No such temple found to delete' });
            }
        })
        .catch(error => {
            console.error('Error deleting temple:', error);
            res.status(500).json('Server Error');
        });
});

// Create darshan
router.post('/createdarshan', (req, res) => {
    const { darshanName, open, close, vip, normal, description, prices, organizerId, organizerName, templeName, location } = req.body;
    const darsh = new Darshan({ darshanName, open, close, vip, normal, description, prices, organizerId, organizerName, templeName, location });

    darsh.save()
        .then(savedDarshan => res.status(201).json(savedDarshan))
        .catch(error => {
            console.error('Error creating darshan:', error);
            res.status(400).json({ error: 'Failed to create darshan' });
        });
});

router.get('/getdarshans/:_id', async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const darshanData = await Darshan.find({ organizerId }).sort('position');
        res.json(darshanData);
    } catch (error) {
        console.error('Error fetching darshans by organizer ID:', error);
        res.status(500).json({ error: 'Failed to fetch darshans' });
    }
});

router.get('/getdarshanbyid/:organizerId', async (req, res) => {
    const organizerId = req.params.organizerId;
    try {
        const darshanData = await Darshan.find({ organizerId });
        res.json(darshanData);
    } catch (error) {
        console.error('Error fetching darshan by ID:', error);
        res.status(500).json({ error: 'Failed to fetch darshan by ID' });
    }
});

router.get('/getdarshans', (req, res) => {
    Darshan.find()
        .then(savedDarshan => res.status(201).json(savedDarshan))
        .catch(error => {
            console.error('Error fetching darshans:', error);
            res.status(400).json({ error: 'Failed to get darshans' });
        });
});

// Get organizer bookings
router.get('/getorganizerbookings/:userId', async (req, res) => {
    const organizerId = req.params.userId;
    try {
        const tasks = await Bookings.find({ organizerId }).sort('position');
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching bookings by organizer ID:', error);
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

router.delete('/eventdelete/:id', (req, res) => {
    const { id } = req.params;
    Bookings.findByIdAndDelete(id)
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.error('Error deleting event:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
