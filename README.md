#Saffron
> A simple sass mixin library for animations and transitions.

Saffron has been written to be easy to use. The mixins have been written using SCSS, but the intention has always been to stay as close to CSS as possible, while leverging the benefits of modularized mixins, each with their own arguments, in order to lend more user customization.

###Requirements
Sass 3.2+

##Installing
###Standard Installation
```
  gem install saffron
```

###Bundler and/or Rails
Add the gem to your gemfile:
```ruby
  gem "saffron"
```

###Manual Installation
Download or clone the project repo from GitHub. Copy the `saffron` folder and paste into your `sass` folder (or whatever you call it). You won't need any of the other directories or files.

```scss
  @import "saffron/saffron";
```

You can now use any of the Saffron mixins:

```scss
  .my-class {
    @include teeter();
  }
```

##Documentation
_Here be docs..._

##Browser Support
Saffron uses CSS3 transform, keyframes, animations and transitions, so it's really only for modern browsers. Visit http://caniuse.com/ for a clear idea of CSS3 browser support.

All the mixins compile down to vendor prefixed CSS, and have been tested on the latest versions of Chrome, Safari, Firefox and Opera. I aim to do more browser testing and hope to increase compatability, especially for IE.

##License
MIT
