"use client";

import { useEffect, useState } from "react";

const DEFAULT_STORAGE_KEY = "clicks";

export default function App() {
  const [clicks, setClicks] = useState(JSON.parse(localStorage.getItem("clicks")));
  useEffect(()=>{
    if (localStorage.getItem(DEFAULT_STORAGE_KEY)!= null)
    {
      setClicks(loadSettings)
    };}
    ,[]
  )
  useEffect(
    () => {
      saveSettings(clicks);
    },
    [
      clicks
    ]
  );

  // TODO you may add additional helper functions if needed

  function loadSettings() {
    const clicksStr = localStorage.getItem(DEFAULT_STORAGE_KEY);
    const clicks = JSON.parse(clicksStr);
    return clicks;
  }

  function saveSettings(settings) {
    localStorage.setItem(DEFAULT_STORAGE_KEY, JSON.stringify(settings));
  }

  function handleClick() {
    setClicks((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Counter: {clicks}</button>
    </div>
  );
}