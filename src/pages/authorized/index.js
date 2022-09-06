import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchUserInfo } from "../../store/slices/discordSlice";

export default function Authorized() {
  const [params] = useSearchParams();
  const user_info = useSelector((state) => state.discord.user_info);
  const dispatch = useDispatch();

  useEffect(() => {
    const access_token = params.get(process.env.REACT_APP_DISCORD_ACCESS_TOKEN);
    if (!access_token) return;
    dispatch(fetchUserInfo(access_token));
  }, []);

  return (
    <div>
      <h1>Authorized</h1>
      <b>
        {user_info?.username}#{user_info?.discriminator}
      </b>
    </div>
  );
}
