import express from 'express';
import models from '../.././../db/models';

const router = express.Router();

router.get('/test', (req, res) => {
    models.Cars.create({
        nomer: '69',
        marka: 'BMW',
        model: 'X5',
        UserId: 5
    });
    res.send('OK');
});

router.get('/getAll', (req, res) => {
    models.Cars.findAll().then((cars) => {
        res.send(cars);
    });
});

router.get('/getAllByUserId', (req, res) => {
    const userId = req.query.userId;
    if (userId) {
        models.User.findById(userId).then(user => {
            if (user) {
                user.getCars().then(userCars => {
                    res.send(userCars);
                });
            } else {
                res.send({
                    error: 'user not found'
                });
            }
        });
    } else {
        res.send({
            error: 'no userId specified'
        });
    }
});

export default router;