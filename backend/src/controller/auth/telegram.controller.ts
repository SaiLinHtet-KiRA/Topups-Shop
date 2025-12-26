import { BOT_TOKEN } from "../../config/config";

export const getUser = (req, res) => {
  const { initData } = req.body;

  const params = new URLSearchParams(initData);
  console.log(params.toString());
  const user = JSON.parse(params.get("user")!);
  console.log(user);

  res.json({
    id: user.id,
    name: user.first_name,
    username: user.username,
    photo: user.photo_url,
  });
};
