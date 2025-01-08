class AddAuthorRefToArticles < ActiveRecord::Migration[8.0]
  def change
    add_reference :articles, :author, foreign_key: { to_table: :users }
  end
end
