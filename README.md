# The Bungalow Burnley Website

Static website for The Bungalow Burnley, designed to run on GitHub Pages without a build step.

## Hosting

- Host: GitHub Pages
- Source: `main` branch, repository root
- DNS: Leave unchanged until the Pages deployment is live and reviewed

## Later DNS stage

Only after the site is approved, point the domain at the Pages site:

- Apex domain: GitHub Pages A records
- `www`: CNAME to the GitHub Pages host
- Add a `CNAME` file to this repository when the final domain is confirmed

Do not change nameservers or DNS records before the live Pages URL has been checked.
