# frozen_string_literal: true

require_relative "lib/superfast/version"

Gem::Specification.new do |spec|
  spec.name          = "superfast"
  spec.version       = Superfast::VERSION
  spec.summary       = "A lightweight and fast CMS for Rails."
  spec.description   = "Superfast CMS is designed to make publishing simple, fast, and scalable."
  spec.authors       = ["Anudeep Chirumalla"]
  spec.email         = ["anudeep@superfast.sh"]
  spec.homepage      = "https://github.com/gosuperfast/superfast"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 3.0.0"

  # Runtime dependencies
  spec.add_dependency "rails", "~> 8.0.0"
  spec.add_dependency "propshaft"
  spec.add_dependency "pg", "~> 1.1"
  spec.add_dependency "puma", ">= 5.0"
  spec.add_dependency "importmap-rails"
  spec.add_dependency "turbo-rails"
  spec.add_dependency "stimulus-rails"
  spec.add_dependency "jbuilder"

  # Optional runtime dependencies
  spec.add_dependency "solid_cache"
  spec.add_dependency "solid_queue"
  spec.add_dependency "solid_cable"


  # Files to include in the gem
  gemspec = File.basename(__FILE__)
  spec.files = IO.popen(%w[git ls-files -z], chdir: __dir__, err: IO::NULL) do |ls|
    ls.readlines("\x0", chomp: true).reject do |f|
      (f == gemspec) ||
        f.start_with?(*%w[bin/ test/ spec/ features/ .git .github appveyor Gemfile])
    end
  end

  # Executables and required paths
  # spec.bindir = "exe"
  # spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Include relevant directories
  spec.files += Dir["{app,config,db,lib}/**/*", "bin/*", "*.md", "*.gemspec"]

end
