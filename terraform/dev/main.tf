# Provision Intel Optimized Azure MySql server
module "optimized-mysql-server" {
  source              = "intel/azure-mysql_flexible_server/intel"
  resource_group_name = "terraform-example-app-rg"
  db_server_name      = "dev-intel-example-app01"
  db_password         = var.db_password
  tags = {
    Owner    = "Lucas.Melo@intel.com"
    Duration = "8"
  }
  db_firewall_rules = [
    {
      name             = "Services"
      start_ip_address = "192.168.10.0"
      end_ip_address   = "192.168.10.50"
    }
  ]
}
