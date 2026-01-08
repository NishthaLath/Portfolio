import React from "react";
import { projectCards } from "../data";
import { ProjectContent } from "./ProjectContent";

// Ensure static export builds all project detail pages
export const dynamicParams = false;

export function generateStaticParams() {
  return projectCards.map((project) => ({ id: project.id }));
}

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  return <ProjectContent id={id} />;
}
