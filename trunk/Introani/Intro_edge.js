/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'Fonfo',
            display:'none',
            type:'image',
            rect:[203,180,1280,1024],
            opacity:0.72602739726027,
            fill:["rgba(0,0,0,0)",im+"Fonfo.jpg"],
            transform:[[-568,-493],[],[],[0.4281,0.388]]
         },
         {
            id:'Allpostal',
            display:'none',
            type:'image',
            rect:[326,151,1021,1103],
            fill:["rgba(0,0,0,0)",im+"Allpostal.png"],
            transform:[[-257,-669],[],[],[0.06,0.06]]
         },
         {
            id:'reso',
            display:'none',
            type:'image',
            rect:[477,226,391,802],
            fill:["rgba(0,0,0,0)",im+"reso.png"],
            transform:[[-684,-585],[],[],[0.06,0.06]]
         },
         {
            id:'liga1',
            display:'none',
            type:'image',
            rect:[387,147,362,449],
            fill:["rgba(0,0,0,0)",im+"liga1.png"],
            transform:[[-459,-72],[],[],[0.06,0.06]]
         },
         {
            id:'sobre',
            display:'none',
            type:'image',
            rect:[517,129,469,502],
            fill:["rgba(0,0,0,0)",im+"sobre.png"],
            transform:[[-182,-301],[],[],[0.09,0.09]]
         },
         {
            id:'sobreCopy',
            display:'none',
            type:'image',
            rect:[517,129,469,502],
            fill:["rgba(0,0,0,0)",im+"sobre.png"],
            transform:[[-182,-301],[],[],[0.09,0.09]]
         },
         {
            id:'sobreCopy2',
            display:'none',
            type:'image',
            rect:[517,129,469,502],
            fill:["rgba(0,0,0,0)",im+"sobre.png"],
            transform:[[-182,-301],[],[],[0.09,0.09]]
         },
         {
            id:'sobreCopy3',
            display:'none',
            type:'image',
            rect:[517,129,469,502],
            fill:["rgba(0,0,0,0)",im+"sobre.png"],
            transform:[[-182,-301],[],[],[0.09,0.09]]
         },
         {
            id:'liga2',
            display:'none',
            type:'image',
            rect:[151,261,708,435],
            fill:["rgba(0,0,0,0)",im+"liga2.png"],
            transform:[[-386,-180],[],[],[0.059,0.06]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Allpostal}": [
            ["transform", "translateX", '-257.87px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '0.06'],
            ["transform", "scaleY", '0.06'],
            ["transform", "translateY", '-669.41px'],
            ["style", "display", 'none']
         ],
         "${_reso}": [
            ["transform", "translateX", '-684.23px'],
            ["transform", "rotateZ", '0'],
            ["transform", "scaleX", '0.06'],
            ["transform", "scaleY", '0.06'],
            ["transform", "translateY", '-585.06px'],
            ["style", "display", 'none']
         ],
         "${_liga2}": [
            ["transform", "scaleY", '0.06'],
            ["transform", "translateY", '-416.307px'],
            ["transform", "translateX", '-386.76px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.059'],
            ["style", "height", '435px'],
            ["style", "clip", [0,708,435,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '708px']
         ],
         "${_sobreCopy}": [
            ["transform", "translateX", '-182.395px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.09'],
            ["style", "display", 'none'],
            ["transform", "translateY", '-301px'],
            ["transform", "scaleY", '0.09']
         ],
         "${_Fonfo}": [
            ["transform", "translateX", '-568.651px'],
            ["transform", "scaleY", '0.388'],
            ["transform", "scaleX", '0.428'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-493.985px'],
            ["style", "display", 'none']
         ],
         "${_sobreCopy2}": [
            ["transform", "translateX", '-182.395px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.09'],
            ["style", "display", 'none'],
            ["transform", "translateY", '-301px'],
            ["transform", "scaleY", '0.09']
         ],
         "${_liga1}": [
            ["transform", "scaleY", '0.06'],
            ["transform", "scaleX", '0.06'],
            ["transform", "translateX", '-599.841px'],
            ["transform", "translateY", '-308.594px'],
            ["style", "display", 'none']
         ],
         "${_sobreCopy3}": [
            ["transform", "translateX", '-182.395px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.09'],
            ["style", "display", 'none'],
            ["transform", "translateY", '-301px'],
            ["transform", "scaleY", '0.09']
         ],
         "${_Stage}": [
            ["style", "height", '398px'],
            ["color", "background-color", 'rgba(114,138,213,1)'],
            ["style", "width", '548px']
         ],
         "${_sobre}": [
            ["transform", "translateX", '-634.395px'],
            ["transform", "rotateZ", '720deg'],
            ["transform", "scaleX", '0.09'],
            ["transform", "scaleY", '0.09'],
            ["transform", "translateY", '-301px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19999,
         autoPlay: true,
         labels: {
            "Tiempo uno": 3000
         },
         timeline: [
            { id: "eid179", tween: [ "transform", "${_sobreCopy2}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 12941, duration: 1176 },
            { id: "eid93", tween: [ "transform", "${_sobre}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 7058, duration: 1176 },
            { id: "eid81", tween: [ "transform", "${_liga1}", "translateX", '-460.139px', { fromValue: '-599.841px'}], position: 5882, duration: 1176 },
            { id: "eid155", tween: [ "style", "${_liga2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid153", tween: [ "style", "${_liga2}", "display", 'block', { fromValue: 'none'}], position: 5882, duration: 0 },
            { id: "eid17", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,101,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 2352 },
            { id: "eid89", tween: [ "transform", "${_sobre}", "translateX", '-634.395px', { fromValue: '-182.395px'}], position: 7058, duration: 1176 },
            { id: "eid104", tween: [ "transform", "${_sobre}", "translateX", '-644.256px', { fromValue: '-634.395px'}], position: 8235, duration: 588 },
            { id: "eid107", tween: [ "transform", "${_sobre}", "translateX", '-332.393px', { fromValue: '-644.256px'}], position: 8823, duration: 2352, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "transform", "${_liga2}", "translateX", '-386.034px', { fromValue: '-526.24px'}], position: 5882, duration: 1176 },
            { id: "eid82", tween: [ "transform", "${_liga1}", "translateY", '-73.03px', { fromValue: '-308.594px'}], position: 5882, duration: 1176 },
            { id: "eid149", tween: [ "style", "${_Allpostal}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_Allpostal}", "display", 'block', { fromValue: 'none'}], position: 2352, duration: 0 },
            { id: "eid33", tween: [ "transform", "${_Allpostal}", "translateY", '-395.409px', { fromValue: '-669.41px'}], position: 2352, duration: 2352, easing: "easeOutBounce" },
            { id: "eid203", tween: [ "style", "${_Fonfo}", "opacity", '0.7260270118713379', { fromValue: '0'}], position: 1000, duration: 1000 },
            { id: "eid172", tween: [ "transform", "${_sobreCopy}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 10000, duration: 1176 },
            { id: "eid159", tween: [ "style", "${_sobre}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_sobre}", "display", 'block', { fromValue: 'none'}], position: 7058, duration: 0 },
            { id: "eid173", tween: [ "transform", "${_sobreCopy}", "translateY", '-74.41px', { fromValue: '-301px'}], position: 10000, duration: 1176 },
            { id: "eid177", tween: [ "transform", "${_sobreCopy}", "translateY", '-203.59px', { fromValue: '-74.41px'}], position: 11764, duration: 2352, easing: "easeOutQuint" },
            { id: "eid156", tween: [ "style", "${_liga1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_liga1}", "display", 'block', { fromValue: 'none'}], position: 5882, duration: 0 },
            { id: "eid187", tween: [ "transform", "${_sobreCopy3}", "translateY", '-74.41px', { fromValue: '-301px'}], position: 15882, duration: 1176 },
            { id: "eid191", tween: [ "transform", "${_sobreCopy3}", "translateY", '-68.41px', { fromValue: '-74.41px'}], position: 17647, duration: 2352 },
            { id: "eid90", tween: [ "transform", "${_sobre}", "translateY", '-74.41px', { fromValue: '-301px'}], position: 7058, duration: 1176 },
            { id: "eid108", tween: [ "transform", "${_sobre}", "translateY", '-275.41px', { fromValue: '-74.41px'}], position: 8823, duration: 2352, easing: "easeOutQuad" },
            { id: "eid181", tween: [ "style", "${_sobreCopy2}", "display", 'block', { fromValue: 'none'}], position: 12941, duration: 0 },
            { id: "eid174", tween: [ "style", "${_sobreCopy}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid186", tween: [ "transform", "${_sobreCopy3}", "rotateZ", '720deg', { fromValue: '0deg'}], position: 15882, duration: 1176 },
            { id: "eid41", tween: [ "transform", "${_reso}", "translateX", '-544.229px', { fromValue: '-684.23px'}], position: 4705, duration: 1176 },
            { id: "eid32", tween: [ "transform", "${_Allpostal}", "translateX", '-762.87px', { fromValue: '-257.87px'}], position: 2352, duration: 2352, easing: "easeOutBounce" },
            { id: "eid99", tween: [ "transform", "${_Allpostal}", "translateX", '-772.84px', { fromValue: '-762.87px'}], position: 8235, duration: 588 },
            { id: "eid101", tween: [ "transform", "${_Allpostal}", "translateX", '-762.87px', { fromValue: '-772.84px'}], position: 8823, duration: 588 },
            { id: "eid194", tween: [ "transform", "${_Allpostal}", "translateX", '-772.84px', { fromValue: '-762.87px'}], position: 11176, duration: 588 },
            { id: "eid193", tween: [ "transform", "${_Allpostal}", "translateX", '-762.87px', { fromValue: '-772.84px'}], position: 11764, duration: 588 },
            { id: "eid196", tween: [ "transform", "${_Allpostal}", "translateX", '-772.84px', { fromValue: '-762.87px'}], position: 14117, duration: 588 },
            { id: "eid195", tween: [ "transform", "${_Allpostal}", "translateX", '-762.87px', { fromValue: '-772.84px'}], position: 14705, duration: 588 },
            { id: "eid198", tween: [ "transform", "${_Allpostal}", "translateX", '-772.84px', { fromValue: '-762.87px'}], position: 17058, duration: 588 },
            { id: "eid197", tween: [ "transform", "${_Allpostal}", "translateX", '-762.87px', { fromValue: '-772.84px'}], position: 17647, duration: 588 },
            { id: "eid151", tween: [ "style", "${_reso}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_reso}", "display", 'block', { fromValue: 'none'}], position: 4705, duration: 0 },
            { id: "eid175", tween: [ "transform", "${_sobreCopy}", "translateX", '-634.395px', { fromValue: '-182.395px'}], position: 10000, duration: 1176 },
            { id: "eid176", tween: [ "transform", "${_sobreCopy}", "translateX", '-644.256px', { fromValue: '-634.395px'}], position: 11176, duration: 588 },
            { id: "eid178", tween: [ "transform", "${_sobreCopy}", "translateX", '-332.393px', { fromValue: '-644.256px'}], position: 11764, duration: 2352, easing: "easeOutQuint" },
            { id: "eid42", tween: [ "transform", "${_reso}", "translateY", '-319.94px', { fromValue: '-585.06px'}], position: 4705, duration: 1176 },
            { id: "eid36", tween: [ "transform", "${_Allpostal}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 2352, duration: 2352 },
            { id: "eid180", tween: [ "transform", "${_sobreCopy2}", "translateY", '-74.41px', { fromValue: '-301px'}], position: 12941, duration: 1176 },
            { id: "eid184", tween: [ "transform", "${_sobreCopy2}", "translateY", '-128.59px', { fromValue: '-74.41px'}], position: 14705, duration: 2352 },
            { id: "eid84", tween: [ "transform", "${_liga2}", "translateY", '-180.45px', { fromValue: '-416.307px'}], position: 5882, duration: 1176 },
            { id: "eid182", tween: [ "transform", "${_sobreCopy2}", "translateX", '-634.395px', { fromValue: '-182.395px'}], position: 12941, duration: 1176 },
            { id: "eid183", tween: [ "transform", "${_sobreCopy2}", "translateX", '-644.256px', { fromValue: '-634.395px'}], position: 14117, duration: 588 },
            { id: "eid185", tween: [ "transform", "${_sobreCopy2}", "translateX", '-332.393px', { fromValue: '-644.256px'}], position: 14705, duration: 2352 },
            { id: "eid64", tween: [ "transform", "${_reso}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 4705, duration: 1176, easing: "easeOutBounce" },
            { id: "eid189", tween: [ "transform", "${_sobreCopy3}", "translateX", '-634.395px', { fromValue: '-182.395px'}], position: 15882, duration: 1176 },
            { id: "eid190", tween: [ "transform", "${_sobreCopy3}", "translateX", '-644.256px', { fromValue: '-634.395px'}], position: 17058, duration: 588 },
            { id: "eid192", tween: [ "transform", "${_sobreCopy3}", "translateX", '-332.393px', { fromValue: '-644.256px'}], position: 17647, duration: 2352 },
            { id: "eid199", tween: [ "style", "${_Fonfo}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid200", tween: [ "style", "${_Fonfo}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid188", tween: [ "style", "${_sobreCopy3}", "display", 'block', { fromValue: 'none'}], position: 15882, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-211742");
