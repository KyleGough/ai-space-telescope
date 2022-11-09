import { Filter } from '../../images';

interface FilterButtonProps {
  value: Filter;
  selected: boolean;
  onClick: (value: Filter) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  value,
  selected,
  onClick,
}) => {
  const className = selected
    ? 'border-white'
    : 'border-transparent hover:text-stone-400 focus:text-stone-400';

  return (
    <button
      onClick={() => onClick(value)}
      className={`transition-colors duration-200 border-b font-bold ${className}`}
    >
      {value}
    </button>
  );
};
