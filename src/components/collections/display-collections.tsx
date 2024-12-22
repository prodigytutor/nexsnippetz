import React from 'react'
import {motion} from 'framer-motion'
import { Collection } from '@/types/collection'
type Props = {}

const DisplayCollections = (props: Props) => {
    const collections: Collection[] = []
  return (
    <div>DisplayCollections
        <div className="space-y-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-gray-800 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">{collection.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {collection.snippets.map((snippet) => (
                <motion.div
                  key={snippet.id}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-gray-700 rounded-md"
                >
                  <h3 className="text-lg font-semibold mb-2">{snippet.name}</h3>
                  <pre className="text-sm text-gray-300">{snippet.content}</pre>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}