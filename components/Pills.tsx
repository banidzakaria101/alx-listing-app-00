import { PillProps } from "@/interfaces"

const Pill: React.FC<PillProps> = ({ label, onClick, isActive}) => {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium ${
            isActive? "bg-indigo600 text-whte" : "bg-gray-200 text-gray-700 hover: bg-gray-300"
        }`}>
            {label}
        </button>
    )
}

export default Pill;