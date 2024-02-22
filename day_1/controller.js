const helloWorldController = (req, res) => {
  res.send('Hello, World!');
};

// Export the controller for use in other files
module.exports = {
  helloWorldController,
};
