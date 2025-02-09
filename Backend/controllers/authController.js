import passport from 'passport';
export const googleLogin = passport.authenticate('google', {
  scope: ['profile', 'email'],
});
export const googleCallback = passport.authenticate('google', {
  failureRedirect: '/login', 
  successRedirect: '/', 
});

export const logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send({ message: 'Logout failed!' });
    res.redirect('/');
  });
};
