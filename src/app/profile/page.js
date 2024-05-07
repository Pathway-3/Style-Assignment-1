"use client";

import React, { useEffect, useState } from "react";
import UserProfile from "../componets/userProfile";
import axios from "axios";
import "./profile.css";

export default function page() {
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userHobbies, setUserHobbies] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await axios.get("/user.json");
      setUserName(response.data.name);
      setUserBio(response.data.bio);
      setUserHobbies(response.data.hobbies);
    }

    getUser();
  });

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <UserProfile />
    </div>
  );
}
