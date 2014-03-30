require "saffron/version"
require "thor"

module Saffron
  class Installer < Thor
    include Thor::Actions
    source_root File.dirname(__FILE__)
    map ["--version", "-v"] => :version

    desc "install", "Installs Saffron."
    method_option :path, :aliases => "-p", :desc => "Set the install path"
    def install
      unless File.directory? set_destination
        set_destination
        install_saffron
        puts "Saffron succesfully installed in #{@destination}/"
      else
        puts "Saffron already exists."
      end
    end

    desc "update", "Updates Saffron."
    method_option :path, :aliases => "-p", :desc => "Set the update path"
    def update
      if File.directory? set_destination
        remove_saffron
        install_saffron
        puts "Saffron succesfully updated in #{@destination}/"
      else
        puts "Saffron not found. No updates occured."
      end
    end

    desc "version", "Outputs version number."
    def version
      say "Saffron #{Saffron::VERSION}"
    end

    private
    def set_destination
      @destination ||= if options[:path]
        File.join(options[:path], "saffron")
      else
        "saffron"
      end
    end

    def install_saffron
      directory "../../saffron/", @destination
    end

    def remove_saffron
      remove_dir @destination
    end
  end
end
