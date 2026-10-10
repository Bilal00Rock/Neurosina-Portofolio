# WordPress integration guide

## Current implementation

The portfolio is an independent, Persian RTL React website built with React 19, TypeScript, TanStack Start/Router, Tailwind CSS 4, Framer Motion, and Lucide React. Project records and case-study text are maintained in `src/data/projects.ts`; shared identity, contact, social, and SEO defaults are in `src/data/site.ts`. Original screenshots are stored in `public/projects/`.

The app has a full portfolio at `/portfolio`, a compact project-list route at `/projects`, and a case-study route at `/projects/:slug`. It does not require a project-content API or database.

## Recommendation

If the portfolio is intended to become a permanent section of the main WordPress website, reproduce it natively using the existing WordPress theme or block editor. Use a reusable Project custom post type (or the WordPress team's existing content model) with a case-study template. This gives the main site control over navigation, responsive behavior, analytics, accessibility, and SEO without creating a nested browsing experience.

Keep this React site as the reference implementation while the WordPress team recreates the approved project content and layout. The React project data is a useful content source, but its TypeScript modules are not WordPress templates and cannot be pasted into WordPress as executable page content.

If a native implementation is not ready and the section must be published quickly, embed the compact `/projects` route in an iframe as a temporary bridge. Prefer a standalone deployment on a stable, brand-neutral domain. Do not embed the full `/portfolio` page unless the WordPress team specifically wants the complete independent page inside the WordPress layout.

## Options and trade-offs

| Option | Benefits | Limitations and maintenance |
| --- | --- | --- |
| Embed the deployed React route in an iframe | Fast to publish; one React codebase; project changes appear without copying content into WordPress. | Requires the React host to allow the WordPress origin in its frame policy. The iframe has its own scrolling, navigation, accessibility context, analytics, and responsive height. Search engines may treat its content separately from the WordPress page; do not rely on the iframe for the main site's project SEO. |
| Rebuild with WordPress blocks, the existing theme, or a custom post type | Best integration with WordPress navigation, theme, responsive layout, analytics, accessibility, and page-level SEO. Project editors can manage entries in WordPress. | Requires implementation and ongoing maintenance by the WordPress team. Visual changes must be kept in sync deliberately; React components themselves are not reusable WordPress blocks. |
| Transfer structured project content and assets | Gives the WordPress team portable copy and original images without coupling the sites at runtime. | The current source of truth is TypeScript, not a WordPress-ready content API. Agree on a field schema and transfer process before creating an export; otherwise duplicate content can drift. |
| Host the production build separately | Keeps the React site independent while allowing WordPress to link to it or embed it. | The current build uses the Netlify Nitro preset and is not configured as a generic static export. Use a compatible host/adapter and preserve direct-route handling for `/projects/:slug`; verify metadata, asset paths, and redirects after deployment. |

## Suggested WordPress content fields

Use one record per project with:

- Project name, slug, category, short summary, and detailed description.
- Main image and an ordered gallery; include meaningful alt text for every image.
- Technologies, role, and status only when confirmed.
- Optional live demo, source-code, and official product website URLs as separate fields.
- Case-study sections (overview, challenge, solution, product experience, technology, and delivery) only where approved copy exists.

Keep a clear distinction between work presented in the portfolio and a project's official website. For example, Piano's official website is `https://techread.nl/`; this link does not establish that the portfolio project and the official product site are the same thing. The current repository does not contain confirmed Piano screenshots or case-study details, so the Piano entry is marked as incomplete.

## Iframe setup (temporary option)

1. Deploy the React app on a stable HTTPS hostname and set that hostname in `company.publicUrl` in `src/data/site.ts`.
2. Confirm the app's response headers allow framing by the WordPress site's exact origin. If the host sends `X-Frame-Options: DENY` / `SAMEORIGIN` or a restrictive Content Security Policy `frame-ancestors`, have the hosting administrator explicitly allow the WordPress origin. Do not remove protections globally.
3. Add a Custom HTML block (or the site's equivalent) with the deployed `/projects` route:

```html
<iframe
  src="https://YOUR-PORTFOLIO-DOMAIN/projects"
  title="Selected software and digital projects"
  loading="lazy"
  style="display:block;width:100%;min-height:1100px;border:0"
></iframe>
```

4. Test the iframe at desktop, tablet, and mobile widths. Adjust its height to the amount of content; the current page does not publish an automatic iframe-resize protocol. Confirm keyboard navigation and the mobile menu inside the frame.
5. Check that the WordPress content-security policy allows the iframe source (`frame-src`) and that the React host permits the WordPress origin (`frame-ancestors`).

The iframe is a separately rendered document. A heading, link, or project description in the React frame may not provide the same search visibility or accessibility as native content in the WordPress document.

## Native WordPress reproduction

1. Confirm the target WordPress version, theme or page builder, content editor permissions, hosting constraints, and who owns ongoing updates.
2. Agree on the project fields above and whether existing WordPress content already models projects.
3. Rebuild the section using native blocks/theme templates or a Project custom post type. Map each project to a reusable archive card and detail-page template; keep official-site links separate from portfolio-detail URLs.
4. Transfer only approved project copy and original images from `src/data/projects.ts` and `public/projects/`. Preserve image attribution/rights, crop ratios, alt text, and filenames as appropriate.
5. Recreate visual tokens (colors, typography, spacing, focus states, and reduced-motion behavior) in the WordPress theme rather than copying compiled React output.
6. Add unique page titles, descriptions, canonical URLs, and social-sharing images using the site's SEO tooling. Test project archive and detail-page URLs, mobile layouts, keyboard operation, and outbound links.
7. Once content parity and redirects are reviewed, the WordPress team can decide whether the React site remains available, is linked as a standalone portfolio, or is retired. No migration or deployment is performed by this change.

## Hosting, SEO, and operational notes

- The repository's `netlify.toml` configures `npm run build` and publishes `dist/`. The current Nitro build targets Netlify; it is not a promise that uploading `dist/` to arbitrary static hosting will serve server-rendered detail routes correctly.
- A WordPress page can include its own title and description, but content rendered in a cross-origin iframe should not be assumed to rank as if it were native WordPress content.
- Native WordPress pages can share the main site's URL structure and SEO controls. Plan redirects if project URLs change from `/projects/:slug`.
- Set the canonical base URL in `company.publicUrl` in `src/data/site.ts` only after the final public domain is confirmed. The supplied legacy deployment hostname is intentionally not embedded in this brand-neutral source.
- The current public project data is static and does not automatically synchronize with WordPress. Assign one owner/source of truth or establish a reviewed export/import process before both sites are edited independently.

## Information the WordPress team should confirm

- Final brand name, logo/brand assets, public domain, and canonical URL.
- WordPress version, theme/page builder, existing project content model, and page ownership.
- Approved Piano and Scratch descriptions, technologies, status, and any additional original screenshots. Piano assets and confirmed case-study details are not present in this repository.
- Whether the official project links, source repositories, contact email, and social links should be public.
- Whether the React route should be embedded temporarily, remain a standalone linked site, or be replaced by native WordPress pages.
