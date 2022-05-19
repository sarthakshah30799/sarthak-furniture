const endPoint = "https://api.instagram.com/oauth/authorize";
const appId = 1620453424986580;
const redirectUrl =
  "https://sarthak-furniture-test.netlify.app/admin/chair/instagram";
const scope = "user_profile,user_media";
const responseType = "code";

export const instagramAppUrl = `${endPoint}?client_id=${appId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=${responseType}`;
