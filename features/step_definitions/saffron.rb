Then(/^the output should contain the current version number$/) do
   assert_partial_output Saffron::VERSION, all_output
end


Then(/^the sub directories should exist inside "(.*?)"$/) do |directory|
  sub_dirs = %w{entrances exits helpers in-place}.map do |sub_dir|
    "#{directory}#{sub_dir}"
  end
  check_directory_presence sub_dirs, true
end
