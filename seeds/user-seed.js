// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, unique: true, required: true, validate: {
//         validator: function(v) {
//             return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
//         },
//         message: "Please enter a valid email"
//       }},
//       thoughts: [{type: Schema.Types.ObjectId, ref: "Thought"}],
//       friends: [{type: Schema.Types.ObjectId, ref: "User"}],
//     createdAt: { type: Date, default: Date.now }
// });

  const usernames = [
    'TheeBandit',
    'MotoNoy',
    'JCarver',
    'le-bon-bon',
    'HappyAccident_041315',
    'HighStrugHippies',
    'CatPac',
    'WutsKraken',
    'CodingCatVideo',
    'JustCoping2018',
    'BlahBlahBingo',
    'Miss_Management'
  ];

  const emails = [
    'catlovewinter@sfdi.site',
    'scapaglenshiel@omtecha.com',
    'zhernakovsasha@bentsgolf.com',
    'twc8632947290@eatneha.com',
    'Hent1930@gustr.com',  
    'totallyRealFake@FBI.aol',
    'Lary1981@teleworm.us',
    'turtle@turtleclub.com',
    'tacocat@gmail.org',
    'susukiju@clrmail.com',
    'gener.a.tor@gmail.edu',
    'c.a.tj.o.e@gmail.com',
    'f.akee.ma.il@gmail.us',
    'tac.ocat@gmail.com',
    'cat.lover@gmail.pbs',
    'Brent1930@gustr.edu',
    'Hary1981@telewasorm.us',
    'susukiiju1987@cdlrmail.com',
    'jener.a.tors@gmail.aol',
    'cat.j.o.e@gmail.com',
    'f.akee.ma.le@gmail.html',
    'totalyNotFake@gmail.html',
    'mightBeFake@gmail.html',
    'nothingfunny@gmail.com',

  ];
  
  let curEmail = 0;
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  function getEmails(){
    let listEmail = emails[curEmail];
    curEmail++;
    return listEmail;
  }
  const getRandomUsername = () => `${usernames[genRandomIndex(usernames)]}`;

  function getUser(){
    const userObject = {username: getRandomUsername(), email: getEmails()};
    return userObject;
  }
  
  module.exports = getUser;
  