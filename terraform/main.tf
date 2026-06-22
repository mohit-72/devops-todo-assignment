data "azurerm_resource_group" "rg" {
  name = var.resource_group_name
}

data "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = data.azurerm_resource_group.rg.name
}

data "azurerm_postgresql_flexible_server" "postgres" {
  name                = var.postgres_server_name
  resource_group_name = data.azurerm_resource_group.rg.name
}

output "container_registry" {
  value = data.azurerm_container_registry.acr.login_server
}

output "postgres_server" {
  value = data.azurerm_postgresql_flexible_server.postgres.fqdn
}