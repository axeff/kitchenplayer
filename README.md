kitchenplayer
=============

HTML5 remote - nodejs - tool to play musicstreams with mplayer on raspberry pi

runs with mplayer2 (http://www.mplayer2.org/)

on your raspberry pi run:
=========================

<code>
  nodejs server.js
</code>

or - if you have Sencha CMD up and running build production environment to minify app:

<code>
  sencha app build production
</code>

then change to ./build/kitchenplayer-control/production/ and run nodejs server like above.


in your browser run:
====================
<code>
  http://YOUR_IP:8080
</code>