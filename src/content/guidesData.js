// BIT Central Knowledge Base & Public Guides Data
// Original, high-value educational guides for Bannari Amman Institute of Technology (BIT Sathy) students.

export const guidesCategoryList = [
  { id: "all", label: "All Guides" },
  { id: "academics", label: "Academics & Exams" },
  { id: "campus", label: "Campus & Hostels" },
  { id: "student-life", label: "Student Life & Rules" },
  { id: "platform", label: "BIT-CENTRAL Tools" },
];

export const guidesList = [
  {
    slug: "academic-resources-guide",
    category: "academics",
    title: "BIT Academic Resources Guide",
    shortTitle: "Academic Resources Guide",
    subtitle: "Master course materials, question paper archives, Continuous Comprehensive Evaluation (CCE), and reward points conversion.",
    author: "BIT Central Academic Team",
    updatedAt: "September 2026",
    readTime: "10 min read",
    iconName: "BookOpen",
    image: "/CardImgs/mycourse.png",
    imageAlt: "BIT-CENTRAL Academic Resources and Course Materials interface showing semester subjects, lecture notes, and question paper downloads",
    imageCaption: "The Academic Resources portal on BIT-CENTRAL groups question banks, answer keys, lecture slides, and reference notes by semester and subject code.",
    summary: "A practical breakdown of how academic evaluation works at BIT Sathy, how to access semester question banks and answer keys, and how Reward Points (RP) factor into internal marks.",
    highlights: [
      "Understanding BIT Sathy's Autonomous Choice-Based Credit System (CBCS)",
      "Continuous Comprehensive Evaluation (CCE) structure & assessment components",
      "Accessing semester-wise question banks and verified answer keys on BIT-CENTRAL",
      "Reward Points (RP) system and how RP converts to academic internal marks",
      "PCDP (Personality & Character Development Programme) requirements",
    ],
    sections: [
      {
        id: "curriculum-structure",
        title: "Understanding BIT Sathy's CBCS Curriculum",
        content: `Bannari Amman Institute of Technology operates under an Autonomous Choice-Based Credit System (CBCS) aligned with Anna University guidelines and AICTE model curricula. The undergraduate B.E. / B.Tech engineering degree consists of 8 academic semesters covering:

* **Professional Core Courses (PC)**: Fundamental subject theory and core engineering laboratory courses for your specific branch.
* **Professional Elective Courses (PE)**: Specialized advanced courses chosen based on career tracks (e.g., Data Science, Embedded Robotics, Structural Design).
* **Open Electives (OE)**: Interdisciplinary subjects open to students across all engineering branches.
* **Skill Development / Value-Added Courses**: Practical hands-on certifications, industry hackathons, and software training.
* **Project Work & Internships**: Mini-projects in intermediate semesters and a final-year industry Capstone Project.`
      },
      {
        id: "cce-evaluation",
        title: "Continuous Comprehensive Evaluation (CCE) Breakdown",
        content: `Academic evaluation at BIT Sathy comprises two primary parts: Internal Assessment (Continuous Comprehensive Evaluation - CCE) and End Semester Examinations (ESE).

| Assessment Component | Weightage | Description & Requirements |
| --- | --- | --- |
| **Periodical Test 1 (PT1)** | 15% | Conducted mid-semester covering initial curriculum units |
| **Periodical Test 2 (PT2)** | 15% | Conducted towards semester end covering remaining units |
| **Assignments & Quizzes** | 10% | Case studies, digital assignments, online quizzes, and seminar presentations |
| **Attendance & Participation** | 10% | Attendance percentage calculated per course session |
| **End Semester Examination** | 50% | Comprehensive written/practical examination evaluated centrally |

Maintaining strong performance across CCE tests ensures higher overall Grades and Cumulative Grade Point Average (CGPA).`
      },
      {
        id: "accessing-materials",
        title: "Accessing Question Banks & Study Materials on BIT-CENTRAL",
        content: `Searching through scattered drive links or social media groups for exam preparation material wastes critical study time. BIT-CENTRAL consolidates verified semester resources into a single structured interface.

### How to access study materials on BIT-CENTRAL:
1. Log in with your institutional Google account ('@bitsathy.ac.in').
2. Navigate to the **Semester Resources** or **Question Bank** section.
3. Select your current **Semester**, **Department** (e.g., CSE, ECE, MECH), and **Subject Code** (e.g., *22PH202 Physics for Engineers*).
4. Download or preview course lecture slides, previous year question papers, and solved answer keys directly in your browser.

These materials are organized by subject code and curated with contributions from top-performing senior students.`
      },
      {
        id: "reward-points-conversion",
        title: "Reward Points (RP) to Internal Marks Conversion",
        content: `A unique feature of BIT Sathy's academic ecosystem is the **Reward Points (RP)** framework. Students earn RP by actively participating in technical paper presentations, national hackathons, coding contests, sports tournaments, and co-curricular workshops.

Earned Reward Points are formally recognized and **converted into internal evaluation marks** according to institutional guidelines.

### Tracking your RP on BIT-CENTRAL:
* View total earned RP across technical and non-technical categories.
* Check your activity log and verification status.
* Calculate how your current RP total translates into internal mark boosts.

By leveraging BIT-CENTRAL's RP breakdown tools, students can plan co-curricular participation strategically to maximize both skill development and academic grades.`
      }
    ],
    relatedSlugs: ["question-bank-guide", "semester-examination-guide", "attendance-guide"],
    targetFeatureLink: "/semester",
    targetFeatureLabel: "Browse Academic Resources"
  },

  {
    slug: "semester-examination-guide",
    category: "academics",
    title: "BIT Semester Examination Guide",
    shortTitle: "Semester Exam Guide",
    subtitle: "Complete preparation roadmap for Periodical Tests, End Semester Exams, hall tickets, and post-exam answer key evaluation.",
    author: "BIT Central Examination Desk",
    updatedAt: "September 2026",
    readTime: "9 min read",
    iconName: "FileCheck",
    image: "/CardImgs/hallfinder.png",
    imageAlt: "BIT-CENTRAL Exam Hall Finder tool displaying student examination seating layout, block details, and room allocation",
    imageCaption: "The Exam Hall Finder tool on BIT-CENTRAL eliminates last-minute exam day confusion by presenting assigned room numbers and seating blocks clearly.",
    summary: "An essential exam preparation guide for BIT Sathy students covering examination rules, hall allocation lookup, seating arrangements, timetable strategy, and post-exam solution verification.",
    highlights: [
      "Structure of Periodical Tests (PT1/PT2) and End Semester Examinations (ESE)",
      "Strict examination hall rules and prohibited items",
      "Using BIT-CENTRAL Exam Hall Finder to locate room assignment",
      "Analyzing previous question patterns and weightage distribution",
      "Verifying solutions using published BIT-CENTRAL answer keys",
    ],
    sections: [
      {
        id: "exam-cycle",
        title: "The Semester Examination Cycle",
        content: `At Bannari Amman Institute of Technology, each semester features a structured examination schedule administered under the supervision of the Controller of Examinations (COE):

1. **Timetable Announcement**: The COE publishes official exam dates, session timings (Forenoon 09:30 AM – 12:30 PM / Afternoon 01:30 PM – 04:30 PM), and course codes approximately 2–3 weeks prior to exams.
2. **Hall Ticket Generation**: Eligible students with requisite attendance (minimum 75%) receive hall tickets digitally or through department coordinators.
3. **Exam Execution**: Written examinations conducted in designated academic blocks under strict invigilation.
4. **Centralized Valuation**: External and internal evaluators assess answer scripts based on standardized scheme of valuation.
5. **Results & Revaluation**: Grades published on the official student portal, followed by options for answer script copy requests or revaluation.`
      },
      {
        id: "hall-rules",
        title: "Examination Hall Rules & Regulations",
        content: `Students must strictly adhere to the following examination guidelines to avoid malpractice proceedings:

* **Mandatory Documents**: Carry your official BIT Student Identity Card and printed Hall Ticket to every examination session.
* **Reporting Time**: Be seated in the designated exam hall at least 15 minutes before the scheduled start time.
* **Prohibited Items**: Mobile phones, smartwatches, programmable calculators, Bluetooth devices, and unauthorized paper notes are strictly banned inside exam halls.
* **Stationery**: Bring permitted non-programmable scientific calculators (e.g., Casio fx-991EX/MS), pens, pencils, erasers, and drawing instruments. Sharing stationery during exams is not allowed.`
      },
      {
        id: "finding-exam-hall",
        title: "Finding Your Assigned Room with Exam Hall Finder",
        content: `On exam mornings, hundreds of students crowd physical notice boards searching for room allocations. BIT-CENTRAL provides a fast, digital solution: **Exam Hall Finder**.

### Step-by-Step Instructions:
1. Open BIT-CENTRAL on your smartphone or desktop before leaving your hostel or home.
2. Go to the **Exam Hall** tool.
3. Enter your Roll Number / Student ID or select your branch and course code.
4. Instantly view your **Assigned Block**, **Floor**, **Room Number**, and **Seat Position**.

This ensures you walk directly to your assigned hall without stress or delay.`
      },
      {
        id: "answer-keys",
        title: "Verifying Answers Post-Exam",
        content: `After completing a key subject exam, verifying your solutions helps evaluate your expected score and prepare for subsequent papers.

BIT-CENTRAL publishes verified answer keys for selected major engineering courses (such as *22PH202 Physics for Engineers* and *22HS006 Heritage of Tamils*).

* Solutions are prepared by subject domain toppers and checked for step-by-step accuracy.
* Students can compare formulas, numerical final answers, and key diagram steps to estimate their CCE / ESE marks.`
      }
    ],
    relatedSlugs: ["exam-hall-finder-guide", "question-bank-guide", "academic-resources-guide"],
    targetFeatureLink: "/exam-hall",
    targetFeatureLabel: "Open Exam Hall Finder"
  },

  {
    slug: "exam-hall-finder-guide",
    category: "platform",
    title: "BIT Exam Hall Finder Guide",
    shortTitle: "Exam Hall Finder Guide",
    subtitle: "How to instantly look up your examination block, hall number, and seating layout on BIT-CENTRAL.",
    author: "BIT Central Tech Support",
    updatedAt: "September 2026",
    readTime: "6 min read",
    iconName: "Search",
    image: "/CardImgs/hallfinder.png",
    imageAlt: "Detailed view of the BIT-CENTRAL Exam Hall Finder tool displaying room numbers and floor locations",
    imageCaption: "Exam Hall Finder provides a clean overview of exam venue locations across academic blocks at Bannari Amman Institute of Technology.",
    summary: "A step-by-step usage guide explaining how BIT Sathy students can utilize the BIT-CENTRAL Exam Hall Finder to locate exam venues quickly without manual notice board searches.",
    highlights: [
      "Why manual notice board searches cause exam day delays",
      "How BIT-CENTRAL Exam Hall Finder organizes allocation data",
      "Step-by-step automated vs manual search modes",
      "Locating blocks (SLB, Mech Block, Main Building) on campus",
      "Frequently asked questions about exam room updates",
    ],
    sections: [
      {
        id: "why-exam-hall-finder",
        title: "Solving Exam Morning Crowds",
        content: `During end-semester examinations and periodical tests at Bannari Amman Institute of Technology, over 6,000 students require hall assignments simultaneously. Physical notice boards outside academic blocks often experience heavy congestion, leading to anxiety and potential delays for students.

BIT-CENTRAL created the **Exam Hall Finder** feature to provide instant, mobile-friendly access to seating information directly on students' smartphones.`
      },
      {
        id: "how-it-works",
        title: "How Exam Hall Finder Works",
        content: `The Exam Hall Finder compiles published examination hall allocation lists into a fast, searchable web database.

### Features of the Tool:
* **Automated Lookup**: Sign in with your '@bitsathy.ac.in' account, and the system automatically matches your Roll Number to current exam seat allocations.
* **Manual Search Option**: Allows students to search by Roll Number, Department, or Course Code manually if checking allocation for classmates or study partners.
* **Clear Venue Identifiers**: Displays the exact **Block Name**, **Floor Level**, **Room/Hall Code**, and **Desk/Row Number**.`
      },
      {
        id: "step-by-step",
        title: "Step-by-Step Usage Instructions",
        content: `Follow these steps to find your exam hall in under 10 seconds:

1. **Launch BIT-CENTRAL**: Open [bitcentral.bitsathy.in](https://bitcentral.bitsathy.in) on your mobile browser.
2. **Access Exam Hall Feature**: Click on **Exam Hall** from the main dashboard or navigation menu.
3. **Verify Allocation Details**: Review the rendered card displaying:
   * **Student Name & Roll No.**
   * **Subject Code & Exam Title**
   * **Hall / Room Number** (e.g., *SLB-302*)
   * **Session** (Forenoon / Afternoon)
4. **Directions**: Use the embedded campus map reference to walk directly to the building.`
      },
      {
        id: "troubleshooting",
        title: "Tips & Troubleshooting",
        content: `* **Allocation Not Found?** Ensure your Roll Number format matches official records (e.g., '221CS101' or '2025UCS1023').
* **Session Verification**: Double-check whether your exam is scheduled for the **FN** (Morning) or **AN** (Afternoon) slot.
* **Official Disclaimer**: Room allocations shown on BIT-CENTRAL reflect available published schedules. In the event of emergency room shifts by the Controller of Examinations, official department notice boards remain the primary authority.`
      }
    ],
    relatedSlugs: ["semester-examination-guide", "campus-facilities-guide", "platform-guide"],
    targetFeatureLink: "/exam-hall",
    targetFeatureLabel: "Use Exam Hall Finder Tool"
  },

  {
    slug: "question-bank-guide",
    category: "academics",
    title: "BIT Question Bank & Previous Papers Guide",
    shortTitle: "Question Bank Guide",
    subtitle: "Strategies for studying previous semester question papers, model papers, and solved answer keys.",
    author: "BIT Central Content Team",
    updatedAt: "September 2026",
    readTime: "7 min read",
    iconName: "FolderArchive",
    image: "/CardImgs/mycourse.png",
    imageAlt: "BIT-CENTRAL Question Bank and Course PDF downloading interface with department filters",
    imageCaption: "Browse and download semester-wise question papers, revision sheets, and answer keys on BIT-CENTRAL.",
    summary: "Learn how to effectively utilize past question papers, answer keys, and model question banks available on BIT-CENTRAL to excel in BIT Sathy semester examinations.",
    highlights: [
      "Importance of previous year papers in autonomous examination patterns",
      "Deconstructing question paper structure (Part A, Part B, Part C)",
      "How to filter question banks by department and semester on BIT-CENTRAL",
      "Subject-wise download guides for CSE, ECE, EEE, MECH, and Civil",
      "Best practices for timed mock exam practice",
    ],
    sections: [
      {
        id: "importance",
        title: "Why Past Question Papers Matter",
        content: `At Bannari Amman Institute of Technology, semester question papers are designed by internal faculty and external domain experts to test conceptual clarity, analytical problem solving, and engineering application skills.

Practicing past question papers helps students:
* Identify high-frequency core topics across course modules.
* Master the specific question framing styles used in Bloom's Taxonomy evaluations.
* Manage 3-hour exam time allocation effectively between short conceptual answers and detailed numerical derivations.`
      },
      {
        id: "paper-structure",
        title: "Anatomy of a BIT Question Paper",
        content: `Standard End Semester Examination papers at BIT Sathy generally follow a structured pattern based on Bloom's Taxonomy levels:

| Section | Marks Distribution | Question Format & Expectations |
| --- | --- | --- |
| **Part A** | 10 questions × 2 marks = 20 marks | Short conceptual definitions, formulas, state-and-explain questions testing Remembering & Understanding |
| **Part B** | 5 questions × 13 marks = 65 marks | Detailed analytical questions, circuit derivations, algorithm design, or numerical problems (Either/Or choice per unit) |
| **Part C** | 1 question × 15 marks = 15 marks | High-level comprehensive application problem, real-world case study, or complex system design problem |`
      },
      {
        id: "accessing-qb",
        title: "Accessing Question Banks on BIT-CENTRAL",
        content: `BIT-CENTRAL maintains a repository of semester materials organized systematically by branch and subject code.

### To access question banks:
1. Log in to BIT-CENTRAL using your '@bitsathy.ac.in' credentials.
2. Select **Semester** or **Question Bank** from the student tools menu.
3. Filter by your current **Semester** (Semester 1 through Semester 8) and **Department**.
4. Access downloadable PDF bundles containing:
   * Unit-wise Question Banks with 2-mark and 13-mark sets.
   * Model Question Papers prepared for PT1 & PT2 practice.
   * Solved End Semester Question Papers with verified answer steps.`
      },
      {
        id: "study-strategy",
        title: "Smart Study Strategy using Question Banks",
        content: `1. **Unit-wise Mastery**: Solve Part A questions unit by unit as topics are covered in daily lectures.
2. **Formula Revision Sheet**: Maintain a dedicated formula handbook for mathematical and engineering subjects (e.g., *22PH202 Physics for Engineers*).
3. **Timed Mock Tests**: 5 days before exams, attempt at least one complete past paper within 3 hours without referring to textbooks.
4. **Answer Key Comparison**: Cross-check your solution steps against published BIT-CENTRAL answer keys to pinpoint missing steps or calculation errors.`
      }
    ],
    relatedSlugs: ["academic-resources-guide", "semester-examination-guide", "platform-guide"],
    targetFeatureLink: "/semester",
    targetFeatureLabel: "Access Question Bank Archives"
  },

  {
    slug: "attendance-guide",
    category: "student-life",
    title: "BIT Attendance & Biometric Guide",
    shortTitle: "Attendance & Biometric Guide",
    subtitle: "Understand BIT Sathy's 75% attendance criteria, daily fingerprint biometric logging, and leave processing.",
    author: "BIT Central Student Affairs Desk",
    updatedAt: "September 2026",
    readTime: "8 min read",
    iconName: "Fingerprint",
    image: "/CardImgs/biometeric.jpg",
    imageAlt: "BIT-CENTRAL Biometric details page showing fingerprint punch-in timestamps and daily session logs",
    imageCaption: "Track your daily attendance punch-in times, biometric scan records, and leave history on BIT-CENTRAL.",
    summary: "A detailed breakdown of attendance policies at Bannari Amman Institute of Technology, including biometric punch-in machines, session logs, leave applications, and tracking via BIT-CENTRAL.",
    highlights: [
      "BIT Sathy 75% mandatory attendance threshold for exam eligibility",
      "How daily fingerprint biometric attendance scanning works",
      "Morning, afternoon, and session-wise attendance tracking",
      "Viewing punch-in timestamps and biometric logs on BIT-CENTRAL",
      "Applying for Leave / Duty Leave (OD) and tracking approval status",
    ],
    sections: [
      {
        id: "attendance-policy",
        title: "BIT Sathy Attendance Policy",
        content: `Regular attendance is compulsory for all undergraduate and postgraduate students at Bannari Amman Institute of Technology.

* **Minimum Required Attendance**: Students must maintain a minimum of **75% overall attendance** in each course to be eligible to appear for the End Semester Examination.
* **Condonation Range (65% – 74%)**: Students with attendance between 65% and 74% due to medical emergencies or authorized institutional participation (OD) may apply for condonation subject to Principal approval and medical certificate submission.
* **Below 65%**: Students securing less than 65% attendance are detained from appearing in semester exams for that course and must reappear/redistribute credits in subsequent semesters according to academic regulations.`
      },
      {
        id: "biometric-system",
        title: "Biometric Fingerprint Punch-in System",
        content: `BIT Sathy uses an automated biometric fingerprint punch-in system installed across academic buildings, department entryways, and hostels.

### How Biometric Punching Works:
1. **Punch Times**: Students register their fingerprint scan upon arriving on campus or entering lecture blocks during designated morning and afternoon windows.
2. **Session Mapping**: Scans are logged in real time into the central database and mapped against course timetables.
3. **Punctuality Tracking**: Exact timestamps record whether a punch-in was on time or recorded after session start.`
      },
      {
        id: "tracking-on-bitcentral",
        title: "Viewing Attendance & Biometrics on BIT-CENTRAL",
        content: `BIT-CENTRAL provides signed-in students with a consolidated dashboard to monitor attendance health and spot potential shortage risks early.

### Features available on BIT-CENTRAL:
* **Biometric Punch Log**: View exact daily punch-in timestamps, machine IDs, and status (Present / Late / Absent).
* **Session Details**: Session-wise breakdown showing hour-by-hour course attendance.
* **Attendance Percentage Tracker**: Real-time percentage calculation per subject, indicating how many future classes you can miss or need to attend to stay comfortably above 75%.`
      },
      {
        id: "leave-processing",
        title: "Leave & On-Duty (OD) Processing",
        content: `When absent due to illness, personal reasons, or representing BIT Sathy in external hackathons/sports:

* **Medical Leave**: Submit medical certificate endorsed by campus medical officer to your Class Mentor.
* **On-Duty (OD)**: Obtain pre-approval from Head of Department (HOD) for technical symposiums, paper presentations, or sports competitions.
* **BIT-CENTRAL Leave Tracker**: View approved leave records and verify that OD hours have been credited properly to your attendance tally.`
      }
    ],
    relatedSlugs: ["academic-resources-guide", "first-year-guide", "campus-facilities-guide"],
    targetFeatureLink: "/ps-biometrics",
    targetFeatureLabel: "Check Biometric Logs"
  },

  {
    slug: "mess-schedule-guide",
    category: "campus",
    title: "BIT Mess Schedule Guide",
    shortTitle: "Mess Schedule Guide",
    subtitle: "Explore hostel mess dining timings, daily menu rotation, food quality standards, and mess menu updates on BIT-CENTRAL.",
    author: "BIT Central Hostel Desk",
    updatedAt: "September 2026",
    readTime: "6 min read",
    iconName: "Utensils",
    image: "/CardImgs/bitmenu.png",
    imageAlt: "BIT-CENTRAL Hostel Mess Menu interface showing daily breakfast, lunch, snacks, and dinner meal options",
    imageCaption: "Check daily breakfast, lunch, tea/snacks, and dinner menus for BIT Sathy hostel mess complexes on BIT-CENTRAL.",
    summary: "A practical guide to the hostel mess dining system at Bannari Amman Institute of Technology, including meal timings, daily menu schedules, special meal days, and checking today's menu on BIT-CENTRAL.",
    highlights: [
      "Overview of hostel mess dining facilities at BIT Sathy",
      "Breakfast, Lunch, Evening Snacks, and Dinner timing schedule",
      "South Indian vegetarian & non-vegetarian menu highlights",
      "Checking today's live mess menu on BIT-CENTRAL",
      "Hostel mess feedback and dietary suggestions process",
    ],
    sections: [
      {
        id: "mess-overview",
        title: "Hostel Dining at BIT Sathy",
        content: `Bannari Amman Institute of Technology maintains large, modern dining mess complexes serving over 5,000 resident hostel students daily. The mess system emphasizes hygiene, balanced nutrition, and wholesome meals prepared in steam-operated commercial kitchens.`
      },
      {
        id: "meal-timings",
        title: "Daily Meal Timings Schedule",
        content: `Hostel mess halls operate according to strict, regular daily dining windows:

| Meal Session | Operating Hours | Standard Menu Offerings |
| --- | --- | --- |
| **Breakfast** | 07:15 AM – 08:45 AM | Idli, Dosa, Poori, Pongal, Vada, Chutney, Sambar, Tea, Coffee, Milk |
| **Lunch** | 12:15 PM – 01:45 PM | South Indian Thali Meals (Rice, Sambar, Rasam, Poriyal, Kootu, Curd, Appalam, Veg/Non-Veg Gravy) |
| **Evening Snacks** | 04:30 PM – 05:30 PM | Hot Snacks (Samosa, Sundal, Bajji, Cutlet) with Tea, Coffee, or Milk |
| **Dinner** | 07:15 PM – 08:45 PM | Chapathi / Parotta with Kurma, Variety Rice, Dosa, Milk, Fruit / Dessert |`
      },
      {
        id: "menu-on-bitcentral",
        title: "Checking Today's Mess Menu on BIT-CENTRAL",
        content: `Instead of walking down to hostel mess notice boards to see what is being served for lunch or dinner, students can check the live daily mess menu on BIT-CENTRAL.

### How to access the Mess Menu tool:
1. Open BIT-CENTRAL on your phone or tablet.
2. Select **Mess Menu** from the dashboard.
3. View today's meal schedule broken down into Breakfast, Lunch, Evening Snacks, and Dinner.
4. Toggle between different hostel mess dining halls if applicable.

This helps students plan meal times effectively around project work and study sessions.`
      },
      {
        id: "hygiene-feedback",
        title: "Hygiene & Student Committee Feedback",
        content: `A Student Mess Committee comprising student representatives and hostel wardens inspects raw ingredient procurement, kitchen cleanliness, water purity, and dish hygiene daily.

Students can submit suggestions regarding menu variety or food quality through official hostel warden feedback channels or via the BIT-CENTRAL feedback form.`
      }
    ],
    relatedSlugs: ["campus-facilities-guide", "first-year-guide", "campus-facilities-guide"],
    targetFeatureLink: "/mess",
    targetFeatureLabel: "View Today's Mess Menu"
  },

  {
    slug: "first-year-guide",
    category: "student-life",
    title: "BIT First-Year Student Guide",
    shortTitle: "First-Year Student Guide",
    subtitle: "Essential onboarding manual for freshers at Bannari Amman Institute of Technology: Google accounts, PCDP, Wi-Fi setup, and campus life.",
    author: "BIT Central Student Mentorship Team",
    updatedAt: "September 2026",
    readTime: "9 min read",
    iconName: "GraduationCap",
    image: "/CardImgs/pcdp.png",
    imageAlt: "BIT-CENTRAL PCDP setup interface displaying freshers onboarding modules and activity tracking",
    imageCaption: "BIT-CENTRAL assists first-year students with PCDP setup, academic orientation materials, and campus tools.",
    summary: "The ultimate survival and success guide for first-year engineering students joining BIT Sathy, covering Google account activation, PCDP activities, hostel setup, Wi-Fi, and academic tools.",
    highlights: [
      "Activating your official BIT Sathy Google Account (\@bitsathy.ac.in\)",
      "PCDP (Personality & Character Development Programme) onboarding",
      "Hostel room setup and Wi-Fi configuration",
      "Understanding credit requirements and first-year subjects",
      "How BIT-CENTRAL simplifies first-year campus life",
    ],
    sections: [
      {
        id: "welcome",
        title: "Welcome to Bannari Amman Institute of Technology",
        content: `Congratulations on securing admission to Bannari Amman Institute of Technology! Transitioning from high school to an autonomous engineering college brings exciting opportunities and new responsibilities. This guide provides a smooth onboarding roadmap for your first weeks on campus.`
      },
      {
        id: "google-account",
        title: "Activating Your BIT Google Account",
        content: `Upon admission, every student is assigned an official institutional Google Workspace account ending with '@bitsathy.ac.in' (e.g., 'studentname.cs26\@bitsathy.ac.in\').

### Why your institutional email is vital:
* Mandatory for logging into college Wi-Fi, LMS portals, and BIT-CENTRAL.
* Official channel for COE exam announcements, department circulars, and placement notices.
* Unlocks educational discounts on software, GitHub Student Developer Pack, and Google Cloud services.

*Pro-tip: Always keep your institutional Google account active on your personal smartphone.*`
      },
      {
        id: "pcdp-program",
        title: "Understanding PCDP (Personality & Character Development)",
        content: `All first-year B.E. / B.Tech students at BIT Sathy undergo the **Personality & Character Development Programme (PCDP)**. PCDP is designed to build discipline, team leadership, physical wellness, and ethical values.

### PCDP Components:
* Physical fitness sessions, yoga, and outdoor sports.
* Language communication labs and public speaking practice.
* Social service activities, NSS, NCC, and YRC participation.
* BIT-CENTRAL provides reference tools to help freshers log and monitor PCDP activity milestones.`
      },
      {
        id: "wifi-hostel-setup",
        title: "Hostel Onboarding & Campus Wi-Fi Setup",
        content: `When moving into your hostel block (Sapphire, Ruby, or Emerald):
1. **Room Inventory**: Verify room furniture, study tables, chairs, cupboards, and fan/light fixtures with your hostel supervisor.
2. **Wi-Fi Connection**: Connect your smartphone and laptop to the official campus Wi-Fi network using standard hostel credentials.
3. **Wi-Fi Guide**: Refer to the [BIT Wi-Fi Details Guide](/wifi-details) on BIT-CENTRAL for exact network names and troubleshooting steps.`
      },
      {
        id: "freshers-checklist",
        title: "First-Month Success Checklist",
        content: `* [ ] Activate institutional '@bitsathy.ac.in' email account.
* [ ] Log into BIT-CENTRAL and bookmark key features (Mess Menu, Exam Hall, Question Bank).
* [ ] Locate your department block, Central Library, and Special Lab Block using [FindMyWay](/findmyway).
* [ ] Maintain 100% attendance in initial weeks to build a comfortable buffer above the 75% threshold.
* [ ] Join technical clubs (Coding Club, Robotics Club, IEEE Student Branch, Fine Arts Club).`
      }
    ],
    relatedSlugs: ["campus-facilities-guide", "academic-resources-guide", "campus-facilities-guide"],
    targetFeatureLink: "/pcdp",
    targetFeatureLabel: "Open PCDP Setup Page"
  },

  {
    slug: "campus-facilities-guide",
    category: "campus",
    title: "BIT Campus Facilities Guide",
    shortTitle: "Campus Facilities Guide",
    subtitle: "Explore Central Library, sports complex, Wi-Fi connectivity, ATM counters, medical center, and student amenities.",
    author: "BIT Central Facilities Team",
    updatedAt: "September 2026",
    readTime: "7 min read",
    iconName: "Building2",
    image: "/CardImgs/wifi.jpg",
    imageAlt: "BIT Sathy Wi-Fi Setup and Campus Facilities reference guide screenshot",
    imageCaption: "Access Wi-Fi configuration details, hostel network credentials, and campus amenity guidelines on BIT-CENTRAL.",
    summary: "Discover the extensive campus amenities provided at Bannari Amman Institute of Technology, including 24/7 Wi-Fi, central library archives, medical clinic, sports grounds, and food courts.",
    highlights: [
      "Central Library resources, IEEE digital access, and quiet study rooms",
      "Campus-wide high-speed optical fiber Wi-Fi network",
      "On-campus Health Center with qualified medical officers and ambulance",
      "Sports grounds, indoor badminton courts, gymnasium, and swimming pool",
      "Banking facilities, ATMs, and postal services on campus",
    ],
    sections: [
      {
        id: "library-facilities",
        title: "Central Library & Digital Knowledge Hub",
        content: `The Central Library at BIT Sathy is an outstanding 5-story knowledge repository spanning over 65,000 sq. ft.

* **Print Holdings**: Over 100,000 books, reference volumes, national journals, and back-volumes.
* **Digital Library**: 300+ computer terminals providing 24/7 access to IEEE Xplore, ScienceDirect, SpringerLink, ASME, ASCE, and NPTEL video lectures.
* **Reprographic & Printing**: In-library printing, photocopying, and document scanning services for project reports.`
      },
      {
        id: "wifi-connectivity",
        title: "Campus Wi-Fi & Internet Infrastructure",
        content: `BIT Sathy features a high-speed campus network backed by redundant gigabit leased lines:

* **Coverage Areas**: Academic blocks, Special Laboratory Complex, Central Library, Hostels, and Food Court.
* **Authentication**: Secured network access using student credentials.
* **Wi-Fi Setup Guide**: Detailed network names and login instructions are published on the [BIT Wi-Fi Details](/wifi-details) page on BIT-CENTRAL.`
      },
      {
        id: "health-medical",
        title: "Campus Health Center & Emergency Care",
        content: `Student health and wellness are prioritized on campus:
* **Health Center**: Located near hostel blocks, staffed by full-time medical officers and qualified staff nurses.
* **Pharmacy & First Aid**: Basic medicines, emergency first aid, and health consultation provided free of charge to students.
* **Ambulance Service**: 24/7 dedicated campus ambulance available for emergency transport to multi-specialty hospitals in Sathyamangalam and Erode.`
      },
      {
        id: "sports-amenities",
        title: "Sports Complex, Gym & Student Amenities",
        content: `* **Outdoor Sports**: Standard 400m athletic track, football field, cricket oval, basketball courts, volleyball courts, and tennis courts.
* **Indoor Sports Complex**: Wooden badminton courts, table tennis halls, chess/carrom rooms, and a modern fitness gymnasium equipped with weight-training apparatus.
* **ATMs & Postal**: On-campus bank branches and 24/7 ATMs (Axis Bank, State Bank of India) alongside campus postal reception.`
      }
    ],
    relatedSlugs: ["campus-facilities-guide", "mess-schedule-guide", "first-year-guide"],
    targetFeatureLink: "/wifi-details",
    targetFeatureLabel: "View Campus Wi-Fi Details"
  },

  {
    slug: "platform-guide",
    category: "platform",
    title: "BIT-CENTRAL Platform Guide",
    shortTitle: "BIT-CENTRAL Platform Guide",
    subtitle: "Complete user manual for the BIT-CENTRAL student portal: architecture, public guides, protected tools, and developer details.",
    author: "Jaison David M (Developer)",
    updatedAt: "September 2026",
    readTime: "8 min read",
    iconName: "Laptop",
    image: "/CardImgs/report.png",
    imageAlt: "BIT-CENTRAL Student Portal Dashboard interface showing integrated academic utilities and profile tools",
    imageCaption: "BIT-CENTRAL brings question banks, exam hall lookup, mess menus, biometrics, and academic tools into one fast web application.",
    summary: "An in-depth user guide to the BIT-CENTRAL web portal built by Jaison David M for the Bannari Amman Institute of Technology student community.",
    highlights: [
      "Mission and philosophy behind creating BIT-CENTRAL",
      "Public educational guides vs protected student tool boundaries",
      "Authentication via BIT Sathy institutional Google account",
      "Core feature matrix: Exam Hall, Question Bank, Mess Menu, Biometrics",
      "Developer notes, privacy pledge, and community feedback channels",
    ],
    sections: [
      {
        id: "about-platform",
        title: "What is BIT-CENTRAL?",
        content: `BIT-CENTRAL is a modern web application built by **Jaison David M** (a student developer at Bannari Amman Institute of Technology) to solve everyday challenges faced by BIT Sathy students.

Before BIT-CENTRAL, academic resources, question paper PDFs, exam hall room lists, mess menus, and attendance logs were scattered across multiple portals, drive links, and WhatsApp groups. BIT-CENTRAL unifies these essential resources into one clean, fast, and mobile-responsive portal.`
      },
      {
        id: "public-vs-auth",
        title: "Public Knowledge Base vs. Authenticated Tools",
        content: `BIT-CENTRAL strictly respects data privacy and institutional policies by dividing content into two clear layers:

### 1. Public Knowledge Base (Open to Everyone)
* **Campus & Academic Guides**: Deep educational articles explaining campus layout, curriculum, exam rules, and facilities.
* **Wi-Fi Setup Guides**: Reference information for connecting devices to campus networks.
* **About, Contact, Terms, & Disclaimer Pages**: Transparent documentation detailing platform ownership and usage terms.

### 2. Authenticated Student Portal (Protected behind Google Sign-In)
* **Exam Hall Finder**: Personal room and desk allocation lookup.
* **Question Bank Downloads**: Full academic material downloads for enrolled courses.
* **Personal Biometric Logs**: Individual attendance punch timestamps and session histories.
* **Reward Points Breakdown**: Individual RP activity tracking and internal mark calculations.

*To access protected features, sign in with your official '@bitsathy.ac.in' Google account.*`
      },
      {
        id: "tech-stack",
        title: "Technical Architecture & Design",
        content: `BIT-CENTRAL is designed for high performance, accessibility, and fast load times even on mobile networks:

* **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, React Helmet Async (for dynamic SEO).
* **Backend Services**: High-performance Go microservices providing fast data processing.
* **Prerendering Engine**: Custom Node.js static HTML prerenderer ensuring search engines index public guide pages cleanly.
* **Analytics**: Privacy-preserving web analytics.`
      },
      {
        id: "developer-contact",
        title: "Developer Note & Community Contributions",
        content: `BIT-CENTRAL was built out of passion for empowering fellow students at Bannari Amman Institute of Technology.

* **Developer**: Jaison David M (CSE Department, BIT Sathy)
* **GitHub**: [@jaisondavid-m](https://github.com/jaisondavid-m)
* **LinkedIn**: [Jaison David M](https://www.linkedin.com/in/jaison-david-m-a14072360/)
* **Email**: [developer@bitsathy.in](mailto:developer@bitsathy.in)

> **Non-Official Platform Notice**: BIT-CENTRAL is an independent student initiative created to support the BIT Sathy community. Official institutional systems and Controller of Examinations circulars remain the sole official authority for academic records.`
      }
    ],
    relatedSlugs: ["campus-facilities-guide", "academic-resources-guide", "exam-hall-finder-guide"],
    targetFeatureLink: "/",
    targetFeatureLabel: "Back to BIT-CENTRAL Home"
  }
];

export function getGuideBySlug(slug) {
  return guidesList.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide) {
  if (!guide || !guide.relatedSlugs) return [];
  return guidesList.filter((g) => guide.relatedSlugs.includes(g.slug));
}
