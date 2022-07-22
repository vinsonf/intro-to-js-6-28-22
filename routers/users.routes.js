import {router} from 'express';

router.get('all', (req, res) => {
    res.send('all users');
})

export default router;