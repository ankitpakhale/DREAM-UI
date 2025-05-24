import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { Navbar } from "@/components/navbar";

// Define the types for the theme structure
interface ThemeColors {
  light: {
    background: string;
    text: string;
  };
  dark: {
    background: string;
    text: string;
  };
}

// Define an array of themes with specific types
const themes: ThemeColors[] = [
  {
    light: {
      background: "#e3e6e8", // Light neutral grayish-blue
      text: "#3c3c3c", // Medium-dark gray
    },
    dark: {
      background: "#0f1524", // Dark slate gray
      text: "#e0e0e0", // Light silver-gray
    },
  },
  {
    light: {
      background: "#edf1f5", // Muted soft gray
      text: "#3c3c3c", // Slightly deeper gray
    },
    dark: {
      background: "#1d1d1d", // Deep gray background
      text: "#e0e0e0", // Soft light gray text
    },
  },
  {
    light: {
      background: "#faf8f2", // Soft cream background
      text: "#5f5b5a", // Warm gray text
    },
    dark: {
      background: "#2f2a26", // Deep brown-gray background
      text: "#e1d8b7", // Light sandy text
    },
  },
  {
    light: {
      background: "#fdf4f0", // Very soft peach background
      text: "#5f5d5d", // Neutral gray text
    },
    dark: {
      background: "#3a3a3a", // Dark gray background
      text: "#f4e3e0", // Warm pastel light text
    },
  },
  {
    light: {
      background: "#e7f6f2", // Light mint green background
      text: "#3c4e4d", // Cool grayish green text
    },
    dark: {
      background: "#283c3a", // Dark teal background
      text: "#a8d2ca", // Soft mint green text
    },
  },
  {
    light: {
      background: "#f0f0f0", // Light gray background
      text: "#3c3c3c", // Charcoal gray text
    },
    dark: {
      background: "#2a2a2a", // Very dark gray background
      text: "#d1d1d1", // Light gray text
    },
  },
  {
    light: {
      background: "#f2f9fb", // Very soft light blue background
      text: "#3a5a6f", // Deep cool blue text
    },
    dark: {
      background: "#1f2a33", // Dark navy blue background
      text: "#a9c2d6", // Light blue-gray text
    },
  },
  {
    light: {
      background: "#f8f1e4", // Creamy beige background
      text: "#6d5e4a", // Warm brown-gray text
    },
    dark: {
      background: "#4a3c2d", // Dark brown background
      text: "#d2c1a0", // Soft light beige text
    },
  },
  {
    light: {
      background: "#e3e6e8", // Light neutral grayish-blue
      text: "#3c3c3c", // Medium-dark gray
    },
    dark: {
      background: "#3a3a3a", // Dark gray background
      text: "#f4e3e0", // Warm pastel light text
    },
  },
];

export const metadata: Metadata = {
  title: "DREAM",
  description: "Dynamic Realization Engine for Achieving Milestones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentIndex: number = 8; // 0th index is PREFERRED
  const currentTheme: ThemeColors = themes[currentIndex];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={
          {
            "--bg-color": currentTheme.light.background,
            "--text-color": currentTheme.light.text,
            "--dark-bg-color": currentTheme.dark.background,
            "--dark-text-color": currentTheme.dark.text,
          } as React.CSSProperties
        }
        className="bg-[var(--bg-color)] text-[var(--text-color)] dark:bg-[var(--dark-bg-color)] dark:text-[var(--dark-text-color)]"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
