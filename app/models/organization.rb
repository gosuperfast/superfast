class Organization < ApplicationRecord
  before_create :assign_subdomain

  has_many :memberships, dependent: :destroy
  has_many :members, through: :memberships, source: :user
  has_many :articles, dependent: :destroy

  validates :publication_name, presence: true, uniqueness: { case_sensitive: false }

  private

  def assign_subdomain
    self.subdomain ||= publication_name.parameterize
  end
end
