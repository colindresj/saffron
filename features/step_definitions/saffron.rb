Then(/^the output should contain the current version number$/) do
   assert_partial_output Saffron::VERSION, all_output
end

Then(/^the sub directories should exist inside "(.*?)"$/) do |directory|
  sub_dirs = %w{entrances exits helpers in-place}.map do |sub_dir|
    "#{directory}#{sub_dir}"
  end
  check_directory_presence sub_dirs, true
end

Given(/^Saffron already exists$/) do
  run_simple "bundle exec saffron install"
end

When(/^I modify saffron at "(.*?)" with "(.*?)"$/) do |path, mod|
  append_to_file "#{path}/saffron.scss", mod
end

Given(/^Saffron was installed into a specific directory$/) do
  run_simple "bundle exec saffron install -p path/to/directory"
end

Then(/^saffron at "(.*?)" should still be modified with "(.*?)"$/) do |path, mod|
  run_simple "cat #{path}/saffron.scss"
  assert_partial_output mod, all_output
end

Then(/^saffron at "(.*?)" should no longer contain "(.*?)"$/) do |path, mod|
  run_simple "cat #{path}/saffron.scss"
  assert_no_partial_output mod, all_output
end

Given(/^Saffron does not yet exist$/) do
  check_directory_presence(["saffron/"], false)
end

