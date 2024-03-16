'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default () => {
  const { data } = useSession();

  if (!data?.user) {
    return (
      <div className="flex flex-col">
        Not auth
        <button onClick={() => signIn()}>SignIn</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p>User({data.user.email}) {data.user.name}</p>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
};
