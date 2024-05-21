"use client";

import React from "react";
import UserProfile from "./components/UserProfile";

export default function profile({ userName, userBio, userHobbies }) {
  return (
    <div>
      <h1>{!userName ? "Missing User Info" : userName}</h1>
      <p>{userBio ? userBio : "Missing User Info"}</p>
      {!userHobbies.length ? (
        <ul>
          {userHobbies.map((hobby) => (
            <li> {hobby}</li>
          ))}
        </ul>
      ) : (
        <p>No Hobbies Listed</p>
      )}
      <button onClick={() => alert("Hello World")}>Click Me</button>
      <UserProfile
        userName={userName}
        userBio={userBio}
        userHobbies={userHobbies}
      />
    </div>
  );
}
