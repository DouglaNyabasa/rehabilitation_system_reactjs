import React, { useState } from "react";
import { assets } from "../../assets/assets_frontend/assets";
const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Phelani Mangezi",
    image: assets.profile_pic,
    email: "phelanimangezi@gmail.com",
    phone: "+263 71 694 4467",
    address: {
      line1: "Senga Nehosho",
      line2: "Harare kuwadzana Extension",
    },
    gender: "Male",
    dob: "2000-01-22",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="ml-20">
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          name=""
          id=""
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />
      <div className="">
        <p>CONTACT INFORMATION</p>
        <div className="">
          <p> Email id:</p>
          <p>{userData.email}</p>
          <p>Phone :</p>
          {isEdit ? (
            <input
              type="text"
              name=""
              id=""
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address :</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      line1: e.target.value,
                    },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      line2: e.target.value,
                    },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div className="">
        <p>BASIC INFORMATION</p>
        <div className="">
          <p>Gender : </p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday :</p>
          {isEdit ? (
        <input
          type="date"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, dob: e.target.value }))
          } value={userData.dob}
        />
      ) : (
        <p>{userData.dob}</p>
      )}
        </div>
      </div>
      <div className="">
        {
          isEdit
          ? <button onClick={()=> setIsEdit(false)}>Save information</button>
          : <button onClick={()=> setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default Profile;
