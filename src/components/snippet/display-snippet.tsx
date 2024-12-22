import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {}

const DisplaySnippet = (props: Props) => {
    const [loadingAI, setLoadingAI] = useState(false);
    const aiManageSnippet = async (snippetId: number, action: string) => {
        setLoadingAI(true);
        // const { data: snippet } = await supabase
        //   .from("snippets")
        //   .select("*")
        //   .eq("id", snippetId)
        //   .single();

        const response = await fetch("/api/ai-manage", {
            method: "POST",
            body: JSON.stringify({ content: snippet.content, action }),
        });
        return (
            <motion.div
                key={snippet.id}
                whileHover={{ y: -5 }}
                className="p-4 bg-gray-700 rounded-md relative"
            >
                <h3 className="text-lg font-semibold">{snippet.title}</h3>
                <pre className="text-gray-300 whitespace-pre-wrap">
                    {snippet.content}
                </pre>
                {/* Edit and AI Buttons */}
                <div className="flex gap-3 mt-4">
                    <button
                        onClick={() => startEditing(snippet)}
                        className="bg-blue-500 px-3 py-1 rounded"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => aiManageSnippet(snippet.id, "optimize")}
                        className="bg-green-500 px-3 py-1 rounded"
                    >
                        Optimize
                    </button>
                    <button
                        onClick={() => aiManageSnippet(snippet.id, "debug")}
                        className="bg-yellow-500 px-3 py-1 rounded"
                    >
                        Debug
                    </button>
                    <button
                        onClick={() => aiManageSnippet(snippet.id, "comment")}
                        className="bg-yellow-500 px-3 py-1 rounded"
                    >
                        Generate Comments
                    </button>
                    <button
                        onClick={() => aiManageSnippet(snippet.id, "version")}
                        className="bg-blue-500 px-3 py-1 rounded"
                    >
                        Save Version
                    </button>
                </div>
                    {/* // {comments && (
                    //     <div className="bg-gray-700 p-3 rounded">
                    //         <h3 className="font-semibold mb-2">AI Comments:</h3>
                    //         <p>{comments}</p>
                    //     </div>
                    // )} */}
            </motion.div>
        )
    }}