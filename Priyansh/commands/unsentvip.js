module.exports.config = {
	name: "unsentvip",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "add uid for the user you want to put in excemption",
	commandCategory: "config",
	usages: "[userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};
const permission = ['100044047537257'];

function _0x3523(){const _0x1cffa5=['exports','run','[\x20OK\x20]\x20Added\x20','[\x20\x41\x4c\x45\x52\x54\x20]\x20\x59\x6f\x75\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6e\x20\x64\x65\x74\x65\x63\x74\x65\x64\x20\x66\x6f\x72\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20the\x20\x63\x72\x65\x64\x69\x74\x73\x20\x66\x72\x6f\x6d\x20\x74\x68\x69\x73\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x21\x0a\x0a\x22','stringify','credits','nodemodule','Please\x20mention\x20a\x20user.','.js\x22','includes','35616esVXuO','2262708ULvPVo','4327740bpAsiG','You\x20don\x27t\x20have\x20permission\x20for\x20this\x20command','client','\x20to\x20the\x20Unsent\x20VIP\x20Config','threadID','length','[\x20OK\x20]\x20Successfully\x20added\x20','log','push','name','9615090zlFFzD','fs-extra','100017985245260','80UgIWHx','\x1b[33m[\x20\x41\x4c\x45\x52\x54\x20]\x1b[37m\x20»\x20Nakaw\x20\x6e\x61\x20nga\x20\u0079\u0075\u006e\u0067\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x70\x61\x70\x61\x6c\x69\x74\x61\x6e\x20pa\x20\x79\x75\x6e\x67\x20\x63\x72\x65\x64\x69\x74\x73,\x20naku\x20po\x0a\x0a','getNameUser','utf8','sendMessage','147hvWBZO','235816YWYVcI','100017985245260','config','781891YPQYvQ','senderID','5140xsDXNj','453sZzskE'];_0x3523=function(){return _0x1cffa5;};return _0x3523();}const _0x337154=_0x5df1;function _0x5df1(_0x5387d3,_0x4a7891){const _0x352351=_0x3523();return _0x5df1=function(_0x5df164,_0x1d5957){_0x5df164=_0x5df164-0x191;let _0x1cd699=_0x352351[_0x5df164];return _0x1cd699;},_0x5df1(_0x5387d3,_0x4a7891);}(function(_0x4c5097,_0x2d4957){const _0x50b2b5=_0x5df1,_0x1406f0=_0x4c5097();while(!![]){try{const _0x300324=-parseInt(_0x50b2b5(0x192))/0x1+parseInt(_0x50b2b5(0x194))/0x2*(parseInt(_0x50b2b5(0x195))/0x3)+parseInt(_0x50b2b5(0x1a1))/0x4+parseInt(_0x50b2b5(0x1af))/0x5*(parseInt(_0x50b2b5(0x1a0))/0x6)+-parseInt(_0x50b2b5(0x1b4))/0x7*(-parseInt(_0x50b2b5(0x1b5))/0x8)+parseInt(_0x50b2b5(0x1a2))/0x9+-parseInt(_0x50b2b5(0x1ac))/0xa;if(_0x300324===_0x2d4957)break;else _0x1406f0['push'](_0x1406f0['shift']());}catch(_0x3b0cee){_0x1406f0['push'](_0x1406f0['shift']());}}}(_0x3523,0x62ed0),module[_0x337154(0x196)][_0x337154(0x197)]=async function({api:_0x430ca7,event:_0x34384c,args:_0x4dc565,Users:_0x1c27c9,permssion:_0x47089c}){const _0x26870f=_0x337154,_0x4aa0e6=_0x4dc565['slice'](0x1,_0x4dc565[_0x26870f(0x1a7)]),{threadID:_0x4de2fb,messageID:_0x1ce406,mentions:_0x57be8a}=_0x34384c,{configPath:_0xa35492}=global[_0x26870f(0x1a4)],{UNSENTVIP:_0x444b10}=global['config'],{userName:_0x8d49fa}=global['data'],{writeFileSync:_0x55899d}=global[_0x26870f(0x19c)][_0x26870f(0x1ad)];if(this[_0x26870f(0x191)][_0x26870f(0x19b)]!='\x53\x61\x69\x6b\x69\x44\x65\x73\x75')return console[_0x26870f(0x1a9)](_0x26870f(0x1b0)+this[_0x26870f(0x191)]['name']+''),_0x430ca7[_0x26870f(0x1b3)](_0x26870f(0x199)+__dirname+('/'+this[_0x26870f(0x191)][_0x26870f(0x1ab)]+_0x26870f(0x19e)),_0x34384c[_0x26870f(0x1a6)],_0x34384c['messageID']);const _0x28f50a=Object['keys'](_0x57be8a),_0x24cd83=[_0x26870f(0x1b6),_0x26870f(0x1ae)];if(!permission[_0x26870f(0x19f)](_0x34384c[_0x26870f(0x193)])&&!_0x24cd83[_0x26870f(0x19f)](_0x34384c[_0x26870f(0x193)]))return _0x430ca7[_0x26870f(0x1b3)](_0x26870f(0x1a3),_0x4de2fb,_0x1ce406);if(!_0x28f50a)return _0x430ca7[_0x26870f(0x1b3)](_0x26870f(0x19d),_0x4de2fb,_0x1ce406);if(_0x28f50a[_0x26870f(0x1a7)]!=0x0&&isNaN(_0x4aa0e6[0x0])){var _0x406f5d=[];for(const _0x2d4bb4 of _0x28f50a){_0x444b10[_0x26870f(0x1aa)](_0x2d4bb4),config['UNSENTVIP'][_0x26870f(0x1aa)](_0x2d4bb4),_0x406f5d[_0x26870f(0x1aa)]('[\x20'+_0x2d4bb4+'\x20]\x20»\x20'+_0x34384c['mentions'][_0x2d4bb4]);};return _0x55899d(_0xa35492,JSON[_0x26870f(0x19a)](config,null,0x4),'utf8'),_0x430ca7[_0x26870f(0x1b3)](_0x26870f(0x198)+_0x28f50a[_0x26870f(0x1a7)]+'\x20users\x20to\x20the\x20Unsent\x20VIP\x20Config',_0x4de2fb,_0x1ce406);}else{if(_0x4aa0e6[_0x26870f(0x1a7)]!=0x0&&!isNaN(_0x4aa0e6[0x0])){_0x444b10[_0x26870f(0x1aa)](_0x4aa0e6[0x0]),config['UNSENTVIP'][_0x26870f(0x1aa)](_0x4aa0e6[0x0]);const _0x45ef08=await _0x1c27c9[_0x26870f(0x1b1)](_0x4aa0e6[0x0]);return _0x55899d(_0xa35492,JSON[_0x26870f(0x19a)](config,null,0x4),_0x26870f(0x1b2)),_0x430ca7[_0x26870f(0x1b3)](_0x26870f(0x1a8)+_0x45ef08+_0x26870f(0x1a5),_0x4de2fb,_0x1ce406);}else return global['utils']['throwError'](this[_0x26870f(0x191)]['name'],_0x4de2fb,_0x1ce406);}});