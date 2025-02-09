
export const home = (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello, ${req.user.displayName}`);
  } else {
    res.send('Please login with Google');
  }
};
