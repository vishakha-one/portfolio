import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer" // import your Footer component

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Vishakha Changedia | Engineer & Data Analyst",
  description:
    "Engineer and Data Analyst with experience in data analytics, automation, business intelligence, and leadership. Passionate about solving real-world problems through data-driven insights, systems thinking, and impactful innovation.",
  icons: {
    icon: "logo.png",
  },
  generator: "v0.app",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Persistent Header */}
          <Header />

          {/* Page content */}
          <main>{children}</main>

          {/* Persistent Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
