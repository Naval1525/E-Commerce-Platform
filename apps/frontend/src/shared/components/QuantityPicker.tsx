type QuantityPickerProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
};

export function QuantityPicker({ value, onChange, min = 1, max = 10, disabled = false }: QuantityPickerProps) {
  return (
    <div className={`inline-flex items-center border border-[#dcdfe3] bg-white ${disabled ? "opacity-60" : ""}`}>
      <button
        className="grid h-10 w-10 place-items-center border-r border-[#dcdfe3] text-lg font-semibold text-[#212121] disabled:opacity-40"
        disabled={disabled || value <= min}
        onClick={() => onChange(value - 1)}
        type="button"
      >
        -
      </button>
      <span className="grid min-w-[54px] place-items-center text-[15px] font-medium text-[#212121]">{value}</span>
      <button
        className="grid h-10 w-10 place-items-center border-l border-[#dcdfe3] text-lg font-semibold text-[#212121] disabled:opacity-40"
        disabled={disabled || value >= max}
        onClick={() => onChange(value + 1)}
        type="button"
      >
        +
      </button>
    </div>
  );
}
