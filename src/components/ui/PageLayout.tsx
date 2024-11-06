import { Stack, Typography } from "@mui/material";
import React from "react";

type TPageLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

const PageLayout: React.FC<TPageLayoutProps> = ({ title, children }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      gap={8}
    >
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export { PageLayout };
