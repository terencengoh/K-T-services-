# K&T Services website

Static, multi-page site for K&T Services, the small-business practice led by Terence Ngoh. The site covers website building, local business growth, and practical sales and operations help.

## Pages

- `index.html` — Home, with a services overview, how-we-work steps, and a free sales-presence audit call to action
- `services.html` — Website building, local business growth, and small-business problem-solving
- `about.html` — Terence Ngoh and the audit-first approach
- `contact.html` — Contact details and inquiry form
- `thank-you.html` — Optional confirmation page after a form submission

## Local preview

From this directory:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## GitHub Pages

The site is ready to publish from the repository root. In the GitHub repo, enable Pages (Deploy from a branch, folder `/`). The included `.nojekyll` file stops Jekyll from processing the files.

After the first contact-form submission, FormSubmit sends a one-time activation email to `terencenjeck52@gmail.com`. Confirm that email or submissions will not be delivered. A mailto fallback is also on the contact page.

The form’s hidden `_next` field returns visitors to `https://terencengoh.github.io/k-and-t-services/thank-you.html`.

`sitemap.xml` lists the public pages. `robots.txt` points at that sitemap. On this GitHub Pages project site, that file is served at `https://terencengoh.github.io/k-and-t-services/robots.txt`, not at the domain root (`https://terencengoh.github.io/robots.txt`). Google only reads a host’s root `robots.txt`, so submit the sitemap URL directly in Google Search Console.
