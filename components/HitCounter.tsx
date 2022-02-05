import { useEffect, useState } from "react";
import HighLightedText from "./HighlightedText";

export default function HitCounter({ counter }: { counter: number }) {
  return (
    <p className="text-center py-4">
      Visited{" "}
      <HighLightedText className="font-bold">
        {counter || "still counting..."}
      </HighLightedText>{" "}
      {typeof counter === "number" ? "times" : ""}
    </p>
  );
}
