"use client";

import React, { ReactNode } from "react";
import { SnackbarProvider } from "notistack";

const ClientSnackbarProvider = ({
  children
} : {
    children: ReactNode
}) => {
  return (
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
  );
};

export default ClientSnackbarProvider;
