---
title: vim expression register
date: 2017-11-09 13:03:00
---

At the top of every note in this site there's a markdown frontmatter block with
a date.

```
---
title: vim registers
date: 2017-11-09 13:03:00
---
```

I wanted to have a keyboard shortcut in vim to insert the current date
automatically.

I got the following snippet from the [vim wiki][1]:

`:put =strftime('%c')`

Ok strftime looks like a c-like function to generate time and '%c' probably
specifies the formatting, but what does `put =` do?

** :help :put **
> Put the text [from register x] after [line] (default current line).

[1]: http://vim.wikia.com/wiki/Insert_current_date_or_time
