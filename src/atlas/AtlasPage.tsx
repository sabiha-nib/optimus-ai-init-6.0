import { useEffect } from "react";
import "./atlas.css";
import { OptimusNav } from "@/components/OptimusNav";
import { ArticleEssay } from "./components/landing/article-essay";
import { FooterSection } from "./components/landing/footer-section";

export default function AtlasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="theme-atlas">
      <OptimusNav variant="light" />
      <main className="relative min-h-screen">
        <ArticleEssay />
        <FooterSection />
      </main>
    </div>
  );
}
