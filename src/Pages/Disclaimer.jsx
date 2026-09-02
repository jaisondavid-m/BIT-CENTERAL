import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import PublicNav from "../Component/PublicNav.jsx";
import PublicFooter from "../Component/PublicFooter.jsx";

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <PublicNav />

      {/* Header */}
      <section className="border-b border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Legal & Institutional Information
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl dark:text-white">
            BIT Central Disclaimer & Institutional Notice
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            Please read this disclaimer carefully before using the BIT Central website and public knowledge guides.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        {/* Independent Student Project Alert */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <h2 className="text-lg font-bold text-amber-950 dark:text-amber-200">
                Independent Student-Built Platform
              </h2>
              <p className="mt-2 text-sm leading-6 text-amber-900 dark:text-amber-300">
                BIT Central (<a href="https://bitcentral.bitsathy.in" className="underline font-semibold">bitcentral.bitsathy.in</a>) is an independent, non-official web application developed by <strong>Jaison David M</strong> for the student community of Bannari Amman Institute of Technology (BIT Sathy). It is NOT owned, operated, or officially endorsed by the administration of Bannari Amman Institute of Technology.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Non-Official Authority */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            1. Official Authority Notice
          </h2>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            All official academic policies, examination schedules, seating arrangements, attendance condonation decisions, mess menus, fee structures, and administrative regulations are dictated solely by the administration of Bannari Amman Institute of Technology and the Controller of Examinations (COE).
          </p>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            While BIT Central strives to present accurate, up-to-date, and helpful information to assist students, any discrepancy between information on BIT Central and official college circulars must be resolved in favor of official institutional announcements.
          </p>
        </div>

        {/* Section 2: Educational Knowledge Base & Content Accuracy */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            2. Public Knowledge Base & Content Accuracy
          </h2>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            The public knowledge guides available under <Link to="/guides" className="text-blue-600 hover:underline dark:text-blue-400">/guides</Link> are provided for general educational and informational purposes only. Content is curated based on student experiences, verified academic practices, and publicly available campus guidelines.
          </p>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            Past question paper solution keys (such as <em>22PH202 Physics for Engineers</em>) are prepared by senior students for revision purposes. Students should cross-reference solution steps with official department faculty instructions.
          </p>
        </div>

        {/* Section 3: Trademarks & Names */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            3. Trademarks & Brand Ownership
          </h2>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            "Bannari Amman Institute of Technology", "BIT Sathy", college logos, department names, and institutional trademarks belong exclusively to Bannari Amman Institute of Technology. Their mention on BIT Central is solely for institutional identification and descriptive reference in serving the BIT Sathy student community.
          </p>
        </div>

        {/* Section 4: Limitation of Liability */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            4. Limitation of Liability
          </h2>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            Under no circumstances shall the developer or maintainers of BIT Central be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this platform, including missing examination sessions due to third-party room shifts or relying on unofficial study notes.
          </p>
        </div>

        {/* Section 5: Official Link */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-blue-950 dark:text-blue-200">
              Official BIT Sathy Institutional Website
            </h3>
            <p className="mt-1 text-sm text-blue-900 dark:text-blue-300">
              For official academic circulars, fee payments, and admissions, visit the college website.
            </p>
          </div>
          <a
            href="https://www.bitsathy.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 shrink-0"
          >
            <span>Visit bitsathy.ac.in</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
