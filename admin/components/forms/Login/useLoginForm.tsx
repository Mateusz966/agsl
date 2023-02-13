import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "../../../schemas/login";
import { useMutation } from "@tanstack/react-query";
import { LoginAPI } from "../../../api/login";
import { SignInRequest, SignInResponse } from "../../../api/login/types";
import { AxiosResponse } from "axios";

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
    mutationFn: (payload) => {
      return LoginAPI.signIn(payload);
    },
  });

  return { form, mutation };
};
