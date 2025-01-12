"use client";

import { useTheme } from "next-themes";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering mismatched content
  }

  const isLight = theme === "light";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
