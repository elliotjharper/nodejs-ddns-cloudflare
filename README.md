# nodejs-ddns-cloudflare

I wanted to try using a cloudflare domain like a dynamic dns service.
I wanted to use a raspberry pi to do this work.
I tried ddclient but the released version available through apt-get was not up to date enough to support cloudflare.
I was not comfortable downloading unofficial releases to get round this.
I found the massively popular and well supported npm lib cloudflare and figured I would use that.

This is a minimal wrapper around that so you just give basic details and don't have to think very hard about it.
Easy to look through and see no malicious leaking of your personal info.
Also, no libs pulled in other than cloudflare and node-fetch.

I scheduled the script to run daily at 8AM using crontab
Open crontab config using: 
crontab -e
The cronjob config i used was:
0 8 * * * /home/pi/.nvm/versions/node/v16.14.2/bin/node /home/pi/nodejs-ddns-cloudflare/src/main.js

I had a go at using git filters to try to prevent committing sensitive credentials.
Got so far but ultimately gave up trying to get the filters auto installed as I couldn't be bothered to setup hooks to do this.
To use the protectSettings filter add this to /.git/config
[filter "protectSettings"]
	clean = ./clean_settings.sh
	smudge = ./smudge_settings.sh
