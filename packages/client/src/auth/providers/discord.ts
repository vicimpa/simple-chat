import Discord from "next-auth/providers/discord";

export const discord = () => {
  const { DISCORD_ID, DISCORD_SECRET } = process.env;

  if (!DISCORD_ID || !DISCORD_SECRET)
    return [];

  return [
    Discord({
      clientId: DISCORD_ID,
      clientSecret: DISCORD_SECRET,
      allowDangerousEmailAccountLinking: true,
    })
  ];
};