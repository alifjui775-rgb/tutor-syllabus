# Students navigation and page

## What will change
- Make the desktop and mobile **Students** navigation open a real `/students` page.
- Make **View all** and **Add student** links open the appropriate student pages.
- Add a clean Students list using the current sample students, with search, subject badges, progress, and clear empty-search feedback.
- Add a simple Add Student form at `/students/new` so the main action is not a dead link.
- Keep the existing StudyTrack visual style and mobile layout.

## Technical details
- Use TanStack Router `Link` navigation and create matching route files in the same change.
- Extract the repeated StudyTrack shell/navigation into a shared component so active states work consistently.
- Add unique page metadata for each new route.
- Verify navigation and layout in the live preview on mobile and desktop.
