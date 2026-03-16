'use client'

import { useTheme } from 'next-themes'
import { Toggle } from './ui/toggle'
import { BookmarkIcon } from 'lucide-react'

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <Toggle variant="outline" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
            dark mode
        </Toggle>
    )
}
