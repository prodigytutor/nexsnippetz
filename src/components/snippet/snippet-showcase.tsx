"use client"
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { ListSnippets } from '@/lib/actions/snippet';
import { Button } from '../ui/button';

type Props = {}

const SnippetShowcase: React.FC<Props> = (props: Props) => {
  const [snippets, setSnippets] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ListSnippets();
      setSnippets(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section className="py-16">
        <h3 className="text-4xl font-bold text-center mb-8">
          Manage Snippets as Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     
          {snippets.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="p-6 bg-gray-700 rounded-md shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project #{item}</h3>
              <p className="text-gray-300">
                Organize snippets with a dedicated structure for clean workflow.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SnippetShowcase;