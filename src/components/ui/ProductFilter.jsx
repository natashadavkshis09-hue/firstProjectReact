import { useState } from "react";

function ProductFilter({ onFilter }) {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleApply = () => {
    const minVal = Number(min) || 0;
    const maxVal = Number(max) || Infinity;

    console.log("FILTER:", minVal, maxVal);

    if (minVal > maxVal) {
      alert("Минимум больше максимума");
      return;
    }

    onFilter(minVal, maxVal); // ✅ исправлено
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="number"
        placeholder="От"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="До"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <button onClick={handleApply}>Ок</button>
    </div>
  );
}

export default ProductFilter;