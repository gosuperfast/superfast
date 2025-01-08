class User < ApplicationRecord
  before_create :assign_subdomain
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  belongs_to :organization

  has_many :articles, foreign_key: :author_id

  validates :full_name, presence: true

  private

  def assign_subdomain
    self.subdomain ||= full_name.parameterize
  end
end
