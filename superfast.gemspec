# superfast.gemspec
Gem::Specification.new do |spec|
  spec.name          = "superfast"
  spec.version       = Superfast::VERSION
  spec.authors       = ["Anudeep Chirumalla"]
  spec.email         = ["anudeep@superfast.sh"]
  spec.summary       = "Superfast is a lightweight CMS gem."
  spec.description   = "Superfast CMS provides tools for fast, simple, and scalable content management."
  spec.homepage      = "https://superfast.sh"
  spec.license       = "MIT"

  spec.files         = Dir["lib/**/*.rb", "README.md", "LICENSE"]
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rspec", "~> 4.0"
end
