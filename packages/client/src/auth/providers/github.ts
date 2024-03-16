import Github from "next-auth/providers/github";

export const github = () => {
  const { GITHUB_ID, GITHUB_SECRET } = process.env;

  if (!GITHUB_ID || !GITHUB_SECRET)
    return [];

  return [
    Github({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    })
  ];
};