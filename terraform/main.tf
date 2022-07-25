variable "domain" {
  type = string
  default = "portfolio.pmh.codes"
}

variable "bucketnm" {
  type = string
  default = "portfoliov6"
}

variable "cicdnm" {
  type = string
  default = "portfoliov6"
}

variable "originnm" {
  type = string
  default = "s3-frontend" 
}

variable "region" {
  type = string
  default = "ap-northeast-2" 
}

variable "sourcerepo" {
  type = string
  default = "pmh-only/portfoliov6"
}

variable "sourcebranch" {
  type = string
  default = "main"
}

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}

provider "aws" {
  alias = "n_verginia"
  region = "us-east-1"
}
