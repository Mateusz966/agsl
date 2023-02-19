import { FC } from "react";
import { FormWithTitleWrapperProps } from "./types";
import { Paper, Title } from "@mantine/core";

export const FormWithTitleWrapper: FC<FormWithTitleWrapperProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Paper shadow="md" p={30} mt={30} radius="md">
        {children}
      </Paper>
    </>
  );
};
