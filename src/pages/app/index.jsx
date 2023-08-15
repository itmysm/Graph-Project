import ThemeSwitcher from "@/components/ThemeSwitcher";
import AlertProvider from "@/components/UI/Alert/AlertProvider";
import Box from "@/components/Pages/App/Box";
import Operation from "@/components/Pages/App/Operation";
import { FileProvider } from "@/components/Pages/App/FileContext";

export default function App() {
  return (
    <main className="w-full bg-secondary min-h-[100vh] relative">
      <FileProvider>
        <Box />
        <Operation />
      </FileProvider>

      <ThemeSwitcher />
      <AlertProvider />
    </main>
  );
}
