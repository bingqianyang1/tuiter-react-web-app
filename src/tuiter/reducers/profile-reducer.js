import {createSlice} from "@reduxjs/toolkit";

const profile = {
                  "firstName": "Bingqian", "lastName": "Yang", "handle": '@bingqiany',
                  "tuitNo": "6,114", "profilePicture": "/tuiter/avatar.png", 	"bannerPicture": "/tuiter/banner.jpeg",
                  "bio": "Welcome to my page :)",
                  "website": "youtube.com/webdevtv",
                  "location": "San Jose, CA",	"dateOfBirth": "January 1, 2023",	"dateJoined": "April 2009",
                  "followingCount": 340,	"followersCount": 223
                }


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        editProfile(state, action) {
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.location = action.payload.location;
          state.bio = action.payload.bio;
          state.website = action.payload.bio;
          state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});



export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;