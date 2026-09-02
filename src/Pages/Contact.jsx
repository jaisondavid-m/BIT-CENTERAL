import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ExternalLink,
  GraduationCap,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck
} from "lucide-react";
import PublicNav from "../Component/PublicNav.jsx";
import PublicFooter from "../Component/PublicFooter.jsx";
import { contactMethods, developerProfile } from "../content/publicContent.js";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <PublicNav />

      {/* Header */}
      <section className="border-b border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            Contact & Support
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-950 sm:text-5xl dark:text-white">
            Contact BIT Central
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Have questions, feedback, or suggestions for BIT Central? Want to contribute past question papers or report missing answer keys? We welcome feedback from Bannari Amman Institute of Technology (BIT Sathy) students and faculty.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">
            Direct Communication Channels
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {method.label}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>Connect via {method.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Developer Contact Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Developer Contact Details
          </h2>
          <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
            BIT Central is maintained by student developer <strong>Jaison David M</strong>. For technical suggestions, bug reports, or student project inquiries:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Developer Email</span>
              <p className="mt-1 font-bold text-slate-900 dark:text-white">{developerProfile.email}</p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone Support</span>
              <p className="mt-1 font-bold text-slate-900 dark:text-white">{developerProfile.phone}</p>
            </div>
          </div>
        </div>

        {/* Official Institution Notice */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
          <h3 className="text-lg font-bold text-blue-950 dark:text-blue-200 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span>Official Institution Contact Notice</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            BIT Central is an independent student platform. For official college admissions, fee receipts, hostel allotments, or Controller of Examinations circulars, please contact Bannari Amman Institute of Technology directly through the official website:
          </p>
          <a
            href="https://www.bitsathy.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Visit Official College Website (bitsathy.ac.in)
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
