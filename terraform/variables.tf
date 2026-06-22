variable "resource_group_name" {
  default = "todo-rg"
}

variable "location" {
  default = "West US"
}

variable "acr_name" {
  default = "todoregistry7266"
}

variable "postgres_server_name" {
  default = "todo-db-7266b"
}

variable "container_app_env_name" {
  default = "todo-env"
}

variable "container_app_name" {
  default = "todo-api"
}