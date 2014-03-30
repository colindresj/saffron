require "bundler/gem_tasks"
require "cucumber/rake/task"

namespace :test do
  desc "Runs aruba tests"

  Cucumber::Rake::Task.new(:tests) do |t|
    t.cucumber_opts = "--format progress"
  end

  Cucumber::Rake::Task.new(:features) do |t|
    t.cucumber_opts = "--format pretty"
  end
end

task :default => "test:tests"
