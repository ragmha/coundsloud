export const fetchSCUser = async session => {
  const response = await fetch(
    `//api.soundcloud.com/me?oauth_token=${session.oauth_token}`
  );

  return await response.json();
};

export const fetchStream = async session => {
  const response = await fetch(
    `//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`
  );
  return await response.json();
};
