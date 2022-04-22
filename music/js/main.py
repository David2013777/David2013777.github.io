import pandas as pd
import numpy as np
musiclist = pd.read_csv("music.csv",usecols=["name","url"])
musiclist = np.array(musiclist)
fo = open("mymusiclist.js", "w",encoding="utf-8")
fo.write("const ap=new APlayer({container:document.getElementById('player'),mini:false,autoplay:false,theme:'#42aaf0',loop:'all',order:'random',preload:'metadata',volume:0.7,mutex:true,listFolded:false,listMaxHeight:1000,\n")
fo.write("audio: [\n")
for music in musiclist:
    fo.write("{\n")
    fo.write("name: '"+music[0]+"',\n")
    fo.write("url: '"+music[1]+"',\n")
    fo.write("cover: 'https://justdoit520.gitee.io/img/myicon.jpg'\n")
    fo.write("},\n")
fo.write("]});\n")
fo.close()