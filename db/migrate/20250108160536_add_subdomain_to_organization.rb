class AddSubdomainToOrganization < ActiveRecord::Migration[8.0]
  def change
    add_column :organizations, :subdomain, :string
  end
end
