class RemoveUserRefFromArticles < ActiveRecord::Migration[8.0]
  def change
    remove_reference :articles, :user, null: false, foreign_key: true
  end
end
