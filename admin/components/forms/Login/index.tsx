import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useLoginForm } from "./useLoginForm";
import { FormWithTitleWrapper } from "../../common/FormWithTitleWrapper";

export const LoginForm = () => {
  const { form, mutation } = useLoginForm();

  return (
    <FormWithTitleWrapper title="Login to your account">
      <form
        onSubmit={form.onSubmit((data) => {
          mutation.mutate(data);
        })}
      >
        <Stack>
          <TextInput
            label="Email"
            placeholder="hello@mantine.dev"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...form.getInputProps("password")}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </FormWithTitleWrapper>
  );
};
