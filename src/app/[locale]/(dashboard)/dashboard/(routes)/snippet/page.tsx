
import  db  from "@/lib/db";
import { motion } from "framer-motion";
import SnippetShowcase from  '@/components/snippet/snippet-showcase'
import { Button } from "@/components/ui/button";
import { A } from "million/dist/shared/million.485bbee4";
import AddSnippet from "@/components/snippet/add-snippet";
export default function Home() {
  // const [collections, setCollections] = useState<any[]>([]);  
  // // const [newCollectionName, setNewCollectionName] = useState("");
  // // const [email, setEmail] = useState("");
  // // const [snippets, setSnippets] = useState<any[]>([]);
  // // const [loading, setLoading] = useState(false);

  // // Fetch snippets from db
  // useEffect(() => {
  //   async function fetchSnippets() {
  //   //   const { data, error } = await db.from("snippets").select("*");
  //   //   if (error) console.error("Error fetching snippets", error);
  //   //   else setSnippets(data || []);
  //   }
  //   fetchSnippets();
  // }, []);
  // const fetchCollections = async () => {
  //   // const { data: collectionsData } = await supabase
  //   //   .from("collections")
  //   //   .select("id, name, snippets (id, title, content)");

  //   // setCollections(collectionsData || []);
  // };
  // const createCollection = async () => {
  //   if (!newCollectionName) return;

  //   // const { error } = await supabase
  //   //   .from("collections")
  //   //   .insert([{ name: newCollectionName }]);

  //   // if (error) alert("Error creating collection");
  //   // else {
  //   //   setNewCollectionName("");
  //   //   fetchCollections();
  //   // }
  // };
  // // Submit email to db
  // const handleJoinWaitlist = async () => {
  //   if (!email) return;
  //   // const { error } = await db.from("waitlist").insert([{ email }]);
  //   // if (error) alert("Error adding to waitlist");
  //   // else alert("You're on the waitlist!");
  // };

  // // AI snippet generation (placeholder)
  // const generateAISnippet = async () => {
  //   setLoading(true);
  //   const response = await fetch("/api/ai-generate", { method: "POST" });
  //   const { snippet } = await response.json();
  //   // await db.from("snippets").insert([{ title: "AI Snippet", content: snippet }]);
  //   setLoading(false);
  //   window.location.reload();
  // };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-5xl font-bold">Code Snippet Manager</h1>
        <p className="text-lg mt-4">AI-generated, optimized code snippets.</p>
<AddSnippet/>
        {/* <div className="flex mt-6 gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-md text-gray-800"
            //onChange={(e) => setEmail(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 px-6 py-3 rounded-md"
            //onClick={}
          >
            Join Waitlist
          </motion.button>
        </div> */}
      </section>

      Snippet Showcase 
      <SnippetShowcase />
    </div>
  );
}