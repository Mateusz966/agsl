import { FC } from "react";
import { PageWithPhotoProps } from "./types";
import { Container, Flex } from "@mantine/core";
import Image from "next/image";
import { useStyles } from "./styles";

export const PageWithPhoto: FC<PageWithPhotoProps> = ({
  photoURI,
  content,
}) => {
  const { classes } = useStyles();
  return (
    <Flex className={classes.pageWrapper}>
      <Flex className={classes.photoWrapper}>
        <Image
          fill
          src={photoURI}
          alt="login photo"
          style={{ objectFit: "cover" }}
        />
      </Flex>
      <Flex className={classes.contentWrapper}>
        <Container className={classes.content}>{content}</Container>
      </Flex>
    </Flex>
  );
};
