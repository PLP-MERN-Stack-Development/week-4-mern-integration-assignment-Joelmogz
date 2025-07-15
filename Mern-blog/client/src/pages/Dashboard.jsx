import { useEffect, useState } from "react";
import API from "@/services/api";
import PostForm from "@/components/PostForm";
import PostDialog from "@/components/PostDialog";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    const load = async () => {
        const res = await API.get("/post");
        setPosts(res.data);
    };

    useEffect(() => { load(); }, []);

    const createPost = async (payload) => {
        const res = await API.post("/post", payload);
        setPosts(prev => [res.data, ...prev]);
        Toaster({title:"Post Created ✔️" });
    };

    const togglePost = async (id) => {
        const task = posts.find(t => t._id === id);
        const res = await API.put(`/post/${id}`, { completed: !task.completed });
        setPosts(prev => prev.map(t => (t._id === id ? res.data : t)));
    };

    const deletePost = async (id) => {
        await API.delete(`/post/${id}`);
        setPosts(prev => prev.filter(t => t._id !== id));
        Toaster({title: "Post Deleted 🗑️"});
    };

    return (
        <div>
            <Navbar />
            <main className="max-w-5xl p-4 mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">My Tasks</h1>
                    <PostDialog onSubmit={createPost} />
                </div>

                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map(t => (
                        <PostForm key={t._id} task={t} onToggle={togglePost} onDelete={deletePost} />
                    ))}
                </section>
            </main>
        </div>
    );
};