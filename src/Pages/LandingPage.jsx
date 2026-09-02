import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck,
  Fingerprint,
  FolderArchive,
  GraduationCap,
  LogIn,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Utensils
} from "lucide-react";
import PublicNav from "../Component/PublicNav.jsx";
import PublicFooter from "../Component/PublicFooter.jsx";
import FAQSection from "../Component/FAQSection.jsx";
import { benefitList, contactMethods, developerProfile, featureList } from "../content/publicContent.js";
import { guidesList } from "../content/guidesData.js";

export default function LandingPage() {
  const featuredGuides = guidesList.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <PublicNav />

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              Student Portal for Bannari Amman Institute of Technology
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl dark:text-white">
              BIT Central
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              The public knowledge hub and student portal for Bannari Amman Institute of Technology (BIT Sathy). Explore comprehensive campus guides, academic evaluation details, question paper resources, daily hostel mess menus, exam hall tools, and student utilities in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Explore BIT Guides
              </Link>
              <Link
                to="/login"
                onClick={() => localStorage.setItem("visitedLogin", "true")}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Institutional Student Login
              </Link>
            </div>
          </div>

          {/* Quick Summary Card */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="text-xl font-bold text-slate-950 dark:text-white">
              Platform at a Glance
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              BIT Central was created by Jaison David M to solve everyday campus accessibility challenges for students at Bannari Amman Institute of Technology, Sathyamangalam.
            </p>

            <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span><strong>Public Knowledge Section</strong>: Open guides covering campus layout, academic regulations, exam preparation, and hostel mess schedules.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span><strong>Protected Student Tools</strong>: Requires <code className="font-mono">@bitsathy.ac.in</code> Google login for personal exam seat lookup, attendance biometrics, and course PDFs.</span>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Featured Public Guides Showcase */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="guides-heading">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">Knowledge Base</p>
            <h2 id="guides-heading" className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
              Featured Campus & Academic Guides
            </h2>
          </div>
          <Link to="/guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
            View All 10 BIT Guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">{guide.category}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{guide.readTime}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">
                  <Link to={`/guides/${guide.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {guide.title}
                  </Link>
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300 line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              <Link
                to={`/guides/${guide.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                <span>Read Full Guide</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* What is BIT Central Detailed Explanation */}
      <section className="border-t border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-950" aria-labelledby="about-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="about-heading" className="text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
              What is BIT Central and Who is it For?
            </h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              BIT Central is a React and Vite web application built specifically for students of Bannari Amman Institute of Technology (BIT Sathy), Sathyamangalam.
            </p>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              The portal addresses common student needs by bringing together academic PDFs, previous year question paper archives, solved answer keys, daily hostel mess menu schedules, attendance biometric tracking, exam hall room lookups, and campus navigation tools into a unified interface.
            </p>
          </div>

          {/* Public vs Protected Comparison */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>Public Educational Content (Open to All)</span>
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                Accessible without login to inform students, freshers, parents, and public visitors:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">• Complete BIT Campus & Academic Guides</li>
                <li className="flex items-center gap-2">• Exam Hall Finder Usage & Preparation Strategies</li>
                <li className="flex items-center gap-2">• Hostel Mess Dining Schedules & Timings</li>
                <li className="flex items-center gap-2">• First-Year Student PCDP Onboarding Guides</li>
                <li className="flex items-center gap-2">• Wi-Fi Setup & Campus Facilities Manuals</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span>Protected Student Portal (Requires Sign In)</span>
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                Requires authentication using an official BIT Sathy Google account (<code className="font-mono">@bitsathy.ac.in</code>):
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">• Personal Exam Hall Room Allocation Lookup</li>
                <li className="flex items-center gap-2">• Individual Attendance Punch-In Biometric Logs</li>
                <li className="flex items-center gap-2">• Personal Reward Points (RP) Tally & Marks Calculation</li>
                <li className="flex items-center gap-2">• Course Question Paper PDF & Answer Key Downloads</li>
                <li className="flex items-center gap-2">• Personal PCDP & Leave Management Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits Grid */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="benefits-heading">
        <h2 id="benefits-heading" className="text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
          Why BIT Sathy Students Use BIT Central
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {benefitList.map((benefit) => (
            <p key={benefit} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
              {benefit}
            </p>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection compact />

      {/* Contact Banner */}
      <section className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Have Questions or Feedback?
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Reach out to developer Jaison David M or explore our institutional disclaimer.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
              Contact Developer
            </Link>
            <Link to="/disclaimer" className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
