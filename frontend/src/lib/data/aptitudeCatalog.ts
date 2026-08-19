import { CategoryInfo, Question } from '../types/aptitude';

export interface SubTopic {
  id: string;
  title: string;
  slug: string;
  totalQuestions: number;
}

export const APTITUDE_SUBTOPICS: Record<string, SubTopic[]> = {
  quantitative: [
    { id: 'quant-time-work', title: 'Time and Work', slug: 'quant-time-work', totalQuestions: 25 },
    { id: 'quant-profit-loss', title: 'Profit and Loss', slug: 'quant-profit-loss', totalQuestions: 25 },
    { id: 'quant-ratio', title: 'Ratio and Proportion', slug: 'quant-ratio', totalQuestions: 25 }
  ],
  logical: [
    { id: 'log-series', title: 'Number & Letter Series', slug: 'log-series', totalQuestions: 25 },
    { id: 'log-blood-relations', title: 'Blood Relations', slug: 'log-blood-relations', totalQuestions: 25 },
    { id: 'log-coding-decoding', title: 'Coding and Decoding', slug: 'log-coding-decoding', totalQuestions: 25 }
  ],
  verbal: [
    { id: 'verb-synonyms', title: 'Synonyms & Antonyms', slug: 'verb-synonyms', totalQuestions: 25 },
    { id: 'verb-error-spotting', title: 'Error Spotting', slug: 'verb-error-spotting', totalQuestions: 25 },
    { id: 'verb-idioms', title: 'Idioms & Phrases', slug: 'verb-idioms', totalQuestions: 25 }
  ]
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'quantitative',
    title: 'Quantitative Aptitude',
    description: 'Numerical ability, arithmetic, and problem-solving concepts.',
    topics: [
      { id: 'quant-time-work', title: 'Time and Work', categoryId: 'quantitative', description: 'Work efficiency, pipes and cisterns.', questionCount: 25 },
      { id: 'quant-profit-loss', title: 'Profit and Loss', categoryId: 'quantitative', description: 'Cost price, selling price, and discounts.', questionCount: 25 },
      { id: 'quant-ratio', title: 'Ratio and Proportion', categoryId: 'quantitative', description: 'Ratios, proportions, and mixtures.', questionCount: 25 }
    ]
  },
  {
    id: 'logical',
    title: 'Logical Reasoning',
    description: 'Analytical reasoning, patterns, deduction, and logic puzzles.',
    topics: [
      { id: 'log-series', title: 'Number & Letter Series', categoryId: 'logical', description: 'Pattern recognition and series completion.', questionCount: 25 },
      { id: 'log-blood-relations', title: 'Blood Relations', categoryId: 'logical', description: 'Family tree deductions and relation chains.', questionCount: 25 },
      { id: 'log-coding-decoding', title: 'Coding and Decoding', categoryId: 'logical', description: 'Pattern ciphers and symbol transformations.', questionCount: 25 }
    ]
  },
  {
    id: 'verbal',
    title: 'Verbal Ability',
    description: 'Grammar, vocabulary, sentence correction, and reading comprehension.',
    topics: [
      { id: 'verb-synonyms', title: 'Synonyms & Antonyms', categoryId: 'verbal', description: 'Vocabulary and word meanings.', questionCount: 25 },
      { id: 'verb-error-spotting', title: 'Error Spotting', categoryId: 'verbal', description: 'Grammar rules and sentence correction.', questionCount: 25 },
      { id: 'verb-idioms', title: 'Idioms & Phrases', categoryId: 'verbal', description: 'Common English idiomatic expressions.', questionCount: 25 }
    ]
  }
];

