import express from 'express';
import models from '../.././../db/models';

const router = express.Router();

router.get('/getAll', (req, res) => {
    models.User.findAll().then((users) => {
        res.send(users);
    });
});

router.post('/add', (req, res) => {
    const { firstName, lastName, phone } = req.query;

    if (!firstName
        || !lastName) {
        res.send({ error: "firstName and lastName is required" })
    } else {
        models.User.create({ firstName, lastName, phone }).then(user => {
            res.send({
                id: user.id
            });
        });
    }
});

router.post('/delete', (req, res) => {
    const { id } = req.query;

    if (id) {
        models.User.findByPk(id).then(user => {
            if (user) {
                user.destroy().then((result) => {
                    res.send({ message: `user id=${id} deleted` });
                });
            } else {
                res.send({ error: "user not found" });
            }
        });
    } else {
        res.send({ error: 'id is not specified' });
    }

});

router.get("/get", (req, res) => {
    const id = req.query.id;

    if (id) {
        models.User.findByPk(id).then((user) => {
            user? res.send(user) : res.send({ error: `user with id=${id} is not found` });
        });
    } else {
        res.send({ error: 'id is not set' });
    }
});

export default router;