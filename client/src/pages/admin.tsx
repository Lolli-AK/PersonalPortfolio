import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { ContactMessage } from "@shared/schema";

export default function AdminPage() {
  const { data: messages, isLoading, error } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  if (isLoading) return <div className="p-8 text-center">Loading messages...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error loading messages</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">Contact Messages Admin</h1>
        
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Total Messages: {messages?.length || 0}
          </h2>
          
          {!messages || messages.length === 0 ? (
            <p className="text-slate-400 text-center py-8">No messages yet</p>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-700 rounded-lg p-4 border-l-4 border-cyan-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{message.name}</h3>
                    <span className="text-sm text-slate-400">
                      {new Date(message.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-cyan-400 mb-2">{message.email}</p>
                  <p className="text-slate-300 whitespace-pre-wrap">{message.message}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
          >
            ← Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}