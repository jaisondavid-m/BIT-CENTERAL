import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Clock,
  FileCheck,
  Fingerprint,
  FolderArchive,
  GraduationCap,
  Laptop,
  MapPin,
  Search,
  Utensils
} from "lucide-react";
import PublicNav from "../Component/PublicNav.jsx";
import PublicFooter from "../Component/PublicFooter.jsx";
import { guidesCategoryList, guidesList } from "../content/guidesData.js";

const iconMap = {
  MapPin,
  BookOpen,
  FileCheck,
  Search,
  FolderArchive,
  Fingerprint,
  Utensils,
  GraduationCap,
  Building2,
  Laptop
};

export default function GuidesHub() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuides = guidesList.filter((guide) => {
    const matchesCategory =
      selectedCategory === "all" || guide.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <PublicNav />

      {/* Hero Header */}
      <section className="border-b border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            Public Knowledge Base & Resource Guides
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-950 sm:text-5xl dark:text-white">
            BIT Central Student Guides
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Explore original, highly detailed guides built specifically for Bannari Amman Institute of Technology (BIT Sathy) students. Learn about campus navigation, examination strategies, question banks, hostel mess menus, attendance policies, and platform utilities.
          </p>

          {/* Search & Category Filter */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-3 h-5 w-5 text-slate-400" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search BIT guides (e.g., Exam Hall, Mess, Wi-Fi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-blue-400"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {guidesCategoryList.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    selectedCategory === cat.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Available Guides ({filteredGuides.length})
          </h2>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-blue-600 hover:underline dark:text-blue-400"
            >
              Clear search
            </button>
          )}
        </div>

        {filteredGuides.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-950">
            <BookOpen className="mx-auto h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">No guides found</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Try adjusting your search query or switching categories.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide) => {
              const IconComp = iconMap[guide.iconName] || BookOpen;
              return (
                <article
                  key={guide.slug}
                  className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
                >
                  <div>
                    {/* Thumbnail Image */}
                    {guide.image && (
                      <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img
                          src={guide.image}
                          alt={guide.imageAlt}
                          className="h-full w-full object-cover transition duration-300 hover:scale-105"
                          loading="lazy"
                          width="400"
                          height="225"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400">
                        <IconComp className="h-4 w-4" aria-hidden="true" />
                        <span className="capitalize">{guide.category}</span>
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                        <Link to={`/guides/${guide.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                          {guide.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300 line-clamp-3">
                        {guide.summary}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 px-6 py-4 dark:border-slate-900 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {guide.readTime}
                    </span>

                    <Link
                      to={`/guides/${guide.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Guide Information Callout */}
      <section className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Looking for Protected Student Utilities?
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            While these educational guides are public and accessible to everyone, personal features like individual exam seating, biometric punch logs, and semester PDF downloads require a valid BIT Sathy Google account.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Sign In to BIT Central
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
