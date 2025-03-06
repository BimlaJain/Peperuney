import "./globals.css";

export const metadata = {
  title: "Peperuney",
  description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse",
  openGraph: {
    title: "Peperuney",
    description: "The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse ",
    images: [
      {
        url: "/meta-tag.png",
        width: 800,
        height: 600,
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`ff-luckiest antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
