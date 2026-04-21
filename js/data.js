// ============================================================
// LINGUALEAP – LESSON DATA
// ============================================================

function getUnitsForLevel(level) {
  const allUnits = {
    beginner: [
      {
        id: 'b-1', title: 'Greetings & Basics', icon: '👋', desc: 'Say hello, introduce yourself',
        lessons: [
          { id: 'b-1-1', title: 'Hello & Goodbye', icon: '👋', xp: 10 },
          { id: 'b-1-2', title: 'My Name Is...', icon: '📛', xp: 10 },
          { id: 'b-1-3', title: 'How Are You?', icon: '😊', xp: 10 },
          { id: 'b-1-4', title: 'Please & Thank You', icon: '🙏', xp: 10 },
        ]
      },
      {
        id: 'b-2', title: 'Numbers & Colors', icon: '🔢', desc: 'Count and describe the world',
        lessons: [
          { id: 'b-2-1', title: 'Numbers 1–10', icon: '1️⃣', xp: 10 },
          { id: 'b-2-2', title: 'Numbers 11–100', icon: '🔢', xp: 15 },
          { id: 'b-2-3', title: 'Basic Colors', icon: '🎨', xp: 10 },
          { id: 'b-2-4', title: 'Shapes', icon: '🔷', xp: 10 },
        ]
      },
      {
        id: 'b-3', title: 'Family & People', icon: '👨‍👩‍👧', desc: 'Talk about family members',
        lessons: [
          { id: 'b-3-1', title: 'Family Members', icon: '👨‍👩‍👧', xp: 10 },
          { id: 'b-3-2', title: 'Describing People', icon: '🧑', xp: 10 },
          { id: 'b-3-3', title: 'Ages & Birthdays', icon: '🎂', xp: 15 },
        ]
      },
      {
        id: 'b-4', title: 'Food & Drinks', icon: '🍎', desc: 'Order food, name what you eat',
        lessons: [
          { id: 'b-4-1', title: 'Common Foods', icon: '🍎', xp: 10 },
          { id: 'b-4-2', title: 'Drinks', icon: '☕', xp: 10 },
          { id: 'b-4-3', title: 'At the Restaurant', icon: '🍽️', xp: 15 },
        ]
      }
    ],
    elementary: [
      {
        id: 'e-1', title: 'Daily Routines', icon: '⏰', desc: 'Talk about your everyday life',
        lessons: [
          { id: 'e-1-1', title: 'Morning Routine', icon: '🌅', xp: 15 },
          { id: 'e-1-2', title: 'At Work / School', icon: '💼', xp: 15 },
          { id: 'e-1-3', title: 'Evening Activities', icon: '🌙', xp: 15 },
          { id: 'e-1-4', title: 'Weekends', icon: '🎉', xp: 15 },
        ]
      },
      {
        id: 'e-2', title: 'Present Tense', icon: '📝', desc: 'Describe things happening now',
        lessons: [
          { id: 'e-2-1', title: 'Simple Present', icon: '📝', xp: 20 },
          { id: 'e-2-2', title: 'Present Continuous', icon: '⏳', xp: 20 },
          { id: 'e-2-3', title: 'Negatives', icon: '❌', xp: 20 },
          { id: 'e-2-4', title: 'Questions', icon: '❓', xp: 20 },
        ]
      },
      {
        id: 'e-3', title: 'Places & Directions', icon: '🗺️', desc: 'Navigate the city',
        lessons: [
          { id: 'e-3-1', title: 'In the City', icon: '🏙️', xp: 15 },
          { id: 'e-3-2', title: 'Giving Directions', icon: '➡️', xp: 20 },
          { id: 'e-3-3', title: 'Transportation', icon: '🚌', xp: 15 },
        ]
      }
    ],
    intermediate: [
      {
        id: 'i-1', title: 'Past & Future', icon: '⏱️', desc: 'Tell stories and make plans',
        lessons: [
          { id: 'i-1-1', title: 'Simple Past', icon: '⬅️', xp: 20 },
          { id: 'i-1-2', title: 'Past Continuous', icon: '🔄', xp: 20 },
          { id: 'i-1-3', title: 'Future with Will', icon: '➡️', xp: 20 },
          { id: 'i-1-4', title: 'Going to', icon: '🎯', xp: 20 },
        ]
      },
      {
        id: 'i-2', title: 'Work & Career', icon: '💼', desc: 'Professional English',
        lessons: [
          { id: 'i-2-1', title: 'Job Vocabulary', icon: '👔', xp: 20 },
          { id: 'i-2-2', title: 'Emails & Letters', icon: '📧', xp: 25 },
          { id: 'i-2-3', title: 'Meetings', icon: '🤝', xp: 20 },
        ]
      },
      {
        id: 'i-3', title: 'Conditionals', icon: '🔀', desc: 'If...then scenarios',
        lessons: [
          { id: 'i-3-1', title: 'Zero Conditional', icon: '⚖️', xp: 20 },
          { id: 'i-3-2', title: 'First Conditional', icon: '1️⃣', xp: 25 },
          { id: 'i-3-3', title: 'Second Conditional', icon: '2️⃣', xp: 25 },
        ]
      }
    ],
    advanced: [
      {
        id: 'a-1', title: 'Perfect Tenses', icon: '🏆', desc: 'Master complex time expressions',
        lessons: [
          { id: 'a-1-1', title: 'Present Perfect', icon: '✅', xp: 30 },
          { id: 'a-1-2', title: 'Past Perfect', icon: '⏮️', xp: 30 },
          { id: 'a-1-3', title: 'Future Perfect', icon: '⏭️', xp: 30 },
        ]
      },
      {
        id: 'a-2', title: 'Idioms & Phrases', icon: '💬', desc: 'Sound like a native speaker',
        lessons: [
          { id: 'a-2-1', title: 'Common Idioms', icon: '🗣️', xp: 30 },
          { id: 'a-2-2', title: 'Business Phrases', icon: '💼', xp: 30 },
          { id: 'a-2-3', title: 'Slang & Informal', icon: '😎', xp: 30 },
        ]
      },
      {
        id: 'a-3', title: 'Academic English', icon: '🎓', desc: 'Write and speak formally',
        lessons: [
          { id: 'a-3-1', title: 'Essay Writing', icon: '📄', xp: 40 },
          { id: 'a-3-2', title: 'Presentations', icon: '📊', xp: 40 },
          { id: 'a-3-3', title: 'Debate & Argument', icon: '⚖️', xp: 40 },
        ]
      }
    ]
  };

  // Map level to appropriate units
  const levelMap = {
    beginner: allUnits.beginner,
    elementary: [...allUnits.beginner.slice(0,2), ...allUnits.elementary],
    intermediate: [...allUnits.elementary, ...allUnits.intermediate],
    advanced: [...allUnits.intermediate, ...allUnits.advanced]
  };
  return levelMap[level] || allUnits.beginner;
}

