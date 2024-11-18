import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("No user is currently logged in.");
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, userData);
      toast.success("Profile updated successfully!");
      setIsEdit(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-5">
      {userData && (
        <>
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <div className="flex flex-col items-center mb-5">
            <img
              src={userData.photo || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-36 rounded-full mb-4"
            />
            {isEdit ? (
              <input
                className="border-b border-gray-300 text-xl font-medium"
                type="text"
                name="fullName"
                value={userData.fullName}
                onChange={handleChange}
              />
            ) : (
              <h3 className="text-xl font-medium">{userData.fullName}</h3>
            )}
          </div>
          <hr className="my-4" />
          <div>
            <p className="text-gray-500 font-semibold">Contact Information</p>
            <div className="mt-3">
              <p className="font-medium">Email:</p>
              <p className="text-blue-500">{userData.email}</p>
              <p className="font-medium">Username:</p>
              {isEdit ? (
                <input
                  className="border-b border-gray-300"
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              ) : (
                <p className="text-blue-400">{userData.username}</p>
              )}
              <p className="font-medium">Gender:</p>
              {isEdit ? (
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="border border-gray-300"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <p className="text-blue-400">{userData.gender}</p>
              )}
            </div>
          </div>
          <button
            onClick={isEdit ? handleSave : handleEdit}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isEdit ? "Save" : "Edit"}
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
