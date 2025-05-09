import { ContactIcons } from "@/components/ui/contact-icons";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ContactIcons />
        <SmoothCursor />
      </body>
    </html>
  );
}
