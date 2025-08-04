export const Square = ({ value }: { value: string }) => {
    return (
        <button className="border border-solid w-36 h-36 text-6xl font-bold bg-blue-100 hover:bg-cyan-100">{value}</button>
    );
}