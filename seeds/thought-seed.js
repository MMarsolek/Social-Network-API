// const getReaction = require('./reactions-seed')
const thoughts = [
    'Very cool app! 5 stars!',
    'Had a great time tonight! <3',
    'When life gives you lemons...',
    'Study time, again!',
    'Nothing says city life like getting stuck in traffic for hours',
    '[tinder first date]  her: oh. I saw your profile picture holding the fish. I just assumed… fish: yeah this happens a lot',
    'Lemon is out of surgery! Elbow successfully repaired',
    'I did not pass the bar exam. This has been the most painful year of my life. I don’t really have anything else to say.',
    'Today is national black cat day. 🐈‍⬛ Some people believe black cats bring bad luck. Some believe they bring prosperity. Whatever colour, cats rule!',
    'The worst thing in life is to end up with people that make you feel all alone. —Robin Williams',
    'It’s World Health Day, and we owe a profound debt of gratitude to all our medical professionals. They’re still giving their all for us every day, at great risk to themselves, and we can’t thank them enough for their bravery and their service.'
  ];
  
  const reactionBody = [
    'You can\'t put a bear on a state flag and then act surprised when it shows up to a town hall meeting.',
    'But did she or did she not get where she needed to be',
    'I don\'t know who hurt you... but I need you to take this negativity elsewhere. These cookies are the backbone of this nation. ',
    'I am now convinced that most of us had the same childhood.',
    'Have you tried turning it off and on again?',
    'I wish these gas prices looked like your GPA',
    'They missed the perfect opportunity to say \'Ice Scream\'. ',
    'Nice try, but we’re on to you',
    'It’s almost like they’re the same thing…',
    'Always bring cinnamon buns on a deep-sea diving expedition.',
    'As the asteroid hurtled toward earth, Becky was upset her dentist appointment had been canceled.',
    'All you need to do is pick up the pen and begin.',
    'I cheated while playing the darts tournament by using a longbow.',
    'A good example of a useful vegetable is medicinal rhubarb.',
    'Their hot chocolate was very mediocre.',
    'Can you help me?',
    'Let\'s all just take a moment to breathe, please!',
    'I imagine you think of this activity as something characters from a Jane Austin novel did.',
    'The door slammed down on my hand, and I screamed like a little baby.'
  ];

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
  
  function getRandomReaction(){
    const numOfReactions =  Math.floor(Math.random() * reactionBody.length);
    const arrOfReactions = [];
    for(var i = 0; i < numOfReactions; i++) {
      arrOfReactions.push({reactionBody: reactionBody[genRandomIndex(reactionBody)], username: usernames[genRandomIndex(usernames)]})
    }
    return arrOfReactions;
  }



  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
  const getRandomThought = () => `${thoughts[genRandomIndex(thoughts)]}`;
  const getRandomUsername = () => `${usernames[genRandomIndex(usernames)]}`;
  
  function getThought(){
    const thoughtObject = {thoughtText: getRandomThought(), username: getRandomUsername(), reactions: getRandomReaction()};
    return thoughtObject;
  }

  
  module.exports =  getThought;
  