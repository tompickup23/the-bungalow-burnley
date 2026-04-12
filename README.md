# The Bungalow Burnley Website

Static website for The Bungalow Burnley, designed to run on GitHub Pages without a build step.

## Hosting

- Host: GitHub Pages
- Source: `main` branch, repository root
- DNS: Leave unchanged until the Pages deployment is live and reviewed

## Legal readiness

Included:

- Privacy policy for the static site
- Cookie policy and necessary-only notice
- Website terms
- Safety information
- Accessibility information
- Booking/contact routing through the booking partner

Still required before custom-domain launch:

- Legal owner/operator name
- Service email address
- Phone number, if direct phone support is offered
- Correspondence address or registered office, if applicable
- Company number and VAT number, if applicable
- Confirmed direct booking terms, if the site later accepts direct bookings

## Later DNS stage

Only after the site is approved, point the domain at the Pages site:

- Apex domain: GitHub Pages A records
- `www`: CNAME to the GitHub Pages host
- Add a `CNAME` file to this repository when the final domain is confirmed

Do not change nameservers or DNS records before the live Pages URL has been checked.
