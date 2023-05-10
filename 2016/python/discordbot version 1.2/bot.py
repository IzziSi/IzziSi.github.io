import os
import discord
import mysql.connector
import threading #timing functions
import requests #For twitch get json from links
from mysql.connector import errorcode
from discord.ext import commands
from dotenv import load_dotenv 

load_dotenv()
#Discord token
TOKEN = os.getenv('TOKEN') 
#DB information
DBHOST = os.getenv('DBHOST')
PORT = os.getenv('DBPORT')
NAME = os.getenv('NAME')
DBPASSWORD = os.getenv('DBPASSWORD')
DATABASENAME=os.getenv('DATABASENAME')
#Twitch information
TWITCH_CLIENT_ID=os.getenv('TWITCH_CLIENT_ID')
TWITCH_CLIENT_SECRET=os.getenv('TWITCH_CLIENT_SECRET')


body = {
    'client_id': TWITCH_CLIENT_ID,
    'client_secret': TWITCH_CLIENT_SECRET,
    "grant_type": 'client_credentials'
}

r = requests.post('https://id.twitch.tv/oauth2/token', body)

keys = r.json()

headers = {
    'Client-ID': TWITCH_CLIENT_ID,
    'Authorization': 'Bearer ' + keys['access_token']
}

def checkstreamer(streamer_name):
    stream = requests.get('https://api.twitch.tv/helix/streams?user_login=' + streamer_name, headers=headers)
    stream_data = stream.json()
    stream_pull_users = requests.get('https://tmi.twitch.tv/group/user/' + streamer_name + '/chatters')
    stream_users = stream_pull_users.json()

    if len(stream_data['data']) == 1:
        return True, stream_data, stream_users
    else:
        return False, stream_data, stream_users
                    

try:
    cnx = mysql.connector.connect( host=DBHOST, user=NAME, passwd=DBPASSWORD,db = "master", port=PORT)
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Access denied")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("DB doesnt exist")
    else:
        print(err)
