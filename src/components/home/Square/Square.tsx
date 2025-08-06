type SquareProps = {
    value: React.ReactNode;
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Square = ({ value, onSquareClick }: SquareProps) => {
    return (
        <button 
            className="border border-solid w-36 h-36 text-6xl font-bold bg-blue-100 hover:bg-cyan-100"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}