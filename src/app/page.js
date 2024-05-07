"use client";

import React from "react";
export default function Home() {
  return (
    <>
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        <h1>Hello World!</h1>
      </header>
      <main>
        <p>This is the main content of our page.</p>
      </main>
    </>
  );
}

