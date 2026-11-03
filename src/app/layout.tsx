import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libertad Ecuador | Movimiento Ciudadano",
  description: "Movimiento ciudadano en defensa del individuo, la reducción del Estado y el libre desarrollo en Ecuador.",
  metadataBase: new URL("https://libertadecuador.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-[#050810] text-slate-900 dark:text-slate-100 antialiased selection:bg-[#e6b93e] selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
