class Organization < ApplicationRecord
  has_many :members, class_name: 'User', dependent: :destroy
  has_many :articles, dependent: :destroy

  validates :publication_name, presence: true, uniqueness: { case_sensitive: false }
end
