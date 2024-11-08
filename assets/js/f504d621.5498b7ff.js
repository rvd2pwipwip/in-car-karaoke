"use strict";(self.webpackChunkin_car_karaoke=self.webpackChunkin_car_karaoke||[]).push([[3605],{5597:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(4848),t=s(8453);const o={},r="Appendix B - The Song Queue",l={id:"Appendix B - The Song Queue",title:"Appendix B - The Song Queue",description:"The Stingray Karaoke player features a Song Queue component that is accessed and displayed differently depending on varying factors such as platform, form factor, and screen resolution. When possible, the Song Queue is displayed alongside the player screen so it doesn't obfuscate the lyrics display and lets users manage their song list without interrupting the current performance.",source:"@site/versioned_docs/version-1.0.0/Appendix B - The Song Queue.md",sourceDirName:".",slug:"/Appendix B - The Song Queue",permalink:"/in-car-karaoke/docs/Appendix B - The Song Queue",draft:!1,unlisted:!1,tags:[],version:"1.0.0",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Appendix A - Safety Features",permalink:"/in-car-karaoke/docs/Appendix A - Safety Features"},next:{title:"Appendix C - Queue Flowcharts",permalink:"/in-car-karaoke/docs/Appendix C - Queue Flowcharts"}},a={},d=[{value:"Queued Songs",id:"queued-songs",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Last Song",id:"last-song",level:3},{value:"Add a Song",id:"add-a-song",level:3},{value:"Remove a Song",id:"remove-a-song",level:3},{value:"Adding Songs to Queue",id:"adding-songs-to-queue",level:2},{value:"Adding a Single Song",id:"adding-a-single-song",level:3},{value:"Adding a List of Songs",id:"adding-a-list-of-songs",level:3},{value:"Selecting Song Items",id:"selecting-song-items",level:2},{value:"Empty Song Queue",id:"empty-song-queue",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"appendix-b---the-song-queue",children:"Appendix B - The Song Queue"})}),"\n",(0,i.jsx)(n.h1,{id:"the-song-queue",children:"The Song Queue"}),"\n",(0,i.jsx)(n.p,{children:"The Stingray Karaoke player features a Song Queue component that is accessed and displayed differently depending on varying factors such as platform, form factor, and screen resolution. When possible, the Song Queue is displayed alongside the player screen so it doesn't obfuscate the lyrics display and lets users manage their song list without interrupting the current performance."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Song Queue is a snapshot of the player\u2019s recently played, current, and upcoming songs"}),"\n",(0,i.jsxs)(n.li,{children:["The Song Queue can list both played and queued songs","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The current song is selected by default (visual highlight and animated EQ icon)"}),"\n",(0,i.jsx)(n.li,{children:"Played songs are above the current song"}),"\n",(0,i.jsx)(n.li,{children:"Queued songs are below the current song"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Played songs are only discarded when the queue limit of 100 is exceeded or when the queue is cleared by users","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Song Queue limit reached = first in first out (no dialog when adding single song, see ",(0,i.jsx)(n.a,{href:"#adding-songs-to-queue",children:"Adding Songs to Queue"})," for details)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The Song Queue is persistent but can be cleared"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"queued-songs",children:"Queued Songs"}),"\n",(0,i.jsx)(n.p,{children:"The karaoke player will play the songs that are stacked in the song queue sequentially, starting with the song on top of the list, unless users choose otherwise."}),"\n",(0,i.jsx)(n.p,{children:"The current song is visually distinct from other song items currently in the queue."}),"\n",(0,i.jsx)(n.p,{children:"The song queue has a limit of 100 items."}),"\n",(0,i.jsx)(n.p,{children:"Once played (or skipped), songs are not cleared from the song queue unless the queue limit has been exceeded or users select Sing All Songs on a song collection that would exceed the limit. Then a warning dialog will give users the choice to clear the current queue to add the selected new songs or cancel."}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.p,{children:"The song queue is mandatory for a good karaoke party experience since this is where users can see which songs will be playing in which order. This is also the place to go to when users want to retry a recent song."}),"\n",(0,i.jsx)(n.p,{children:"And most importantly, the song queue also allows users to add songs without interrupting the current performance when the device's form factor allows for it."}),"\n",(0,i.jsx)(n.h3,{id:"last-song",children:"Last Song"}),"\n",(0,i.jsx)(n.p,{children:"When there is no next song, the player stops and displays a prompt to select another song unless the Loop queue has been turned on previously. In that particular case, the player will start playing the first song."}),"\n",(0,i.jsx)(n.p,{children:"In any case, if 100 songs have played without any input from the user, the player stops and asks for confirmation to continue playing."}),"\n",(0,i.jsx)(n.h3,{id:"add-a-song",children:"Add a Song"}),"\n",(0,i.jsxs)(n.p,{children:["The selected song is added to the queue at the selected position (now, next, last). The app immediately goes to the player screen when Sing Now is selected. See ",(0,i.jsx)(n.a,{href:"#adding-songs-to-queue",children:"Adding Songs to Queue"})," for details."]}),"\n",(0,i.jsx)(n.h3,{id:"remove-a-song",children:"Remove a Song"}),"\n",(0,i.jsx)(n.p,{children:"Users can remove a song from the queue. If users remove the current song while it is playing, the song playback will stop, it will be removed from the queue, and the next song item will start playing."}),"\n",(0,i.jsx)(n.p,{children:"If the last song of the queue is playing and the user removes it, the song will stop playing and a prompt to select another song will appear on the player."}),"\n",(0,i.jsx)(n.h2,{id:"adding-songs-to-queue",children:"Adding Songs to Queue"}),"\n",(0,i.jsx)(n.h3,{id:"adding-a-single-song",children:"Adding a Single Song"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Any song can be added to the song queue in any of 3 queue positions(Now, Next, Last)."}),"\n",(0,i.jsxs)(n.li,{children:["If there are too many songs in the queue, the oldest song is removed to append the currently selected song (first in first out).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Sing Now]"})," = Insert song at Next position, skip current song and start playing added song"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Sing Next]"})," = Place song at Next position of song queue, below current song"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Sing Last]"})," = Append song at last position of song queue"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"adding-a-list-of-songs",children:"Adding a List of Songs"}),"\n",(0,i.jsxs)(n.p,{children:["Some lists, mainly party mixes and artist collections, can be added to the song queue in one go with ",(0,i.jsx)(n.strong,{children:"[Sing All]"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If not too many songs in list:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Sing list now]"})," = Add all songs from list to queue, go to player and start playing first added song"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Add list to queue]"})," = Add all songs from list to queue"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If too many songs in list & not empty queue:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Sing first XX of list now]"}),", where XX is the number of slots left in the song queue (100 \u2013 current songs in queue) = Append first XX songs from list to queue, go to player and start playing first added song"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Add first XX to queue]"}),", where XX is the number of slots left in the song queue (100 \u2013 current songs in queue) = Append first XX songs from list to queue"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Reset queue with list]"})," = Clear queue and add up to first 100 songs from list"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If too many songs in list & empty queue:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Sing first 100 now]"})," = Add first 100 songs from list to queue, go to player and start playing first song"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[Add First 100 to Queue]"})," = Add first 100 songs from list to queue"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["View ",(0,i.jsx)(n.a,{href:"/in-car-karaoke/docs/Appendix%20C%20-%20Queue%20Flowcharts",children:"Appendix C - Queue Flowcharts"})," for more details"]})]}),"\n",(0,i.jsx)(n.h2,{id:"selecting-song-items",children:"Selecting Song Items"}),"\n",(0,i.jsxs)(n.p,{children:["Clicking on the tile of a song item brings its ",(0,i.jsx)(n.a,{href:"/in-car-karaoke/docs/Screen%20Descriptions/Song%20Info",children:"Song Info"})," screen with the options to Sing Now, Sing Next, or Sing Last along with related songs and lyrics."]}),"\n",(0,i.jsx)(n.p,{children:"Users can select Sing Now to immediately start the song playback on the player screen."}),"\n",(0,i.jsx)(n.h2,{id:"empty-song-queue",children:"Empty Song Queue"}),"\n",(0,i.jsxs)(n.p,{children:["The song queue is accessible from the ",(0,i.jsx)(n.a,{href:"/in-car-karaoke/docs/Screen%20Descriptions/Player",children:"Player"})," screen. There, users can click the Song Queue button to display its panel alongside the player and lyrics. At the top of the ",(0,i.jsx)(n.a,{href:"/in-car-karaoke/docs/Screen%20Descriptions/Song%20Queue",children:"Song Queue"})," panel, users can click Clear Queue to remove all songs."]}),"\n",(0,i.jsxs)(n.p,{children:["In that situation, the player should display a ",(0,i.jsx)(n.a,{href:"/in-car-karaoke/docs/Screen%20Descriptions/Player#empty-song-queue",children:"prompt"})," to pick another song."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);