export const QUESTIONS_BANK: Question[] = [
  // --- QUANTITATIVE APTITUDE: Time and Work (25 Questions) ---
  {
    id: 'q-quant-1',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A can complete a work in 12 days and B can do it in 16 days. If they work together, in how many days will they finish the work?',
    options: ['6.85 days', '6.86 days', '7 days', '8 days'],
    correctAnswerIndex: 1,
    explanation: 'Combined rate = (1/12 + 1/16) = (4 + 3)/48 = 7/48 per day. Total time = 48/7 = 6.86 days.'
  },
  {
    id: 'q-quant-2',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A and B together can complete a job in 8 days. A alone can do it in 12 days. How long will B take alone?',
    options: ['16 days', '20 days', '24 days', '28 days'],
    correctAnswerIndex: 2,
    explanation: "B's 1-day work = (1/8 - 1/12) = 1/24. Therefore, B takes 24 days."
  },
  {
    id: 'q-quant-3',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'Pipe A can fill a tank in 5 hours and Pipe B can empty it in 10 hours. If both are opened together, time taken to fill the tank is:',
    options: ['8 hours', '10 hours', '12 hours', '15 hours'],
    correctAnswerIndex: 1,
    explanation: 'Net rate = 1/5 - 1/10 = 1/10. So it takes 10 hours to fill.'
  },
  {
    id: 'q-quant-4',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: '12 men can complete a project in 10 days. How many men are needed to finish it in 6 days?',
    options: ['18', '20', '22', '24'],
    correctAnswerIndex: 1,
    explanation: 'M1 * D1 = M2 * D2 => 12 * 10 = M2 * 6 => M2 = 20 men.'
  },
  {
    id: 'q-quant-5',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A is twice as efficient as B. If together they finish a work in 14 days, in how many days can A alone finish it?',
    options: ['21 days', '28 days', '35 days', '42 days'],
    correctAnswerIndex: 0,
    explanation: 'Efficiency ratio A:B = 2:1. Total efficiency = 3. Total work = 3 * 14 = 42. A alone takes 42/2 = 21 days.'
  },
  {
    id: 'q-quant-6',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'If 15 men can complete a work in 20 days, how many days will 25 men take?',
    options: ['10 days', '12 days', '15 days', '18 days'],
    correctAnswerIndex: 1,
    explanation: 'Using M1D1 = M2D2: 15 * 20 = 25 * D2 => D2 = 300 / 25 = 12 days.'
  },
  {
    id: 'q-quant-7',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A and B can do a piece of work in 18 days, B and C in 24 days, and C and A in 36 days. In what time can they do it all together?',
    options: ['12 days', '16 days', '18 days', '20 days'],
    correctAnswerIndex: 1,
    explanation: '2(A+B+C) = 1/18 + 1/24 + 1/36 = (4+3+2)/72 = 9/72 = 1/8. So A+B+C = 1/16 per day, taking 16 days.'
  },
  {
    id: 'q-quant-8',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A can do a work in 20 days and B in 30 days. They work together for 7 days and then both leave. What fraction of work is left?',
    options: ['1/2', '7/12', '5/12', '2/3'],
    correctAnswerIndex: 2,
    explanation: 'Combined rate = 1/20 + 1/30 = 1/12. In 7 days, work done = 7/12. Remaining work = 1 - 7/12 = 5/12.'
  },
  {
    id: 'q-quant-9',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A is 3 times as fast as B and takes 60 days less than B to complete a work. Find the time taken by both to finish it together.',
    options: ['22.5 days', '20 days', '18.75 days', '15 days'],
    correctAnswerIndex: 0,
    explanation: 'Let A take x days, B takes 3x. 3x - x = 60 => x = 30 (A = 30, B = 90). Together = 1/30 + 1/90 = 4/90 = 2/45 => 45/2 = 22.5 days.'
  },
  {
    id: 'q-quant-10',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A can finish a work in 10 days and B in 15 days. If they work on alternate days starting with A, in how many days will the work be finished?',
    options: ['11 days', '12 days', '12 days 4 hours', '13 days'],
    correctAnswerIndex: 1,
    explanation: '2 days work = 1/10 + 1/15 = 5/30 = 1/6. In 12 days (6 cycles), 6 * (1/6) = 1 work is completed.'
  },
  {
    id: 'q-quant-11',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'If 6 men and 8 boys can do a piece of work in 10 days, while 26 men and 48 boys can do it in 2 days, find the time taken by 15 men and 20 boys.',
    options: ['4 days', '5 days', '6 days', '7 days'],
    correctAnswerIndex: 0,
    explanation: 'Solving man-boy equations gives 1 man = 1/100, 1 boy = 1/200. Combined rate for 15m + 20b is 15/100 + 10/100 = 25/100 = 1/4 per day -> 4 days.'
  },
  {
    id: 'q-quant-12',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A is 50% more efficient than B. If B takes 15 days to complete a work, how many days will A take?',
    options: ['8 days', '10 days', '12 days', '14 days'],
    correctAnswerIndex: 1,
    explanation: "A's efficiency = 1.5 of B. Time taken by A = 15 / 1.5 = 10 days."
  },

  {
    id: 'q-quant-37',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A can complete a work in 15 days and B can do it in 20 days. If they work together, in how many days will they finish the work?',
    options: ['8.57 days', '9 days', '10 days', '7.5 days'],
    correctAnswerIndex: 0,
    explanation: 'Combined rate = 1/15 + 1/20 = 7/60 per day. Total time = 60/7 = 8.57 days.'
  },
  {
    id: 'q-quant-38',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: '8 men can complete a work in 12 days. How many men are needed to finish it in 8 days?',
    options: ['10', '11', '12', '14'],
    correctAnswerIndex: 2,
    explanation: 'M1 * D1 = M2 * D2 => 8 * 12 = M2 * 8 => M2 = 12 men.'
  },
  {
    id: 'q-quant-39',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A alone can finish a work in 18 days and B alone in 24 days. They work together for 4 days, then A leaves. In how many days will B finish the remaining work?',
    options: ['13.5 days', '14 days', '14.67 days', '15 days'],
    correctAnswerIndex: 2,
    explanation: 'Combined rate = 1/18 + 1/24 = 7/72. In 4 days, 28/72 = 7/18 is done. Remaining = 11/18. B alone finishes it in (11/18) / (1/24) = 14.67 days.'
  },
  {
    id: 'q-quant-40',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'Two pipes can fill a tank in 10 hours and 15 hours respectively. A third pipe can empty it in 30 hours. If all three are opened together, in how long will the tank be filled?',
    options: ['6 hours', '7.5 hours', '8 hours', '9 hours'],
    correctAnswerIndex: 1,
    explanation: 'Net rate = 1/10 + 1/15 - 1/30 = (3 + 2 - 1)/30 = 4/30 = 2/15 per hour. Time = 15/2 = 7.5 hours.'
  },
  {
    id: 'q-quant-41',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A is thrice as efficient as B. If A alone can complete a work in 24 days, how many days will B alone take?',
    options: ['48 days', '60 days', '72 days', '80 days'],
    correctAnswerIndex: 2,
    explanation: 'Since A is thrice as efficient, A\'s time is one-third of B\'s time. So B\'s time = 24 * 3 = 72 days.'
  },
  {
    id: 'q-quant-42',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: '10 women can complete a work in 8 days, while 8 men can complete the same work in 6 days. In how many days will 5 men and 5 women together complete it?',
    options: ['5 days', '6 days', '7 days', '8 days'],
    correctAnswerIndex: 1,
    explanation: 'One woman\'s rate = 1/80 per day, one man\'s rate = 1/48 per day. Combined rate of 5 men + 5 women = 5/48 + 5/80 = 25/240 + 15/240 = 40/240 = 1/6, so it takes 6 days.'
  },
  {
    id: 'q-quant-43',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A can complete a work in x days and B in (x + 5) days. Working together, they finish it in 6 days. Find x.',
    options: ['8 days', '10 days', '12 days', '15 days'],
    correctAnswerIndex: 1,
    explanation: '1/x + 1/(x+5) = 1/6 leads to x^2 - 7x - 30 = 0, giving (x - 10)(x + 3) = 0, so x = 10 days.'
  },
  {
    id: 'q-quant-44',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: '4 men and 6 women can complete a work in 8 days, while 3 men and 7 women can complete the same work in 10 days. In how many days can 10 women alone complete it?',
    options: ['30 days', '35 days', '40 days', '45 days'],
    correctAnswerIndex: 2,
    explanation: 'Equating total work: (4m+6w)*8 = (3m+7w)*10 gives 2m = 22w, so m = 11w. Total work = 400w units. Time for 10 women = 400w / 10w = 40 days.'
  },
  {
    id: 'q-quant-45',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A can complete a work in 20 days. He works for 4 days and then leaves. B finishes the remaining work in 12 days. In how many days can B alone complete the whole work?',
    options: ['12 days', '15 days', '16 days', '18 days'],
    correctAnswerIndex: 1,
    explanation: 'A\'s work in 4 days = 4/20 = 1/5. Remaining work = 4/5, done by B in 12 days. B\'s rate = (4/5)/12 = 1/15, so B alone takes 15 days.'
  },
  {
    id: 'q-quant-46',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A works twice as fast as B. Together they can complete a work in 12 days. In how many days can B alone complete the work?',
    options: ['24 days', '30 days', '36 days', '40 days'],
    correctAnswerIndex: 2,
    explanation: 'Let B\'s efficiency be 1 unit and A\'s be 2 units. Combined efficiency = 3 units completes work in 12 days, so total work = 36 units. B alone = 36/1 = 36 days.'
  },
  {
    id: 'q-quant-47',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'Tap A can fill a cistern in 6 hours and tap B can fill it in 4 hours. If both taps are opened together, how long will it take to fill three-fourths of the cistern?',
    options: ['1.5 hours', '1.8 hours', '2 hours', '2.4 hours'],
    correctAnswerIndex: 1,
    explanation: 'Combined rate = 1/6 + 1/4 = 5/12 per hour. Time for 3/4 of the tank = (3/4) / (5/12) = 1.8 hours.'
  },
  {
    id: 'q-quant-48',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: '20 workers can complete a task in 30 days. After 10 days, 5 more workers join them. In how many total days will the work be completed?',
    options: ['24 days', '25 days', '26 days', '28 days'],
    correctAnswerIndex: 2,
    explanation: 'Total work = 20 * 30 = 600 worker-days. Work done in 10 days = 200 worker-days, leaving 400. With 25 workers, remaining time = 400/25 = 16 days. Total = 10 + 16 = 26 days.'
  },
  {
    id: 'q-quant-49',
    topicId: 'quant-time-work',
    categoryId: 'quantitative',
    questionText: 'A and B together can complete a work in 12 days, B and C in 15 days, and A and C in 20 days. In how many days can A alone complete the work?',
    options: ['24 days', '30 days', '36 days', '40 days'],
    correctAnswerIndex: 1,
    explanation: '2(A+B+C) = 1/12 + 1/15 + 1/20 = 1/5, so A+B+C = 1/10 per day. A alone = (A+B+C) - (B+C) = 1/10 - 1/15 = 1/30, so A takes 30 days.'
  },

  // --- QUANTITATIVE APTITUDE: Profit and Loss (25 Questions) ---
  {
    id: 'q-quant-13',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'An item bought for Rs. 500 is sold for Rs. 625. What is the profit percentage?',
    options: ['20%', '22.5%', '25%', '30%'],
    correctAnswerIndex: 2,
    explanation: 'Profit = 625 - 500 = 125. Profit % = (125 / 500) * 100 = 25%.'
  },
  {
    id: 'q-quant-14',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'By selling an article for Rs. 720, a shopkeeper incurs a loss of 10%. What was the cost price?',
    options: ['Rs. 780', 'Rs. 800', 'Rs. 820', 'Rs. 850'],
    correctAnswerIndex: 1,
    explanation: 'CP = SP / (1 - Loss%) = 720 / 0.9 = Rs. 800.'
  },
  {
    id: 'q-quant-15',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A trader marks goods 20% above CP and offers a 10% discount. What is his net gain percentage?',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswerIndex: 0,
    explanation: 'Let CP = 100. MP = 120. SP = 120 * 0.9 = 108. Net gain = 8%.'
  },
  {
    id: 'q-quant-16',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'If the cost price of 10 articles equals the selling price of 8 articles, what is the profit percentage?',
    options: ['20%', '25%', '30%', '33.33%'],
    correctAnswerIndex: 1,
    explanation: 'Profit % = [(10 - 8)/8] * 100 = (2/8) * 100 = 25%.'
  },
  {
    id: 'q-quant-17',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A watch is sold at a 15% discount on the marked price of Rs. 2000. Find the selling price.',
    options: ['Rs. 1650', 'Rs. 1700', 'Rs. 1750', 'Rs. 1800'],
    correctAnswerIndex: 1,
    explanation: 'SP = 2000 * (1 - 0.15) = 2000 * 0.85 = Rs. 1700.'
  },
  {
    id: 'q-quant-18',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A man sells two articles for Rs. 990 each, gaining 10% on one and losing 10% on the other. Find his overall gain or loss percentage.',
    options: ['1% loss', '1% gain', 'No profit no loss', '2% loss'],
    correctAnswerIndex: 0,
    explanation: 'When SP is same and profit/loss percentages are equal, there is always a loss given by (Common%/10)%^2 = 1% loss.'
  },
  {
    id: 'q-quant-19',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'If a person sells an item at 25% profit instead of 15% loss, he gets Rs. 120 more. Find the cost price.',
    options: ['Rs. 300', 'Rs. 400', 'Rs. 450', 'Rs. 500'],
    correctAnswerIndex: 0,
    explanation: 'Difference = 25% - (-15%) = 40% of CP = 120 => CP = 120 / 0.40 = Rs. 300.'
  },
  {
    id: 'q-quant-20',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A dishonest dealer professes to sell goods at cost price, but uses 900g instead of 1kg. Find his profit percentage.',
    options: ['10%', '11.11%', '12.5%', '15%'],
    correctAnswerIndex: 1,
    explanation: 'Profit % = [Error / (True Value - Error)] * 100 = (100 / 900) * 100 = 11.11%.'
  },
  {
    id: 'q-quant-21',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'The selling price with a 20% profit is Rs. 600. What would be the selling price if sold at a 10% loss?',
    options: ['Rs. 450', 'Rs. 480', 'Rs. 500', 'Rs. 520'],
    correctAnswerIndex: 1,
    explanation: 'CP = 600 / 1.2 = 500. SP at 10% loss = 500 * 0.9 = Rs. 480.'
  },
  {
    id: 'q-quant-22',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A shopkeeper allows successive discounts of 20% and 10% on an article marked at Rs. 1500. Find the selling price.',
    options: ['Rs. 1080', 'Rs. 1120', 'Rs. 1150', 'Rs. 1200'],
    correctAnswerIndex: 0,
    explanation: 'SP = 1500 * 0.8 * 0.9 = 1500 * 0.72 = Rs. 1080.'
  },
  {
    id: 'q-quant-23',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'By selling 33 pens, a shopkeeper gains the selling price of 11 pens. Find the gain percentage.',
    options: ['25%', '33.33%', '50%', '66.67%'],
    correctAnswerIndex: 2,
    explanation: 'Gain = SP of 11 = SP of 33 - CP of 33 => CP of 33 = SP of 22. Gain % = (11/22)*100 = 50%.'
  },
  {
    id: 'q-quant-24',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'If an article is sold at 12% loss instead of 12% profit, the seller gets Rs. 36 less. Find the cost price.',
    options: ['Rs. 150', 'Rs. 200', 'Rs. 250', 'Rs. 300'],
    correctAnswerIndex: 0,
    explanation: 'Difference = 12% - (-12%) = 24% of CP = 36 => CP = 36 / 0.24 = Rs. 150.'
  },

  {
    id: 'q-quant-50',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'An article bought for Rs. 800 is sold for Rs. 920. What is the profit percentage?',
    options: ['10%', '12%', '15%', '18%'],
    correctAnswerIndex: 2,
    explanation: 'Profit = 920 - 800 = 120. Profit % = (120/800) * 100 = 15%.'
  },
  {
    id: 'q-quant-51',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'By selling an article for Rs. 920, a trader incurs a loss of 8%. What was the cost price?',
    options: ['Rs. 960', 'Rs. 1000', 'Rs. 1020', 'Rs. 1050'],
    correctAnswerIndex: 1,
    explanation: 'CP = SP / (1 - Loss%) = 920 / 0.92 = Rs. 1000.'
  },
  {
    id: 'q-quant-52',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A shopkeeper marks goods 40% above the cost price and allows a discount of 20%. Find his net gain percentage.',
    options: ['8%', '10%', '12%', '15%'],
    correctAnswerIndex: 2,
    explanation: 'Let CP = 100. MP = 140. SP = 140 * 0.8 = 112. Net gain = 12%.'
  },
  {
    id: 'q-quant-53',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'If the cost price of 15 articles equals the selling price of 12 articles, what is the profit percentage?',
    options: ['20%', '25%', '30%', '33.33%'],
    correctAnswerIndex: 1,
    explanation: 'Profit % = [(15 - 12)/12] * 100 = (3/12) * 100 = 25%.'
  },
  {
    id: 'q-quant-54',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'An article marked at Rs. 2500 is sold after a discount of 12%. Find the selling price.',
    options: ['Rs. 2100', 'Rs. 2150', 'Rs. 2200', 'Rs. 2250'],
    correctAnswerIndex: 2,
    explanation: 'SP = 2500 * (1 - 0.12) = 2500 * 0.88 = Rs. 2200.'
  },
  {
    id: 'q-quant-55',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A man sells two watches for Rs. 1200 each, gaining 20% on one and losing 20% on the other. Find his overall gain or loss percentage.',
    options: ['No profit no loss', '2% loss', '4% loss', '4% gain'],
    correctAnswerIndex: 2,
    explanation: 'When SP is the same and the profit/loss percentages are equal, there is always an overall loss of (Common%/10)^2 = (20/10)^2 = 4% loss.'
  },
  {
    id: 'q-quant-56',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'If a person sells an article at a 30% profit instead of at a 10% loss, he receives Rs. 160 more. Find the cost price.',
    options: ['Rs. 300', 'Rs. 350', 'Rs. 400', 'Rs. 450'],
    correctAnswerIndex: 2,
    explanation: 'Difference = 30% - (-10%) = 40% of CP = 160 => CP = 160 / 0.40 = Rs. 400.'
  },
  {
    id: 'q-quant-57',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A dishonest dealer professes to sell goods at cost price but uses a weight of 800g instead of 1kg. Find his profit percentage.',
    options: ['20%', '22.5%', '25%', '30%'],
    correctAnswerIndex: 2,
    explanation: 'Profit % = [Error / (True Value - Error)] * 100 = (200/800) * 100 = 25%.'
  },
  {
    id: 'q-quant-58',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'The selling price with a 15% profit is Rs. 690. What would be the selling price if the item is sold at a 5% loss?',
    options: ['Rs. 550', 'Rs. 560', 'Rs. 570', 'Rs. 580'],
    correctAnswerIndex: 2,
    explanation: 'CP = 690 / 1.15 = Rs. 600. SP at 5% loss = 600 * 0.95 = Rs. 570.'
  },
  {
    id: 'q-quant-59',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A shopkeeper allows successive discounts of 10% and 5% on an article marked at Rs. 2000. Find the selling price.',
    options: ['Rs. 1690', 'Rs. 1700', 'Rs. 1710', 'Rs. 1720'],
    correctAnswerIndex: 2,
    explanation: 'SP = 2000 * 0.9 * 0.95 = Rs. 1710.'
  },
  {
    id: 'q-quant-60',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'By selling 45 oranges, a vendor gains the selling price of 9 oranges. Find the gain percentage.',
    options: ['20%', '25%', '30%', '33.33%'],
    correctAnswerIndex: 1,
    explanation: 'Gain = SP of 9 = SP of 45 - CP of 45 => CP of 45 = SP of 36. Gain % = (9/36) * 100 = 25%.'
  },
  {
    id: 'q-quant-61',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'If an article is sold at an 18% loss instead of an 18% profit, the seller receives Rs. 108 less. Find the cost price.',
    options: ['Rs. 250', 'Rs. 275', 'Rs. 300', 'Rs. 325'],
    correctAnswerIndex: 2,
    explanation: 'Difference = 18% - (-18%) = 36% of CP = 108 => CP = 108 / 0.36 = Rs. 300.'
  },
  {
    id: 'q-quant-62',
    topicId: 'quant-profit-loss',
    categoryId: 'quantitative',
    questionText: 'A shopkeeper buys 100 pens at Rs. 5 each. He sells 95 of them at Rs. 6.5 each, and the remaining 5 are damaged and unsold. Find his overall profit percentage.',
    options: ['20%', '21.5%', '23.5%', '25%'],
    correctAnswerIndex: 2,
    explanation: 'Total CP = 100 * 5 = Rs. 500. Total SP = 95 * 6.5 = Rs. 617.5. Profit = Rs. 117.5. Profit % = (117.5/500) * 100 = 23.5%.'
  },

  // --- QUANTITATIVE APTITUDE: Ratio and Proportion (25 Questions) ---
  {
    id: 'q-quant-25',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If A:B = 2:3 and B:C = 4:5, what is A:C?',
    options: ['8:15', '2:5', '6:15', '8:12'],
    correctAnswerIndex: 0,
    explanation: 'A/C = (A/B) * (B/C) = (2/3) * (4/5) = 8/15.'
  },
  {
    id: 'q-quant-26',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: "Divide Rs. 1200 between A and B in the ratio 3:5. What is B's share?",
    options: ['Rs. 450', 'Rs. 600', 'Rs. 750', 'Rs. 800'],
    correctAnswerIndex: 2,
    explanation: "B's share = (5/8) * 1200 = 5 * 150 = Rs. 750."
  },
  {
    id: 'q-quant-27',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'Two numbers are in the ratio 4:5 and their sum is 180. Find the larger number.',
    options: ['80', '90', '100', '110'],
    correctAnswerIndex: 2,
    explanation: '9 units = 180 => 1 unit = 20. Larger number = 5 * 20 = 100.'
  },
  {
    id: 'q-quant-28',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: "The ratio of ages of X and Y is 3:4. 6 years ago, it was 2:3. What is X's present age?",
    options: ['12 years', '18 years', '24 years', '30 years'],
    correctAnswerIndex: 1,
    explanation: "(3x - 6)/(4x - 6) = 2/3 => 9x - 18 = 8x - 12 => x = 6. X's age = 3 * 6 = 18."
  },
  {
    id: 'q-quant-29',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'What parameter must be added to each term of 7:13 to make it equal to 2:3?',
    options: ['3', '4', '5', '6'],
    correctAnswerIndex: 2,
    explanation: '(7 + x)/(13 + x) = 2/3 => 21 + 3x = 26 + 2x => x = 5.'
  },
  {
    id: 'q-quant-30',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: "The incomes of A and B are in the ratio 3:2 and expenditures are 5:3. If each saves Rs. 1000, find A's income.",
    options: ['Rs. 4000', 'Rs. 6000', 'Rs. 8000', 'Rs. 10000'],
    correctAnswerIndex: 1,
    explanation: '(3x - 1000)/(2x - 1000) = 5/3 => x = 2000. A\'s income = 3 * 2000 = Rs. 6000.'
  },
  {
    id: 'q-quant-31',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'A mixture contains milk and water in the ratio 5:1. On adding 5 liters of water, the ratio becomes 5:2. Find the initial quantity of milk.',
    options: ['20 liters', '25 liters', '30 liters', '35 liters'],
    correctAnswerIndex: 1,
    explanation: '(5x)/(x + 5) = 5/2 => 10x = 5x + 25 => x = 5. Milk = 5 * 5 = 25 liters.'
  },
  {
    id: 'q-quant-32',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If x:y = 3:4, find the value of (4x + 5y) : (5x - 2y).',
    options: ['32:7', '31:7', '30:7', '29:7'],
    correctAnswerIndex: 0,
    explanation: 'Substitute x = 3, y = 4: (12 + 20) : (15 - 8) = 32 : 7.'
  },
  {
    id: 'q-quant-33',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'Three numbers are in the ratio 1:2:3 and their sum is 600. Find the largest number.',
    options: ['200', '300', '400', '500'],
    correctAnswerIndex: 1,
    explanation: 'Sum of units = 6 = 600 => 1 unit = 100. Largest = 3 * 100 = 300.'
  },
  {
    id: 'q-quant-34',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'The ratio of copper and zinc in a brass piece is 13:7. How much zinc is there in 200 kg of brass?',
    options: ['50 kg', '60 kg', '70 kg', '80 kg'],
    correctAnswerIndex: 2,
    explanation: 'Zinc = [7 / (13 + 7)] * 200 = (7 / 20) * 200 = 70 kg.'
  },
  {
    id: 'q-quant-35',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If 2A = 3B = 4C, find A:B:C.',
    options: ['2:3:4', '4:3:2', '6:4:3', '3:4:6'],
    correctAnswerIndex: 2,
    explanation: 'LCM of 2, 3, 4 is 12. A:B:C = 12/2 : 12/3 : 12/4 = 6 : 4 : 3.'
  },
  {
    id: 'q-quant-36',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'A sum is distributed among P, Q, R in the ratio 2:3:5. If R gets Rs. 300 more than P, find the total sum.',
    options: ['Rs. 1000', 'Rs. 1200', 'Rs. 1500', 'Rs. 2000'],
    correctAnswerIndex: 0,
    explanation: 'R - P = 5 - 2 = 3 units = 300 => 1 unit = 100. Total sum = 10 * 100 = Rs. 1000.'
  },

  {
    id: 'q-quant-63',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If A:B = 5:6 and B:C = 7:8, what is A:C?',
    options: ['35:48', '30:48', '35:42', '40:48'],
    correctAnswerIndex: 0,
    explanation: 'A/C = (A/B) * (B/C) = (5/6) * (7/8) = 35/48.'
  },
  {
    id: 'q-quant-64',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'Divide Rs. 2000 between A and B in the ratio 2:3. What is the smaller share?',
    options: ['Rs. 700', 'Rs. 750', 'Rs. 800', 'Rs. 850'],
    correctAnswerIndex: 2,
    explanation: 'Smaller share = (2/5) * 2000 = Rs. 800.'
  },
  {
    id: 'q-quant-65',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'Two numbers are in the ratio 3:7 and their sum is 250. Find the smaller number.',
    options: ['65', '70', '75', '80'],
    correctAnswerIndex: 2,
    explanation: '10 units = 250 => 1 unit = 25. Smaller number = 3 * 25 = 75.'
  },
  {
    id: 'q-quant-66',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'The ratio of the ages of X and Y is 5:7. Four years ago, the ratio was 3:5. What is Y\'s present age?',
    options: ['10 years', '12 years', '14 years', '16 years'],
    correctAnswerIndex: 2,
    explanation: '(5x-4)/(7x-4) = 3/5 gives 25x - 20 = 21x - 12, so x = 2. Present ages are 10 and 14, so Y is 14 years old.'
  },
  {
    id: 'q-quant-67',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'What number must be subtracted from each term of the ratio 15:19 so that it becomes 3:4?',
    options: ['2', '3', '4', '5'],
    correctAnswerIndex: 1,
    explanation: '(15-x)/(19-x) = 3/4 gives 60 - 4x = 57 - 3x, so x = 3.'
  },
  {
    id: 'q-quant-68',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'The incomes of A and B are in the ratio 5:3 and their expenditures are in the ratio 9:5. If each saves Rs. 1000, find A\'s income.',
    options: ['Rs. 8000', 'Rs. 9000', 'Rs. 10000', 'Rs. 12000'],
    correctAnswerIndex: 2,
    explanation: '(5x-1000)/(3x-1000) = 9/5 gives 25x - 5000 = 27x - 9000, so x = 2000. A\'s income = 5 * 2000 = Rs. 10000.'
  },
  {
    id: 'q-quant-69',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'A mixture contains milk and water in the ratio 4:1. On adding 10 liters of water, the ratio becomes 4:3. Find the initial quantity of milk.',
    options: ['15 liters', '20 liters', '25 liters', '30 liters'],
    correctAnswerIndex: 1,
    explanation: '4x/(x+10) = 4/3 gives 12x = 4x + 40, so x = 5. Milk = 4 * 5 = 20 liters.'
  },
  {
    id: 'q-quant-70',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If x:y = 5:6, find the value of (3x + 2y) : (4x - y).',
    options: ['27:14', '25:14', '27:16', '29:14'],
    correctAnswerIndex: 0,
    explanation: 'Substitute x = 5, y = 6: (15 + 12) : (20 - 6) = 27:14.'
  },
  {
    id: 'q-quant-71',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'Three numbers are in the ratio 2:3:4 and their sum is 810. Find the middle number.',
    options: ['180', '240', '270', '300'],
    correctAnswerIndex: 2,
    explanation: 'Sum of units = 9 = 810 => 1 unit = 90. Middle number = 3 * 90 = 270.'
  },
  {
    id: 'q-quant-72',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'The ratio of gold to silver in an ornament is 7:3. How much silver is there in 150 grams of the ornament?',
    options: ['35 g', '40 g', '45 g', '50 g'],
    correctAnswerIndex: 2,
    explanation: 'Silver = [3 / (7+3)] * 150 = (3/10) * 150 = 45 g.'
  },
  {
    id: 'q-quant-73',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If 3A = 4B = 5C, find A:B:C.',
    options: ['20:15:12', '12:15:20', '15:20:12', '20:12:15'],
    correctAnswerIndex: 0,
    explanation: 'LCM of 3, 4, 5 is 60. A:B:C = 60/3 : 60/4 : 60/5 = 20:15:12.'
  },
  {
    id: 'q-quant-74',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'A sum is distributed among X, Y, Z in the ratio 4:5:7. If Z gets Rs. 600 more than X, find the total sum.',
    options: ['Rs. 2800', 'Rs. 3000', 'Rs. 3200', 'Rs. 3600'],
    correctAnswerIndex: 1,
    explanation: 'Z - X = 3 units = 600 => 1 unit = 200. Total sum = (4+5+7) * 200 = 16 * 200 = Rs. 3200.'
  },
  {
    id: 'q-quant-75',
    topicId: 'quant-ratio',
    categoryId: 'quantitative',
    questionText: 'If a:b = 2:5 and b:c = 10:3, find a:b:c.',
    options: ['4:10:3', '2:10:3', '4:5:3', '2:5:3'],
    correctAnswerIndex: 0,
    explanation: 'Scale a:b (2:5) to match b\'s value in b:c (10:3) by multiplying by 2: a:b = 4:10. So a:b:c = 4:10:3.'
  },

  // --- LOGICAL REASONING: Number & Letter Series (25 Questions) ---
  {
    id: 'q-log-1',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 2, 6, 12, 20, 30, ?',
    options: ['38', '40', '42', '44'],
    correctAnswerIndex: 2,
    explanation: 'Differences are 4, 6, 8, 10, 12. So 30 + 12 = 42.'
  },
  {
    id: 'q-log-2',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing letter sequence: AZ, CX, EV, GT, ?',
    options: ['HS', 'IR', 'JQ', 'KP'],
    correctAnswerIndex: 1,
    explanation: 'First letters +2 (A, C, E, G, I). Second letters reverse alphabet (Z, X, V, T, R).'
  },
  {
    id: 'q-log-3',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Which number completes the sequence: 3, 9, 27, 81, ?',
    options: ['162', '243', '324', '729'],
    correctAnswerIndex: 1,
    explanation: 'Powers of 3: 3^1, 3^2, 3^3, 3^4, 3^5 = 243.'
  },
  {
    id: 'q-log-4',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the odd one out: 8, 27, 64, 100, 125.',
    options: ['27', '64', '100', '125'],
    correctAnswerIndex: 2,
    explanation: 'All others are perfect cubes (2^3, 3^3, 4^3, 5^3). 100 is a square.'
  },
  {
    id: 'q-log-5',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the pattern: 7, 10, 8, 11, 9, 12, ?',
    options: ['10', '11', '13', '14'],
    correctAnswerIndex: 0,
    explanation: 'Pattern alternates +3, -2. 12 - 2 = 10.'
  },
  {
    id: 'q-log-6',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing number in the series: 4, 9, 16, 25, 36, ?',
    options: ['45', '49', '54', '64'],
    correctAnswerIndex: 1,
    explanation: 'Squares of consecutive numbers (2^2, 3^2, 4^2, 5^2, 6^2, 7^2 = 49).'
  },
  {
    id: 'q-log-7',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the next term in the series: 1, 2, 4, 7, 11, 16, ?',
    options: ['21', '22', '23', '24'],
    correctAnswerIndex: 1,
    explanation: 'Differences increase sequentially: +1, +2, +3, +4, +5, +6. 16 + 6 = 22.'
  },
  {
    id: 'q-log-8',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the letter series: SCD, TEF, UGH, __, WKL',
    options: ['VIJ', 'VJI', 'UIJ', 'WHI'],
    correctAnswerIndex: 0,
    explanation: 'First letters increment (S, T, U, V, W). Second/third letters follow pairs C-D, E-F, G-H, I-J, K-L -> VIJ.'
  },
  {
    id: 'q-log-9',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing number: 5, 10, 20, 40, 80, ?',
    options: ['120', '140', '160', '180'],
    correctAnswerIndex: 2,
    explanation: 'Each term is multiplied by 2. 80 * 2 = 160.'
  },
  {
    id: 'q-log-10',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the incorrect number in the series: 2, 5, 10, 17, 26, 37, 50, 65, 83',
    options: ['26', '37', '83', 'None'],
    correctAnswerIndex: 2,
    explanation: 'Series follows n^2 + 1. The last term should be 9^2 + 1 = 82, not 83.'
  },
  {
    id: 'q-log-11',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 0, 2, 6, 12, 20, 30, 42, ?',
    options: ['54', '56', '58', '60'],
    correctAnswerIndex: 1,
    explanation: 'Differences increase by 2 (2, 4, 6, 8, 10, 12, 14). 42 + 14 = 56.'
  },
  {
    id: 'q-log-12',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing letter in the series: B, D, F, H, J, ?',
    options: ['K', 'L', 'M', 'N'],
    correctAnswerIndex: 1,
    explanation: 'Each letter is skipped by 1 (+2 position jump). J(10) + 2 = L(12).'
  },

  {
    id: 'q-log-37',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 5, 11, 19, 29, 41, ?',
    options: ['51', '53', '55', '57'],
    correctAnswerIndex: 2,
    explanation: 'Differences are 6, 8, 10, 12, 14. So 41 + 14 = 55.'
  },
  {
    id: 'q-log-38',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing term: BD, FH, JL, ?',
    options: ['MO', 'NP', 'NO', 'OP'],
    correctAnswerIndex: 1,
    explanation: 'First letters jump +4 (B, F, J, N). Second letters also jump +4 (D, H, L, P). Missing term is NP.'
  },
  {
    id: 'q-log-39',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 2, 5, 11, 23, 47, ?',
    options: ['93', '94', '95', '96'],
    correctAnswerIndex: 2,
    explanation: 'Each term is double the previous term plus 1. 47 * 2 + 1 = 95.'
  },
  {
    id: 'q-log-40',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the odd one out: 121, 144, 169, 175, 196',
    options: ['144', '169', '175', '196'],
    correctAnswerIndex: 2,
    explanation: 'All others are perfect squares (11^2, 12^2, 13^2, 14^2). 175 is not a perfect square.'
  },
  {
    id: 'q-log-41',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 3, 8, 15, 24, 35, ?',
    options: ['46', '47', '48', '50'],
    correctAnswerIndex: 2,
    explanation: 'Each term equals n * (n+2): 1*3, 2*4, 3*5, 4*6, 5*7, 6*8 = 48.'
  },
  {
    id: 'q-log-42',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the next letter in the series: Z, X, V, T, ?',
    options: ['S', 'R', 'Q', 'P'],
    correctAnswerIndex: 1,
    explanation: 'Each letter goes back by 2 positions in the alphabet. T - 2 positions = R.'
  },
  {
    id: 'q-log-43',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 100, 90, 81, 73, 66, ?',
    options: ['58', '60', '61', '62'],
    correctAnswerIndex: 1,
    explanation: 'Differences decrease by 1 each time: -10, -9, -8, -7, -6. So 66 - 6 = 60.'
  },
  {
    id: 'q-log-44',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the odd one out: 2, 3, 5, 7, 9, 11, 13',
    options: ['5', '9', '11', '13'],
    correctAnswerIndex: 1,
    explanation: 'All other numbers are prime. 9 is not a prime number (3 x 3 = 9).'
  },
  {
    id: 'q-log-45',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: AB, DE, GH, ?',
    options: ['IJ', 'JK', 'KL', 'JL'],
    correctAnswerIndex: 1,
    explanation: 'Each pair jumps forward by 3 letters: AB(1,2), DE(4,5), GH(7,8), next is JK(10,11).'
  },
  {
    id: 'q-log-46',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing number: 7, 14, 28, 56, 112, ?',
    options: ['196', '210', '224', '228'],
    correctAnswerIndex: 2,
    explanation: 'Each term is double the previous term. 112 * 2 = 224.'
  },
  {
    id: 'q-log-47',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Complete the series: 2, 6, 18, 54, ?',
    options: ['108', '144', '162', '180'],
    correctAnswerIndex: 2,
    explanation: 'Each term is multiplied by 3. 54 * 3 = 162.'
  },
  {
    id: 'q-log-48',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the missing number: 12, 15, 21, 30, 42, ?',
    options: ['54', '55', '56', '57'],
    correctAnswerIndex: 3,
    explanation: 'Differences increase by 3 each time: +3, +6, +9, +12, +15. So 42 + 15 = 57.'
  },
  {
    id: 'q-log-49',
    topicId: 'log-series',
    categoryId: 'logical',
    questionText: 'Find the odd one out: FGH, LMN, RST, WXY, ABD',
    options: ['LMN', 'RST', 'WXY', 'ABD'],
    correctAnswerIndex: 3,
    explanation: 'All other groups are three consecutive letters. ABD skips the letter C, breaking the pattern.'
  },

  // --- LOGICAL REASONING: Blood Relations (25 Questions) ---
  {
    id: 'q-log-13',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Pointing to a photograph, a man says, "She is the daughter of my grandfather\'s only son." Who is she to the man?',
    options: ['Mother', 'Aunt', 'Sister', 'Cousin'],
    correctAnswerIndex: 2,
    explanation: "Grandfather's only son = Man's father. Father's daughter = Sister."
  },
  {
    id: 'q-log-14',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: "A is B's brother. C is A's mother. D is C's father. How is B related to D?",
    options: ['Grandson', 'Granddaughter', 'Grandchild', 'Son'],
    correctAnswerIndex: 2,
    explanation: "D is grandfather of A and B. Since B's gender is unspecified, B is D's grandchild."
  },
  {
    id: 'q-log-15',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Introducing a woman, a man said, "Her mother is the only daughter of my mother-in-law." How is the man related to the woman?',
    options: ['Brother', 'Father', 'Uncle', 'Husband'],
    correctAnswerIndex: 1,
    explanation: "Mother-in-law's only daughter = Man's wife. Woman's mother is man's wife, so man is her father."
  },
  {
    id: 'q-log-16',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'If P + Q means P is the husband of Q, and P * Q means P is the sister of Q, what does A + B * C mean?',
    options: ["A is C's brother", "A is C's brother-in-law", "A is C's father", "A is C's uncle"],
    correctAnswerIndex: 1,
    explanation: "A is husband of B, B is sister of C. So A is C's brother-in-law."
  },
  {
    id: 'q-log-17',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: "Ravi's father has three sons: Ram, Shyam, and ?",
    options: ['Mohan', 'Ravi', 'Sohan', 'Cannot be determined'],
    correctAnswerIndex: 1,
    explanation: 'Ravi is one of the three sons.'
  },
  {
    id: 'q-log-18',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Pointing to a man on stage, Rita said, "He is the brother of the daughter of the wife of my husband." How is the man related to Rita?',
    options: ['Son', 'Brother', 'Husband', 'Nephew'],
    correctAnswerIndex: 0,
    explanation: "Wife of my husband = myself. Daughter of myself = my daughter. Brother of my daughter = my son."
  },
  {
    id: 'q-log-19',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Q is son of P, X is daughter of Q, R is aunty of X, and L is son of R. What is L to P?',
    options: ['Grandson', 'Granddaughter', 'Son', 'Nephew'],
    correctAnswerIndex: 0,
    explanation: 'R is sister of Q (aunty of X), so R is daughter of P. L is son of R, making L a grandson of P.'
  },
  {
    id: 'q-log-20',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Looking at a portrait, Anil said, "That man is the father of my mother\'s son." Who is the man?',
    options: ['Uncle', 'Father', 'Brother', 'Grandfather'],
    correctAnswerIndex: 1,
    explanation: "Mother's son = Anil himself (or his brother). Father of self = Father."
  },
  {
    id: 'q-log-21',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'If A + B means mother of B; A - B means brother of B; A % B means father; A * B means sister, which means \'P is niece of M\'?',
    options: ['M - N * P', 'M * N + P', 'M % N * P', 'M - N % P'],
    correctAnswerIndex: 0,
    explanation: 'M is brother of N, N is sister of P. Thus, M is uncle/aunt, and P is niece/nephew of M.'
  },
  {
    id: 'q-log-22',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'A is the father of C, but C is not his son. Who is C to A?',
    options: ['Sister', 'Daughter', 'Brother', 'Mother'],
    correctAnswerIndex: 1,
    explanation: 'If C is not his son and is his child, C must be his daughter.'
  },
  {
    id: 'q-log-23',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: "Suresh's sister is the wife of Ram. Ram is Rahul's brother. How is Suresh related to Rahul?",
    options: ['Brother-in-law', 'Brother', 'Uncle', 'Father'],
    correctAnswerIndex: 0,
    explanation: "Ram is husband of Suresh's sister, making Suresh the brother-in-law of Ram and Rahul."
  },
  {
    id: 'q-log-24',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Pointing to a lady, a businessman said, "She is the only daughter of the mother of my mother-in-law." How is she related?',
    options: ['Mother', 'Mother-in-law', 'Wife', 'Aunt'],
    correctAnswerIndex: 1,
    explanation: "Mother-in-law's mother = grandmother of businessman's wife. Only daughter of grandmother = mother-in-law."
  },

  {
    id: 'q-log-50',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?',
    options: ['Sister', 'Mother', 'Aunt', 'Grandmother'],
    correctAnswerIndex: 1,
    explanation: 'The only daughter of the woman\'s mother is the woman herself. So the man\'s mother is the woman, making her his mother.'
  },
  {
    id: 'q-log-51',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'A is B\'s sister. C is B\'s mother. D is C\'s father. How is A related to D?',
    options: ['Grandson', 'Granddaughter', 'Daughter', 'Niece'],
    correctAnswerIndex: 1,
    explanation: 'C is the mother of both A and B, and D is C\'s father, making D the grandfather of A and B. Since A is female (sister), A is D\'s granddaughter.'
  },
  {
    id: 'q-log-52',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Introducing a man, a lady said, "He is the son of my grandfather\'s only child." Who is the man to the lady?',
    options: ['Father', 'Brother', 'Uncle', 'Cousin'],
    correctAnswerIndex: 1,
    explanation: 'The grandfather\'s only child is the lady\'s father (or the lady herself). Since the man is a separate son of that same parent, he is the lady\'s brother.'
  },
  {
    id: 'q-log-53',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'P is the husband of Q. R is Q\'s mother. S is R\'s father. How is P related to S?',
    options: ['Son-in-law', 'Grandson-in-law', 'Nephew', 'Brother-in-law'],
    correctAnswerIndex: 1,
    explanation: 'S is the grandfather of Q, and P is the husband of Q, making P the grandson-in-law of S.'
  },
  {
    id: 'q-log-54',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Pointing to a photograph, Anita said, "This girl is the daughter of my father\'s sister." How is the girl related to Anita?',
    options: ['Sister', 'Niece', 'Cousin', 'Aunt'],
    correctAnswerIndex: 2,
    explanation: 'The father\'s sister is Anita\'s aunt, and the aunt\'s daughter is Anita\'s cousin.'
  },
  {
    id: 'q-log-55',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'A\'s father is B\'s brother. C is A\'s grandmother. How is B related to C?',
    options: ['Daughter', 'Son', 'Grandson', 'Nephew'],
    correctAnswerIndex: 1,
    explanation: 'B is the brother of A\'s father, so B is also a child of A\'s grandmother, C. Hence B is C\'s son.'
  },
  {
    id: 'q-log-56',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'Pointing to a boy, a man said, "He is the son of my wife\'s only brother." How is the boy related to the man?',
    options: ['Son', 'Nephew', 'Cousin', 'Brother-in-law'],
    correctAnswerIndex: 1,
    explanation: 'The wife\'s brother is the man\'s brother-in-law, and the brother-in-law\'s son is the man\'s nephew.'
  },
  {
    id: 'q-log-57',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'M is the father of N. N is the sister of O. P is the mother of O. How is M related to P?',
    options: ['Brother', 'Husband', 'Father', 'Son'],
    correctAnswerIndex: 1,
    explanation: 'M is the father of both N and O (as N and O are siblings), and P is the mother of O, so P is M\'s wife, making M the husband of P.'
  },
  {
    id: 'q-log-58',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'X is Y\'s brother. Y is Z\'s sister. Z is W\'s father. How is X related to W?',
    options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
    correctAnswerIndex: 1,
    explanation: 'Y is the sister of Z, making Y the aunt of W. Since X is Y\'s brother, X is the uncle of W.'
  },
  {
    id: 'q-log-59',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'A woman introduces a man as "the son of the brother of my mother." How is the man related to the woman?',
    options: ['Brother', 'Cousin', 'Nephew', 'Uncle'],
    correctAnswerIndex: 1,
    explanation: 'The brother of the woman\'s mother is her maternal uncle, and his son is the woman\'s cousin.'
  },
  {
    id: 'q-log-60',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'P is Q\'s daughter. R is P\'s brother. S is R\'s father. How is S related to Q?',
    options: ['Father', 'Husband', 'Brother', 'Son'],
    correctAnswerIndex: 1,
    explanation: 'R is also Q\'s child (as P\'s brother), and S is the father of R, making S the husband of Q.'
  },
  {
    id: 'q-log-61',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'A man said to a woman, "Your mother\'s husband\'s sister is my aunt." How is the man related to the woman?',
    options: ['Brother', 'Cousin', 'Nephew', 'Father'],
    correctAnswerIndex: 1,
    explanation: 'The woman\'s mother\'s husband is her father, and his sister is her aunt. Since that aunt is also the man\'s aunt, they share a common aunt and are cousins.'
  },
  {
    id: 'q-log-62',
    topicId: 'log-blood-relations',
    categoryId: 'logical',
    questionText: 'X and Y are siblings. Z is X\'s son. How is Y related to Z?',
    options: ['Cousin', 'Uncle or Aunt', 'Grandparent', 'Sibling'],
    correctAnswerIndex: 1,
    explanation: 'Since X and Y are siblings, Y is the uncle or aunt of X\'s son, Z.'
  },

  // --- LOGICAL REASONING: Coding and Decoding (25 Questions) ---
  {
    id: 'q-log-25',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "CAT" is coded as 3120, how is "DOG" coded?',
    options: ['4157', '4147', '4156', '5157'],
    correctAnswerIndex: 0,
    explanation: 'Letters replaced by alphabetical positions: D=4, O=15, G=7 -> 4157.'
  },
  {
    id: 'q-log-26',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'In a certain code, "LIGHT" is written as "MJHJU". How is "FRAME" written?',
    options: ['GSBNF', 'GSCNF', 'GQBLD', 'HTCOG'],
    correctAnswerIndex: 0,
    explanation: 'Each character is shifted forward by +1 letter.'
  },
  {
    id: 'q-log-27',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If RED is coded as 27, BLUE is coded as:',
    options: ['36', '40', '42', '45'],
    correctAnswerIndex: 1,
    explanation: 'B(2) + L(12) + U(21) + E(5) = 40.'
  },
  {
    id: 'q-log-28',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "WATER" is written as "YCVGT", then "FIRE" is written as:',
    options: ['HKTG', 'HKUG', 'HMTG', 'GJTF'],
    correctAnswerIndex: 0,
    explanation: 'Shift each letter forward by +2.'
  },
  {
    id: 'q-log-29',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If SKY is called SEA, SEA is called WATER, WATER is called AIR, where do fishes live?',
    options: ['SKY', 'SEA', 'WATER', 'AIR'],
    correctAnswerIndex: 3,
    explanation: 'Fishes live in WATER, and WATER is called AIR in this code.'
  },
  {
    id: 'q-log-30',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If in a code, "PEN" is written as "QFO", how is "BOX" written?',
    options: ['CPY', 'CPZ', 'CQY', 'BOY'],
    correctAnswerIndex: 0,
    explanation: 'Each letter is shifted forward by +1: B->C, O->P, X->Y.'
  },
  {
    id: 'q-log-31',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "ROSE" is written as "6821" and "CHAIR" as "73456", what is "SEARCH" written as?',
    options: ['214673', '214763', '216473', '214367'],
    correctAnswerIndex: 0,
    explanation: 'Direct substitution mapping: S=2, E=1, A=4, R=6, C=7, H=3 -> 214673.'
  },
  {
    id: 'q-log-32',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "STUDENT" is coded as "TVVEFOU", how is "TEACHER" coded?',
    options: ['UFBDIFS', 'UFBDIFS', 'UFBDIET', 'VGBDIFS'],
    correctAnswerIndex: 0,
    explanation: 'Each letter is shifted forward by +1.'
  },
  {
    id: 'q-log-33',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "MADRAS" can be written as "NBESBT", how can "BOMBAY" be written?',
    options: ['CPNCBZ', 'CPNCBX', 'CQNCBZ', 'DPNCBZ'],
    correctAnswerIndex: 0,
    explanation: 'Shift each letter forward by +1: B->C, O->P, M->N, B->C, A->B, Y->Z.'
  },
  {
    id: 'q-log-34',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If white is called blue, blue is called red, red is called yellow, yellow is called green, what is the color of human blood?',
    options: ['Red', 'Yellow', 'Blue', 'Green'],
    correctAnswerIndex: 1,
    explanation: 'Human blood is red, and red is called yellow.'
  },
  {
    id: 'q-log-35',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "A" = 1, "B" = 2, what is the numeric code for "BAD"?',
    options: ['214', '124', '421', '241'],
    correctAnswerIndex: 0,
    explanation: 'Direct positional values: B=2, A=1, D=4 -> 214.'
  },
  {
    id: 'q-log-36',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'In a certain code, "LIGHT" is written as "OLJKW", how is a word shifted?',
    options: ['+3 letters', '+2 letters', '-3 letters', '-2 letters'],
    correctAnswerIndex: 0,
    explanation: 'Each letter is shifted forward by +3 positions in the alphabet.'
  },

  {
    id: 'q-log-63',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "TEACHER" is coded as "SDZBGDQ" (each letter shifted back by 1), how is "STUDENT" coded?',
    options: ['RSTCDMS', 'RTSCDMS', 'RSTCMDS', 'RSTBDMS'],
    correctAnswerIndex: 0,
    explanation: 'Each letter is shifted back by 1: S-1=R, T-1=S, U-1=T, D-1=C, E-1=D, N-1=M, T-1=S, giving RSTCDMS.'
  },
  {
    id: 'q-log-64',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If the code for a word is the sum of the alphabetical positions of its letters, and "SILVER" is coded as 85, what is the code for "MOON"?',
    options: ['54', '55', '56', '57'],
    correctAnswerIndex: 3,
    explanation: 'M(13) + O(15) + O(15) + N(14) = 57.'
  },
  {
    id: 'q-log-65',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'In a certain code, "COME HERE" is written as "DPNF IFSF". How is "GO NOW" written?',
    options: ['HP OPX', 'HP NPX', 'GP OPX', 'HP OQX'],
    correctAnswerIndex: 0,
    explanation: 'Each letter is shifted forward by 1: G->H, O->P giving "HP"; N->O, O->P, W->X giving "OPX". Combined: "HP OPX".'
  },
  {
    id: 'q-log-66',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "7 8 9" means "cat sat mat", "9 6 5" means "mat ran fast", and "5 8" means "sat fast", what is the code for "sat"?',
    options: ['5', '6', '7', '8'],
    correctAnswerIndex: 3,
    explanation: 'The common word between statements 1 and 3 is "sat", and the common code between "7 8 9" and "5 8" is "8". So "sat" = 8.'
  },
  {
    id: 'q-log-67',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "PENCIL" is coded as "QDOBJK", what pattern is followed?',
    options: ['All letters +1', 'All letters -1', 'Alternating +1 and -1', 'Reverse order of letters'],
    correctAnswerIndex: 2,
    explanation: 'P+1=Q, E-1=D, N+1=O, C-1=B, I+1=J, L-1=K — the shift alternates between +1 and -1.'
  },
  {
    id: 'q-log-68',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'Using a reverse-alphabet cipher (A=Z, B=Y, C=X...), if "CAT" is coded as "XZG", how is "DOG" coded?',
    options: ['WLT', 'WLU', 'VLT', 'WKT'],
    correctAnswerIndex: 0,
    explanation: 'D(4) maps to 23=W, O(15) maps to 12=L, G(7) maps to 20=T, giving WLT.'
  },
  {
    id: 'q-log-69',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "FRIEND" is coded as "HTKGPF" (each letter shifted forward by 2), how is "ENEMY" coded?',
    options: ['GPGOZ', 'GPGOA', 'FPGOA', 'GPHOA'],
    correctAnswerIndex: 1,
    explanation: 'Shift each letter forward by 2: E->G, N->P, E->G, M->O, Y->A (wraps around the alphabet), giving GPGOA.'
  },
  {
    id: 'q-log-70',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If numbers are coded as their squares (5=25, 6=36, 7=49), what is the code for 8?',
    options: ['56', '60', '64', '72'],
    correctAnswerIndex: 2,
    explanation: 'Following the pattern of squares, 8 is coded as 8^2 = 64.'
  },
  {
    id: 'q-log-71',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'Using a reverse-alphabet cipher, if "GARDEN" is coded as "TZIWVM", how is "FOREST" coded?',
    options: ['ULIVHG', 'ULIVGH', 'VLIVHG', 'ULJVHG'],
    correctAnswerIndex: 0,
    explanation: 'Each letter maps to its reverse-alphabet counterpart: F->U, O->L, R->I, E->V, S->H, T->G, giving ULIVHG.'
  },
  {
    id: 'q-log-72',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "1" = A, "2" = B, and so on up to "26" = Z, what word is represented by "3-1-20"?',
    options: ['BAT', 'CAT', 'CAR', 'BAR'],
    correctAnswerIndex: 1,
    explanation: '3=C, 1=A, 20=T, spelling the word CAT.'
  },
  {
    id: 'q-log-73',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If the code for a word is the sum of the alphabetical positions of its letters, and "SUN" is coded as 54, what is the code for "SKY"?',
    options: ['53', '55', '57', '59'],
    correctAnswerIndex: 1,
    explanation: 'S(19) + K(11) + Y(25) = 55.'
  },
  {
    id: 'q-log-74',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'If "DELHI" is coded as "EFMIJ" (each letter shifted forward by 1), how is "MUMBAI" coded?',
    options: ['NVNCBJ', 'NVMCBJ', 'MVNCBJ', 'NVNBCJ'],
    correctAnswerIndex: 0,
    explanation: 'Shift each letter forward by 1: M->N, U->V, M->N, B->C, A->B, I->J, giving NVNCBJ.'
  },
  {
    id: 'q-log-75',
    topicId: 'log-coding-decoding',
    categoryId: 'logical',
    questionText: 'In these coded pairs which follow a "+1 to each letter" rule, find the one that does not fit: CAT-DBU, DOG-EPH, SUN-TVO, BIG-CJI, FOX-GPY',
    options: ['DOG-EPH', 'SUN-TVO', 'BIG-CJI', 'FOX-GPY'],
    correctAnswerIndex: 2,
    explanation: 'For BIG, applying +1 to each letter gives CJH, not CJI, so BIG-CJI breaks the pattern followed by all the other pairs.'
  },

  // --- VERBAL ABILITY: Synonyms & Antonyms (25 Questions) ---
  {
    id: 'q-verb-1',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for the word: "CANDID"',
    options: ['Deceptive', 'Frank', 'Arrogant', 'Vague'],
    correctAnswerIndex: 1,
    explanation: 'Candid means truthful and straightforward; frank is its synonym.'
  },
  {
    id: 'q-verb-2',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for the word: "FRAGILE"',
    options: ['Delicate', 'Sturdy', 'Weak', 'Brittle'],
    correctAnswerIndex: 1,
    explanation: 'Fragile means easily broken; sturdy is its opposite.'
  },
  {
    id: 'q-verb-3',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "METICULOUS"',
    options: ['Careless', 'Precise', 'Hasty', 'Clumsy'],
    correctAnswerIndex: 1,
    explanation: 'Meticulous means showing great attention to detail; precise is synonymous.'
  },
  {
    id: 'q-verb-4',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "EPHEMERAL"',
    options: ['Transient', 'Permanent', 'Short-lived', 'Fleeting'],
    correctAnswerIndex: 1,
    explanation: 'Ephemeral means lasting a very short time; permanent is the antonym.'
  },
  {
    id: 'q-verb-5',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "AMBIGUOUS"',
    options: ['Unclear', 'Explicit', 'Definite', 'Lucid'],
    correctAnswerIndex: 0,
    explanation: 'Ambiguous means open to more than one interpretation; unclear.'
  },
  {
    id: 'q-verb-6',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "ABUNDANT"',
    options: ['Scarce', 'Plentiful', 'Meager', 'Rare'],
    correctAnswerIndex: 1,
    explanation: 'Abundant means existing in large quantities; plentiful is a synonym.'
  },
  {
    id: 'q-verb-7',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "ANCIENT"',
    options: ['Antique', 'Old', 'Modern', 'Aging'],
    correctAnswerIndex: 2,
    explanation: 'Ancient means very old; modern is its antonym.'
  },
  {
    id: 'q-verb-8',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "COURAGEOUS"',
    options: ['Timid', 'Fearful', 'Brave', 'Cowardly'],
    correctAnswerIndex: 2,
    explanation: 'Courageous means showing courage; brave is synonymous.'
  },
  {
    id: 'q-verb-9',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "TRANSPARENT"',
    options: ['Clear', 'Opaque', 'Lucid', 'Translucent'],
    correctAnswerIndex: 1,
    explanation: 'Transparent allows light to pass through; opaque blocks it completely.'
  },
  {
    id: 'q-verb-10',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "BENEFICIAL"',
    options: ['Harmful', 'Advantageous', 'Detrimental', 'Durious'],
    correctAnswerIndex: 1,
    explanation: 'Beneficial means resulting in good; advantageous is a synonym.'
  },
  {
    id: 'q-verb-11',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "HOSTILE"',
    options: ['Friendly', 'Unfriendly', 'Aggressive', 'Adverse'],
    correctAnswerIndex: 0,
    explanation: 'Hostile means unfriendly or aggressive; friendly is the antonym.'
  },
  {
    id: 'q-verb-12',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "FASTIDIOUS"',
    options: ['Careless', 'Punctilious', 'Sloppy', 'Relaxed'],
    correctAnswerIndex: 1,
    explanation: 'Fastidious means very attentive to detail; punctilious is a synonym.'
  },

  {
    id: 'q-verb-37',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for the word: "AUDACIOUS"',
    options: ['Timid', 'Bold', 'Shy', 'Modest'],
    correctAnswerIndex: 1,
    explanation: 'Audacious means showing a willingness to take bold risks; bold is a synonym.'
  },
  {
    id: 'q-verb-38',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for the word: "GENEROUS"',
    options: ['Charitable', 'Stingy', 'Kind', 'Liberal'],
    correctAnswerIndex: 1,
    explanation: 'Generous means freely giving; stingy is its opposite.'
  },
  {
    id: 'q-verb-39',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "PRUDENT"',
    options: ['Wise', 'Careless', 'Foolish', 'Reckless'],
    correctAnswerIndex: 0,
    explanation: 'Prudent means acting with care and thought for the future; wise is a synonym.'
  },
  {
    id: 'q-verb-40',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "OBSCURE"',
    options: ['Vague', 'Clear', 'Unclear', 'Hidden'],
    correctAnswerIndex: 1,
    explanation: 'Obscure means not clearly expressed; clear is its antonym.'
  },
  {
    id: 'q-verb-41',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "TENACIOUS"',
    options: ['Persistent', 'Weak', 'Fragile', 'Yielding'],
    correctAnswerIndex: 0,
    explanation: 'Tenacious means holding firmly to something; persistent is a synonym.'
  },
  {
    id: 'q-verb-42',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "BENEVOLENT"',
    options: ['Kind', 'Cruel', 'Selfish', 'Harsh'],
    correctAnswerIndex: 0,
    explanation: 'Benevolent means well-meaning and kindly; kind is a synonym.'
  },
  {
    id: 'q-verb-43',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "DILIGENT"',
    options: ['Hardworking', 'Lazy', 'Industrious', 'Careful'],
    correctAnswerIndex: 1,
    explanation: 'Diligent means showing care and effort; lazy is its antonym.'
  },
  {
    id: 'q-verb-44',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "AUSTERE"',
    options: ['Strict', 'Lenient', 'Luxurious', 'Generous'],
    correctAnswerIndex: 0,
    explanation: 'Austere means severe or strict in manner; strict is a synonym.'
  },
  {
    id: 'q-verb-45',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "VERBOSE"',
    options: ['Wordy', 'Concise', 'Talkative', 'Lengthy'],
    correctAnswerIndex: 1,
    explanation: 'Verbose means using more words than needed; concise is its antonym.'
  },
  {
    id: 'q-verb-46',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "PERTINENT"',
    options: ['Relevant', 'Irrelevant', 'Unrelated', 'Vague'],
    correctAnswerIndex: 0,
    explanation: 'Pertinent means relevant to a particular matter; relevant is a synonym.'
  },
  {
    id: 'q-verb-47',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "ELATED"',
    options: ['Joyful', 'Depressed', 'Happy', 'Delighted'],
    correctAnswerIndex: 1,
    explanation: 'Elated means very happy or proud; depressed is its antonym.'
  },
  {
    id: 'q-verb-48',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the synonym for: "GREGARIOUS"',
    options: ['Sociable', 'Reclusive', 'Shy', 'Antisocial'],
    correctAnswerIndex: 0,
    explanation: 'Gregarious means fond of company; sociable is a synonym.'
  },
  {
    id: 'q-verb-49',
    topicId: 'verb-synonyms',
    categoryId: 'verbal',
    questionText: 'Select the antonym for: "FRUGAL"',
    options: ['Thrifty', 'Wasteful', 'Economical', 'Sparing'],
    correctAnswerIndex: 1,
    explanation: 'Frugal means economical with money or food; wasteful is its antonym.'
  },

  // --- VERBAL ABILITY: Error Spotting (25 Questions) ---
  {
    id: 'q-verb-13',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "Neither of the two books (A) / are (B) / interesting. (C)"',
    options: ['Neither of the two books', 'are', 'interesting.', 'No error'],
    correctAnswerIndex: 1,
    explanation: '"Neither" takes a singular verb. "are" should be replaced with "is".'
  },
  {
    id: 'q-verb-14',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "She has been working (A) / in this firm (B) / since three years. (C)"',
    options: ['She has been working', 'in this firm', 'since three years.', 'No error'],
    correctAnswerIndex: 2,
    explanation: 'For duration of time, use "for" instead of "since". It should be "for three years".'
  },
  {
    id: 'q-verb-15',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "He is senior (A) / than me (B) / in service. (C)"',
    options: ['He is senior', 'than me', 'in service.', 'No error'],
    correctAnswerIndex: 1,
    explanation: 'Adjectives like senior, junior, prefer take "to" instead of "than".'
  },
  {
    id: 'q-verb-16',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Choose the correctly spelled word:',
    options: ['Accomodate', 'Accommodate', 'Acommodate', 'Accommodat'],
    correctAnswerIndex: 1,
    explanation: '"Accommodate" has double \'c\' and double \'m\'.'
  },
  {
    id: 'q-verb-17',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Fill in the blank: "Each of the students _____ submitted their project."',
    options: ['has', 'have', 'are', 'were'],
    correctAnswerIndex: 0,
    explanation: '"Each" is singular and requires the singular verb "has".'
  },
  {
    id: 'q-verb-18',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "One of my friends (A) / are going (B) / to America. (C)"',
    options: ['One of my friends', 'are going', 'to America.', 'No error'],
    correctAnswerIndex: 1,
    explanation: '"One of" takes a singular verb. "are going" should be "is going".'
  },
  {
    id: 'q-verb-19',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "If I was you (A) / I would not do (B) / this work. (C)"',
    options: ['If I was you', 'I would not do', 'this work.', 'No error'],
    correctAnswerIndex: 0,
    explanation: 'In hypothetical conditional sentences, use "were" instead of "was" ("If I were you").'
  },
  {
    id: 'q-verb-20',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Choose the correctly spelled word:',
    options: ['Millennium', 'Milennium', 'Millenuim', 'Milenium'],
    correctAnswerIndex: 0,
    explanation: '"Millennium" is spelled with double \'l\' and double \'n\'.'
  },
  {
    id: 'q-verb-21',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "No sooner did the train (A) / arrive at the station (B) / than the passengers rushed. (C)"',
    options: ['No sooner did the train', 'arrive at the station', 'than the passengers rushed.', 'No error'],
    correctAnswerIndex: 3,
    explanation: 'The sentence is grammatically correct ("No sooner ... than" structure used properly with past tense).'
  },
  {
    id: 'q-verb-22',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Fill in the blank: "Neither Rahul nor his friends _____ present at the meeting."',
    options: ['was', 'were', 'is', 'has'],
    correctAnswerIndex: 1,
    explanation: 'With "neither... nor", the verb agrees with the nearer subject ("friends", which is plural).'
  },
  {
    id: 'q-verb-23',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "The scenery (A) / of Kashmir (B) / are enchanting. (C)"',
    options: ['The scenery', 'of Kashmir', 'are enchanting.', 'No error'],
    correctAnswerIndex: 2,
    explanation: '"Scenery" is an uncountable noun and takes a singular verb ("is enchanting").'
  },
  {
    id: 'q-verb-24',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Choose the correctly spelled word:',
    options: ['Lieutenant', 'Lietenant', 'Lieutanant', 'Leutenant'],
    correctAnswerIndex: 0,
    explanation: '"Lieutenant" is correctly spelled L-I-E-U-T-E-N-A-N-T.'
  },

  {
    id: 'q-verb-50',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "Each of the boys (A) / have done (B) / their homework. (C)"',
    options: ['Each of the boys', 'have done', 'their homework.', 'No error'],
    correctAnswerIndex: 1,
    explanation: '"Each" is singular and requires the singular verb "has done" instead of "have done".'
  },
  {
    id: 'q-verb-51',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "She don\'t like (A) / to eat (B) / vegetables. (C)"',
    options: ['She don\'t like', 'to eat', 'vegetables.', 'No error'],
    correctAnswerIndex: 0,
    explanation: 'With the third-person singular subject "she", the correct form is "doesn\'t like".'
  },
  {
    id: 'q-verb-52',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "The number of students (A) / in the class (B) / are increasing. (C)"',
    options: ['The number of students', 'in the class', 'are increasing.', 'No error'],
    correctAnswerIndex: 2,
    explanation: '"The number of" takes a singular verb, so it should be "is increasing".'
  },
  {
    id: 'q-verb-53',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Choose the correctly spelled word:',
    options: ['Occassion', 'Occasion', 'Ocassion', 'Occasoin'],
    correctAnswerIndex: 1,
    explanation: '"Occasion" has a single \'c\' and a single \'s\'.'
  },
  {
    id: 'q-verb-54',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "He is one of the best player (A) / who has ever played (B) / for the team. (C)"',
    options: ['He is one of the best player', 'who has ever played', 'for the team.', 'No error'],
    correctAnswerIndex: 0,
    explanation: '"One of the" is followed by a plural noun, so it should be "one of the best players".'
  },
  {
    id: 'q-verb-55',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "I have (A) / saw the movie (B) / yesterday. (C)"',
    options: ['I have', 'saw the movie', 'yesterday.', 'No error'],
    correctAnswerIndex: 0,
    explanation: 'With a definite past time marker like "yesterday", the simple past tense is used, so "have" should be dropped: "I saw the movie yesterday."'
  },
  {
    id: 'q-verb-56',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Fill in the blank: "She along with her friends _____ going to the market."',
    options: ['is', 'are', 'were', 'have'],
    correctAnswerIndex: 0,
    explanation: 'Phrases like "along with" do not change the number of the subject; the verb agrees with "she", so "is" is correct.'
  },
  {
    id: 'q-verb-57',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "Scarcely had he left (A) / when it began (B) / to raining. (C)"',
    options: ['Scarcely had he left', 'when it began', 'to raining.', 'No error'],
    correctAnswerIndex: 2,
    explanation: 'After "began to", the base form of the verb is used, so it should be "to rain" instead of "to raining".'
  },
  {
    id: 'q-verb-58',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Choose the correctly spelled word:',
    options: ['Priviledge', 'Privilege', 'Privilage', 'Priviege'],
    correctAnswerIndex: 1,
    explanation: '"Privilege" is spelled P-R-I-V-I-L-E-G-E.'
  },
  {
    id: 'q-verb-59',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "Between you and I (A) / this is (B) / a secret. (C)"',
    options: ['Between you and I', 'this is', 'a secret.', 'No error'],
    correctAnswerIndex: 0,
    explanation: 'As the object of the preposition "between", the correct pronoun form is "me", so it should be "between you and me".'
  },
  {
    id: 'q-verb-60',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Identify the error segment: "He is too weak to walk (A) / that he cannot (B) / go to school. (C)"',
    options: ['He is too weak to walk', 'that he cannot', 'go to school.', 'No error'],
    correctAnswerIndex: 1,
    explanation: 'The construction "too...to" is already complete on its own; the redundant clause "that he cannot" should be removed.'
  },
  {
    id: 'q-verb-61',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Fill in the blank: "Not only he but also his friends _____ invited."',
    options: ['was', 'were', 'is', 'has'],
    correctAnswerIndex: 1,
    explanation: 'With "not only...but also", the verb agrees with the nearer subject, "friends", which is plural, so "were" is correct.'
  },
  {
    id: 'q-verb-62',
    topicId: 'verb-error-spotting',
    categoryId: 'verbal',
    questionText: 'Choose the correctly spelled word:',
    options: ['Recieve', 'Receive', 'Receeve', 'Receve'],
    correctAnswerIndex: 1,
    explanation: '"Receive" follows the rule "i before e except after c", spelled R-E-C-E-I-V-E.'
  },

  // --- VERBAL ABILITY: Idioms & Phrases (25 Questions) ---
  {
    id: 'q-verb-25',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Bite the bullet" mean?',
    options: ['To eat food quickly', 'To face a difficult situation with courage', 'To get shot', 'To avoid conflict'],
    correctAnswerIndex: 1,
    explanation: 'Bite the bullet means to endure a painful situation bravely.'
  },
  {
    id: 'q-verb-26',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Burn the midnight oil" mean?',
    options: ['Waste resources', 'Work or study late into the night', 'Cause an accident', 'Sleep early'],
    correctAnswerIndex: 1,
    explanation: 'Refers to working or studying late into the night.'
  },
  {
    id: 'q-verb-27',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Break the ice" mean?',
    options: ['To shatter something', 'To initiate conversation in a social setting', 'To cool down', 'To express anger'],
    correctAnswerIndex: 1,
    explanation: 'Break the ice means to relieve tension or initiate conversation.'
  },
  {
    id: 'q-verb-28',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Once in a blue moon" mean?',
    options: ['Very frequently', 'Very rarely', 'On full moon days', 'Never'],
    correctAnswerIndex: 1,
    explanation: 'An event that happens very rarely.'
  },
  {
    id: 'q-verb-29',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Spill the beans" mean?',
    options: ['To drop food', 'To reveal a secret', 'To make a mistake', 'To work hard'],
    correctAnswerIndex: 1,
    explanation: 'Spill the beans means to reveal secret information.'
  },
  {
    id: 'q-verb-30',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "A blessing in disguise" mean?',
    options: ['A hidden curse', 'A good thing that seemed bad at first', 'An unexpected gift', 'A disguised person'],
    correctAnswerIndex: 1,
    explanation: 'A misfortune or difficult start that eventually turns out to be good.'
  },
  {
    id: 'q-verb-31',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Hit the nail on the head" mean?',
    options: ['To do carpentry', 'To describe exactly what is causing a situation', 'To make a mistake', 'To hurt someone'],
    correctAnswerIndex: 1,
    explanation: 'To find precisely the right answer or cause.'
  },
  {
    id: 'q-verb-32',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Cost an arm and a leg" mean?',
    options: ['To be very cheap', 'To be extremely expensive', 'To require physical labor', 'To be dangerous'],
    correctAnswerIndex: 1,
    explanation: 'To cost a lot of money.'
  },
  {
    id: 'q-verb-33',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Piece of cake" mean?',
    options: ['Something very sweet', 'Something very easy to do', 'A baked dessert', 'A difficult task'],
    correctAnswerIndex: 1,
    explanation: 'An effortless task or job.'
  },
  {
    id: 'q-verb-34',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Under the weather" mean?',
    options: ['Enjoying the rain', 'Feeling slightly ill or unwell', 'Standing outside', 'Feeling very energetic'],
    correctAnswerIndex: 1,
    explanation: 'Feeling sick or under par.'
  },
  {
    id: 'q-verb-35',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Call it a day" mean?',
    options: ['To wake up early', 'To stop working on something', 'To celebrate a holiday', 'To predict the weather'],
    correctAnswerIndex: 1,
    explanation: 'To declare the workday finished and stop working.'
  },
  {
    id: 'q-verb-36',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Beat around the bush" mean?',
    options: ['To trim garden plants', 'To avoid talking about the main topic directly', 'To search for animals', 'To make loud noises'],
    correctAnswerIndex: 1,
    explanation: 'To approach a topic without coming to the point directly.'
  },
  {
    id: 'q-verb-63',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Add fuel to the fire" mean?',
    options: ['To cook food', 'To make a bad situation worse', 'To start a fire safely', 'To calm someone down'],
    correctAnswerIndex: 1,
    explanation: 'This idiom means to make an already bad situation even worse.'
  },
  {
    id: 'q-verb-64',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Back to square one" mean?',
    options: ['To win a game', 'To start over from the beginning', 'To move forward quickly', 'To finish a task'],
    correctAnswerIndex: 1,
    explanation: 'It means to return to the starting point after an attempt has failed.'
  },
  {
    id: 'q-verb-65',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Cut corners" mean?',
    options: ['To take a shortcut through a park', 'To do something cheaply or carelessly to save time or money', 'To argue with someone', 'To measure angles precisely'],
    correctAnswerIndex: 1,
    explanation: 'It means to do something in the easiest or cheapest way, often sacrificing quality.'
  },
  {
    id: 'q-verb-66',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Get cold feet" mean?',
    options: ['To feel very cold', 'To become nervous about doing something planned', 'To walk barefoot', 'To catch a cold'],
    correctAnswerIndex: 1,
    explanation: 'It means to suddenly feel too frightened to do something you had planned to do.'
  },
  {
    id: 'q-verb-67',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Hit the sack" mean?',
    options: ['To attack someone', 'To go to bed', 'To carry heavy bags', 'To lose a game'],
    correctAnswerIndex: 1,
    explanation: 'It is an informal expression meaning to go to sleep.'
  },
  {
    id: 'q-verb-68',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Kill two birds with one stone" mean?',
    options: ['To harm two people at once', 'To accomplish two things with a single action', 'To fail at two tasks', 'To hunt animals'],
    correctAnswerIndex: 1,
    explanation: 'It means to achieve two objectives with a single effort.'
  },
  {
    id: 'q-verb-69',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Let the cat out of the bag" mean?',
    options: ['To free an animal', 'To reveal a secret accidentally', 'To play a prank', 'To hide something'],
    correctAnswerIndex: 1,
    explanation: 'It means to accidentally reveal a secret.'
  },
  {
    id: 'q-verb-70',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Miss the boat" mean?',
    options: ['To arrive late at a port', 'To miss an opportunity', 'To fall into water', 'To travel by ship'],
    correctAnswerIndex: 1,
    explanation: 'It means to lose a chance to do or get something.'
  },
  {
    id: 'q-verb-71',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "On the ball" mean?',
    options: ['Playing sports well', 'Alert and quick to understand things', 'Standing on a round object', 'Feeling dizzy'],
    correctAnswerIndex: 1,
    explanation: 'It means being competent, alert, and quick to respond.'
  },
  {
    id: 'q-verb-72',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Pull someone\'s leg" mean?',
    options: ['To physically hurt someone', 'To joke or tease someone playfully', 'To help someone walk', 'To trip someone'],
    correctAnswerIndex: 1,
    explanation: 'It means to joke with someone in a lighthearted way.'
  },
  {
    id: 'q-verb-73',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "See eye to eye" mean?',
    options: ['To look directly at someone', 'To agree completely with someone', 'To have poor eyesight', 'To argue constantly'],
    correctAnswerIndex: 1,
    explanation: 'It means to be in complete agreement with someone.'
  },
  {
    id: 'q-verb-74',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Turn a blind eye" mean?',
    options: ['To lose eyesight', 'To deliberately ignore something', 'To look away suddenly', 'To wear sunglasses'],
    correctAnswerIndex: 1,
    explanation: 'It means to deliberately ignore something one does not want to acknowledge.'
  },
  {
    id: 'q-verb-75',
    topicId: 'verb-idioms',
    categoryId: 'verbal',
    questionText: 'What does "Water under the bridge" mean?',
    options: ['A flood warning', 'Past events that are no longer important', 'A river crossing', 'An ongoing problem'],
    correctAnswerIndex: 1,
    explanation: 'It refers to past events or issues that are no longer relevant or worth worrying about.'
  },
];