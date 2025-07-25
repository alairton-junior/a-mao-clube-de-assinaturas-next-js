import { Header } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <main>{children}</main>
    </div>
  );
};
