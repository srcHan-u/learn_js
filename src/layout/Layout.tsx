import { Container } from "./Container/Container";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
