const router = require('express').Router();
const { User } = require('../../models');

//making request to start session
router.post('/', async (req, res) => {
  try {
    //userData is set equal to new created instance of User
    const userData = await User.create(req.body);
    //runs a function to save current session
    req.session.save(() => {
    //assigning an id to the user
      req.session.user_id = userData.id;
    //when save function is run, loggedIn is true
      req.session.logged_in = true;
    //this code runs if successful
      res.status(200).json(userData);
    });
  } catch (err) {
    //this code runs if there is an error
    res.status(400).json(err);
  }
});

//making request to log in
router.post('/login', async (req, res) => {
  try {
    //searches through database to find user where email property is the same as the one making the request
    const userData = await User.findOne({ where: { email: req.body.email } });

    //if username is not found, return error
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    //searches through database to find user where password property is the same as the one making the request
    const validPassword = await userData.checkPassword(req.body.password);

    //if password is not found, return error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    //if username and password both are successful, session is saved and id is given to userData const
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      //runs if successful
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//making a request to log out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    //end session using destroy function
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
//export router to be used elsewhere in the project
module.exports = router;

