import "./globals.css";

export const metadata = {
  title: "liveflashback",
  description: "Develop by Anindo Roy Apu & Farabi Rakib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
