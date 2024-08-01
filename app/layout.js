import "@/app/ui/global.css";
import "@/app/ui/home.module.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
