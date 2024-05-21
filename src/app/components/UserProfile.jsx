"use client";

import React from "react";

export default function UserProfile({ userName, userBio, userHobbies }) {
  return (
    <div>
      <h1>{!userName ? "Missing User Info" : userName}</h1>
      <p>{userBio ? userBio : "Missing User Info"}</p>
      {!userHobbies.length ? (
        <ul>
          {userHobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p>No Hobbies Listed</p>
      )}
      <button onClick={() => alert("Hello World")}>Click Me</button>
    </div>
  );
}
