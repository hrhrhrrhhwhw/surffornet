import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="flex items-start justify-between p-6">
            <div className="flex flex-col">
                <div className="text-3xl font-extrabold text-foreground">Surf for net</div>
                <span className="text-sm text-muted-foreground">web-developer</span>
                <div className="w-7 mt-2"><ThemeToggle /></div>
                <div className="font-mono text-xs text-muted-foreground mt-2">
                    (Press <kbd>d</kbd> to toggle dark mode)
                </div>
            </div>
            
            <Button className="mt-2">Обсудить проект</Button>
        </header>
    )
}

