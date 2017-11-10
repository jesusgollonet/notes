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

The following snippet from the [vim wiki][1] looked a bit alien to me:

`:put =strftime('%c')`

So vim has a built-in function for time formatting. Nice! The `'%c'` sure looks
like format specification, but what does `put =` do?

** :help :put **
> Put the text [from register x] after [line] (default current line).

I'm not super familiar with registers but I know they store temporary text,
they are related to copy / paste, and there are several types. Registers
0-9, for example, are automatically populated by vim whenever you yank or delete
text. 

According to the above, `:put 0` would put the contents of register 0 (most
recently yanked/deleted text) in the following line. `:put 1`, `:put b` would do
the same for their respective registers.

From `:help registers`, it seems like `=` is a special register called the
**expression register**:

> This is not really a register that stores text, but is a way to use an
expression in commands which use a register.  The expression register is
read-write.

So `=expression` is a placeholder for the expression in commands that use a
register. I was initially confused thinking that `=strftime('%c')` or
`=expand(%)` meant 'place the results of this function in the = register'.
Nope. In the expression above `put` expects a register and `=strftime('%c')`
acts like one.

While researching this I found this video about expression registers that
illuminated expression registers and a few old cryptic commands I'd stumbled
upon in the past. 

[1]: http://vim.wikia.com/wiki/Insert_current_date_or_time
