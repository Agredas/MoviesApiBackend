const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController = {
  async signup(req,res){
      try{
        req.body.password = await bcrypt.hash(req.body.password, 9)
        const user = await User.create(req.body);
        res.status(201).send(user);
      } catch(error){
        console.error(error);
        res.status(500).send({
          error, message: 'There was a problem trying to register the user.'
        })
      }
  },
  async login(req, res){
    try {
      const user = await User.findOne({
        where:{
          email: req.body.email
        }
      })
      if(!user) {
        return res.status(400).send({
          message: 'Wrong credentials.'
        })
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password)
      if (!isMatch){
        return res.status(400).send({
          message: 'Wrong credentials.'
        })
      }
      const token = jwt.sign({id: user.id }, 'gachamigavillenera', { expiresIn: '30d' })
      console.log(token)
      user.token = token;
      await user.save()
      res.send(user);
    }catch (error){
      console.error(error);
      res.status(500).send({message: 'There was a problem trying to login.'})
    }
  },
  async profile (req, res) {
    try {
      const profileUser = await User.findAll({
        where: {
          email: req.params.email 
        },
      attributes: {
        exclude: ['token', 'id']
      }})
        res.status(201).send(profileUser)
    }catch (error) {
      console.error (error)
      res.status (500).send ({error, message: 'There was a problem trying to get information.'})
    }
  },
  delete(req,res) {
    User.destroy({
      where: {
        email: req.body.email
      }
    })
    .then((email) => {
      if (!email) {
        return res.send({
          message: 'Email not found.'
        })
      }
      res.send({
        message: 'Account deteled.'
      })
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({
        message: 'There was a problem trying to delete the account.'
      })
    })
  }
}

module.exports = UserController;