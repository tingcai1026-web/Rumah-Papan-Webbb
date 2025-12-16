import { Search, Filter } from 'lucide-react';

const tags = ["關於班厝", "肉骨茶", "技能換宿", "生活體驗", "故事交換", "住宿", "木薯黑"];

interface SearchBarProps {
    currentTag: string;
    onSelectTag: (tag: string) => void;
}

export const SearchBar = ({ currentTag, onSelectTag }: SearchBarProps) => {
    return (
        <div className="w-full max-w-4xl mx-auto mb-12 space-y-6">
            <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="技能換宿"
                    className="w-full pl-14 pr-12 py-3 rounded-full bg-gray-200/50 border-none focus:ring-2 focus:ring-primary/50 outline-none text-text placeholder-gray-400 transition-all font-medium"
                />
                <Filter className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-primary transition-colors" size={20} />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {tags.map((tag, i) => (
                    <button
                        key={i}
                        onClick={() => onSelectTag(tag)}
                        className={`px-6 py-2 rounded-full border border-text text-sm font-bold transition-all ${currentTag === tag
                                ? 'bg-text text-white'
                                : 'bg-transparent text-text hover:bg-text hover:text-white'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};
