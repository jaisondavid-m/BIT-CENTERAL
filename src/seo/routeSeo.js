export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://bitcentral.bitsathy.in").replace(/\/$/, "");

export const SEO_DEFAULTS = {
  siteName: "BIT Central",
  title: "BIT Central Student Portal",
  description:
    "BIT Central is a student portal for Bannari Amman Institute of Technology that helps BIT Sathy students access academic resources, question banks, answer keys, mess menu updates, and campus services.",
  keywords: [
    "BIT Central",
    "Bannari Amman Institute of Technology",
    "BIT Sathy",
    "BIT Sathy student portal",
    "student portal",
    "academic resources",
    "question banks",
    "answer keys",
    "semester resources",
    "reward points",
    "exam hall",
    "mess menu",
  ],
  image: "/CardImgs/cropped_circle_image.png",
  type: "website",
};

export const ROUTE_SEO = {
  "/": {
    title: "BIT Central - BIT Sathy Student Portal",
    description:
      "BIT Central is a public guide and student portal for BIT Sathy students, covering academic resources, question banks, answer keys, mess menu updates, student services, and campus tools.",
    keywords: ["BIT Central", "BIT Sathy student portal", "academic resources", "question banks", "answer keys", "mess menu"],
    pageType: "CollectionPage",
    faq: true,
  },

  "/login": {
    title: "Login to BIT Central",
    description: "Sign in with a BIT Sathy institutional Google account to access protected BIT Central student tools.",
    keywords: ["BIT Central login", "BIT Sathy login", "student sign in"],
    noIndex: true,
  },

  "/student-report": {
    title: "Student Detailed Report - BIT Central",
    description: "Detailed student profile report, attendance, personalized skills, assessment logs, points, and academic details.",
    keywords: ["student report", "BIT Central student profile", "attendance report", "PS skills"],
  },

  "/ps-assessment-history": {
    title: "PS Assessment History - BIT Central",
    description: "View PS assessment details including cleared/not cleared results, timing, venue, and course names for student ID 2025UCS1023.",
    keywords: ["PS Assessment History", "PS skills", "assessment logs", "BIT Central"],
    noIndex: true,
  },

  "/ps-assessment": {
    title: "PS Assessment History - BIT Central",
    description: "View PS assessment details including cleared/not cleared results, timing, venue, and course names for student ID 2025UCS1023.",
    keywords: ["PS Assessment History", "PS skills", "assessment logs", "BIT Central"],
    noIndex: true,
  },

  "/home": {
    title: "Student Home",
    description: "Protected BIT Central home page for academic tools, exam support, reward points, and student services.",
    keywords: ["BIT Central home", "student dashboard", "campus tools"],
    noIndex: true,
  },

  "/dashboard": {
    title: "Student Profile Dashboard",
    description: "Protected BIT Central dashboard for student profile, department details, and account activity.",
    keywords: ["student profile", "BIT dashboard", "account details"],
    noIndex: true,
  },

  "/profile": {
    title: "My Profile",
    description: "Protected BIT Central profile page for student account information.",
    keywords: ["my profile", "student profile", "BIT Central"],
    noIndex: true,
  },

  "/profile/v2": {
    title: "My Profile V2",
    description: "Protected BIT Central profile v2 page for student account information.",
    keywords: ["my profile", "student profile", "BIT Central"],
    noIndex: true,
  },

  "/about": {
    title: "About BIT Central",
    description:
      "Learn what BIT Central is, who can use it, who built it, and how it supports BIT Sathy students with academic resources and campus services.",
    keywords: ["about BIT Central", "Bannari Amman Institute of Technology", "BIT Sathy", "student resources"],
    pageType: "AboutPage",
  },

  "/developer": {
    title: "BIT Central Developer - Jaison David M",
    description:
      "BIT Central was developed by Jaison David M for the BIT Sathy student community at Bannari Amman Institute of Technology.",
    keywords: ["BIT Central developer", "Jaison David M", "BIT Sathy", "Bannari Amman Institute of Technology"],
    pageType: "ProfilePage",
  },

  "/features": {
    title: "BIT Central Features",
    description:
      "Explore BIT Central features for BIT Sathy students, including question banks, answer keys, semester resources, mess menu updates, reward points, and campus tools.",
    keywords: ["BIT Central features", "question banks", "answer keys", "mess menu", "campus resources"],
    pageType: "CollectionPage",
  },

  "/faq": {
    title: "BIT Central FAQ",
    description:
      "Answers to common questions about BIT Central, the BIT Sathy student portal for academic resources, question banks, answer keys, mess menu updates, and student services.",
    keywords: ["BIT Central FAQ", "BIT Sathy student portal", "academic resources FAQ"],
    pageType: "FAQPage",
    faq: true,
  },

  "/contact": {
    title: "Contact BIT Central",
    description:
      "Contact and feedback information for BIT Central, including suggestions for academic resources, question banks, answer keys, and student service updates.",
    keywords: ["contact BIT Central", "BIT Sathy feedback", "student portal contact"],
    pageType: "ContactPage",
  },

  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "BIT Central privacy policy for students and visitors using public pages and protected student portal tools.",
    keywords: ["BIT Central privacy policy", "student portal privacy", "BIT Sathy"],
    pageType: "WebPage",
  },

  "/terms": {
    title: "Terms of Service",
    description:
      "BIT Central terms of service for public information pages and protected BIT Sathy student portal tools.",
    keywords: ["BIT Central terms", "student portal terms", "BIT Sathy"],
    pageType: "WebPage",
  },

  "/rpsite": {
    title: "Reward Points",
    description: "Protected BIT Central reward points access page for signed-in BIT Sathy students.",
    keywords: ["BIT Sathy reward points", "BIT Central"],
    noIndex: true,
  },

  "/pcdp": {
    title: "PCDP Setup",
    description: "Protected BIT Central PCDP setup support page for signed-in BIT Sathy students.",
    keywords: ["PCDP", "BIT Central"],
    noIndex: true,
  },

  "/findmyway": {
    title: "FindMyWay",
    description: "Protected BIT Central FindMyWay installation support page for signed-in BIT Sathy students.",
    keywords: ["FindMyWay", "BIT Sathy campus resources"],
    noIndex: true,
  },

  "/apsite": {
    title: "PS Rewards Breakdown",
    description: "Look up and review PS activity reward breakdowns by user ID.",
    keywords: ["PS rewards", "activity points", "reward breakdown"],
    noIndex: true,
  },

  "/exam-hall": {
    title: "Exam Hall Utility",
    description: "Protected BIT Central exam hall utility for signed-in BIT Sathy students.",
    keywords: ["BIT Sathy exam hall", "exam hall utility"],
    noIndex: true,
  },

  "/exam-hall-manual": {
    title: "Exam Hall Manual Search",
    description: "Protected BIT Central manual exam hall search for signed-in BIT Sathy students.",
    keywords: ["BIT Sathy exam hall search"],
    noIndex: true,
  },

  "/leavedetails": {
    title: "Leave Schedule",
    description: "Protected BIT Central leave schedule page for signed-in BIT Sathy students.",
    keywords: ["BIT Sathy leave schedule"],
    noIndex: true,
  },

  "/semester": {
    title: "Semester Resources",
    description: "Protected BIT Central semester resources page with academic materials for signed-in BIT Sathy students.",
    keywords: ["semester resources", "question banks", "answer keys", "BIT Sathy"],
    noIndex: true,
  },

  "/mess": {
    title: "Mess Menu",
    description: "Protected BIT Central mess menu page for signed-in BIT Sathy students.",
    keywords: ["BIT Sathy mess menu", "hostel mess menu"],
    noIndex: true,
  },

  "/user-directory": {
    title: "User Directory",
    description: "Search and explore user directory records across User ID, ID, Name, and Email.",
    keywords: ["user directory", "tracker users", "student search", "user search"],
    noIndex: true,
  },

  "/ak_22ph202": {
    title: "22PH202 Answer Key",
    description: "Protected BIT Central answer key resource for signed-in BIT Sathy students.",
    keywords: ["22PH202 answer key", "BIT Sathy answer key"],
    noIndex: true,
  },

  "/tamil_ak": {
    title: "22HS006 Answer Key",
    description: "Protected BIT Central Tamil answer key resource for signed-in BIT Sathy students.",
    keywords: ["22HS006 answer key", "BIT Sathy Tamil answer key"],
    noIndex: true,
  },

  "/support-dev": {
    title: "Support BIT Central Developer",
    description:
      "Support Jaison David M in maintaining server hosting, database costs, and developing free student tools for the BIT Sathy community.",
    keywords: ["support developer", "BIT Central donation", "Razorpay support", "BIT Sathy student portal"],
    pageType: "WebPage",
  },

  "/wifi-details": {
    title: "BIT Sathy Wi-Fi Passwords & Setup Guide",
    description: "Default Wi-Fi passwords for BIT Sathy campus networks, Sapphire Hostel, Ruby Hostel, Emerald Hostel, and step-by-step password change instructions.",
    keywords: ["BIT Sathy Wi-Fi", "Sapphire Hostel Wi-Fi", "Ruby Hostel Wi-Fi", "Emerald Hostel Wi-Fi", "Wi-Fi password change", "BIT Sathy hostel Wi-Fi"],
    pageType: "WebPage",
  },

  "/payment-successful": {
    title: "Thank You for Supporting BIT Central!",
    description: "Verified contribution acknowledgment page with inspirational quotes for BIT Central supporters.",
    keywords: ["payment successful", "BIT Central patron", "donator honor"],
    noIndex: true,
  },

  "/docs/about": {
    title: "About BIT CENTRAL Documentation",
    description: "Learn about BIT CENTRAL features, mission, and system design.",
    keywords: ["BIT CENTRAL docs"],
  },

  "*": {
    title: "404 - Page Not Found",
    description: "The page you requested could not be found on BIT Central.",
    keywords: ["404", "page not found", "BIT Central"],
    noIndex: true,
  },
  "/ps-points": {
    title: "PS Point Details - BIT Central",
    description: "Track your Activity Points, Opportunity Points, and Responsive Score on BIT Central.",
    keywords: ["PS Points", "Activity Points", "Opportunity Points", "Responsive Score"],
    pageType: "CollectionPage",
  },
  "/disclaimer": {
    title: "Institutional Disclaimer - BIT Central",
    description: "Legal and institutional disclaimer for BIT Central, an independent student information platform built for Bannari Amman Institute of Technology (BIT Sathy).",
    keywords: ["BIT Central disclaimer", "BIT Sathy non-official notice", "student portal legal"],
    pageType: "WebPage",
  },
  "/guides": {
    title: "BIT Central Student Guides & Knowledge Base",
    description: "Explore comprehensive campus guides, academic resources, exam hall instructions, mess menu schedules, and attendance policies for BIT Sathy students.",
    keywords: ["BIT Central guides", "BIT Sathy campus guide", "question bank guide", "exam hall finder guide"],
    pageType: "CollectionPage",
  },
  "/guides/academic-resources-guide": {
    title: "BIT Academic Resources Guide - BIT Central",
    description: "Detailed guide to CBCS curriculum, Continuous Comprehensive Evaluation (CCE), question paper archives, and Reward Points internal mark conversion.",
    keywords: ["BIT academic resources", "CCE evaluation", "Reward Points conversion", "BIT question banks"],
    pageType: "Article",
  },
  "/guides/semester-examination-guide": {
    title: "BIT Semester Examination Guide - BIT Central",
    description: "Preparation guide for Periodical Tests and End Semester Exams at BIT Sathy, hall ticket guidelines, and post-exam solution verification.",
    keywords: ["BIT semester exams", "COE exam timetable", "exam hall seating", "BIT answer keys"],
    pageType: "Article",
  },
  "/guides/exam-hall-finder-guide": {
    title: "BIT Exam Hall Finder Guide - BIT Central",
    description: "Step-by-step instructions on using the BIT-CENTRAL Exam Hall Finder tool to look up examination blocks, room numbers, and seating layouts.",
    keywords: ["BIT Exam Hall Finder", "exam venue lookup", "SLB hall finder", "BIT exam room"],
    pageType: "Article",
  },
  "/guides/question-bank-guide": {
    title: "BIT Question Bank & Previous Papers Guide - BIT Central",
    description: "Strategies for utilizing past semester question papers, model papers, and Bloom's Taxonomy paper patterns at Bannari Amman Institute of Technology.",
    keywords: ["BIT question bank", "previous year papers", "22PH202 physics paper", "BIT exam preparation"],
    pageType: "Article",
  },
  "/guides/attendance-guide": {
    title: "BIT Attendance & Biometric Guide - BIT Central",
    description: "Practical guide to BIT Sathy's 75% attendance policy, daily fingerprint biometric scanning, session logs, and leave approval processing.",
    keywords: ["BIT attendance policy", "75 percent attendance rule", "biometric punch logs", "BIT leave processing"],
    pageType: "Article",
  },
  "/guides/mess-schedule-guide": {
    title: "BIT Mess Schedule Guide - BIT Central",
    description: "Overview of hostel dining facilities at BIT Sathy, daily meal timings for breakfast, lunch, snacks, and dinner, and live mess menu updates.",
    keywords: ["BIT mess schedule", "Sapphire hostel mess", "Ruby hostel mess menu", "BIT dining menu"],
    pageType: "Article",
  },
  "/guides/first-year-guide": {
    title: "BIT First-Year Student Guide - BIT Central",
    description: "Onboarding roadmap for first-year B.E. / B.Tech engineering freshers at BIT Sathy: Google accounts, PCDP program, hostel setup, and Wi-Fi.",
    keywords: ["BIT freshers guide", "bitsathy.ac.in email activation", "PCDP setup", "BIT Sathy first year"],
    pageType: "Article",
  },
  "/guides/campus-facilities-guide": {
    title: "BIT Campus Facilities Guide - BIT Central",
    description: "Discover Central Library digital archives, sports complex, campus Wi-Fi network, health center, ATMs, and student amenities at BIT Sathy.",
    keywords: ["BIT campus facilities", "Central Library IEEE", "BIT Health Center", "campus amenities"],
    pageType: "Article",
  },
  "/guides/platform-guide": {
    title: "BIT-CENTRAL Platform Guide - BIT Central",
    description: "Complete user guide to the BIT-CENTRAL web portal built by Jaison David M: public guides vs protected student tools, authentication, and tech stack.",
    keywords: ["BIT Central platform guide", "Jaison David M developer", "student portal manual", "BIT web app"],
    pageType: "Article",
  },
};

export const SITEMAP_ROUTES = [
  "/",
  "/about",
  "/developer",
  "/features",
  "/wifi-details",
  "/faq",
  "/contact",
  "/support-dev",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/guides",
  "/guides/academic-resources-guide",
  "/guides/semester-examination-guide",
  "/guides/exam-hall-finder-guide",
  "/guides/question-bank-guide",
  "/guides/attendance-guide",
  "/guides/mess-schedule-guide",
  "/guides/first-year-guide",
  "/guides/campus-facilities-guide",
  "/guides/platform-guide",
  "/apsite",
];
