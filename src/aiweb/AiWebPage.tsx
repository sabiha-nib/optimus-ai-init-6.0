import { useEffect } from "react";
import "./aiweb.css";
import AgenticPage from "./AgenticPage";

export default function AiWebPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-aiweb min-h-screen">
      <AgenticPage />
    </div>
  );
}
