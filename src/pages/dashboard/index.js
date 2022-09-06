import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user_info = useSelector((state) => state.discord.user_info);
  return (
    <div>
      <h1>Dashboard</h1>
      {user_info?.username}#{user_info?.discriminator}
    </div>
  );
}