// ============================================================
// LESSON QUESTIONS BANK
// ============================================================
const LESSON_QUESTIONS = {
  // BEGINNER
  'b-1-1': [
    {
      type: 'multiple_choice',
      question: 'Which word means "Hello" in English?',
      image: '👋',
      choices: ['Hello', 'Goodbye', 'Please', 'Thank you'],
      answer: 0
    },
    {
      type: 'multiple_choice',
      question: 'How do you say goodbye in English?',
      image: '👋',
      choices: ['Good morning', 'Goodbye', 'Hello', 'See you!'],
      answer: 1
    },
    {
      type: 'word_arrange',
      question: 'Arrange the words to make: "Hello! How are you?"',
      words: ['Hello!', 'How', 'are', 'you?'],
      answer: ['Hello!', 'How', 'are', 'you?']
    },
    {
      type: 'type_answer',
      question: 'Type "Good morning" in the box below:',
      image: '🌅',
      answer: 'good morning',
      hint: 'A greeting for the morning time'
    },
    {
      type: 'multiple_choice',
      question: 'What do you say when you meet someone for the first time?',
      choices: ['Goodbye!', 'Nice to meet you!', 'See you later!', 'Good night!'],
      answer: 1
    },
  ],
  'b-1-2': [
    {
      type: 'type_answer',
      question: 'Complete: "My ___ is John."',
      image: '📛',
      answer: 'name',
      hint: 'What people call you'
    },
    {
      type: 'multiple_choice',
      question: 'How do you introduce yourself?',
      choices: ['I am name my John', 'My name is John', 'Name my John is', 'John name my is'],
      answer: 1
    },
    {
      type: 'word_arrange',
      question: 'Arrange: "My name is Sarah."',
      words: ['My', 'name', 'is', 'Sarah.'],
      answer: ['My', 'name', 'is', 'Sarah.']
    },
    {
      type: 'multiple_choice',
      question: 'What does "I am from India" mean?',
      image: '🇮🇳',
      choices: ['Your country is India', 'My country is India', 'India is big', 'India and me'],
      answer: 1
    },
    {
      type: 'type_answer',
      question: 'Type "I am a student"',
      image: '🎒',
      answer: 'i am a student',
      hint: 'Start with "I am"'
    },
  ],
  'b-1-3': [
    {
      type: 'multiple_choice',
      question: 'How do you ask "Are you okay?" in English?',
      choices: ['How are you?', 'Where are you?', 'Who are you?', 'When are you?'],
      answer: 0,
      image: '😊'
    },
    {
      type: 'multiple_choice',
      question: '"I am fine, thank you." — What does this mean?',
      choices: ['I am sick', 'I am angry', 'I am good', 'I am sad'],
      answer: 2
    },
    {
      type: 'word_arrange',
      question: 'Arrange: "I am doing well, thanks!"',
      words: ['I', 'am', 'doing', 'well,', 'thanks!'],
      answer: ['I', 'am', 'doing', 'well,', 'thanks!']
    },
    {
      type: 'type_answer',
      question: 'Type: "How are you?"',
      image: '❓',
      answer: 'how are you',
      hint: 'A question about someone\'s wellbeing'
    },
    {
      type: 'multiple_choice',
      question: 'Which is correct?',
      choices: ['I am not fine', 'I no fine', 'I fine not', 'Fine I am not'],
      answer: 0
    },
  ],
  'b-2-1': [
    {
      type: 'multiple_choice',
      question: 'What is 3 + 4 called in English?',
      image: '3️⃣',
      choices: ['Six', 'Seven', 'Eight', 'Five'],
      answer: 1
    },
    {
      type: 'multiple_choice',
      question: 'Which number comes after NINE?',
      choices: ['Eight', 'Eleven', 'Ten', 'Twelve'],
      answer: 2,
      image: '🔢'
    },
    {
      type: 'type_answer',
      question: 'Type the number "5" as a word:',
      image: '5️⃣',
      answer: 'five',
      hint: 'f _ _ e'
    },
    {
      type: 'word_arrange',
      question: 'Count from one: one, ___, three',
      words: ['two', 'four', 'zero', 'one'],
      answer: ['two']
    },
    {
      type: 'multiple_choice',
      question: '"Eight" is the number:',
      choices: ['7', '8', '9', '6'],
      answer: 1
    },
  ],
  'b-3-1': [
    {
      type: 'multiple_choice',
      question: 'What is "mother" in a family?',
      image: '👩',
      choices: ['A sister', 'A female parent', 'A daughter', 'A grandmother'],
      answer: 1
    },
    {
      type: 'multiple_choice',
      question: 'What do you call your father\'s father?',
      image: '👴',
      choices: ['Uncle', 'Brother', 'Grandfather', 'Cousin'],
      answer: 2
    },
    {
      type: 'word_arrange',
      question: 'Make a sentence: "She is my sister."',
      words: ['She', 'is', 'my', 'sister.'],
      answer: ['She', 'is', 'my', 'sister.']
    },
    {
      type: 'type_answer',
      question: 'Your parents\' daughter (not you) is your ___:',
      image: '👧',
      answer: 'sister',
      hint: 's _ _ t _ r'
    },
    {
      type: 'multiple_choice',
      question: '"Brother" means:',
      choices: ['Female sibling', 'Male sibling', 'Male parent', 'Male cousin'],
      answer: 1
    },
  ],
  'b-4-1': [
    {
      type: 'multiple_choice',
      question: 'What is this? 🍎',
      choices: ['Orange', 'Mango', 'Apple', 'Banana'],
      answer: 2,
      image: '🍎'
    },
    {
      type: 'multiple_choice',
      question: 'Which is a vegetable?',
      choices: ['🍎 Apple', '🍌 Banana', '🥕 Carrot', '🍇 Grapes'],
      answer: 2
    },
    {
      type: 'type_answer',
      question: 'What food is this? 🍞',
      image: '🍞',
      answer: 'bread',
      hint: 'You make toast with it'
    },
    {
      type: 'word_arrange',
      question: 'Make a sentence: "I like rice and chicken."',
      words: ['I', 'like', 'rice', 'and', 'chicken.'],
      answer: ['I', 'like', 'rice', 'and', 'chicken.']
    },
    {
      type: 'multiple_choice',
      question: '"I am hungry." means:',
      choices: ['I want to sleep', 'I want to eat', 'I am full', 'I am sick'],
      answer: 1
    },
  ],

  // ELEMENTARY
  'e-1-1': [
    {
      type: 'multiple_choice',
      question: 'What do you do first in the morning?',
      image: '🌅',
      choices: ['I go to sleep', 'I wake up', 'I eat dinner', 'I watch TV'],
      answer: 1
    },
    {
      type: 'word_arrange',
      question: 'Arrange: "I brush my teeth every morning."',
      words: ['I', 'brush', 'my', 'teeth', 'every', 'morning.'],
      answer: ['I', 'brush', 'my', 'teeth', 'every', 'morning.']
    },
    {
      type: 'multiple_choice',
      question: '"I take a shower." — When do people usually do this?',
      choices: ['At night only', 'In the morning or evening', 'Never', 'Only on weekends'],
      answer: 1
    },
    {
      type: 'type_answer',
      question: 'Complete: "I eat ___ for breakfast."',
      image: '🥣',
      answer: 'breakfast',
      hint: 'The first meal of the day'
    },
    {
      type: 'multiple_choice',
      question: 'Which sentence is correct?',
      choices: ['Every day I waking up at 7.', 'I wake up every day at 7.', 'I wakes up at 7.', 'At 7 I waked up.'],
      answer: 1
    },
  ],
  'e-2-1': [
    {
      type: 'multiple_choice',
      question: 'Which is correct? (Simple Present)',
      choices: ['She go to school.', 'She goes to school.', 'She going to school.', 'She gone to school.'],
      answer: 1
    },
    {
      type: 'multiple_choice',
      question: '"He ___ football every day." Fill the blank:',
      choices: ['play', 'playing', 'plays', 'played'],
      answer: 2
    },
    {
      type: 'word_arrange',
      question: 'Make: "They work in an office."',
      words: ['They', 'work', 'in', 'an', 'office.'],
      answer: ['They', 'work', 'in', 'an', 'office.']
    },
    {
      type: 'type_answer',
      question: 'Complete: "I ___ English every day." (study)',
      image: '📚',
      answer: 'study',
      hint: 'The verb is "study"'
    },
    {
      type: 'multiple_choice',
      question: 'Which word adds -es in third person singular?',
      choices: ['run', 'watch', 'eat', 'read'],
      answer: 1
    },
  ],

  // INTERMEDIATE
  'i-1-1': [
    {
      type: 'multiple_choice',
      question: 'Which is SIMPLE PAST?',
      choices: ['She walks', 'She walking', 'She walked', 'She will walk'],
      answer: 2
    },
    {
      type: 'word_arrange',
      question: 'Make: "Yesterday, I went to the market."',
      words: ['Yesterday,', 'I', 'went', 'to', 'the', 'market.'],
      answer: ['Yesterday,', 'I', 'went', 'to', 'the', 'market.']
    },
    {
      type: 'multiple_choice',
      question: 'Past tense of "eat" is:',
      choices: ['eated', 'eating', 'ate', 'eats'],
      answer: 2
    },
    {
      type: 'type_answer',
      question: 'Write past tense of "go":',
      image: '⬅️',
      answer: 'went',
      hint: 'Irregular verb!'
    },
    {
      type: 'multiple_choice',
      question: '"I ___ a movie last night." Fill:',
      choices: ['watch', 'watches', 'watched', 'watching'],
      answer: 2
    },
  ],

  // ADVANCED
  'a-1-1': [
    {
      type: 'multiple_choice',
      question: 'Which sentence uses PRESENT PERFECT?',
      choices: ['She eats an apple.', 'She ate an apple.', 'She has eaten an apple.', 'She is eating an apple.'],
      answer: 2
    },
    {
      type: 'word_arrange',
      question: 'Make: "I have lived here for five years."',
      words: ['I', 'have', 'lived', 'here', 'for', 'five', 'years.'],
      answer: ['I', 'have', 'lived', 'here', 'for', 'five', 'years.']
    },
    {
      type: 'multiple_choice',
      question: '"Have you ever been to London?" — This uses:',
      choices: ['Simple Past', 'Present Continuous', 'Present Perfect', 'Past Perfect'],
      answer: 2
    },
    {
      type: 'type_answer',
      question: 'Complete: "She ___ just finished her work." (have/has)',
      image: '✅',
      answer: 'has',
      hint: 'Third person singular'
    },
    {
      type: 'multiple_choice',
      question: 'Present perfect is formed with:',
      choices: ['was/were + verb', 'will + verb', 'have/has + past participle', 'am/is/are + verb-ing'],
      answer: 2
    },
  ],
};

// Fill missing lessons with generic questions
function getLessonQuestions(lessonId) {
  if (LESSON_QUESTIONS[lessonId]) return LESSON_QUESTIONS[lessonId];

  // Generic fallback questions
  return [
    {
      type: 'multiple_choice',
      question: 'Which sentence is grammatically correct?',
      choices: ['She go to school.', 'She goes to school.', 'She going to school.', 'She gone to school.'],
      answer: 1
    },
    {
      type: 'multiple_choice',
      question: 'What is the plural of "child"?',
      choices: ['childs', 'childes', 'children', 'childrens'],
      answer: 2
    },
    {
      type: 'word_arrange',
      question: 'Arrange: "English is an international language."',
      words: ['English', 'is', 'an', 'international', 'language.'],
      answer: ['English', 'is', 'an', 'international', 'language.']
    },
    {
      type: 'type_answer',
      question: 'What is the opposite of "big"?',
      image: '🔤',
      answer: 'small',
      hint: 'Think of something tiny'
    },
    {
      type: 'multiple_choice',
      question: '"She ___ to music every day." Fill the blank:',
      choices: ['listen', 'listens', 'listening', 'listened'],
      answer: 1
    },
  ];
}
