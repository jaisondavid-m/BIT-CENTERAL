import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getGuideBySlug } from "../content/guidesData.js";
import GuideLayout from "../Component/GuideLayout.jsx";

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <Navigate to="/404" replace />;
  }

  return <GuideLayout guide={guide} />;
}
