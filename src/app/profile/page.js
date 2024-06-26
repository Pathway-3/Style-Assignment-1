"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import Link from "next/link";
import UserProfile from "../components/UserProfile";

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
