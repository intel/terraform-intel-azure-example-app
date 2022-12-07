terraform {
  required_version = ">=1.3.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.26.0"
    }
  }
  cloud {
    organization = "intel-hashicorp"
    workspaces {
      name = "intel-azure-example-app"
    }
  }
}