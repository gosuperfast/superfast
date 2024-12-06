Gem::Specification.new do |spec|
  spec.name          = "superfast"
  spec.version       = "0.1.0" # Update version as needed
  spec.summary       = "A lightweight and fast CMS for Rails."
  spec.description   = "Superfast CMS is designed to make publishing simple, fast, and scalable."
  spec.authors       = ["Your Name"] # Add your name or organization
  spec.email         = ["your_email@example.com"] # Add your email
  spec.license       = "MIT" # Or another valid license
  spec.homepage      = "https://github.com/gosuperfast/superfast"

  # Include all relevant files
  spec.files         = Dir["{app,config,db,lib}/**/*", "bin/*", "*.md", "*.gemspec"]
  spec.executables   = ["superfast"]
  spec.require_paths = ["lib"]

  # Add runtime dependencies
  spec.add_dependency "rails", "~> 7.0"
  spec.add_dependency "pg", "~> 1.2"
  spec.add_dependency "libvips", "~> 8.0"

  # Add development dependencies
  spec.add_development_dependency "rspec", "~> 5.0"
  spec.add_development_dependency "rubocop", "~> 1.0"
end
