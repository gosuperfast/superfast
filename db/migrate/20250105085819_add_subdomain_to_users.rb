class AddSubdomainToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :subdomain, :string
  end
end
