import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import AlertProvider from "@/components/UI/Alert/AlertProvider";
import Box from "@/components/Pages/App/Box";
import Operation from "@/components/Pages/App/Operation";
import { FileProvider } from "@/components/Pages/App/FileContext";

export default function App() {
  const fileStatusInStore = useSelector((state) => state.file.reference)

  return (
    <main className="w-full bg-secondary min-h-[100vh] relative">
      <FileProvider>
        <Box />
       { fileStatusInStore && <Operation />}
      </FileProvider>

      <ThemeSwitcher />
      <AlertProvider />
    </main>
  );
}
