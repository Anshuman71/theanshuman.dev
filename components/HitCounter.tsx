import { useEffect, useState } from "react";
import HighLightedText from "./HighlightedText";

export default function HitCounter() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${window.location.href}/api/hit-counter`);
      const data = await response.json();
      setValue(data.value);
    })();
  }, []);
  return (
    <p className="text-center">
      Visited{" "}
      <HighLightedText className="font-bold">
        {value || "still counting..."}
      </HighLightedText>{" "}
      {typeof value === "number" ? "times" : ""}
    </p>
  );
}
