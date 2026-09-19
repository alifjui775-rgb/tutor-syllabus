# Study Tracker Pro

Create a new React + JSX project named "StudyTrack".

This is a personal tuition/student teaching tracker for a teacher.

Tech stack:

React

JSX

Vite

React Router

Tailwind CSS

Lucide React

Supabase

Supabase Authentication

PostgreSQL

Row Level Security

IMPORTANT:

Do NOT use Firebase.

Do NOT use TypeScript.

Use JSX and JavaScript only.

Create a completely new project folder named "study-track".

Do not modify any existing project.

Keep the code simple, clean, and beginner-friendly.

Do not add unnecessary features.

Core concept:

The teacher can create students and assign only the subjects that the teacher actually teaches to each student.

Example:

Rahim:

Physics only

Karim:

Physics

Chemistry

Rahim must NOT see Chemistry, Higher Math, or ICT.

Karim must only see Physics and Chemistry.

The application must dynamically display subjects based on student_subjects records.

Authentication:

Create Login page.

Use Supabase Auth with email/password.

Create AuthContext.jsx.

Persist authentication session.

Create ProtectedRoute.jsx.

Unauthenticated users should be redirected to Login.

Authenticated users should access Dashboard.

Add Logout functionality.

Pages:

Login

Dashboard

Students

Add Student

Student Details

Class History

Settings

Dashboard:
Show:

Total students

Active students

Total completed chapters

Today's classes

Recent teaching activity

Students page:
Show all students belonging to the currently logged-in teacher.

Each student card should show:

Name

Class

Group

Assigned subjects

Overall progress

Add Student:
Fields:

Name

Class

Group

School

Phone

Notes

Subjects

Subject selection should use checkboxes.

Default subjects:

Physics

Chemistry

Higher Math

ICT

Do not automatically assign all subjects.

Student Details:
Show only subjects assigned to that student.

For every assigned subject:

Show subject name

Show chapter list

Show chapter status

Show progress percentage

Chapter statuses:

not_started

running

completed

Allow the teacher to change chapter status.

When status becomes completed:

Set completed_at.

When status changes away from completed:

Clear completed_at.

Class History:
Allow the teacher to record:

Student

Subject

Chapter

Topic

Date

Duration

Notes

Only show subjects assigned to the selected student.

Database tables already planned:

profiles
students
subjects
student_subjects
chapters
student_chapters
class_sessions

Use the Supabase database structure and RLS policies defined for this project.

Security:

Never use the Supabase service_role key in frontend code.

Use only the public/anon key.

Respect Supabase RLS.

A teacher must only access their own students and related student data.

Do not bypass RLS from the frontend.

UI:

Simple

Clean

Professional

Responsive

Mobile friendly

No unnecessary gradients

Use cards, tables, badges and progress bars

Use Lucide icons

Clear empty states

Loading states

Error states

Confirmation before destructive actions

Routing:
/
→ redirect to /dashboard if authenticated
→ redirect to /login if unauthenticated

/login
/dashboard
/students
/students/new
/students/
/history
/settings

Create the project with this structure:

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tutor-syllabus.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f72f4709-075c-4de9-83cb-3a811dfe0cd3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
