import Google from "next-auth/providers/google";

export const google = () => {
  const { GOOGLE_ID, GOOGLE_SECRET } = process.env;

  if (!GOOGLE_ID || !GOOGLE_SECRET)
    return [];

  return [
    Google({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    })
  ];
};