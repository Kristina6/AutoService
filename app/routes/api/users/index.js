import express from 'express';
import models from '../.././../db/models';

const router = express.Router();

router.get('/', (req, res) => {
    models.User.findAll().then((users) => {
        res.send(users);
    });
});

router.get('/add', (req, res) => {
    models.User.create({
        firstName: 'Vasiliy',
        lastName: 'Velikolepniy',
        phone: '8-800-555-35-35'
    });
})

export default router;