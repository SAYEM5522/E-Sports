// import { gfs } from "..";
import { gfs } from "../index.js";
import fs from "gridfs-stream"
import { Team } from "../Database/Team/Team.js";
const createTeam = async (req, res) => {
  try {
      const { Teamname, Email,Profile } = req.body;
      const file = req.file;
      // console.log(req.body.Profile)
      // let writeStream = gfs.createWriteStream({
      //     filename: file.originalname,
      //     mode: 'w',
      //     content_type: file.mimetype,
      // });
      // fs.createReadStream(file.path).pipe(writeStream);
      // writeStream.on('close', async (file) => {
          const item = new Team({
              Teamname: Teamname,
              Email: Email,
              Profile: Profile
          });
          await item.save();
          return res.status(200).json({data:item, message: 'Item created successfully' });
      // });
  } 
  catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
};
export {createTeam}