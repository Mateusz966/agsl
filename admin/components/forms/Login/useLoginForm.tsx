import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "../../../schemas/login";
import { useMutation } from "@tanstack/react-query";
import { SignInRequest } from "../../../api/login/types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { appRoutes } from "../../../config/app.routes";
import { enqueueSnackbar } from "notistack";

export const useLoginForm = () => {
  const { replace } = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnBlur: true,

    validate: zodResolver(loginSchema),
  });

  const mutation = useMutation<number, void, SignInRequest>({
    mutationFn: async ({ email, password }) => {
      const { status } = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      return status;
    },
    onSuccess: (status) => {
      if (status === 200) {
        replace(appRoutes.app.dashboard.root);
      } else {
        enqueueSnackbar("Error during login", {
          variant: "error",
        });
      }
    },
  });

  return { form, mutation };
};
