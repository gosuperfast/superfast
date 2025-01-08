class Organization < ApplicationRecord
  has_many :members, class_name: 'User'
  has_many :articles
end
