import { useState } from "react";
import { api } from "../utils/api"; // we made this earlier

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api("/api/posts", "POST", { title, body });
      setMessage("✅ Post created successfully!");
      setTitle("");
      setBody("");
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <h2 className="mb-4 text-xl font-bold">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post content"
          className="w-full p-2 border rounded"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
