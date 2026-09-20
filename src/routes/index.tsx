import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — StudyTrack" },
      {
        name: "description",
        content: "Track students, lessons, chapters, and teaching progress with StudyTrack.",
      },
      { property: "og:title", content: "Dashboard — StudyTrack" },
      {
        property: "og:description",
        content: "A clear, practical teaching tracker for private tutors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

const stats = [
  { label: "Total students", value: "12", detail: "2 added this month", icon: Users },
  { label: "Active students", value: "10", detail: "83% of all students", icon: GraduationCap },
  { label: "Chapters completed", value: "48", detail: "+6 this week", icon: CheckCircle2 },
  { label: "Today's classes", value: "3", detail: "Next at 4:30 PM", icon: CalendarDays },
];

const students = [
  { name: "Rahim Ahmed", meta: "Class 10 · Science", subjects: ["Physics"], progress: 68 },
  {
    name: "Karim Hasan",
    meta: "Class 11 · Science",
    subjects: ["Physics", "Chemistry"],
    progress: 42,
  },
  {
    name: "Nusrat Jahan",
    meta: "Class 9 · Science",
    subjects: ["Higher Math", "ICT"],
    progress: 76,
  },
];

const activities = [
  { student: "Rahim Ahmed", subject: "Physics", topic: "Motion and Force", time: "Today, 10:30 AM" },
  { student: "Karim Hasan", subject: "Chemistry", topic: "Atomic Structure", time: "Yesterday, 5:00 PM" },
  { student: "Nusrat Jahan", subject: "ICT", topic: "Number Systems", time: "Sep 18, 4:15 PM" },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
        <BookOpen className="size-5" aria-hidden="true" />
      </span>
      <span className="text-lg font-bold text-foreground">StudyTrack</span>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-border bg-sidebar lg:flex lg:flex-col">
        <div className="flex h-20 items-center border-b border-border px-6">
          <Brand />
        </div>
        <nav className="flex-1 space-y-1 p-4" aria-label="Main navigation">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={Users} label="Students" />
          <NavItem icon={History} label="Class history" />
          <NavItem icon={Settings} label="Settings" />
        </nav>
        <div className="border-t border-border p-4">
          <div className="mb-3 flex items-center gap-3 px-2">
            <span className="grid size-9 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
              TA
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Teacher Account</p>
              <p className="truncate text-xs text-muted-foreground">teacher@example.com</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <LogOut aria-hidden="true" /> Log out
          </Button>
        </div>
      </aside>

      <main className="pb-24 lg:ml-64 lg:pb-10">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur md:px-8 lg:h-20">
          <div className="lg:hidden"><Brand /></div>
          <div className="hidden lg:block">
            <p className="text-sm text-muted-foreground">Sunday, September 20</p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="lg:hidden" aria-label="Open menu">
              <Menu aria-hidden="true" />
            </Button>
            <Button className="hidden sm:inline-flex">
              <Plus aria-hidden="true" /> Add student
            </Button>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-8 md:py-8">
          <section className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-medium text-primary">Overview</p>
              <h1 className="text-2xl font-bold md:text-3xl">Good afternoon</h1>
              <p className="mt-1 text-sm text-muted-foreground">Here’s how your students are progressing.</p>
            </div>
            <Button size="icon" className="sm:hidden" aria-label="Add student">
              <Plus aria-hidden="true" />
            </Button>
          </section>

          <section className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Teaching summary">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="rounded-lg border border-border bg-card p-4 shadow-sm md:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid size-9 place-items-center rounded-md bg-secondary text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="text-2xl font-bold md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium">{stat.label}</p>
                  <p className="mt-2 hidden text-xs text-muted-foreground sm:block">{stat.detail}</p>
                </article>
              );
            })}
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
            <section className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <h2 className="font-semibold">Student progress</h2>
                  <p className="mt-0.5 text-xs text-muted-foreground">Your most recently updated students</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  View all <ChevronRight aria-hidden="true" />
                </Button>
              </div>
              <div className="divide-y divide-border">
                {students.map((student) => (
                  <article key={student.name} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-primary">
                          {student.name.split(" ").map((part) => part[0]).join("")}
                        </span>
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold">{student.name}</h3>
                          <p className="text-xs text-muted-foreground">{student.meta}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-primary">{student.progress}%</span>
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${student.progress}%` }} />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {student.subjects.map((subject) => (
                        <span key={subject} className="rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="border-b border-border px-5 py-4">
                <h2 className="font-semibold">Recent activity</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">Latest lessons you recorded</p>
              </div>
              <div className="divide-y divide-border">
                {activities.map((activity) => (
                  <article key={`${activity.student}-${activity.topic}`} className="flex gap-3 p-5">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
                      <Clock3 className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{activity.student}</p>
                      <p className="mt-0.5 truncate text-sm text-muted-foreground">
                        {activity.subject} · {activity.topic}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="p-4">
                <Button variant="outline" className="w-full">Record a class</Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-border bg-background px-2 py-2 lg:hidden" aria-label="Mobile navigation">
        <MobileNavItem icon={LayoutDashboard} label="Dashboard" active />
        <MobileNavItem icon={Users} label="Students" />
        <MobileNavItem icon={History} label="History" />
        <MobileNavItem icon={Settings} label="Settings" />
      </nav>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: typeof Users; label: string; active?: boolean }) {
  return (
    <Button variant="ghost" className={`w-full justify-start ${active ? "bg-accent text-primary" : "text-muted-foreground"}`}>
      <Icon aria-hidden="true" /> {label}
    </Button>
  );
}

function MobileNavItem({ icon: Icon, label, active = false }: { icon: typeof Users; label: string; active?: boolean }) {
  return (
    <Button variant="ghost" className={`h-14 flex-col gap-1 px-1 text-xs ${active ? "text-primary" : "text-muted-foreground"}`}>
      <Icon className="size-5" aria-hidden="true" /> {label}
    </Button>
  );
}
