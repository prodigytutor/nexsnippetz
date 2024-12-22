import React from 'react'
import { motion } from "framer-motion";
type Props = {}

const WaitList = (props: Props) => {
  return (
    <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 flex-1 rounded-md text-gray-800 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Join Waitlist
          </motion.button>
        </motion.div>
  )
}