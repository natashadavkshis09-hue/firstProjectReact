import { useState } from "react";


function ProductCount() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decrease}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 text-white text-xl font-bold"
      >
        −
      </button>

      <p className="min-w-[30px] text-center text-lg font-semibold">
        {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500 hover:bg-green-600 text-white text-xl font-bold"
      >
        +
      </button>
    </div>
  );
}

export default ProductCount