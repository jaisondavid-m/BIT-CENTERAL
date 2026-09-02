import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck,
  Fingerprint,
  FolderArchive,
  GraduationCap,
  Laptop,
  List,
  MapPin,
  Search,
  ShieldAlert,
  User,
  Utensils
} from "lucide-react";
import PublicNav from "./PublicNav.jsx";
import PublicFooter from "./PublicFooter.jsx";
import { getRelatedGuides } from "../content/guidesData.js";

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

export default function GuideLayout({ guide }) {
  if (!guide) return null;

  const IconComponent = iconMap[guide.iconName] || BookOpen;
  const relatedGuides = getRelatedGuides(guide);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <PublicNav />

      {/* Breadcrumb Header */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link to="/guides" className="hover:text-blue-600 dark:hover:text-blue-400">Guides</Link>
            <span>/</span>
            <span className="truncate text-slate-900 dark:text-slate-200" aria-current="page">{guide.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="border-b border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            <IconComponent className="h-4 w-4" aria-hidden="true" />
            <span>BIT Sathy Knowledge Base</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            {guide.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
            {guide.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600 sm:text-sm dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-slate-400" aria-hidden="true" />
              <span>{guide.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-400" aria-hidden="true" />
              <span>Updated {guide.updatedAt}</span>
            </div>
            <span>•</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {guide.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* Main Article Content */}
          <article className="space-y-8">
            {/* Guide Summary Card */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/40 dark:bg-blue-950/30">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Executive Summary</h2>
              <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{guide.summary}</p>
              
              {guide.highlights && guide.highlights.length > 0 && (
                <div className="mt-4 border-t border-blue-100 pt-4 dark:border-blue-900/40">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-900 dark:text-blue-300">Key Takeaways</h3>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {guide.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Featured Screenshot with Caption */}
            {guide.image && (
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <img
                  src={guide.image}
                  alt={guide.imageAlt}
                  className="h-auto w-full rounded-lg object-cover"
                  loading="eager"
                  width="800"
                  height="450"
                />
                {guide.imageCaption && (
                  <figcaption className="mt-3 text-center text-xs leading-5 text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Figure 1: </span>
                    {guide.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Guide Sections */}
            <div className="prose prose-slate max-w-none space-y-10 dark:prose-invert">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 whitespace-pre-line leading-8 text-slate-700 dark:text-slate-300">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Interactive Feature Banner */}
            {guide.targetFeatureLink && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-200">
                  Related BIT-CENTRAL Feature
                </h3>
                <p className="mt-2 text-sm leading-6 text-emerald-900 dark:text-emerald-300">
                  Ready to access the tool described in this guide? Sign in with your BIT Sathy Google account to access student features.
                </p>
                <Link
                  to={guide.targetFeatureLink}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                >
                  <span>{guide.targetFeatureLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}

            {/* Non-Official Disclaimer Alert */}
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-xs text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-amber-950 dark:text-amber-200">Institutional Disclaimer</h4>
                  <p className="mt-1 leading-5">
                    BIT-CENTRAL is an independent student information platform developed by Jaison David M for the Bannari Amman Institute of Technology student community. Official college circulars, Controller of Examinations notices, and department announcements remain the sole authoritative source for academic decisions.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar TOC & Navigation */}
          <aside className="space-y-8 lg:sticky lg:top-8 lg:h-fit">
            {/* Table of Contents */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <List className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>On This Page</span>
              </h3>
              <nav className="mt-4 space-y-2 text-sm">
                {guide.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-bold text-slate-900 dark:text-white">Related Guides</h3>
                <ul className="mt-4 space-y-3">
                  {relatedGuides.map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        to={`/guides/${rel.slug}`}
                        className="group block rounded-lg border border-slate-100 p-3 hover:border-blue-200 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                      >
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">
                          {rel.title}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                          {rel.subtitle}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back to Guides Directory */}
            <div>
              <Link
                to="/guides"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>All BIT Guides</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <PublicFooter />
    </main>
  );
}
