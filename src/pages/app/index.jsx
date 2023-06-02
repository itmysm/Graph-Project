import ThemeSwitcher from "@/components/App/ThemeSwitcher";
import Upload from "@/components/App/Upload";

export default function App() {
  return (
    <main className="w-full bg-secondary min-h-[100vh]">
      <Upload />
      <ThemeSwitcher />
    </main>
  );
}
