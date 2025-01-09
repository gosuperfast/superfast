class RemoveOrganizationRefFromUsers < ActiveRecord::Migration[8.0]
  def change
    remove_reference :users, :organization, null: false, foreign_key: true
  end
end
