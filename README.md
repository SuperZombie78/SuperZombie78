# Civil Engineering Portfolio

A static, responsive portfolio site for presenting civil engineering education,
internship experience, hands-on projects, and contact information.

## Personalize the portfolio

Before publishing, replace the clearly marked sample fields with your own:

- Internship dates and responsibilities
- Dates and details for earlier roles
- Project names, descriptions, photos, and your role
- Skills, email address, and professional profile links

Do not publish project or internship details that are confidential or that you
do not have permission to share.

## Publish with GitHub Pages

1. Push this repository to GitHub. The included workflow builds and deploys the
   site whenever changes are pushed to `main`.
2. In the repository, open **Settings → Pages** and set the build source to
   **GitHub Actions**.
3. If your default branch is not named `main`, update the branch name in
   `.github/workflows/deploy-civil-engineering-portfolio.yml`.
4. Open the **Actions** tab to follow the first deployment. GitHub Pages will
   show the published URL in the deployment details.

The workflow automatically handles both a project site
(`username.github.io/repository-name/`) and a user site
(`username.github.io/`).

## Local development

```sh
pnpm install
pnpm --filter @workspace/civil-engineering-portfolio run dev
```

To create a production build, provide `PORT` and `BASE_PATH` and run:

```sh
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/civil-engineering-portfolio run build
```

The generated static files are in
`artifacts/civil-engineering-portfolio/dist/public`.
