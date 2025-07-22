"use client"

import * as React from "react"
import { Palette } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
    { name: "Dark", value: "dark" },
    { name: "Light", value: "theme-light" },
    { name: "Rose", value: "theme-rose" },
    { name: "Mint", value: "theme-mint" },
    { name: "Gold", value: "theme-gold" },
];

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
             <DropdownMenuItem key={theme.value} onClick={() => setTheme(theme.value)}>
                {theme.name}
             </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
