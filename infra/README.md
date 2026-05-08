# Infrastructure: Cloudflare Pages (OpenTofu)

Declarative infrastructure for the `krapp.dev` portfolio. Provisions:

- A Cloudflare **Pages** project wired to `KrappRamiro/devops-portfolio` on GitHub
- Two **custom domains** on the project: `krapp.dev` (apex) and `www.krapp.dev`
- Two **DNS records** (CNAME, proxied) pointing to the Pages subdomain

## Prerequisites

1. **OpenTofu** ≥ 1.6 installed (`brew install opentofu`)
2. A **Cloudflare account** with `krapp.dev` already added as a zone
3. **GitHub OAuth connection** in Cloudflare Pages. This is a one-time manual step:
   - Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
   - Authorize Cloudflare on your GitHub account / org
   - You can cancel the wizard after authorization; OpenTofu takes over from there
4. A **Cloudflare API token** with the scopes:
   - `Account` → `Cloudflare Pages:Edit`
   - `Zone` → `Zone:Read`
   - `Zone` → `DNS:Edit`
   - Resources: include the account hosting the zone and the `krapp.dev` zone

## Setup

```bash
cd infra/
cp terraform.tfvars.example terraform.tfvars   # gitignored
# fill in cloudflare_api_token and cloudflare_account_id
tofu init
tofu plan
tofu apply
```

Alternative (no tfvars file): export env vars before running tofu.

```bash
export TF_VAR_cloudflare_api_token="..."
export TF_VAR_cloudflare_account_id="..."
tofu plan
```

## Files

| File | Purpose |
|------|---------|
| `providers.tf` | Cloudflare provider pin and (optional) remote backend |
| `variables.tf` | Input variables with defaults |
| `main.tf` | Pages project, custom domains, DNS records |
| `outputs.tf` | Useful outputs after apply |
| `terraform.tfvars.example` | Template for local secrets file |

## State

Local state is fine for a single-maintainer site. For shared/team use, uncomment
one of the backend examples in `providers.tf` (Cloudflare R2 via S3-compatible
endpoint is recommended, keeps everything in Cloudflare).

`*.tfstate*`, `terraform.tfvars`, and `.terraform/` are gitignored. **Do not
commit them.** State files contain secrets in plain text.

## Destroying

```bash
tofu destroy
```

This removes the Pages project, custom domains, and DNS records. The Cloudflare
zone and the GitHub OAuth connection are left untouched.
