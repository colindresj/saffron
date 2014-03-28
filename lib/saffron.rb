require "saffron/installer"
require "sass" unless defined? Sass

module Saffron
  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine
      require "saffron/engine"
    end
  else
    Sass.load_paths << File.expand_path("../saffron", __FILE__)
  end
end

