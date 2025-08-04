import { Square } from "@/components/home/Square";

export const Board = () => {
  return (
    <>
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div>
        <Square value='1' />
        <Square value='2' />
        <Square value='3' />
      </div>
      <div>
        <Square value='4' />
        <Square value='5' />
        <Square value='6' />
      </div>
      <div>
        <Square value='7' />
        <Square value='8' />
        <Square value='9' />
      </div>
    </main>
    
    </>
  );
}