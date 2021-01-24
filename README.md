# daniel11420/announcer
This is a bot for announcing things. I made this to replace Dyno in [CPBack](https://cpback.net). Feel free to use it.

## Instructions
### End User - Setup (Ubuntu)

 1. Download the repository to a folder and install dependencies.
 - `mkdir Announcer` 
 - `git clone https://github.com/daniel11420/announcer.git ~/Announcer`
 - `cd ~/Announcer`
 - `npm install`
 2. Set the bot up (configuration file(s))
 - `mkdir local`
 - `cp example_local/* local/`
 - `cd local`
 - `vim config.js`
 3. Run the bot once to see if it works
 - `cd ~/Announcer`
 - `npm run-script run-announcer`
 - If the bot works, go to the next step. If not, read what it tells you and try to figure it out *or* DM me at [daniel11420#0069](https://discordapp.com/users/243472272264921088) on Discord.
 4. Stop the bot.
### End-user - Running/stopping the bot (Ubuntu)
 1. Navigate to the bot directory
 - `cd ~/Announcer`
 2. Run the bot in a screen
 - `screen -S Announcer npm run-script run-announcer`
 - Then, click `CTRL+A` and `D` to detach from the screen. The bot should keep running even when you close the SSH session/login.
 3. To stop/kill the bot, run this command:
 - `screen -X -S Announcer kill`
 4. Notes: 
 - It uses permissions "Read Messages", "Send Messages", "Embed Links", "Mention Everyone"
 - If you want to run multiple instances of the bot or already run a screen with the name `Announcer`, just replace "Announcer" in the above commands with something else
### End-user - Using the bot (Any platform)
1. To announce something, say `announcer:announce Text Here`. The bot will announce in the channel you wrote that in and it will delete your message.
2. If you want to ping @everyone or @here, add `--everyone` or `--here` after `announcer:announce` but before `Text Here`. Like this: `announcer:announce --everyone Text Here`
3. Only users with the role you specified in the configuration file can use the bot.
## Contributing
If you want to contribute, you should be smart enough to know how to set up a dev environment for the bot. (it's the same steps as running it normally lol)
If you want to contribute, make a pull request and stuff. I'll look through it and accept it and stuff yeeeeeee
