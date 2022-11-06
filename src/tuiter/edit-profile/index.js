import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "../reducers/profile-reducer";


const EditProfile = () => {

  const profile = useSelector(state => state.profile);

  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);



  const dispatch = useDispatch();

  const saveClickHandler = () => {
      dispatch(editProfile({
          firstName: firstName,
          lastName: lastName,
          bio: bio,
          website: website,
          location: location,
          dateOfBirth: dateOfBirth,
      }));

  }


 return(
      <>

        <div className="row mt-1">
          <div className="col-auto">
            <Link to="../profile" className="text-black"><i className="bi bi-x-lg"/></Link>
          </div>
           <div className="col-9">
             <h5 className="fw-bold">Edit Profile</h5>
           </div>
           <div className="col-2">
            <Link to="../profile" className="btn btn-dark rounded-pill fw-bold mb-1" onClick={saveClickHandler}>Save</Link>
           </div>
          </div>

        <div className="mt-2">
          <img className="w-100" src={profile.bannerPicture}/>
        </div>

        <div>
            <img className="rounded-circle border border-2 border-white bg-white mx-3" style={{marginTop: "-3em"}} width={100} src={profile.profilePicture}/>
        </div>

        <div>

          <div className="form-floating mt-2">
              <input id="first-name" className="form-control" value={firstName} onChange={(e) =>
                   setFirstName(e.target.value)} />
              <label htmlFor="first-name">First Name</label>

          </div>


          <div className="form-floating mt-2">

              <input id="last-name" className="form-control" value={lastName} onChange={(e) =>
                  setLastName(e.target.value)} />
              <label htmlFor="last-name">Last Name</label>

          </div>

          <div className="form-floating mt-2">
              <textarea id="bio" className="form-control" value={bio} onChange={(e) =>
                  setBio(e.target.value)}>
              </textarea>
              <label htmlFor="bio">Bio</label>
          </div>

          <div className="form-floating mt-2">

              <input id="loc" className="form-control" value={location} onChange={(e) =>
                  setLocation(e.target.value)} />
              <label htmlFor="loc">Location</label>
          </div>

          <div className="form-floating mt-2">
              <input id="web" className="form-control" value={website} onChange={(e) =>
                  setWebsite(e.target.value)} />
              <label htmlFor="web">Website</label>

          </div>

          <div className="form-floating mt-2">
              <input id="DoB" className="form-control" value={dateOfBirth} onChange={(e) =>
                  setDateOfBirth(e.target.value)} />
              <label htmlFor="DoB">Date of Birth</label>
          </div>

        </div>

      </>
  );
};

export default EditProfile;