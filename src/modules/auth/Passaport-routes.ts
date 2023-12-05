import express from 'express';
import passport from './Passport-config';

const router = express.Router();

router.get('/google', passport.authenticate('google'));


router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
(req, res) => {
  res.redirect('/');
});

// router.post('/facebook', 
// passport.authenticate('facebook', { scope: ['email'] })
// );

// router.get('/facebook/callback',  passport.authenticate('facebook', { failureRedirect: '/' }),
// (req, res) => {
//   res.redirect('/');
// });

export default router;
