import "./globals.css";
import { UserProvider } from "@/component/context/UserContext"; // ✅ Context Provider
import TemplateProvider from "@/component/liveflashback/contexts/template/TemplateProvider";
import ComposeProviders from "@/component/shared/ComposeProviders";

export const metadata = {
  title: "liveflashback",
  description: "Developed by Anindo Roy Apu & Farabi Rakib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ComposeProviders components={[TemplateProvider]}>
          <main>
            <UserProvider>{children}</UserProvider>
          </main>
        </ComposeProviders>
      </body>
    </html>
  );
}
