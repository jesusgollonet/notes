---
title: vim registers
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
specifies the formatting, but what does put = do?

### :help put 
> ["x]p  Put the text [from register x] after the cursor [count] times.

I kow there are a ton of registers and I know they have to do with copy / paste,
but no idea about register x. Searching vim help for register x doesn't yield
anything, and helpg <F12>

[1]: http://vim.wikia.com/wiki/Insert_current_date_or_time
