# frozen_string_literal: true

module App
  class DashboardController < ApplicationController
    before_action :authenticate_user!

    def index
      @username = current_user.full_name
    end
  end
end
