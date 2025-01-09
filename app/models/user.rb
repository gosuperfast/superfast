class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :memberships, dependent: :destroy
  has_many :organizations, through: :memberships

  has_many :articles, foreign_key: :author_id

  validates :full_name, presence: true

  def current_organization
    organizations.first
  end

  def subdomain
    current_organization.subdomain
  end
end
