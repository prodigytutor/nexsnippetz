import React, { useState } from 'react'
import {motion} from 'framer-motion'
type Props = {}

const EditSnippet = (props: Props) => {
  const [editingSnippet, setEditingSnippet] = useState<any>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

    const updateSnippet = async () => {
        if (!editingSnippet) return;
        // const { error } = await supabase
        // .from("snippets")
        // .update({ title: newTitle, content: newContent })
        // .eq("id", editingSnippet.id);

        // if (error) alert("Error updating snippet");
        // else {
        // setEditingSnippet(null);
        // fetchCollections();
        }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-md w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Edit Snippet</h2>
                <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Title"
                className="p-2 mb-4 w-full rounded text-gray-900"
                />
                <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Content"
                rows={5}
                className="p-2 mb-4 w-full rounded text-gray-900"
                ></textarea>
                <div className="flex justify-end gap-4">
                <button
                    //onClick={() => setEditingSnippet(null)}
                    className="bg-red-500 px-3 py-1 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={updateSnippet}
                    className="bg-blue-500 px-3 py-1 rounded"
                >
                    Update
                </button>
                </div>
            </div>
            </div>
    )
}