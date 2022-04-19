import p1 from '../Components/images/p1.jpg';
import p2 from '../Components/images/p2.png';
import p3 from '../Components/images/p3.png';
import p4 from '../Components/images/p4.jpg';
import p5 from '../Components/images/p5.png';
import defaultContact from '../Components/images/defaultContact.jpg';

let contactsBen = [{num: 0, name:"Sagiv", img: p4, time: "13:53", messageHistory: [{type:"text", side: "left", content:"hi",time:"13:53"},{type:"text", side: "left", content:"hi",time:"13:53"}, {type:"text", side: "left", content:"hi",time:"13:53"}],nickname:"Sagiv The Terminator"},
                {num: 1, name:"Omri", img: p3, time: "12:13", messageHistory: [{type:"text", side: "left", content:"hi",time:"13:53"},{type:"text", side: "left", content:"hi",time:"13:53"}, {type:"text", side: "left", content:"hi",time:"13:53"}],nickname: "onri ben hamo"}];

let contactsSagiv = [{num: 0, name:"Ben", img: p1, time: "13:53", messageHistory: [{type:"text", side: "left", content:"hi",time:"13:53"},{type:"text", side: "left", content:"hi",time:"13:53"}, {type:"text", side: "left", content:"bennnnnnnnn",time:"13:53"}],nickname: "Ben The DFAQ"},
                {num: 1, name:"Omri", img:p3, time: "12:13", messageHistory: [{type:"text", side: "left", content:"hi",time:"13:53"},{type:"text", side: "left", content:"hi",time:"13:53"}, {type:"text", side: "left", content:"hi",time:"13:53"}],nickname: "onri ben hamo"}];



const users = new Map([["Ben", ["1234","Ben The DFAQ",p1,contactsBen]],["Sagiv",["1234","Sagiv The Terminator",p4,contactsSagiv]],["Sahar",["1234","sahar rofe",p2,[]]],["Omri",["1234","onri ben hamo",p3,[]]],["Uri",["1234","uri graitzer",p5,[]]],["Liran",["1234","Liran Antebi",p3,[]]],["Niv",["1234","Parazit",defaultContact,[]]]]);


export default users;