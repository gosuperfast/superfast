# frozen_string_literal: true

require_relative "superfast/version"

module Superfast
  class Error < StandardError; end
  # Your code goes here...

  def self.setup
    # Configuration or setup logic can go here
    puts "Superfast gem is loaded!"
  end
end
