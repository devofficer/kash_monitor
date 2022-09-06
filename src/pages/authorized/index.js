import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchUserInfo } from "../../store/slices/discordSlice";

export default function Authorized() {
  const [params] = useSearchParams();
  const status = useSelector((state) => state.discord.status);
  const authorized = useSelector((state) => state.discord.authorized);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = params.get(process.env.REACT_APP_DISCORD_ACCESS_TOKEN);
    if (!access_token) return;
    dispatch(fetchUserInfo(access_token));
  }, []);

  useEffect(() => {
    if (!authorized) return;
    navigate("/dashboard");
  }, [authorized]);

  return (
    <div>
      <h1>Authorized</h1>
      <b>{status}</b>
    </div>
  );
}
