import { auth } from "@/auth";

export const GET = async () => (
  new Response(
    JSON.stringify(
      auth.providers.map(
        ({ id, name }) => ({
          id,
          name
        })
      )
    )
  )
);