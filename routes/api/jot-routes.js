const router = require('express').Router();
const { Jot } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newJot = await Jot.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJot);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
