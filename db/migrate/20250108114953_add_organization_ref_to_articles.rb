class AddOrganizationRefToArticles < ActiveRecord::Migration[8.0]
  def change
    add_reference :articles, :organization, null: false, foreign_key: true
  end
end
