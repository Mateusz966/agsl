import {
  Button,
  Container,
  Flex,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Image from "next/image";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnBlur: true,

    validate: {
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val: string) =>
        val.length <= 5
          ? "Password should include at least 5 characters"
          : null,
    },
  });

  return (
    <Flex h="100vh">
      <Flex pos="relative" w="50%">
        <Image
          fill
          src="/login-photo.avif"
          alt="login photo"
        />
      </Flex>
      <Flex w="50%">
        <Container m="auto" size="xs">
          <Title>Login to your account</Title>
          <Paper shadow="md" p={30} mt={30} radius="md">
            <form onSubmit={form.onSubmit(() => {})}>
              <Stack>
                <TextInput
                  required
                  label="Email"
                  placeholder="hello@mantine.dev"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={
                    form.errors.password &&
                    "Password should include at least 6 characters"
                  }
                />
                <Button type="submit">Login</Button>
              </Stack>
            </form>
          </Paper>
        </Container>
      </Flex>
    </Flex>
  );
}
