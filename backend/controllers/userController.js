const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const createToken = (_id) => {
  return  jwt.sign({_id:_id},process.env.JWT_SECRET,{expiresIn:'1d'});// do not put sensetive data here like password or email or anything that can be used to identify the user
// the expiresIn is an option 
}

const userController = {

// login a user
 login: async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)
    const username = user.username
    const id = user._id
    res.status(200).json({username,email,token,role:user.role,id})
  } catch (error) {
    res.status(400).json({error: error.message})
   
  }
},
//uwu



//signup user
 signup : async (req, res) => {
  const {username,email, password,role} = req.body;

  try{
      const user = await User.signup(username,email,password,role);

      // create token 
      const token = createToken(user._id);
      const id = user._id
      res.status(200).json({username,email,token,role:user.role,id})
    } catch (error) {
      res.status(400).json({error: error.message})
      // console.log(error.message)
    }

// res.json({message: 'signup user'});
},


getAllUsers : async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).json(users);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
},

updateUser :async (req, res) => {
  const { id } = req.params;
  const {username, email,password, role } = req.body;
  const token = createToken(id);
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);



  try {
      const user = await User.findByIdAndUpdate(id, {username, email,password:hash, role }, { new: true, runValidators: true });
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({username,email,token,role:user.role,id});
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
},

deleteUser :async (req, res) => {
  const { id } = req.params;

  try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
},

};
module.exports = userController;