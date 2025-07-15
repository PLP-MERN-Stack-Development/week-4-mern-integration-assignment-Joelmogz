import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import API from "@/services/api";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleLogin = async () => {
        if (!email || !password || !username) return alert("All fields required");
        setLoading(true);
        try {
            const res = await API.post("/auth/login", {username,email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-400">
            <Card className="w-full max-w-md shadow-xl animate-fade">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Log In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input type="Username" placeholder="Username" value={username} onChange={e => setUserName(e.target.value)} />
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={handleLogin} disabled={loading} className="w-full">
                        {loading ? "Logging In..." : "Log In"}
                    </Button>
                </CardFooter>

                <p className="mt-4 text-sm text-center text-zinc-600 dark:text-zinc-300">
                    Don't have an account?{" "}
                    <Link to ="/signup" className="text-blue-600 hover:underline">
                        Sign Up
                    </Link> 
                </p>
            </Card>
        </div>
    )
}