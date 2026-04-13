# The Bungalow Burnley Website

Static website for The Bungalow Burnley, designed to run on GitHub Pages without a build step.

## Hosting

- Host: GitHub Pages
- Source: `main` branch, repository root
- DNS: Cloudflare DNS points the apex and `www` records to GitHub Pages

## Custom domain

Target domain: `thebungalowburnley.co.uk`

Repository includes a `CNAME` file for GitHub Pages custom-domain support.

## Email

Suggested contact mailbox: `bookings@thebungalowburnley.co.uk`

Email routing plan: Cloudflare Email Routing forwards inbound mail to the owner's chosen Gmail/Hotmail account. SMTP2GO can be used for outbound sending from the domain.

## Legal readiness

Included:

- Privacy policy for the static site
- Cookie policy and necessary-only notice
- Website terms
- Safety information
- Accessibility information
- Booking/contact routing by direct email

Still required before full commercial launch:

- Legal owner/operator name
- Service email address routing
- Phone number, if direct phone support is offered
- Correspondence address or registered office, if applicable
- Company number and VAT number, if applicable
- Confirmed direct booking terms, if the site later accepts direct bookings

## Later DNS stage

Domain records for GitHub Pages:

- Apex domain: GitHub Pages A records
- `www`: CNAME to the GitHub Pages host
- `CNAME` is committed with `thebungalowburnley.co.uk`

Keep GitHub Pages records set to DNS only in Cloudflare until Pages has verified the custom domain and HTTPS is active.
