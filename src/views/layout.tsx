import type { ReactNode } from "react";
import { Header } from "./components/layout/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      <div>{children}</div>
    </div>
  );
};
