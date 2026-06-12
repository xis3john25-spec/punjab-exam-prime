import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  Star,
  Truck,
  BookOpen,
  Trophy,
  ShieldCheck,
  Users,
  Eye,
  Plus,
  Sparkles,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Zap,
  Award,
  Clock,
  Heart,
} from "lucide-react";

import heroStudents from "@/assets/hero-students.jpg";
import bookIllami from "@/assets/book-illami.jpg";
import bookPunjabi from "@/assets/book-punjabi.jpg";
import bookPolice from "@/assets/book-police.jpg";
import bookGk from "@/assets/book-gk.jpg";
import bookCurrent from "@/assets/book-current.jpg";
import bookPatwari from "@/assets/book-patwari.jpg";
import bookClerk from "@/assets/book-clerk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Book Store — Punjab Government Exam Books | Up to 40% Off" },
      {
        name: "description",
        content:
          "Premium study material for Punjab Police, Patwari, Clerk, PSSSB, PPSC & Jail Warder exams. Latest syllabus, fast delivery, trusted by thousands of aspirants.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "918054643829";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello, I want information about Punjab Government Exam books.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const categories = [
  { name: "Punjab Police", icon: ShieldCheck, tint: "from-blue-500/15 to-blue-500/0" },
  { name: "Patwari", icon: MapPin, tint: "from-emerald-500/15 to-emerald-500/0" },
  { name: "Clerk Exams", icon: BookOpen, tint: "from-amber-500/15 to-amber-500/0" },
  { name: "PSSSB", icon: Award, tint: "from-rose-500/15 to-rose-500/0" },
  { name: "PPSC", icon: Trophy, tint: "from-indigo-500/15 to-indigo-500/0" },
  { name: "Punjabi Language", icon: BookOpen, tint: "from-orange-500/15 to-orange-500/0" },
  { name: "General Knowledge", icon: Sparkles, tint: "from-teal-500/15 to-teal-500/0" },
  { name: "Current Affairs", icon: Zap, tint: "from-purple-500/15 to-purple-500/0" },
];

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  badge?: string;
};

const featured: Book[] = [
  { id: "illami", title: "Illami Punjab", author: "Smart Editorial Board", cover: bookIllami, price: 349, oldPrice: 599, rating: 4.8, reviews: 1284, badge: "Bestseller" },
  { id: "punjabi", title: "Punjabi Bhasha Ate Vyakaran", author: "Dr. Harpreet Singh", cover: bookPunjabi, price: 299, oldPrice: 499, rating: 4.9, reviews: 962, badge: "New Edition" },
  { id: "police", title: "Punjab Police Constable 2026", author: "Smart Publications", cover: bookPolice, price: 449, oldPrice: 799, rating: 4.7, reviews: 2341, badge: "Hot Deal" },
  { id: "gk", title: "Punjab GK Master Guide", author: "Inderjit Kaur", cover: bookGk, price: 279, oldPrice: 449, rating: 4.8, reviews: 1820 },
  { id: "current", title: "Punjab Current Affairs 2026", author: "Editorial Team", cover: bookCurrent, price: 199, oldPrice: 349, rating: 4.6, reviews: 740, badge: "Monthly" },
];

const bestsellers: Book[] = [
  ...featured,
  { id: "patwari", title: "Patwari Exam Guide", author: "Smart Publications", cover: bookPatwari, price: 399, oldPrice: 699, rating: 4.7, reviews: 1102, badge: "Top Pick" },
  { id: "clerk", title: "PSSSB Clerk Guide", author: "Editorial Board", cover: bookClerk, price: 379, oldPrice: 649, rating: 4.6, reviews: 845 },
  { id: "police-2", title: "Punjab Police Practice Sets", author: "Smart Publications", cover: bookPolice, price: 229, oldPrice: 399, rating: 4.8, reviews: 1654, badge: "Bestseller" },
  { id: "gk-2", title: "Punjab GK Quick Revision", author: "Inderjit Kaur", cover: bookGk, price: 189, oldPrice: 299, rating: 4.7, reviews: 580 },
];

