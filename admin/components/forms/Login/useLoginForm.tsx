import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "../../../schemas/login";
import { useMutation } from "@tanstack/react-query";
import { SignInRequest, SignInResponse } from "../../../api/login/types";
import {signIn} from "next-auth/react";

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnBlur: true,

    validate: zodResolver(loginSchema),
  });

  const mutation = useMutation<SignInResponse, void, SignInRequest>({
    mutationFn: ({email, password}) => {
      return signIn('credentials', { email, password, redirect: false  }) as any
    },
  });

  return { form, mutation };
};
