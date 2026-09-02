import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Building2,
  Code,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import PublicNav from "../Component/PublicNav.jsx";
import PublicFooter from "../Component/PublicFooter.jsx";
import { developerProfile } from "../content/publicContent.js";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <PublicNav />

      {/* Hero Header */}
      <section className="border-b border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            About BIT Central
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-950 sm:text-5xl dark:text-white">
            Empowering Bannari Amman Institute of Technology Students
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            BIT Central is an independent, student-crafted web platform created to simplify daily campus life at Bannari Amman Institute of Technology (BIT Sathy). It consolidates academic study resources, question banks, hostel mess menus, exam hall allocations, and campus tools into one fast, intuitive portal.
          </p>
        </div>
      </section>

      {/* Origin & Story Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              Why BIT Central Was Created
            </h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              During semester examinations and daily campus routines at BIT Sathy, students frequently encountered fragmented information — drive links scattered across groups, physical notice board crowds on exam mornings, unverified answer keys, and offline hostel mess menus.
            </p>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              Developed by <strong>Jaison David M</strong> (a CSE student at BIT Sathy), BIT Central was designed to eliminate these inefficiencies by offering a centralized, mobile-responsive hub tailored specifically to the needs of BIT Sathy students.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Core Mission Objectives</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
                <span>Provide instant, mobile-friendly access to verified academic resources and past question papers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
                <span>Eliminate exam morning notice board delays through automated Exam Hall Finder lookups.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
                <span>Promote transparency around Continuous Comprehensive Evaluation (CCE) and Reward Points (RP).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
                <span>Publish public educational guides covering campus facilities, hostel dining, and freshman orientation.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Public Knowledge Base vs Protected Utilities */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Architecture: Public Knowledge Base vs. Authenticated Tools
          </h2>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            BIT Central upholds strict standards of data privacy and institutional scope by separating public educational content from protected student data.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/40 dark:bg-blue-950/20">
              <h3 className="text-lg font-bold text-blue-950 dark:text-blue-200 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>1. Public Knowledge Section (/guides)</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                Open to students, parents, faculty, and public visitors without requiring login:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                <li>Complete BIT Campus & Academic Guides</li>
                <li>Exam Hall Finder & Question Bank Usage Guides</li>
                <li>Hostel Mess Menus & Daily Schedule Breakdown</li>
                <li>First-Year Student Onboarding & PCDP Guides</li>
                <li>Campus Wi-Fi & Facilities Setup Information</li>
              </ul>
              <Link to="/guides" className="mt-4 inline-flex text-xs font-semibold text-blue-600 hover:underline dark:text-blue-400">
                Explore Public Guides →
              </Link>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
              <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span>2. Authenticated Student Portal</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                Requires authentication using an official BIT Sathy Google account (<code className="text-xs font-mono">@bitsathy.ac.in</code>):
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300 list-disc pl-4">
                <li>Personal Semester Exam Hall Room & Seat Allocation</li>
                <li>Individual Biometric Fingerprint Logs & Attendance Tally</li>
                <li>Reward Points (RP) Breakdown & Internal Marks Calculation</li>
                <li>Semester Course PDF Downloads & Solved Papers</li>
                <li>PCDP & FindMyWay Personal Student Maps</li>
              </ul>
              <Link to="/login" className="mt-4 inline-flex text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400">
                Student Sign In →
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Profile Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            About the Developer
          </h2>
          <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
            <img
              src="/CardImgs/dev.png"
              alt="Jaison David M - Creator and Developer of BIT Central"
              className="h-28 w-28 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
              loading="lazy"
              width="112"
              height="112"
            />
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{developerProfile.name}</h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{developerProfile.role}</p>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                {developerProfile.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://github.com/jaisondavid-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jaison-david-m-a14072360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  LinkedIn
                </a>
                <a
                  href="https://herostack.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <Globe className="h-4 w-4 text-emerald-600" />
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
