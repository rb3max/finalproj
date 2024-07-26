import React, { useState } from 'react'
import Cards from './Cards';
import Footer from './Footer';
import GameList from './GameList';
import Navbar from './Navbar';
import Page from './Page';

const List = () => {
    
    const gamesList = [
        {
          name: "The Legend of Zelda: Breath of the Wild",
          img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
          prize: "$59.99",
          description: "An open-world action-adventure game set in the beautiful land of Hyrule.",
          rate: 4.9,
          youtubetrailer: "https://www.youtube.com/embed/uHGShqcAHlQ?si=gxVUzkteaN7pXYAn" ,
          type: "highrate",
         
        },
        {
          name: "Red Dead Redemption 2",
          img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
          prize: "$59.99",
          description: "A sprawling open-world game set in the American frontier.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/gmA6MrX81z4?si=jLx67XOFaeByz2UD",
          type: "highrate",
          
        },
        {
          name: "The Witcher 3: Wild Hunt",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg",
          prize: "$49.99",
          description: "An epic RPG with a rich narrative and expansive open world.",
          rate: 4.9,
          youtubetrailer: "https://www.youtube.com/embed/c0i88t0Kacs?si=x8xiEBSBhCm3uW-k",
          type: "highrate",
          
          
        },
        {
          name: "Cyberpunk 2077",
          img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg ",
          prize: "$59.99",
          description: "A futuristic RPG set in a sprawling cyberpunk city.",
          rate: 4.3,
          youtubetrailer: "https://www.youtube.com/embed/qIcTM8WXFjk?si=GdAHPqsvWCqR5Xwc",
          type: "trending",
          
          
        },
        {
          name: "Minecraft",
          img: "https://upload.wikimedia.org/wikipedia/ar/5/51/Minecraft_cover.png",
          prize: "$26.95",
          description: "A sandbox game that allows players to build and explore pixelated worlds.",
          rate: 4.7,
          youtubetrailer: "https://www.youtube.com/embed/MmB9b5njVbA?si=5Xu5kYLV8OdJpnVL",
          type: "trending",
          
          
        },
        {
          name: "Among Us",
          img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg",
          prize: "$4.99",
          description: "A multiplayer game of teamwork and betrayal in space.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/CermGp8bwFE?si=kCjQK50kCdBWS8oB",
          type: "trending",
          
          
        },
        {
          name: "Animal Crossing: New Horizons",
          img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg",
          prize: "$59.99",
          description: "A life simulation game where you build and decorate your island paradise.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/_3YNL0OWio0?si=zuCfYp0LjXTtYB8k",
          type: "highrate",
          
          
        },
        {
          name: "Call of Duty: Modern Warfare",
          img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg",
          prize: "$59.99",
          description: "A first-person shooter with realistic graphics and a gripping campaign.",
          rate: 4.5,
          youtubetrailer: "https://www.youtube.com/embed/bH1lHCirCGI?si=qM3IafeKgE3p9cMz",
          type: "trending",
          
          
        },
        {
          name: "Hades",
          img: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg",
          prize: "$24.99",
          description: "A rogue-like dungeon crawler set in the Greek underworld.",
          rate: 4.9,
          youtubetrailer: "https://www.youtube.com/embed/91t0ha9x0AE?si=QOQmuuLwUhp_B-SM",
          type: "highrate",
          
          
        },
        {
          name: "Sekiro: Shadows Die Twice",
          img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
          prize: "$59.99",
          description: "An action-adventure game with challenging combat and a deep storyline.",
          rate: 4.7,
          youtubetrailer: "https://www.youtube.com/embed/rXMX4YJ7Lks?si=dmoFpjuxD1zXXhYp",
          type: "highrate",
          
          
        },
        {
          name: "Ghost of Tsushima",
          img: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
          prize: "$59.99",
          description: "An open-world samurai game set in feudal Japan.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/RcWk08PBe7k?si=89klf4-KYbv-OM07",
          type: "highrate",
          
          
        },
        {
          name: "Fortnite",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg",
          prize: "Free",
          description: "A battle royale game with building mechanics and frequent updates.",
          rate: 4.4,
          youtubetrailer: "https://www.youtube.com/embed/0fRBmXtfo_8?si=FdZSfzVgqXTEUVf0",
          type: "trending",
          
          
        },
        {
          name: "FIFA 21",
          img: "https://upload.wikimedia.org/wikipedia/en/b/bb/FIFA_21_Standard_Edition_Cover.jpg",
          prize: "$59.99",
          description: "The latest installment in the popular football simulation series.",
          rate: 4.3,
          youtubetrailer: "https://www.youtube.com/embed/tuLAn9adQpI?si=C50b5jkN8DRarPMb",
          type: "trending",
          
          
        },
        {
          name: "Assassin's Creed Valhalla",
          img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg",
          prize: "$59.99",
          description: "An open-world RPG set in the Viking era with extensive exploration.",
          rate: 4.5,
          youtubetrailer: "https://www.youtube.com/embed/vovkzbtYBC8?si=QYo2MKeVkGGuNEjr",
          type: "trending",
          
          
        },
        {
          name: "Doom Eternal",
          img: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
          prize: "$59.99",
          description: "A fast-paced first-person shooter with intense combat and demonic enemies.",
          rate: 4.7,
          youtubetrailer: "https://www.youtube.com/embed/_oVwrpfo_QA?si=8YUM9wj_ngq3SLib",
          type: "highrate",
          
          
        },
        {
          name: "Star Wars Jedi: Fallen Order",
          img: "https://upload.wikimedia.org/wikipedia/en/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg",
          prize: "$59.99",
          description: "An action-adventure game set in the Star Wars universe with a focus on lightsaber combat.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/Kwo41nUwyeo?si=5aXky8hmQ_W61BeH",
          type: "highrate",
          
          
        },
        {
          name: "Marvel's Spider-Man",
          img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg",
          prize: "$59.99",
          description: "A superhero game with fluid web-slinging mechanics and a compelling narrative.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/ayeQ3CTLlMU?si=GsXcawzY3pPFntOV",
          type: "highrate",
          
          
        },
        {
          name: "Death Stranding",
          img: "https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg",
          prize: "$59.99",
          description: "A unique open-world game with a focus on delivering packages and connecting isolated communities.",
          rate: 4.4,
          youtubetrailer: "https://www.youtube.com/embed/tCI396HyhbQ?si=jU04OalfOJA86Gip",
          type: "trending",
          
          
        },
        {
          name: "Apex Legends",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
          prize: "Free",
          description: "A battle royale game with unique character abilities and team-based gameplay.",
          rate: 4.5,
          youtubetrailer: "https://www.youtube.com/embed/UPtoIy-oPWQ?si=RpoWzwQ3PLZyrPqf",
          type: "trending",
          
          
        },
        {
          name: "Rainbow Six Siege",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg/220px-Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg",
          prize: "$39.99",
          description: "A tactical shooter with a focus on team-based strategies and destructible environments.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/6wlvYh0h63k?si=Kpsfn2OizO5U3W3T",
          type: "highrate",
          
          
        },
        {
          name: "Fall Guys: Ultimate Knockout",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Fall_Guys_cover.jpg/220px-Fall_Guys_cover.jpg",
          prize: "$19.99",
          description: "A battle royale game where players compete in wacky mini-games.",
          rate: 4.5,
          youtubetrailer: "https://www.youtube.com/embed/Wj3dUvGLjNQ?si=-2D1Y_qQMaYT5EoB",
          type: "trending",
          
          
        },
        {
          name: "Control",
          img: "https://upload.wikimedia.org/wikipedia/en/e/e5/Control_game_cover_art.jpg",
          prize: "$59.99",
          description: "A supernatural action-adventure game with mind-bending powers and an enigmatic story.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/F74LLDhAhhI?si=tV34YOOdGuordW36",
          type: "highrate",
          
          
        },
        {
          name: "Metro Exodus",
          img: "https://upload.wikimedia.org/wikipedia/en/a/af/Cover_Art_of_Metro_Exodus.png",
          prize: "$59.99",
          description: "A first-person shooter with survival elements set in a post-apocalyptic Russia.",
          rate: 4.5,
          youtubetrailer: "https://www.youtube.com/embed/c_YddLpfD5o?si=aXlubCncDdw7q0U_",
          type: "highrate",
          
          
        },
        {
          name: "Dying Light 2",
          img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Dying_Light_2_cover_art.jpg",
          prize: "$59.99",
          description: "A first-person action RPG set in a zombie-infested open world.",
          rate: 4.4,
          youtubetrailer: "https://www.youtube.com/watch?v=c_YddLpfD5o",
          type: "newgames",
          
          
        },
        {
          name: "Nioh 2",
          img: "https://upload.wikimedia.org/wikipedia/en/9/91/Nioh_2_cover_art.jpg",
          prize: "$59.99",
          description: "A challenging action RPG set in a dark fantasy version of feudal Japan.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/UwJAAy7tPhE?si=6DZqvPe3DsUquwn9",
          type: "highrate",
          
          
        },
        {
          name: "Outer Wilds",
          img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Outer_Wilds_Steam_artwork.jpg",
          prize: "$29.99",
          description: "An open-world exploration game set in a mysterious solar system.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/d6LGnVCL1_A?si=51TC2ZDOgrIZ56pR",
          type: "highrate",
          
          
        },
        {
          name: "Superhot",
          img: "https://upload.wikimedia.org/wikipedia/en/5/51/Superhot_Mind_Control_Delete_cover_art.webp",
          prize: "$24.99",
          description: "A unique first-person shooter where time only moves when you move.",
          rate: 4.7,
          youtubetrailer: "https://www.youtube.com/embed/vrS86l_CtAY?si=BDqeQbyBImWKqLTs",
          type: "highrate",
          
          
        },
        {
          name: "The Binding of Isaac: Rebirth",
          img: "https://upload.wikimedia.org/wikipedia/en/f/fa/Binding_of_isaac_header.jpg",
          prize: "$14.99",
          description: "A rogue-like dungeon crawler with dark humor and challenging gameplay.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/Z6_C2ppkdVc?si=HCY4q2BaiIqx76OF",
          type: "highrate",
          
          
        },
        {
          name: "Hollow Knight",
          img: "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp",
          prize: "$14.99",
          description: "A beautifully crafted Metroidvania with challenging combat and exploration.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/nSPJXlYjENE?si=f9KbnV77LcMt1PI1",
          type: "highrate",
          
          
        },
        {
          name: "FIFA 22",
          img: "https://upload.wikimedia.org/wikipedia/en/6/6c/FIFA_22_Cover.jpg",
          prize: "$59.99",
          description: "The latest installment in the popular football simulation series.",
          rate: 4.4,
          youtubetrailer: "https://www.youtube.com/embed/o1igaMv46SY?si=NNf_F-U6u9gsGPbw",
          type: "newgames",
          
          
        },
        {
          name: "NBA 2K23",
          img: "https://upload.wikimedia.org/wikipedia/en/d/d7/NBA_2K23_cover_art.jpg",
          prize: "$59.99",
          description: "The latest entry in the popular basketball simulation series.",
          rate: 4.5,
          youtubetrailer: "https://www.youtube.com/embed/MCU18y25WeQ?si=LHOLplMEeqDsaGJx",
          type: "newgames",
          
          
        },
        {
          name: "Gran Turismo 7",
          img: "https://upload.wikimedia.org/wikipedia/en/1/14/Gran_Turismo_7_cover_art.jpg",
          prize: "$59.99",
          description: "The latest installment in the renowned racing simulation series.",
          rate: 4.6,
          youtubetrailer: "https://www.youtube.com/embed/OJ5Jffr2fSA?si=UxzsXLXBzTxR4tDX",
          type: "newgames",
          
          
        },
        {
          name: "Ratchet & Clank: Rift Apart",
          img: "https://upload.wikimedia.org/wikipedia/en/3/37/Ratchet_and_Clank_cover.jpg",
          prize: "$69.99",
          description: "A platformer adventure game with dimensional travel mechanics.",
          rate: 4.8,
          youtubetrailer: "https://www.youtube.com/embed/ai3o0XtrnM8?si=w89ShsXV7X3ojM-b",
          type: "newgames",
          
          
        },
        {
          name: "Horizon Forbidden West",
          img: "https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg",
          prize: "$59.99",
          description: "An open-world action RPG set in a post-apocalyptic world with robotic creatures.",
          rate: 4.7,
          youtubetrailer: "https://www.youtube.com/embed/Lq594XmpPBg?si=xPOv3d27HL-fzwOf",
          type: "newgames",
          
          
        }
      ];
      
      
          const [show, setshow] = useState(false)
      const [selected, setselected] = useState(
        {}
      )
  return (
    <div >
      <Navbar/>
     {show?<Page selected={selected} setshow={setshow} />:<GameList setselected={setselected} setshow={setshow} gamesList={gamesList}/>}
      <Footer/>
    </div>
  )
}

export default List
