class AddPublicationNameIndexUniqueToOrganization < ActiveRecord::Migration[8.0]
  def change
    add_index :organizations, :publication_name, unique: true
  end
end
