"use client";
import { useState, use } from "react";
import { notFound } from "next/navigation";
import { services } from "../data";
import "./page.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const category = services.find((s) => s.slug === slug);

  if (!category) {
    notFound();
  }

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="category-page">
      <h1>{category.title}</h1>
      <div className="layout">
        <ul className="service-list">
          {category.sections.map((section, index) => (
            <li
              key={section.title}
              onClick={() => setOpenIndex(index)}
              className={openIndex === index ? "active" : ""}
            >
              <h2>{section.title}</h2>
            </li>
          ))}
        </ul>
        <div className="content-panel">
          <p>{category.sections[openIndex].content}</p>
        </div>
      </div>
    </div>
  );
}