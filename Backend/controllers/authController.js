import passport from 'passport';

// Login route with Google
export const googleLogin = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Callback route after Google login
export const googleCallback = passport.authenticate('google', {
  failureRedirect: '/login', // Redirect to login on failure
  successRedirect: '/', // Redirect to home on success
});

// Logout the user
export const logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send({ message: 'Logout failed!' });
    res.redirect('/');
  });
};
