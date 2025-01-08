class AddOriganizationRefToUsers < ActiveRecord::Migration[8.0]
  def change
    add_reference :users, :organization, null: false, foreign_key: true
  end
end
