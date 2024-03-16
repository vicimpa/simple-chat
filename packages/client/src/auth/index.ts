import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

import { env } from "@/utils/env";
import { prisma } from "@/utils/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { discord } from "./providers/discord";
import { github } from "./providers/github";
import { google } from "./providers/google";

export const auth: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: env.NEXTAUTH_SECRET,
  providers: [
    ...google(),
    ...github(),
    ...discord(),
  ],
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout'
  // }
};