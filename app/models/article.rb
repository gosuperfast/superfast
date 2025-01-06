class Article < ApplicationRecord
  belongs_to :user

  validate :title, presence: true
end
