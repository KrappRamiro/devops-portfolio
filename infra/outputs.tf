output "pages_subdomain" {
  description = "The default *.pages.dev subdomain for the project."
  value       = cloudflare_pages_project.portfolio.subdomain
}

output "production_url" {
  description = "Public URL where the site is served."
  value       = "https://${var.cloudflare_domain}"
}
