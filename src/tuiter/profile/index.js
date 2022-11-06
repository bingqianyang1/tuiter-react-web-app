import { useSelector } from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return (
        <div>
            <div className="row">
                <div className="col-auto mt-3">
                 <i className="bi bi-arrow-left"></i>
                </div>


                <div className="col">
                    <h4 className="fw-bold">
                    {profile.firstName} {profile.lastName}
                    </h4>
                    <span className="text-secondary">{profile.tuitNo} Tweets</span>
                </div>
            </div>



            <div>
              <img className="w-100" src={profile.bannerPicture}/>

              <img className="rounded-circle bg-white border border-white mx-3" style={{marginTop: "-3em"}} width={100} src={profile.profilePicture}/>

              <Link to="../edit-profile"
                      className="btn btn-large border border-secondary fw-bold rounded-pill float-end mt-3">
                  Edit profile
              </Link>
            </div>


            <div className="mt-3">
                <h5 className="fw-bold">
                    {profile.firstName} {profile.lastName}
                </h5>
                <span className="text-secondary">{profile.handle}</span>
                <p className="mt-2">
                    {profile.bio}
                </p>

                <div className="row text-secondary">
                  <div className="col-auto">
                    <i className="bi bi-map m-1"></i>
                    {profile.location}
                  </div>
                  <div className="col-auto">
                    <i className="bi bi-balloon m-1"></i>
                    Born {profile.dateOfBirth}
                  </div>
                  <div className="col-auto">
                    <i className="bi bi-calendar m-1"></i>
                    Joined {profile.dateJoined}
                  </div>
                </div>

                <div className="row mt-2 text-secondary">
                  <div className="col-auto">
                    <span className="fw-bold text-black">{profile.followingCount}</span> Following
                  </div>
                  <div className="col-auto">
                    <span className="fw-bold text-black">{profile.followersCount}</span> Followers
                  </div>
                </div>

            </div>


        </div>

    );
}
export default ProfileComponent;