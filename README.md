#Saffron
[![Build Status](https://travis-ci.org/corporadobob/saffron.svg?branch=master)](https://travis-ci.org/corporadobob/saffron)
[![Gem Version](https://badge.fury.io/rb/saffron.svg)](http://badge.fury.io/rb/saffron)

> A simple sass mixin library for animations and transitions.

Saffron is a collection of sass mixins and helpers that make adding CSS3 animations and transitions much simpler.
Just include a mixin in your sass declaration, then set any configuration using variables and mixin parameters.

###Requirements
Sass 3.2+

##Installing
###Standard Installation
Install the gem from the command line with `gem install saffron`, then `cd` into the directory where you want to install Saffron and run the installation command:
```
saffron install
```
You can also use the `-p` flag to install Saffron into a relative directory:
```
saffron install -p path/to/directory/
```
Finally, import the mixins into your main scss file:
```scss
  @import "saffron/saffron";
```

###Rails
If you're using Rails 3.1+, you can add Saffron to your Gemfile:
```ruby
  gem "saffron"
```
Run `bundle install` to make all the mixins available to your Rails application, and import Saffron at the top of your `application.css.scss`:
```scss
@import "saffron";
```

###Manual Installation
Download or clone the project repo from GitHub. Copy the `saffron` folder and paste into your `sass` folder (or whatever you call it). You won't need any of the other directories or files.
```scss
  @import "saffron/saffron";
```
No matter how you installed Saffron, you can now use any of the mixins:
```scss
  .my-class {
    @include teeter();
  }
```

##Updating
To get the latest mixins you should update the Saffron files every once in a while. You can do so by running:
```
saffron update
```
If you initially installed Saffron in a specific directory using the `-p` flag, you'll need to do the the same when updating:
```
saffron update -p path/to/directory/
```

##Browser Support
Saffron uses CSS3 transform, keyframes, animations and transitions, so it's really only for modern browsers. Visit http://caniuse.com/ for a clear idea of CSS3 browser support.

All the mixins compile down to vendor prefixed CSS, and have been tested on the latest versions of Chrome, Safari, Firefox and Opera. I aim to do more browser testing and hope to increase compatability, especially for IE.

##License
MIT
