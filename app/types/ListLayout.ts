import React from "react";

export interface ListLayoutType {
  title: string;
  element: React.ReactNode;
  description: string;
  action: () => void;
};