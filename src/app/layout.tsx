import { ContactIcons } from "@/components/ui/contact-icons";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
