import { Board } from "@/components/home/Board";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Board />
      </div>
    </main>
  );
}
