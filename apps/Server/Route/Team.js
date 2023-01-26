import express from "express"
import { AddMember, getEachMemberTeamList, getEachTeamInfo, getMemberList } from "../Controller/TeamControllers.js"
import multer from "multer";
import { Team } from "../Database/Team/Team.js";
const Teamrouter=express.Router()

const storage = multer.diskStorage({
  destination:"./upload/",
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  // fileFilter: fileFilter
});

Teamrouter.post("/Addmember/:id",AddMember)
Teamrouter.get("/getMemberList/:id",getMemberList)
Teamrouter.get("/getEachMemberTeamList/:email",getEachMemberTeamList)
Teamrouter.get("/getEachTeamInfo/:id",getEachTeamInfo)




Teamrouter.post('/Team', upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]), async(req, res, next) => {
  const { Teamname, Email } = req.body;
  const item =
   new Team(
    {
    Teamname: Teamname,
    Email: Email,
    Profile: req.files['profileImage'][0]?.path,
    Cover:req.files['coverImage'][0]?.path
}
);
 await item
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Team created successfully',
        createdTeam: {
          teamname: result.Teamname,
          profileImage: result.Profile,
          coverImage: result.Cover,
          _id: result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});






export {Teamrouter}

