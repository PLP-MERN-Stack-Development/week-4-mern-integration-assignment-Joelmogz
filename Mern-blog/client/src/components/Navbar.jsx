import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <nav className="sticky top-0 z-50 border-b glass border-zinc-200 dark:border-zinc700">
            <Link to="/dashboard" className="text-lg font-bold">My Personal Journal</Link>

            <div className="flex items-center gap-2">
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <UserCircleIcon className="w-6 h-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}