import { FC, ReactElement } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Protected: FC<{ children: ReactElement }> = ({ children }) => {
  const { status, data } = useSession();
  const { replace } = useRouter();

  if (status === "unauthenticated") {
    replace("/auth/signin");
  }

  if (status === "authenticated") {
    return children;
  }

  return <div>loading...</div>;
};

export default Protected;