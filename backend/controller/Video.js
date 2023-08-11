import Video from "../modal/Video.js";
import User from "../modal/User.js";



export const createVideo = async (req, res) => {
  try {
    const data = req.body;
    const userId = req.body.createdby;

    let video = new Video(data);
    let savedVideo = await video.save();
    
    if (!savedVideo) {
      return res.status(500).json("Internal Server Error");
    }

    // Fetch the user based on the userId
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json("User not found");
    }

    // Push the saved video's ID into the user's myVids array
    user.myVids.push(savedVideo._id);
    await user.save();

    console.log(savedVideo);
    console.log(user);

    return res.status(200).json("Video uploaded and user updated");
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json("Internal Server Error");
  }
};

export const getAllVideo = async(req,res) => {
    const data = await Video.find().populate('createdby').exec();
    if(!data) return res.status(404).json('Not Found');
    return res.status(200).json(data);

}

export const getVideoById = async (req, res) => {
    console.log('Request received with ID:', req.params.id);

    try {
        const video = await Video.findById(req.params.id).populate('createdby').exec();
        console.log('Video found:', video);

        if (!video) {
            console.log('Video not found');
            return res.status(404).json("Not found");
        }

        return res.status(200).json(video);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json("Internal Server Error");
    }
};

export const incrementViews = async (req, res) => {
    const videoId = req.params.id;

 
        const updatedVideo = await Video.findByIdAndUpdate(
            videoId,
            { $inc: { views: 1 } }, // Increment views by 1
            { new: true } // Return the updated document
        );

        if (!updatedVideo) {
            return res.status(404).json({ message: 'Video not found' });
        }

        res.status(200).json({ message: 'Views incremented successfully', updatedVideo });
   
};


export const revert = async (req, res) => {
    try {
      const videos = await Video.find();
  
      for (const video of videos) {
        // Assuming the createdBy field is an object containing user data
        const createdByUser = video.createdBy;
  
        if (createdByUser) {
          const user = await User.findOne({ _id: createdByUser._id });
  
          if (user) {
            video.createdby = user._id;
            await video.save();
          }
        }
      }
  
      return res.status(200).json({ message: 'Revert completed successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred during revert.' });
    }
  };
 

  export const update = async(req,res) => {
    try {
      // Fetch all videos from the database
      const videos = await Video.find();
  
      // Iterate through videos and update user's myVids field
      for (const video of videos) {
        const user = await User.findById(video.createdby);
        if (user) {
          user.myVids.push(video._id);
          await user.save();
        }
      }
  
      res.json({ message: 'User videos updated successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while updating user videos.' });
    }
  
  }
  
  
  


