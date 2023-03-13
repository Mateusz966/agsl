import { FC, ReactElement } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {appRoutes} from "../../../config/app.routes";

const Protected: FC<{ children: ReactElement }> = ({ children }) => {
  const { status } = useSession();
  const { replace } = useRouter();

  if (status === "unauthenticated") {
    replace(appRoutes.app.auth["sign-in"]);
  }

  if (status === "authenticated") {
    return children;
  }

  return <div>loading...</div>;
};

export default Protected;