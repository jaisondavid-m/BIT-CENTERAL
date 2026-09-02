import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const siteUrl = (process.env.VITE_SITE_URL || "https://bitcentral.bitsathy.in").replace(/\/$/, "");
const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/guides", priority: "0.95", changefreq: "weekly" },
  { path: "/guides/academic-resources-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/semester-examination-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/exam-hall-finder-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/question-bank-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/attendance-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/mess-schedule-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/first-year-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/campus-facilities-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/guides/platform-guide", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.85", changefreq: "monthly" },
  { path: "/developer", priority: "0.8", changefreq: "monthly" },
  { path: "/features", priority: "0.85", changefreq: "monthly" },
  { path: "/wifi-details", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.85", changefreq: "monthly" },
  { path: "/contact", priority: "0.75", changefreq: "monthly" },
  { path: "/support-dev", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
  { path: "/terms", priority: "0.5", changefreq: "yearly" },
  { path: "/disclaimer", priority: "0.6", changefreq: "yearly" },
];

const now = new Date().toISOString();

const urls = routes
  .map((route) => {
    const loc = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = [
  "<?xml font-size=\"1.0\" encoding=\"UTF-8\"?>",
  "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
  urls,
  "</urlset>",
  "",
].join("\n");

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");

console.log("Sitemap generated at public/sitemap.xml");
