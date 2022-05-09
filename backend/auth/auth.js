const passport = require('passport');
const express = require('express');
const session = require('express-sessions');
const knex = require('../src/db/connection');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, cb){
    knex("Users")
    .whereRaw(
      `email = ?, [${username}]`
    ).then((user)=>{
      if(!user) {return cs(null, false)}
      const isValid = validPassword(password, user.hash, user.salt);
      if(isValid){
        return done(null, user);
      } else{
        return done(null, false);
      }
    })
    .catch((err)=>{
      done(err);
    })
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
      .then((user) => {
          done(null, user);
      })
      .catch(err => done(err))
});
