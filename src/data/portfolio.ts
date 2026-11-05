import type { ImageMetadata } from "astro";
import dispertaruImage from "../assets/images/Screenshot 2026-11-01 001444.png";
import sambirejoImage from "../assets/images/Screenshot 2026-10-31 161859.png";
import kiaraImage from "../assets/images/Screenshot 2026-11-05 194556.png";
import libraryImage from "../assets/images/Screenshot 2026-11-05 151028.png";
import certificateFrontend from "../assets/images/Screenshot 2025-04-21 151306.png";
import certificateJavaScript from "../assets/images/Screenshot 2025-04-21 152053.png";
import certificateJunior from "../assets/images/Sertifikat web junior.jpg";
import certificateKominfo from "../assets/images/Screenshot 2025-04-21 151334.png";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  category: string;
  tags: string[];
  href: string;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "mylibrary",
    title: "MyLibrary",
    summary: "A full-featured library management system built with Laravel.",
    description:
      "Manage book inventories, borrowing activities, and user accounts. The application supports both administrators and borrowers with role-based access.",
    image: libraryImage,
    imageAlt: "MyLibrary library management application",
    category: "Management system",
    tags: ["Laravel", "Library"],
    href: "https://library.infy.click/",
    note: "The hosted demo may take a moment to load.",
  },
  {
    slug: "desa-wisata-sambirejo",
    title: "Desa Wisata Sambirejo",
    summary: "A tourism-focused website for Desa Wisata Sambirejo.",
    description:
      "Promotes local attractions, culture, and community-based tourism. Visitors can explore destinations, view upcoming events, and discover local products.",
    image: sambirejoImage,
    imageAlt: "Desa Wisata Sambirejo tourism website",
    category: "Tourism",
    tags: ["Tourism", "Community"],
    href: "https://sambirejo.site.je/",
  },
  {
    slug: "dispertaru",
    title: "Dispertaru",
    summary: "A web-based CRUD application for building-use-right extension requests.",
    description:
      "Streamlines the submission and management of Perpanjangan Hak Guna Bangunan (HGB) under the Dinas Pertanahan dan Tata Ruang (Dispertaru), digitizing the process and reducing manual paperwork.",
    image: dispertaruImage,
    imageAlt: "Dispertaru rights extension management application",
    category: "Public sector",
    tags: ["Public sector", "Digital workflow"],
    href: "http://dispertaru.rf.gd/",
  },
  {
    slug: "kiara-rope-access",
    title: "Kiara Rope Access",
    summary: "A website for a Yogyakarta-based building care company.",
    description:
      "Kiara's specialist climbers help building owners look after glass, walls, and exterior details using rope access and climbing-specific safety equipment.",
    image: kiaraImage,
    imageAlt: "Kiara Rope Access application",
    category: "Business website",
    tags: ["Business", "Service"],
    href: "https://lewis-lev.github.io/kiara/",
  },
];

export const certificates = [
  {
    image: certificateFrontend,
    alt: "Certificate: RVZKRL91QPD5",
    href: "https://www.dicoding.com/certificates/RVZKRL91QPD5",
    credential: "RVZKRL91QPD5",
  },
  {
    image: certificateJavaScript,
    alt: "Certificate: 0LZ0688Y3Z65",
    href: "https://www.dicoding.com/certificates/0LZ0688Y3Z65",
    credential: "0LZ0688Y3Z65",
  },
  {
    image: certificateKominfo,
    alt: "Certificate: 19385991110-11",
    href: "https://digitalent.kominfo.go.id/cek-sertifikat",
    credential: "19385991110-11",
  },
  {
    image: certificateJunior,
    alt: "Certificate: Junior Web Developer",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/haji-makki-madani-shofa-22b9501bb/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/Lewis-lev", icon: "github" },
  { label: "YouTube", href: "https://www.youtube.com/@llews-v2w", icon: "youtube" },
  { label: "Instagram", href: "https://www.instagram.com/llews___/", icon: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@llews___", icon: "music" },
] as const;

export const skills = [
  "PHP",
  "CodeIgniter 4",
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "WordPress",
  "npm",
];

export const workflow = [
  "Website Development, Responsive Design",
  "Cross Browser Testing & Debugging",
  "Cross Functional Teams",
  "Agile Development & Scrum",
];

export const interests = [
  "Enjoy exploring various games, which enhances strategic thinking and adaptability.",
  "Passionate about discovering new music genres, which fosters creativity and cultural awareness.",
  "Enjoy reading fiction and non-fiction, which strengthens critical thinking and broadens perspectives.",
  "Keen on diverse films, which improves storytelling skills and visual creativity.",
];
