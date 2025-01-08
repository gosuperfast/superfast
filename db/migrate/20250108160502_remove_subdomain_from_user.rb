class RemoveSubdomainFromUser < ActiveRecord::Migration[8.0]
  def change
    remove_column :users, :subdomain, :string
  end
end