else:
    print("Database connected")


    intents = discord.Intents.default()
    intents.members = True
    intents.messages = True
    intents.presences = True
    client = discord.Client()

    bot = commands.Bot(command_prefix="&", description="This is a testing bot! :)", intents=intents)


    @bot.event
    async def on_ready():
        print("Hello")


    @bot.event
    async def on_message(message):
        guild= bot.get_guild(835500063609323550)#Make sure this is only in The Scrap Yard server
        authorname=guild.get_member(message.author.id)
        channel = message.channel
        print(authorname)
        print(channel)
        #print(message.channel.id)
        if message.author.bot:
            return
        else:
            if message.content == 'kill':
                await client.logout()
            mods=["Bawks Role", "👑 Scraplord", "👑 Scraplady", "Scrap Guards", "Scrap Guard Apprentices"]
            for role in authorname.roles:
                exists= role.name in mods
                if exists==True:
                    if "streamercheck" in message.content: 
                        splitmessage = message.content.split(' ')
                        streamer_name = str(splitmessage[1])
                        print(streamer_name)
                        status,stream_data, stream_users = checkstreamer(streamer_name)
                        if status==True:
                            dbcursor = cnx.cursor()
                            viewers = stream_data['data'][0]['viewer_count']
                            title = stream_data['data'][0]['title']
                            game = stream_data['data'][0]['game_name']
                            sql = "INSERT INTO shoutouts (streamername, views, gamename, streamtitle, date_time, shouter) VALUES (%s,%s,%s,%s,NOW(), %s);"
                            val=(streamer_name,viewers,game,title, str(authorname.display_name))
                            dbcursor.execute(sql,val)
                            cnx.commit()
                            viewerlist = []
                            await channel.send(" " +streamer_name + " is playing " + game + " with " + str(viewers) + " viewers")
                            if len(stream_users['chatters']['vips']) > 0:
                                for user in stream_users['chatters']['vips']:
                                    viewerlist.append(user)
                            if len(stream_users['chatters']['moderators']) > 0:
                                for user in stream_users['chatters']['moderators']:
                                    viewerlist.append(user)
                            if len(stream_users['chatters']['viewers']) > 0:
                                for user in stream_users['chatters']['viewers']:
                                    viewerlist.append(user)
                            getviewers = ""
                            for uniqueviewer in viewerlist:
                                bots = ["streamelements","pokemoncommunitygame","soundalerts","Streamlabs","Streamelements","Commanderroot",
                                "Nightbot","Discord_for_streamers","Anotherttvviewer","Soundalerts","Community4smallstreamers",
                                "Streamersdiscordcommunity","Cainkapowbot","Own3d","Luki4fun_bot_master","V_and_k","Streamers_area","2020",
                                "Wisebot","Moobot","Carbob14xyz","Carbot14xyz","Carbon14xyz","Wizebot","1174","Aten","Wzbot","Exxxbot",
                                "D1sc0rdforsmallstreamers","Disc0rdforsma11streamers","Social_growth_discord"]
                                if uniqueviewer in bots:
                                    continue
                                else:
                                    sql="select max(shoutoutid) from shoutouts where streamername = %s and views=%s;"
                                    val=(streamer_name,viewers)
                                    dbcursor.execute(sql, val)
                                    result = dbcursor.fetchone()
                                    sql= "insert into shoutdetails (shoutoutid, viewer) values (%s,%s);"
                                    val = (result[0], uniqueviewer)
                                    dbcursor.execute(sql,val)
                                    cnx.commit()
                                    getviewers = getviewers +" " + uniqueviewer
                            print(getviewers)
                            await channel.send("```" + getviewers +"```")
                            break
                        else:
                            await channel.send("Streamer offline")
                            break
            await bot.process_commands(message)

    @bot.command(name="printshouts", help="record viewers, title, game")
    @commands.has_any_role("Bawks Role", "👑 Scraplord", "👑 Scraplady", "Scrap Guards", "Scrap Guard Apprentices")
    async def printOneWeek(ctx):
        if ctx.channel.id != 911321358120652830:
            return
        dbcursor = cnx.cursor()
        sql = "select shoutoutid, StreamerName, GameName, Shouter, Views, date_time from Shoutouts where date_time between NOW() - interval 7 day and now()"
        dbcursor.execute(sql)
        results = dbcursor.fetchall()
        if results is None:
            bot.send("Found nothing. Consult Bawksy")
        else:
            file = open("weekOne.txt", "w")
            shoutOutLines = []
            viewerLines = []
            countline=0
            for row in results:
                if countline==0:
                        file.write("shoutoutid, StreamerName, GameName, Shouter, Views, date_time, Viewers\n")
                        countline=1
                shoutOutID= row[0]
                streamerName=row[1]
                gameName=row[2]
                shouter=row[3]
                views=row[4]
                date_Time=row[5]
                sql2 = "select viewer from shoutdetails where shoutoutid = %s"
                val2=(shoutOutID,)
                dbcursor.execute(sql2,val2)
                twitchViewers = dbcursor.fetchall()
                buildUsers =""
                if twitchViewers is None:
                    bot.send("Found no twitch viewers. Consult Bawksy")
                else:
                    for viewer in twitchViewers:
                        buildUsers = buildUsers + str(viewer) + " "
                removeChars = ["'",",","(",")"]
                for characters in removeChars:
                    buildUsers= buildUsers.replace(characters, '')
                shoutOutLines.append((str(shoutOutID)+ "," + str(streamerName) + "," + str(gameName) + "," + str(shouter) + 
                    "," + str(views) + "," + str(date_Time) + "," + str(buildUsers) + "\n"))
            for sentence in shoutOutLines:
                file.write(sentence)
            file.close()
            with open("weekOne.txt", "rb") as file:
                await ctx.send("A list of the last week's shouts: ", file=discord.File(file, "weekOne.txt"))
    bot.run(TOKEN)
