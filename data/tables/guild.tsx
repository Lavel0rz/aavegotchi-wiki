

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "guild",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Emblem", "Description", "Requirement", "Point of Contact", "Social Media", "Discord"],
                data: [
					[`8bit Gamers Guild`, `<img src="/guild/8GG.jpg" alt = "8bit Gamers Guild" />`, `Our goal is to unite those interested in playing, earning, and creating with Aavegotchi. We know games like Aavegotchi will change the world. We want to recruit like minded individuals that want to seize this chance to have fun while creating wealth for themselves and others. The 8bit Gamers Guild will be a place for learning, community, and growth.`, `Good vibes`, `<a href = "https://twitter.com/NftRooster" target = "_blank">@NftRooster</a>`, `<a href = "https://twitter.com/8bitGamersGuild" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/VunTUMcz73" target = "_blank">Link</a>`],
					[`Aeolian Haunts`, `<img src="/guild/aeolian-haunts.jpg" alt = "Aeolian Haunts Guild" />`, `Aeolian Haunts is a social multinational guild with much love for Crypto and Pixels! Our target is to build a fun and warm community and participate in all kind of activities available for guilds and gotchi parties, when the Gotchiverse is live! We welcome you to be a part of our GotchiGang!`, `You have to love Ghosts, Pixels and Crypto! Main requirement to join is to be active and polite. Even people without a gotchi yet, are welcome to our community. We offer help and tips in our discord channel for everyone who wants to join the aavegotchi ecosystem!`, `CryptoK9#1322`, `<a href = "https://www.facebook.com/groups/456606075476389" target = "_blank">Facebook</a>`, `<a href = "https://discord.gg/w9SRJfFgnE" target = "_blank">Link</a>`],
					[`Aavegotchi Aavenue`, `<img src="/guild/aavegotchi-aavenue.png" alt="Aavegotchi Aavenue Guild" />`, `Come join us and be part of the hottest strip of land in the Gotchiverse, district 1!`, `Ownership of a Gotchiverse district 1 plot for eligibility into votes, raffles, and future events, but tourists from other districts are very welcome to join and hang out with us!`, `Cookiethief#3952`, ``, `<a href = "https://discord.gg/Gvthkzks4C" target = "_blank">Link</a>`],
					[`Aavemaa`, `<img src="/guild/aavemaa.png" alt="Aavemaa Guild" />`, `Small group of frens consisting mainly of finnish speaking community members.`, `We have a very low engagement reguirement. We mostly idle away and can occasionally get together and hangout.`, `mikkop#3569`, `<a href = "https://peakd.com/@rova" target = "_blank">Blog</a>`, `<a href = "https://discord.gg/XkGEmnfr" target = "_blank">Link</a>`],
					[`BlackPool’s Aapegotchis`, `<img src="/guild/blackpool-aapegotchis.png" alt="BlackPool’s Aapegotchis" />`, `Comfortably settled in the depths of District 15, the Aapegotchis are pacifists and very frenly. They love to collect Alchemicas together, help their frens from other Districts, spook the lickquidators away and plan on conquering the Moon one day. However, be careful not to bully them. Whether you're experienced or a newbie and feel seasoned to join and help grow the Aapegotchis, you are welcome to assemble under the BlackPool flag!`, `Wear any item from the Aastronaut set (more options to come)`, `Hazelstar#7954`, "", `<a href = "https://discord.gg/ddUyu4F4pp" target = "_blank">Link</a>`],
					[`Chigotchi Bulls`, `<img src="/guild/chigotchi-bulls.png" alt = "Chigotchi Bulls Guild" />`, `A guild for sports NFT enthusiasts, specifically Aavegotchi and NBA Top Shot collectors.`, `None, but voting power is based on roles, which are based on NFTs owned by members.`, `legendarybagger#1201`, `<a href = "https://twitter.com/chigotchibulls" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/P2MzYYrXUq" target = "_blank">Link</a>`],
					[`cRekto Club`, `<img src="/guild/crekto-club.png" alt = "cRekto Club" />`, `Friends of cRekto`, `Members need to polite, constructive, and have a Wraangler set`, `<a href = "https://twitter.com/Mingkuan100" target = "_blank">cRekto</a>`, `<a href = "https://t.me/cRekto_club" target = "_blank">Telegram</a>`, `<a href = "https://discord.gg/KAbuvbSA" target = "_blank">Link</a>`],
					[`DeFi Alpha Gaming Guild`, `<img src="/guild/defi-alpha-gaming-guild.png" alt="DeFi Alpha Gaming Guild" />`, `DeFi Alpha Gaming Guild fosters a safe and friendly community for DeFi users, NFT enthusiasts and play-to-earn gamers to hang, learn and have fun. Our aim is to provide an ongoing set of resources to help new entrants join this exciting space, in a supportive and safe environment.`, `Entry into our growing community is free and there are currently no wearable requirements to join our Guild at this stage.`, `buckley_gerry#9941 and Seb Monty#8764`, `<a href = "https://defialpha.medium.com/" target = "_blank">Medium</a><br><a href = "https://defialpha.io" target = "_blank">Website</a>`, `<a href = "https://discord.gg/zQGs3Dua" target = "_blank">Link</a>`],
					[`F8 Guild`, `<img src="/guild/f8-guild.png" alt = "F8 Guild" />`, `BlockChain gaming guild focused on P2E on Polygon`, `Be respectful and Follow in-game ToS`, `calcryptochad.eth`, `<a href = "https://f8guild.com/" target = "_blank">Website</a>`, `<a href = "https://discord.gg/xwvBxaBuQS" target = "_blank">Link</a>`],
					[`Frenzone`, `<img src="/guild/frenzone.png" alt = "Frenzone Guild" />`, `The Frenzone is a frenly guild made for frens who like aavegotchi! We're not too hardcore but also not too casual either. We are somewhere right in the middle! We welcome both veterans and newbies alike, feel free to ask questions when you are unsure about something! We have community calls every now and again in which we discuss upcoming events and current state of aavegotchi! So what are you waiting for? Join our discord and become one of the Frens today!`, `A Gotchi owning a pajama hat.`, `Remco#3748<br>3DSLAPS#0183`, `<a href = "https://twitter.com/Frenzone_" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/rdBUZZpDfx" target = "_blank">Link</a>`],
					[`Geistreich`, `<img src="/guild/geistreich.png" alt = "Geistreich Guild" />`, `Explorers of play2earn. Believers in cooperation. Smol in numbers. Big enthusiasm. Decentralized by nature.`, `Proof of enthusiasm (gotchi, parcel, wearable). Mohawk for communal channeling. Being decentralized we don´t focus on any specific district. Guild communication is in German, so (a little) knowledge would be good.`, `Janbao | GOTCHI GANG GERMANY#9485`, `<a href = "https://twitter.com/GotchisGermany" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/sSCWxJrgCE" target = "_blank">Link</a>`],
					[`Ghost Squad`, `<img src="/guild/ghost-squad.png" alt = "Ghost Squad Guild" />`, `Active community of Gotchiverse addicts, game developers and content creators.`, `Miner Helmet`, `Gotchinomics#4936`, `<a href = "https://twitter.com/gotchighstsquad" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/JQHx9u8mcV" target = "_blank">Link</a>`],
					[`Gotchi FArmy Gang`, `<img src="/guild/gotchi-farmy-gang.png" alt = "Gotchi FArmy Gang" />`, `Our Community aims to work as a team in the Gotchiverse REALM to come ... Farming / Fighting / Scavenging and more ... that's where we are going Frens … One of the first GotchiGang having an NFT Guild Banner / A decentralised Treasury / A community mini-game on his way and moaaaar !`, `Love gotchis and Claim your NFT Gotchi FArmy Gang Banner`, `PG#0811<br>Be The Coin 🧩#4204`, `<a href = "https://twitter.com/TheGotchiFArmy" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/kMHQYn2dmG" target = "_blank">Link</a>`],
					[`Gotchi Gaang Maafia`, `<img src="/guild/gotchi-gaang-maafia.jpeg" alt = "Gotchi Gaang Maafia" />`, `We are a degenerate organization who’s central activity is; arms dealings, expanding business, protection from liquidators, and the enforcement of illicit agreements in the Gotchiverse through the use of violence.`, `Owning a gotchi that is not afraid to do some dirty work in the REALM.`, `Goobz#9104`, `Twitter: Coming soon`, `<a href="https://discord.gg/GRnRRKJz" target="_blank">Link</a>`],
					[`Gotchi Riders`, `<img src="/guild/gotchi-riders.png" alt = "Gotchi Riders Guild" />`, `Gotchis ride together! We are a Gotchi biker gang! We travel far and wide, and beat up Lickquidators!`, `Every Gotchi can become a prospect by wearing a 'Biker Jacket'. The insignia of the Gotchi Riders!`, `CryptoGotchi#9089`, ``, `<a href = "https://discord.gg/uxFxBYJjF6" target = "_blank">Link</a>`],
					[`Keepers of the Realm`, `<img src="/guild/keepers-of-the-realm.png" alt = "Keeper of the Realm Guild">`, `We'll be watching.`, `Invite-only basis. The insignias of guild include Monocle, ROFL, and DAO Egg.`, `Cookiethief#3952`, ``, ``],
					[`LevX DAO`, `<img src="/guild/levx.png" alt = "Levx DAO Guild" />`, `A guild governed by a Morty who's deranged grandpa has absolute authority over.`, `Acquire "Ghost-In-Jars" role`, `bloob#7342`, `<a href="https://twitter.com/LevXDAOhGeez" target="_blank">Twitter</a>`, `<a href = "https://discord.gg/oh-geez" target = "_blank">Link</a>`],
					[`Los Mustachos`, `<img src="/guild/mustachos.png" alt = "Los Mustachos Guild" />`, `First and only spanglish guild for Mustacho aficionados. Decentralized`, `None, but a moustache earns you voting power. <br> 1 mustache= 1 vote<br>Sergey Beard, Goatee, Mutton Chops, Horseshoe & Beard of Wisdom also unlock 1 VP.`, `Fantasma#1777`, `<a href = "https://twitter.com/LosMustachos" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/bnAKfeczhu" target = "_blank">Link</a>`],
					[`Metaguild`, `<img src="/guild/metaguild.png" alt = "Metaguild">`, `Metaguild is a free-to-play guild. We want to coordinate our farming activities on both sides - aavegotchi and liquidators. Whether you have aavegochi or not is not important. As soon as the lending mechanism is implemented, we will start a scholarship program. Metaguild - the community of players, investors, and developers.  We believe in games where the community has a voice and authority to choose the future.`, `Adhere to the discord rules of Metaguild.`, `Sandro#7777<br>egor#1111<br>kupilslona#0022`, `<a href = "https://metaguild.com" target ="_blank">Website</a><br><a href = "https://twitter.com/metaguildcom" target = "_blank">Twitter</a>`, `<a href = "https://discord.com/invite/eXhmPHFCqD" target = "_blank">Link</a>`],
					[`MSG`, `<img src="/guild/msg.jpg" alt = "MSG Guild" />`, `We are a Lickuidator and Aavegotchi coordination guild. Our focus is on mass coordination efforts amongst Gotchis and Lickuidators to maximize benefits for all. We also focus on expanding the overall Aavegotchi ecosystem by providing moar use case and rewards in GHST. We are here to work together as well as with other guidls to dominate the Reaalm. We are Legion. We are many. We do not forgive. We do not forget to pet. Expect us.`, `Dedication and Love`, `🐙Musashi13#5579`, `<a href = "https://twitter.com/msg13gaang" target = "_blank">Twitter</a><br><a href = "https://www.twitch.tv/msg13gaang" target = "_blank">Twitch</a>`, `<a href = "https://discord.gg/XUASaaxu2Q" target = "_blank">Link</a>`],
					[`Mug'N'Buns`, `<img src="/guild/mugnbuns.png" alt="Mug'N'Buns' Guild" />`, `Your friendly neighborhood Mug cafe baased in the District 22. Mug owner ? Thirsty for lickquidations ? Join us !`, `Must own 1 Mug wearable`, `Cherry#0302`, `<a href = "https://twitter.com/MugnBunsGuild" target="_blank">Twitter</a>`,`<a href = "https://discord.gg/mugnbuns" target="_blank">Link</a>`],
					[`TGC`, `<img src="/guild/tgc.jpg" alt="TGC Guild" />`, `A group of blockchain enthusiasts, researchers for long term and sustainable potential project that can bring profound impact to society, by changing the way people connect ~ collaborate ~ creates the better future.`, `Any beginner that hold at least 1 GHST are welcome to our growing TGC community`, `Boyboy#6449`, `<a href = "https://twitter.com/TGC_Guild" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/2p2vxQDj" target="_blank">Link</a>`],
					[`The Order of Portal Mages`, `<img src="/guild/the-order-of-portal-mages.jpg" alt = "The Order of Portal Mages Guild" />`, `The Order of Portal Mages are the Mages Guild of Aavegotchi! Within our sacred Tavern you will find the finest assembly of Wizards, Witches and Portal Mages in all the Realm. If a Wizard or Witch ye be, then enroll in our Mages College to learn the arts of wizardry & witchcraft! If you are a holder of the legendary Portal Mage gear, you will be welcomed into the Lordship of Portal Mages and a title will be bestowed. All new members are asked to show their POM (Proof of Mage) upon entering the Tavern, if they seek to join the Order.`, `Proof of Mage (can be found in discord)`, `<a href = "https://twitter.com/hillzcrypto" target = "_blank">@hillzcrypto</a>`, `<a href = "https://twitter.com/PortalMages" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/yHr4H6uVFC" target = "_blank">Link</a>`],
					[`WAGMI Warriors`, `<img src="/guild/WAGMI-warriors.png" alt = "WAGMI Warriors Guild" />`, `We are a wearable based guild for the Gotchiverse`, `You must have an Aavegotchi equipped with any of the wagie wearables; a wagie cap, headphones, or WGMI shirt`, `jarrod | aavegotchistats.com#9686`, `<a href = "https://twitter.com/WagmiWarriors" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/TNneBnhrM2" target = "_blank">Link</a>`]
				]
            }
        }
    ]
