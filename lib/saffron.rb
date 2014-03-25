require "saffron/version"
require "thor"

module Saffron
  class Installer < Thor
    include Thor::Actions

    desc "install", "Installs Saffron."
    option :path
    def install
      unless saffron_already_exists?
        install_saffron
        puts "Saffron succesfully installed at #{@path}/"
      else
        puts "Saffron already exists."
      end
    end

    desc "version", "Outputs version number."
    def version
      say "#{Saffron::VERSION}"
    end

    private
    def saffron_already_exists?
      @path.exists?
    end

    def install_saffron
      directory @path, @source
    end
  end
end
