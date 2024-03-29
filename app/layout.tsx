import Navigation from "../components/navigation/navigation";
import "../styles/reset.css";
import "../styles/global.css";

export const metadata = {
  title: {
    template: "%s | NYT BESTSELLER",
    default: "NYT BESTSELLER",
  },
  description: "The New York Times Best Seller Explorer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
