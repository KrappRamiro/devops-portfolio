terraform {
  required_version = ">= 1.6.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5"
    }
  }

  # Local state by default. For team use, switch to a remote backend
  # (Cloudflare R2, Terraform Cloud, S3, etc.) and uncomment one of the
  # examples below.
  #
  # backend "s3" {
  #   bucket   = "krapp-tofu-state"
  #   key      = "portfolio/terraform.tfstate"
  #   endpoint = "https://<account-id>.r2.cloudflarestorage.com"
  #   region   = "auto"
  #   # Credentials come from env vars: AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY
  # }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
