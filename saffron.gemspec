# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'saffron/version'

Gem::Specification.new do |spec|
  spec.name          = "saffron"
  spec.version       = Saffron::VERSION
  spec.authors       = ["JC"]
  spec.email         = ["j@colindres.me"]
  spec.summary       = "A simple sass mixin library for animations and transitions."
  spec.homepage      = ""
  spec.license       = "MIT"
  s.description = <<-DESC
Saffron is a collection of sass mixins and helpers that make adding CSS3 animations and transitions much simpler.
Just include a mixin in your CSS declaration, then set any configuration using variables and mixin parameters.
  DESC


  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "sass", "~> 3.3"
  spec.add_dependency "thor"

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