const whyUs = [
  { icon: BookOpen, title: "Updated Syllabus", desc: "All books revised to the 2026 official Punjab exam syllabus." },
  { icon: Award, title: "Punjab Exam Experts", desc: "Curated by toppers and faculty who've cleared the same exams." },
  { icon: Truck, title: "Fast Delivery", desc: "Dispatched within 24 hrs across all Punjab districts." },
  { icon: Heart, title: "Affordable Prices", desc: "Premium quality at student-friendly prices, up to 40% off." },
  { icon: ShieldCheck, title: "Quality Content", desc: "Printed on premium paper with sharp, exam-focused content." },
  { icon: Users, title: "Trusted by Students", desc: "Tens of thousands of aspirants prepare with us every year." },
];

const testimonials = [
  {
    name: "Gurpreet Singh",
    exam: "Cleared Punjab Police Constable",
    text: "Cleared Punjab Police Exam using Smart Book Store material. The practice sets were exactly the level of the real paper.",
  },
  {
    name: "Simranjeet Kaur",
    exam: "Selected as Patwari",
    text: "The Patwari guide covers everything — revenue rules, GK, Punjabi. I revised only from these books in the final month.",
  },
  {
    name: "Arshdeep Singh",
    exam: "PSSSB Clerk Topper",
    text: "Best Punjab GK and Current Affairs compilation I've used. Delivery was super fast to my village too.",
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-card-soft"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-4">
        {/* Logo */}
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card-soft">
            <BookOpen className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight text-foreground md:text-lg">
              Smart Book Store
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:block">
              Punjab Exam Specialists
            </span>
          </span>
        </a>

        {/* Search */}
        <div className="col-span-2 order-3 md:order-2 md:col-span-1">
          <div className="group flex items-center gap-2 rounded-full border border-border bg-card pl-4 pr-1.5 py-1.5 shadow-card-soft transition focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/15">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search books, exams, authors…"
              className="min-w-0 flex-1 bg-transparent py-1.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button className="hidden shrink-0 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex">
              Search
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="order-2 flex shrink-0 items-center gap-1.5 md:order-3 md:gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hidden h-10 w-10 place-items-center rounded-full border border-border bg-card text-emerald-600 transition hover:bg-emerald-50 sm:grid"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.4.1 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4ZM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.8Zm5.4-7.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0-1.3-.5-2.4-1.5c-.9-.8-1.5-1.8-1.7-2.1s0-.4.2-.6c.2-.2.4-.4.5-.6.2-.2.2-.3.4-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.7 1.1 3 1.3 3.2c.2.2 2.3 3.5 5.6 4.9.8.4 1.4.6 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5 0-.1-.3-.2-.5-.4Z"/></svg>
          </a>
          <button aria-label="Cart" className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">2</span>
          </button>
          <button className="hidden h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-card-soft transition hover:bg-primary/90 md:inline-flex">
            Sign In
          </button>
          <button aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0 gradient-hero" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.15_50/0.25),transparent_60%)]" />

      <div className="container-x relative z-10 grid items-center gap-10 py-14 md:gap-14 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        {/* Copy */}
        <div className="relative animate-fade-up text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-white/90">Punjab Government Exam Specialists</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Punjab Government <br className="hidden sm:block" />
            <span className="text-gradient-gold">Exam Preparation</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Get premium, exam-focused study material for{" "}
            <span className="font-semibold text-white">Punjab Police, Patwari, Clerk, PSSSB, PPSC</span> and Jail Warder — trusted by toppers across Punjab.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-2.5 backdrop-blur">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-primary">
              <Trophy className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-gold/90">Limited Time</div>
              <div className="font-display text-xl font-bold text-white">Up to 40% Off</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="group inline-flex items-center gap-2 rounded-full gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-luxe transition hover:scale-[1.02]"
            >
              Shop Now
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#bestsellers"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              View Best Sellers
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-orange-400", "bg-amber-300", "bg-rose-400", "bg-indigo-300"].map((c, i) => (
                  <span key={i} className={`h-7 w-7 rounded-full border-2 border-primary ${c}`} />
                ))}
              </div>
              <span><span className="font-semibold text-white">50,000+</span> aspirants</span>
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="ml-1"><span className="font-semibold text-white">4.9</span> · 12k reviews</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-luxe">
            <img
              src={heroStudents}
              alt="Punjabi students preparing for Punjab government competitive exams"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Floating book card */}
          <div className="absolute -bottom-6 -left-4 hidden w-56 rotate-[-6deg] animate-float rounded-2xl bg-card p-3 shadow-luxe sm:block">
            <img src={bookPolice} alt="" className="h-32 w-full rounded-xl object-cover" />
            <div className="mt-2 px-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">Bestseller</div>
              <div className="truncate text-sm font-semibold text-foreground">Punjab Police 2026</div>
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute -right-2 top-6 hidden rounded-2xl bg-card/95 p-4 shadow-luxe backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Toppers</div>
                <div className="font-display text-xl font-bold text-foreground">2,400+</div>
                <div className="text-[11px] text-muted-foreground">Selected in 2025</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 right-6 animate-float [animation-delay:1.5s] rounded-2xl bg-gold p-3 shadow-gold-glow">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Star, label: "Trusted by Thousands" },
    { icon: Truck, label: "Fast Delivery" },
    { icon: BookOpen, label: "Latest Syllabus" },
    { icon: Trophy, label: "Exam-Focused" },
    { icon: ShieldCheck, label: "Secure Payments" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="container-x flex gap-6 overflow-x-auto py-4 hide-scrollbar md:justify-between md:overflow-visible md:py-5">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex shrink-0 items-center gap-2.5 text-sm">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent">
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeader
        eyebrow="Explore by Exam"
        title="Shop by Category"
        sub="Pick your target exam and find the exact books recommended by toppers."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
        {categories.map(({ name, icon: Icon, tint }) => (
          <a
            key={name}
            href="#featured"
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center lift"
          >
            <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b ${tint} opacity-0 transition group-hover:opacity-100`} />
            <span className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-primary transition group-hover:gradient-gold group-hover:text-primary group-hover:shadow-gold-glow">
              <Icon className="h-7 w-7" strokeWidth={1.8} />
            </span>
            <div className="font-display text-sm font-semibold text-foreground sm:text-base">{name}</div>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition group-hover:text-accent">
              Shop Books →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function BookCard({ book }: { book: Book }) {
  const discount = Math.round(((book.oldPrice - book.price) / book.oldPrice) * 100);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card lift">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {book.badge && (
          <span className="absolute left-3 top-3 rounded-full gradient-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-card-soft">
            {book.badge}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">
          -{discount}%
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-full items-center gap-2 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent p-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="pointer-events-auto inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-primary transition hover:bg-gold hover:text-primary">
            <Plus className="h-3.5 w-3.5" /> Add to Cart
          </button>
          <button aria-label="Quick view" className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="font-semibold text-foreground">{book.rating}</span>
          <span className="text-muted-foreground">({book.reviews.toLocaleString()})</span>
        </div>
        <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-foreground">
          {book.title}
        </h3>
        <p className="text-xs text-muted-foreground">by {book.author}</p>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="font-display text-lg font-bold text-foreground">₹{book.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{book.oldPrice}</span>
        </div>
      </div>
    </article>
  );
}

function Featured() {
  return (
    <section id="featured" className="container-x py-16 md:py-24">
      <SectionHeader
        eyebrow="Hand-picked for 2026"
        title="Featured Books"
        sub="Curated by toppers and faculty — the essentials every aspirant should own."
        action={<a href="#bestsellers" className="hidden text-sm font-semibold text-accent hover:underline md:inline-flex">View all →</a>}
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {featured.map((b) => <BookCard key={b.id} book={b} />)}
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section id="bestsellers" className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow="Most Loved"
          title="Best Sellers"
          sub="The books Punjab's exam toppers reach for first."
        />
      </div>
      <div className="container-x">
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 hide-scrollbar md:-mx-8 md:gap-6 md:px-8">
          {bestsellers.map((b) => (
            <div key={b.id} className="w-[180px] shrink-0 snap-start sm:w-[220px] md:w-[260px]">
              <BookCard book={b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-0 opacity-50 [background-image:radial-gradient(circle_at_15%_20%,oklch(0.45_0.15_50/0.3),transparent_50%),radial-gradient(circle_at_85%_80%,oklch(0.55_0.12_85/0.25),transparent_50%)]" />
      <div className="container-x relative py-16 md:py-24">
        <SectionHeader
          eyebrow="Why Aspirants Choose Us"
          title="Built for Punjab Toppers"
          sub="Every book, every page, every practice paper — engineered for the Punjab exam syllabus."
          dark
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-gold/40 hover:bg-white/[0.08]"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl gradient-gold text-primary shadow-gold-glow">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeader
        eyebrow="Student Success"
        title="From Aspirants to Toppers"
        sub="Real stories from students who cracked their Punjab government exams with us."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition hover:shadow-luxe"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-base leading-relaxed text-foreground">
              "{t.text}"
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-bold text-primary-foreground ${
                  ["bg-accent", "bg-primary", "bg-gold"][i % 3]
                }`}
              >
                {t.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <div className="truncate font-semibold text-foreground">{t.name}</div>
                <div className="truncate text-xs font-medium uppercase tracking-wider text-accent">{t.exam}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function SpecialOffer() {
  return (
    <section className="container-x py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-8 shadow-luxe md:p-14">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Clock className="h-3.5 w-3.5" /> Limited Stock
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Crack Your Exam <span className="text-gradient-gold">Faster.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/75">
              Get premium study material today and join thousands of toppers preparing the smart way.
            </p>
            <a
              href="#featured"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-luxe transition hover:scale-[1.02] hover:bg-gold"
            >
              Shop Collection
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative hidden h-56 md:block">
            {[bookIllami, bookPolice, bookGk].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`absolute h-56 w-40 rounded-xl border-4 border-white/20 object-cover shadow-luxe ${
                  ["left-0 top-2 -rotate-12", "left-1/3 top-0 rotate-3 z-10", "right-0 top-4 rotate-12"][i]
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="container-x py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          <Mail className="h-3.5 w-3.5" /> Stay in the Loop
        </div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Latest Punjab Exam <span className="text-accent">Notifications</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Get exam dates, syllabus updates, free practice papers and exclusive offers — straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-7 flex max-w-md flex-col gap-2 rounded-full border border-border bg-card p-1.5 shadow-card-soft sm:flex-row sm:items-center"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
          >
            Subscribe
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl gradient-gold text-primary">
              <BookOpen className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold">Smart Book Store</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Trusted Punjab Government Exam study material — handpicked by toppers, delivered fast across Punjab.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-gold hover:text-gold"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" items={["About Us", "Best Sellers", "New Arrivals", "Offers", "Track Order"]} />
        <FooterCol
          title="Exam Categories"
          items={["Punjab Police", "Patwari", "PSSSB Clerk", "PPSC", "Punjabi Bhasha", "Current Affairs"]}
        />
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Ludhiana, Punjab, India</li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +91 80546 43829</li>
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> hello@smartbookstore.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Smart Book Store. All rights reserved.</span>
          <span>Made with care for Punjab's future officers.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-white/75">
        {items.map((i) => (
          <li key={i}><a href="#" className="transition hover:text-gold">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
  action,
  dark,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  action?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-3 md:mb-14 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <div className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-gold" : "text-accent"}`}>
          {eyebrow}
        </div>
        <h2 className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem] ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        {sub && (
          <p className={`mt-3 text-base leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>
            {sub}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-20 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-110 md:bottom-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.4.1 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4ZM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 1 1 12 21.8Zm5.4-7.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0-1.3-.5-2.4-1.5c-.9-.8-1.5-1.8-1.7-2.1s0-.4.2-.6c.2-.2.4-.4.5-.6.2-.2.2-.3.4-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.7 1.1 3 1.3 3.2c.2.2 2.3 3.5 5.6 4.9.8.4 1.4.6 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5 0-.1-.3-.2-.5-.4Z"/></svg>
    </a>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 backdrop-blur-xl md:hidden">
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.4.1 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4Z"/></svg>
        </a>
        <a
          href="#featured"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl gradient-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-card-soft"
        >
          <ShoppingCart className="h-4 w-4" /> Shop Books · Up to 40% Off
        </a>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Featured />
        <BestSellers />
        <WhyChoose />
        <Testimonials />
        <SpecialOffer />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyCTA />
    </div>
  );
}
