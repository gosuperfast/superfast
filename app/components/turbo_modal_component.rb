# frozen_string_literal: true

include Turbo::FramesHelper

class TurboModalComponent < ViewComponent::Base
  def initialize(title:)
    @title = title
  end
end
