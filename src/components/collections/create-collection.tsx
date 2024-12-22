import React, { useState } from 'react'
import { motion } from 'framer-motion'
type Props = {}

const CreateCollection = (props: Props) => {
      const [newCollectionName, setNewCollectionName] = useState("");

     const createCollection = async () => {
    if (!newCollectionName) return;

    // const { error } = await supabase
    //   .from("collections")
    //   .insert([{ name: newCollectionName }]);

    // if (error) alert("Error creating collection");
    // else {
    //   setNewCollectionName("");
    //   fetchCollections();
    }
  return (
    <div><div className="mb-8 flex gap-4">
        <input
          type="text"
          placeholder="New Collection Name"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
          className="p-2 rounded-md text-gray-900 w-1/2"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 px-4 py-2 rounded-md"
          onClick={createCollection}
        >
          Create Collection
        </motion.button>
      </div></div>
  )
}