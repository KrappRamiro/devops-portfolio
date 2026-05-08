data "cloudflare_zone" "krapp" {
  filter = {
    account_id = var.cloudflare_account_id
    name       = var.cloudflare_domain
  }
}

resource "cloudflare_pages_project" "portfolio" {
  account_id        = var.cloudflare_account_id
  name              = var.pages_project_name
  production_branch = var.production_branch

  source = {
    type = "github"
    config = {
      owner                          = var.github_owner
      repo_name                      = var.github_repo
      production_branch              = var.production_branch
      pr_comments_enabled            = true
      production_deployments_enabled = true
      preview_deployment_setting     = "all"
    }
  }

  build_config = {
    build_command   = "npm run build"
    destination_dir = "dist"
    build_caching   = true
  }
}

resource "cloudflare_pages_domain" "apex" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.portfolio.name
  name         = var.cloudflare_domain
}

resource "cloudflare_pages_domain" "www" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.portfolio.name
  name         = "www.${var.cloudflare_domain}"
}

# Apex CNAME (Cloudflare flattens CNAMEs at the apex when proxied).
resource "cloudflare_dns_record" "apex" {
  zone_id = data.cloudflare_zone.krapp.id
  name    = var.cloudflare_domain
  type    = "CNAME"
  content = cloudflare_pages_project.portfolio.subdomain
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "www" {
  zone_id = data.cloudflare_zone.krapp.id
  name    = "www"
  type    = "CNAME"
  content = cloudflare_pages_project.portfolio.subdomain
  proxied = true
  ttl     = 1
}
