import { useEffect, useState } from "react";

/**
 * Hook to get the scroll percentage from the page
 */
export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      let scrollHeight = document.body.scrollHeight;
      if (scrollHeight) {
        scrollHeight -= window.innerHeight;
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }
    window.addEventListener("scroll", updateScrollCompletion);
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
}
