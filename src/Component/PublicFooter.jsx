import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Mail, Heart, BookOpen, ShieldAlert } from "lucide-react";
import { developerProfile } from "../content/publicContent.js";

export default function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 font-bold text-slate-950 dark:text-white" aria-label="BIT Central home">
              <img src="/CardImgs/cropped_circle_image.png" alt="BIT Central logo" className="h-9 w-9 rounded-lg" width="36" height="36" />
              <span className="text-lg">BIT Central</span>
            </Link>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              The public knowledge portal and student web application for Bannari Amman Institute of Technology (BIT Sathy). Academic resources, question banks, answer keys, mess menus, and campus tools in one place.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Developed by {developerProfile.name} for the BIT Sathy student community.
            </p>
          </div>

          {/* Guides & Knowledge Base */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950 dark:text-white flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-blue-600" />
              BIT Guides
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/guides" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">Guides Directory</Link>
              </li>
              <li>
                <Link to="/guides/campus-facilities-guide" className="hover:text-blue-600 dark:hover:text-blue-400">Campus Facilities</Link>
              </li>
              <li>
                <Link to="/guides/academic-resources-guide" className="hover:text-blue-600 dark:hover:text-blue-400">Academic Resources</Link>
              </li>
              <li>
                <Link to="/guides/semester-examination-guide" className="hover:text-blue-600 dark:hover:text-blue-400">Exam Preparation</Link>
              </li>
              <li>
                <Link to="/guides/exam-hall-finder-guide" className="hover:text-blue-600 dark:hover:text-blue-400">Exam Hall Finder</Link>
              </li>
              <li>
                <Link to="/guides/mess-schedule-guide" className="hover:text-blue-600 dark:hover:text-blue-400">Mess Schedule</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950 dark:text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Portal</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-blue-600 dark:hover:text-blue-400">Portal Features</Link>
              </li>
              <li>
                <Link to="/developer" className="hover:text-blue-600 dark:hover:text-blue-400">Developer Profile</Link>
              </li>
              <li>
                <Link to="/wifi-details" className="hover:text-blue-600 dark:hover:text-blue-400">Wi-Fi Setup Guide</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
              </li>
              <li>
                <Link to="/support-dev" className="inline-flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400">
                  Support Dev <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950 dark:text-white">Trust & Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/disclaimer" className="font-semibold text-amber-700 hover:underline dark:text-amber-400">Institutional Disclaimer</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact & Feedback</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-600 dark:hover:text-blue-400">Student Sign In</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          <p>© {new Date().getFullYear()} BIT Central. All rights reserved. Built for Bannari Amman Institute of Technology community.</p>
        </div>
      </div>
    </footer>
  );
}
