const SignupBuilder = require('./SignupBuilder');

// Signup.create('John Doe', 'john@email.com', 25, 'johndoe.jpg', 'John_D', ['JavaScript','Node.js'], ['Node.js'], true, false);

new SignupBuilder('Leo da Vinci', 'lisa@email.com', 150)
  .setPhoto('lisa.jpg')
  .setNick('daVinci')
  .setAdmin()
  .create();