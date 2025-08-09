import React from "react";
import { Sun } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Sun className="w-12 h-12 text-yellow-500" />
      <h1 className="text-4xl font-bold mt-4">Welcome to Tailwind React App</h1>
      <p className="text-gray-600 mt-2">This is a clean and deployable template.</p>
    </div>
  );
}

export default App;