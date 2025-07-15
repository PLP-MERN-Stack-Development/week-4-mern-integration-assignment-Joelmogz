import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PostDialog({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleCreate = () => {
        onSubmit({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Post</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Postk</DialogTitle>
                </DialogHeader>

                <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <Textarea placeholder="Content" className="mt-2" value={content} onChange={e => setContent(e.target.value)} />

                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleCreate}>Create</Button>
                    </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}