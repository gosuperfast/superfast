class HomeController < ApplicationController
  before_action :authenticate_user!, only: :product

  layout 'home'

  def index; end

  def product; end
end
