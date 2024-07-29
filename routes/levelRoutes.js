
const mongoose = require('mongoose');
const Account = mongoose.model('accounts');

const Counter = require('./Counter');

const argon2i = require('argon2-ffi').argon2i;
const crypto = require('crypto');

module.exports = app =>  {


    //Hard level 
    const PlayerData = mongoose.model('hardlevel'); 
    app.post('/model/HardLevel', async (req, res) => {
    
      const { username, movesList } = req.body;
      console.log(req.body);
    
      const playerData = new PlayerData({
          username: username,
          movesList: movesList
      });
    
      try {
          await playerData.save();
          res.status(200).json({ success: true, message: "Player data saved successfully." });
      } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while saving player data.", error: error.message });
      }
    });
    
    //Easy level
    const Easy = mongoose.model('easylevel'); 
    app.post('/model/EasyLevel', async (req, res) => {

      const { username, movesList } = req.body;
      console.log(req.body); 
    
      const easyLevel = new Easy({
          username: username,
          movesList: movesList
      });
    
      try {
          await easyLevel.save();
          res.status(200).json({ success: true, message: "Player data saved successfully." });
      } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while saving player data.", error: error.message });
      }
    });
    

    const Medium = mongoose.model('mediumlevel');
    app.post('/model/MediumLevel', async (req, res) => {
     
      const { username, movesList } = req.body;
      console.log(req.body); 
    
      const easyLevel = new Medium({
          username: username,
          movesList: movesList
      });
    
      try {
          await easyLevel.save();
          res.status(200).json({ success: true, message: "Player data saved successfully." });
      } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while saving player data.", error: error.message });
      }
    });

    const HardWin = mongoose.model('hardwin');
    app.post('/model/HardWin', async (req, res) => {
     
      const { username, movesList } = req.body;
      console.log(req.body); 
    
      const hardWin = new HardWin({
          username: username,
          movesList: movesList
      });
    
      try {
          await hardWin.save();
          res.status(200).json({ success: true, message: "Player data saved successfully." });
      } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while saving player data.", error: error.message });
      }
    });

    const MediumWin = mongoose.model('mediumwin');
    app.post('/model/MediumWin', async (req, res) => {
     
      const { username, movesList } = req.body;
      console.log(req.body); 
    
      const mediumWin = new MediumWin({
          username: username,
          movesList: movesList
      });
    
      try {
          await mediumWin.save();
          res.status(200).json({ success: true, message: "Player data saved successfully." });
      } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while saving player data.", error: error.message });
      }
    });

    const EasyWin = mongoose.model('easywin');
    app.post('/model/EasyWin', async (req, res) => {

      const { username, movesList } = req.body;
      console.log(req.body);
    
      const easyWin = new EasyWin({
          username: username,
          movesList: movesList
      });
    
      try {
          await easyWin.save();
          res.status(200).json({ success: true, message: "Player data saved successfully." });
      } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while saving player data.", error: error.message });
      }
    });
    
    
}