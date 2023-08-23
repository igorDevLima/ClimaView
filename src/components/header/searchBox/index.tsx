import { Search } from "lucide-react";

const SearchBox: React.FC = () => {
  return (
    <>
      <div className="relative flex items-center">
        <input
          type="search"
          className="w-full max-w-sm h-12 pl-12 pr-4 bg-white opacity-57 rounded-lg focus:border-none"
          placeholder="Pesquise uma cidade"
        />
        <Search className="absolute  w-6 h-6 text-gray-500 left-3" />
      </div>
    </>
  );
};

export default SearchBox;
