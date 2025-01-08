class Organization < ApplicationRecord
  has_many :members, class_name: 'User'
  has_many :articles

  validates :publication_name, presence: true, uniqueness: { case_sensitive: false }
end
