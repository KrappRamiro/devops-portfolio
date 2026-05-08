variable "cloudflare_api_token" {
  description = "Cloudflare API token. Required scopes: Account · Cloudflare Pages:Edit; Zone · DNS:Edit; Zone · Zone:Read."
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID. Find it in the Cloudflare dashboard sidebar."
  type        = string
  sensitive   = true
}

variable "cloudflare_domain" {
  description = "Apex domain managed by this stack."
  type        = string
  default     = "krapp.dev"
}

variable "github_owner" {
  description = "GitHub owner that hosts the source repo."
  type        = string
  default     = "KrappRamiro"
}

variable "github_repo" {
  description = "GitHub repository name."
  type        = string
  default     = "devops-portfolio"
}

variable "production_branch" {
  description = "Branch that triggers production deployments."
  type        = string
  default     = "main"
}

variable "pages_project_name" {
  description = "Name of the Cloudflare Pages project."
  type        = string
  default     = "portfolio"
}
