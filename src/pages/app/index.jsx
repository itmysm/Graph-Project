import ThemeSwitcher from "@/components/ThemeSwitcher";
import AlertProvider from "@/components/UI/Alert/AlertProvider";
// import Box from "@/components/Pages/App/Box.jsx";
import Box from "@/components/Pages/App/Box";
import StateHandler from "@/components/Pages/App/StateHandler";

import { FileProvider } from "@/components/Pages/App/FileContext";
import Results from "@/components/Pages/App/Results/Index";
import Button from '@/components/button'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function App() {
  const savedTheme = useSelector((state) => state.settings);

  return (
    <main className={`w-full min-h-[100vh] relative backdrop-blur-md ${savedTheme.theme == 'dark' ? 'bg-gradient-to-l from-secondary via-secondary-/20 to-secondary/40' : 'bg-secondary'}`}>
      <Results />
      <FileProvider className="absolute">
        <Box />
        <StateHandler />
      </FileProvider>
      <ThemeSwitcher />
      <AlertProvider />
    </main>
  );
}
