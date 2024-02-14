import { Container } from "./container/Container";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export function Layout({ children }: { children: React.ReactNode }) {
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
