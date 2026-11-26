# Dineth Sewmina — Portfolio

Personal portfolio built with **Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion and Lucide Icons**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Update your content

**All text, links, skills, projects and credentials live in one file:**
[`src/data/portfolio.ts`](src/data/portfolio.ts). Search for `TODO` to find every placeholder.

| What | Where |
| --- | --- |
| Email / LinkedIn / GitHub | `socials` |
| Profile photo | put `profile.jpg` in `public/`, set `site.profileImage = "/profile.jpg"` |
| CV download | put your CV at `public/cv.pdf` |
| Internship dates | `experience[0].period` |
| Project GitHub links | `projects[].github` (add `demo` for a live link) |
| Education / training / certs | `education`, `training`, `certifications` (remove `placeholder: true` once filled) |
| Domain for SEO | `site.url` |

Add a new job, project or certificate by adding another object to the matching array — the UI picks it up automatically.

## Contact form

By default the form validates input and opens the visitor's email app with the message pre-filled (no backend needed).
To receive messages directly, create a free form at [Formspree](https://formspree.io) and replace the `mailto` logic in
`src/components/Contact.tsx` with a `fetch("https://formspree.io/f/<id>", { method: "POST", body: data })`.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) (zero config), or run `npm run build` and serve with `npm start` behind Nginx.

## Structure

```
src/
  app/          layout (SEO metadata, fonts), page, sitemap, robots, icon
  components/   Navbar, Hero, About, Skills, Experience, Projects, Credentials, Contact, Footer
  components/ui Section, Reveal (scroll animation), BrandIcons
  data/         portfolio.ts  ← edit me
```
