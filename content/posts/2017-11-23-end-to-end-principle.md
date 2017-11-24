---
title: end-to-end-principle
date: 2017-11-23 00:43:23
draft: true
---

When explaining the IP Service Model in the Introduction to Computer Networking
course they mention the end to end principle as one fo the reasons why the IP
protocol is so simple. 

The End to end principle states that if you can implement implement features at
the endpoints then you should (as opposed to implementing them in the
intermediary steps).

It reminded me of this [papers we love talk][1] by [@tef_ebooks][2] on [ "End to end
arguments in system design" ][3]

And I wonder if it has to do wit a couple more things: Functional programming's
principle of push state/data to the edges of your system, gary bernhardt's
pushing complexity down and gary bernhardt boundaries.

[1]:https://skillsmatter.com/skillscasts/8200-end-to-end-arguments-in-system-design-by-saltzer-reed-and-clark
[2]:https://programmingisterrible.com/post/144659440878/paperswelove-london-end-to-end-arguments-in
[3]:http://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.pdf

