import p1 from '../Components/images/p1.jpg';
import p2 from '../Components/images/p2.png';
import p3 from '../Components/images/p3.png';
import p4 from '../Components/images/p4.jpg';
import p5 from '../Components/images/p5.png';
import markPic from '../Components/images/mark.png';
import elonPic from '../Components/images/elon.jpg';
import bilPic from '../Components/images/bil.jpg';
import kanyePic from '../Components/images/kanye.jpg';
import allmightPic from '../Components/images/allmight.jpg';
import youngMidoriaPic from '../Components/images/youngMidoria.jpg';
import peterPic from '../Components/images/peter.png';
import defaultContact from '../Components/images/defaultContact.jpg';

let contactsBen = [{color:0, num: 0, name:"Mark", img: markPic, time: "13:53", messageHistory: [{type:"text", side: "left", content:"I just heard about your whatsup clone, and im pissed!",time:"13:29"},{type:"text", side: "left", content:"Im gonna sue you!",time:"13:33"}, {type:"text", side: "left", content:"you know what..im gonna offer you a fair deal ",time:"13:44"},{type:"text", side: "left", content:"how about 1 billion $? ",time:"13:54"},{type:"text", side: "right", content:"Im sorry who are you again?",time:"14:01"}],nickname: "Mark Zuckerberg"},
                {color:0, num: 1, name:"AllMight", img: allmightPic, time: "14:53", messageHistory: [{type:"text", side: "right", content:"Can I be A hero too?",time:"14:51"},{type:"image/jpeg", side: "right", content:youngMidoriaPic,time:"14:53"},{type:"text", side: "left", content:"HA HA HA",time:"14:53"},{type:"text", side: "left", content:"Young Midoria",time:"14:53"},],nickname:"All Might"},
                {color:0, num: 2, name:"Kanye", img: kanyePic, time: "15:13", messageHistory: [{type:"text", side: "left", content:"people always ask me what I would do if I didn't win",time:"15:13"},{type:"text", side: "left", content:"...",time:"15:14"}, {type:"text", side: "left", content:"I guess will never know",time:"15:14"}],nickname: "kanye west"},
                {color:0, num: 3, name:"Bil", img: bilPic, time: "12:13", messageHistory: [{type:"text", side: "left", content:"I just heard about your whatsup clone, lol!",time:"12:13"},{type:"text", side: "left", content:"mark is gonna lose it",time:"12:15"}],nickname: "Bil Gates"},
                { color:0, num: 4, name:"Elon", img: elonPic, time: "06:13", messageHistory: [{type:"text", side: "left", content:"Just letting you know that we launch our spaceship again",time:"06:22"},{type:"text", side: "left", content:"Its gonna be legit!",time:"06:24"}, {type:"text", side: "left", content:"Never mind..it crashed again",time:"07:14"}],nickname: "Elon Musk"}
            ,{color:0, num: 5, name:"Peter", img:peterPic, time: "06:13", messageHistory: [{type:"text", side: "left", content:"Have you heard?",time:"03:13"},{type:"text", side: "right", content:"heard about what?",time:"03:13"}, {type:"text", side: "left", content:"about the bird bird bird",time:"03:14"},{type:"text", side: "left", content:"bird bird is the word",time:"03:14"},{type:"text", side: "left", content:"about the bird bird bird",time:"03:14"},{type:"text", side: "left", content:"bird bird is the word",time:"03:14"}],nickname: "Peter Griffin"}    
            ];

let contactsSagiv = [{color: 0, num: 0, name:"Ben", img: p1, time: "13:53", messageHistory: [{type:"text", side: "left", content:"we have to finish this project already",time:"14:53"},{type:"text", side: "left", content:"did you push your changes?",time:"14:53"}, {type:"text", side: "left", content:"And...?",time:"15:53"},{type:"text", side: "right", content:"OK OKKKK! I'll push",time:"15:55"}],nickname: "Ben The DFAQ"},
                {color:0, num: 1, name:"Peter", img:peterPic, time: "12:13", messageHistory: [{type:"text", side: "left", content:"Have you heard?",time:"14:53"},{type:"text", side: "right", content:"heard about what?",time:"15:53"}, {type:"text", side: "left", content:"about the bird bird bird",time:"15:53"},{type:"text", side: "left", content:"bird bird is the word",time:"15:53"},{type:"text", side: "left", content:"about the bird bird bird",time:"15:53"},{type:"text", side: "left", content:"bird bird is the word",time:"15:54"}],nickname: "Peter Griffin"},
                {color:0, num: 2, name:"Kanye", img: kanyePic, time: "12:13", messageHistory: [{type:"text", side: "left", content:"people always ask me what I would do if I didn't win",time:"15:13"},{type:"text", side: "left", content:"...",time:"15:14"}, {type:"text", side: "left", content:"I guess will never know",time:"15:14"}],nickname: "kanye west"},
                {color:0, num: 3, name:"Bil", img: bilPic, time: "12:13", messageHistory: [{type:"text", side: "left", content:"I just heard about your whatsup clone, lol!",time:"12:13"},{type:"text", side: "left", content:"mark is gonna lose it",time:"12:15"}],nickname: "Bil Gates"},
                {color:0, num: 4, name:"Elon", img: elonPic, time: "06:13", messageHistory: [{type:"text", side: "left", content:"Just letting you know that we launch our spaceship again",time:"06:22"},{type:"text", side: "left", content:"Its gonna be legit!",time:"06:24"}, {type:"text", side: "left", content:"Never mind..it crashed again",time:"07:14"}],nickname: "Elon Musk"}
                ];



const users = new Map([["Ben", ["1234","Ben The DFAQ",p1,contactsBen]],["Sagiv",["1234","Sagiv rrr",p3,contactsSagiv]],["Sahar",["1234","sahar rofe",p2,[]]],["Omri",["1234","omri ben hamo",p3,[]]],["Uri",["1234","uri graitzer",p5,[]]],["Liran",["1234","Liran Antebi",p3,[]]],["Niv",["1234","Parazit",defaultContact,[]]],
                        ["Mark", ["1234","Mark Zuckerberg",markPic,[]]],["Kanye", ["1234","kanye west",kanyePic,[]]],["AllMight", ["1234","All Might",allmightPic,[]]],["Bil", ["1234","Bil Gates",bilPic,[]]],["Elon", ["1234","Elon Musk",elonPic,[]]],["Peter", ["1234","Peter Griffin",peterPic,[]]] ]);



const timeToNum = (time) => {
    let hours = time.substr(0,2);
    let minutes = time.substr(3,5);
    let timeStr = hours + minutes;
    let timeNum = parseInt(timeStr);
    return timeNum;
}

export default users;