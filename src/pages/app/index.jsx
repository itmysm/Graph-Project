import ThemeSwitcher from "../../components/ThemeSwitcher";
import AlertProvider from "../../components/UI/Alert/AlertProvider";
import Box from "../../components/Pages/App/Box.jsx";
import StateHandler from "src/components/Pages/App/StateHandler";
import { FileProvider } from "../../components/Pages/App/FileContext";
import Results from "src/components/Pages/App/Results";

export default function App() {
  return (
    <main className="w-full bg-secondary min-h-[100vh] relative backdrop-blur-md">
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
