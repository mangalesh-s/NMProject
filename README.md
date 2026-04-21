# 🦊 LinguaLeap – English Learning App

A Duolingo-style English learning website for speakers of other languages.

## 📁 Project Structure

```
english-app/
├── index.html              ← Landing Page
├── css/
│   └── main.css            ← All styles
├── js/
│   ├── data.js             ← All lesson & question data
│   └── landing.js          ← Landing page scripts
└── pages/
    ├── signup.html         ← User Registration
    ├── login.html          ← Login Page
    ├── dashboard.html      ← Main Dashboard
    ├── lessons.html        ← All Lessons Browser
    ├── lesson.html         ← Individual Lesson Player
    ├── complete.html       ← Lesson Complete Screen
    ├── practice.html       ← Practice Mode (4 modes)
    ├── leaderboard.html    ← Weekly/Monthly Rankings
    └── profile.html        ← User Profile & Achievements
```

## 🚀 How to Run

**Option 1 – Just open in browser:**
Double-click `index.html` to open in your browser.

**Option 2 – Local server (recommended):**
```bash
cd english-app
python3 -m http.server 3000
# Open: http://localhost:3000
```

Or with Node.js:
```bash
npx serve .
```

## 🌟 Features

### For Learners
- 🌍 **Multi-language support** – 12+ native languages supported
- 📊 **Level-based learning** – Beginner, Elementary, Intermediate, Advanced
- 🎮 **3 question types** – Multiple choice, Type the answer, Word arrangement
- 🔥 **Streaks & XP** – Daily goals, streak tracking, XP points
- 🏅 **Achievements** – 8 unlockable badges
- 🏆 **Leaderboard** – Weekly/Monthly/All-time rankings
- 🎯 **4 Practice modes** – Quick Quiz, Timed Challenge, Vocabulary Drill, Streak Master
- 💾 **Auto-save** – Progress saved in browser localStorage

### Content
- **4 Beginner units** – Greetings, Numbers, Family, Food (16 lessons)
- **3 Elementary units** – Daily Routines, Present Tense, Directions (10 lessons)
- **3 Intermediate units** – Past/Future, Work, Conditionals (10 lessons)
- **3 Advanced units** – Perfect Tenses, Idioms, Academic English (9 lessons)
- **50+ lesson questions** across 3 different question formats

## 🎨 Design
- Inspired by Duolingo's gamification
- Custom color scheme: Green primary, Blue secondary
- Fredoka One + Nunito fonts
- Fully responsive (mobile + desktop)
- Animated confetti on correct answers
- Animated lesson complete screen

## 🛠 Tech Stack
- Pure HTML5 + CSS3 + Vanilla JavaScript
- No frameworks, no dependencies
- localStorage for user data persistence
- Google Fonts for typography

## 📝 Customization

### Add New Questions
Edit `js/data.js` → `LESSON_QUESTIONS` object. Example:
```javascript
'b-1-1': [
  {
    type: 'multiple_choice',
    question: 'Your question here',
    image: '🦊',  // optional emoji
    choices: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: 0  // index of correct answer
  },
  {
    type: 'type_answer',
    question: 'Type the word for "big":',
    answer: 'large',
    hint: 'l _ _ g e'
  },
  {
    type: 'word_arrange',
    question: 'Arrange the words',
    words: ['Hello', 'World'],
    answer: ['Hello', 'World']
  }
]
```

### Add New Units/Lessons
Edit `getUnitsForLevel()` in `js/data.js`

### Change Colors
Edit CSS variables in `css/main.css` (`:root` block)

---
Made with ❤️ for language learners worldwide 🌍
