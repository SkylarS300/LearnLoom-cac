let categories = {
  sentenceStructure: {
    title: "Sentence Structure",
    category: [
      { 
        mode: "Simple Sentences", 
        description: "Explanation: A simple sentence contains a subject and a verb and expresses a complete thought. It consists of one independent clause.",
        test: [
        {
          question: ["Which of the following is a simple sentence?", "A simple sentence has how many independant clauses", "Identify the subject in the sentence: 'The cat slept.'", "Is 'I am happy' a simple sentence?", "Choose the correct simple sentence:", "Does a simple sentence need both a subject and a verb?", "Is 'John and Mary went to the park' a simple sentence?", "What type of clause does a simple sentence contain?", "Can a simple sentence contain a compound subject?", "Can a simple sentence contain a compound subject?", "Identify the verb in the sentence: 'The sun shines.'"] ,
          choices: [
            ["She runs.", "When she runs.", "Although she runs."], 
            ["1", "2", "3"], 
            ["The cat", "slept", "The"],
            ["Yes", "No"], 
            ["The dog barks loudly.", "The dog, barking loudly, ran away."], 
            ["Yes", "No"], 
            ["Yes", "No"], 
            ["Independant", "Dependant"],
            ["Yes", "No"], 
            ["shines"]
          ],
        }
        ],
          explanations: ["Explanation: A simple sentence consists of one independent clause, meaning it has a subject and a verb and expresses a complete thought. Example: ‘She runs.’", "A simple sentence has only one independant clause, meaning only one subject and one verb.", "Explanation: The subject is the person, place, or thing doing the action. In this case, ‘The cat’ is the subject." , "Explanation: A simple sentence is complete and doesn't need additional clauses to make sense. ‘I am happy’ is a complete sentence.", "Explanation: ‘The dog barks loudly’ has one subject and one verb, which makes it a simple sentence.", "Explanation: A simple sentence needs both a subject and a verb to form a complete thought.", "Explanation: ‘John and Mary’ are compound subjects, but the sentence is still simple because it only has one verb.", "Explanation: An independent clause can stand alone as a complete sentence.", "Explanation: A simple sentence can have a compound subject or compound verb but still only contains one clause.", "Explanation: The verb is the action in the sentence. In this case, 'slept' is the verb."]
        },

      {
        mode: "Compound Sentences",
        description: "Explanation: A compound sentence contains two independent clauses joined by a coordinating conjunction (for, and, nor, but, or, yet, so). An acronym that can help you remember this is FANBOYS.",
        test: [
          {
            question: ["What joins two independent clauses in a compound sentence?", "Which of the following is a compound sentence?", "What does FANBOYS stand for?", "Choose the correct compound sentence:", "Which is the correct coordinating conjunction to join these sentences: 'I was tired __ I went to bed'?", "What punctuation often comes before a coordinating conjunction?", "Which sentence is incorrect?", "How many independent clauses does a compound sentence have?", "Is 'I read a book, and I watched a movie' a compound sentence?", "What is the conjunction in this sentence: 'He likes ice cream, but he hates cake.'"],
            choices: [
              ["Subordinating conjunction", "Coordinating conjunction"], 
              ["I went home, and I took a nap.", "Because I was tired, I went home."], 
              ["for, and, nor, but, or, yes, so"], 
              ["She sings and dances", "She sings, and she dances"], 
              ["so", "because", "but"], 
              ["Comma", "Period"], 
              ["I wanted to go, but I stayed home.", "I wanted to go but I stayed home."], 
              ["1", "2", "3"], 
              ["Yes", "No"], 
              ["but"]
            ],
            explanations: ["A coordinating conjunction (for, and, nor, but, or, yet, so) connects two independent clauses in a compound sentence.", "Explanation: A compound sentence contains two independent clauses joined by a coordinating conjunction.", "Explanation: FANBOYS is a mnemonic for coordinating conjunctions: For, And, Nor, But, Or, Yet, So.", "Explanation: The sentence 'She sings, and she dances' connects two independent clauses using a conjunction, making it a compound sentence.", "Explanation: In a compound sentence, a comma comes before the coordinating conjunction (e.g., 'so').", "Explanation: A comma is placed before the conjunction in a compound sentence to separate the two independent clauses.", "Explanation: Omitting the comma before the conjunction in a compound sentence is incorrect.", "Explanation: A compound sentence contains two independent clauses, each of which could stand alone as a sentence.", "Explanation: 'I read a book, and I watched a movie' has two independent clauses, so it's a compound sentence.", "Explanation: 'But' is a coordinating conjunction, connecting the two clauses in this compound sentence."]
          }
        ]
      }, 

      {
        mode: "Complex Sentences",
        description: "Explanation: A complex sentence contains one independent clause and at least one dependent clause. Dependent clauses cannot stand alone as a complete sentence.",
        test: [
          {
            question: ["Which of the following is a complex sentence?", "A complex sentence contains what type of clauses?", "Which word often begins a dependent clause?", "What is the dependent clause in the sentence: 'Because it was raining, we stayed indoors'?", "What is the independent clause in the sentence: 'I studied until I was tired'?", "Which sentence is correct?", "Which sentence is NOT a complex sentence?", "What connects a dependent clause to an independent clause?", "Which of the following is a dependent clause?", "Identify the independent clause in the sentence: 'Before I left, I finished my project.'"],
            choices: [["I finished my homework before I went to bed.", "I finished my homework."], ["One independent and one or more dependent clauses.", "Two independent clauses."], ["Although", "And", "But"], ["Because it was raining"], ["I studied"], ["Since I was late, I missed the meeting.", "Since I was late I missed the meeting."], ["I went home after I finished work.", "I went home, and I watched TV."], ["Subordinating conjunction", "Coordinating conjunction"], ["After the rain stopped", "The rain stopped"], ["I finished my project"]],
            explanations: ["Explanation: A complex sentence has an independent clause and at least one dependent clause. 'I finished my homework before I went to bed' is an example.", "Explanation: A complex sentence consists of one independent clause and at least one dependent (subordinate) clause.", "Explanation: Dependent clauses often begin with subordinating conjunctions like 'although,' 'because,' 'when,' or 'if.'", "Explanation: The dependent clause is 'Because it was raining' because it cannot stand alone as a complete thought.", "Explanation: The independent clause is 'I studied' because it is a complete sentence on its own.", "Explanation: In complex sentences, use a comma after the dependent clause if it comes before the independent clause.", "Explanation: A complex sentence has a dependent clause and an independent clause. The second option has two independent clauses, which makes it compound, not complex.", "Explanation: A subordinating conjunction like 'because' or 'after' connects a dependent clause to the main clause.", "Explanation: 'After the rain stopped' is dependent because it cannot stand alone as a complete sentence.", "Explanation: The independent clause is 'I finished my project,' as it could be a complete sentence by itself."]
          }
        ]
      }
    ], 
  },

  punctuation: {
    title: "Punctuation",
    category: [
      {
        mode: "Commas",
        description: "Explanation: Commas are used to separate items in a list, before conjunctions in compound sentences, after introductory elements, and to set off clauses.",
        test: [
          {
            question: [
              "Rewrite the sentence with proper comma usage: 'I bought apples oranges and bananas.'",
              "Is this sentence punctuated correctly? 'I like pizza, and I like burgers.'",
              "Rewrite the sentence with a properly placed comma: 'Before we start let's review the rules.'",
              "In a list, commas separate which elements?",
              "Which sentence is grammatically correct?",
              "Identify the error: 'My brother, John plays soccer.'",
              "Rewrite the sentence with a properly placed comma: 'At the end of the day we went home.'",
              "Which sentence is grammatically correct?",
              "Commas are used to separate what in a compound sentence?",
              "Rewrite the sentence with a properly placed comma: 'She loves running but she also loves swimming.'"
            ],
            choices: [
              ["I bought apples, oranges, and bananas."],
              ["Yes", "No"],
              ["Before we start, let's review the rules."],
              ["Items", "Clauses"],
              ["She danced, but he did not.", "She danced but he did not."],
              ["Missing comma", "Comma unnecessary"],
              ["At the end of the day, we went home."],
              ["After dinner, we went to the park.", "After dinner we went to the park."],
              ["Clauses", "Words"],
              ["She loves running, but she also loves swimming."]
            ],
            explanations: [
              "Explanation: Commas separate items in a list. 'Apples, oranges, and bananas' is an example.",
              "Explanation: A comma is needed before 'and' in compound sentences to separate two independent clauses.",
              "Explanation: A comma is required after introductory elements like 'Before we start' in a sentence.",
              "Explanation: Commas separate items in a list, helping to clarify the meaning.",
              "Explanation: In compound sentences, the comma goes before the conjunction, as in 'She danced, but he did not.'",
              "Explanation: A non-essential element ('John') in the middle of a sentence should be set off by commas.",
              "Explanation: When a sentence begins with an introductory phrase like 'At the end of the day,' a comma should follow.",
              "Explanation: After introductory elements, a comma is necessary to clarify the sentence.",
              "Explanation: Commas are used to separate clauses in compound sentences.",
              "Explanation: A comma is necessary before the conjunction in this sentence to separate two independent clauses."
            ]
          }
        ]
      },
      {
        mode: "Apostrophes",
        description: "Explanation: Apostrophes are used to show possession and to form contractions. For example, 'it's' is a contraction for 'it is,' while 'its' is possessive.",
        test: [
          {
            question: [
              "Is 'it's' the correct form in this sentence: 'It's a beautiful day.'",
              "Which is correct for possession: 'The cat's toy' or 'The cats toy'?",
              "Which sentence uses an apostrophe incorrectly?",
              "Where should the apostrophe go: 'Thats Johns car.'",
              "What is the contraction for 'they are'?",
              "Does this sentence need an apostrophe? 'The players shoes are dirty.'",
              "Choose the correct possessive form:",
              "Which is the contraction for 'you are'?",
              "Where should the apostrophe go: 'Wheres my book?'",
              "Identify the mistake: 'Its been a long day.'"
            ],
            choices: [
              ["Yes", "No"],
              ["The cat's toy"],
              ["The dog's leash is red.", "Its a sunny day."],
              ["That’s John’s car"],
              ["They’re"],
              ["Yes", "No"],
              ["The children's toys", "The childrens toys"],
              ["You're", "Your"],
              ["Where’s my book"],
              ["Apostrophe needed", "No mistake"]
            ],
            explanations: [
              "Explanation: 'It's' is the contraction for 'it is,' which fits this sentence.",
              "Explanation: To show possession, we add an apostrophe, as in 'The cat's toy.'",
              "Explanation: 'Its' without an apostrophe shows possession, while 'it's' is a contraction for 'it is.'",
              "Explanation: The apostrophe goes before 's' to show possession in 'John's car.'",
              "Explanation: 'They’re' is the contraction for 'they are.'",
              "Explanation: The sentence 'The players' shoes' needs an apostrophe to show possession.",
              "Explanation: The possessive form of 'children' is 'children's.'",
              "Explanation: 'You're' is the contraction for 'you are.'",
              "Explanation: 'Where’s' is the contraction for 'where is.'",
              "Explanation: 'It's' is the contraction for 'it is.' The sentence needs an apostrophe."
            ]
          }
        ]
      },
      {
        mode: "Quotation Marks",
        description: "Explanation: Quotation marks are used to indicate direct speech, quotes, or specific titles. They can also highlight certain words for emphasis. In English, punctuation is included within quotation marks.",
        test: [
          {
            question: [
              "Where should the quotation marks go: She said, Hello.",
              "Which sentence uses quotation marks correctly?",
              "Is this sentence punctuated correctly? 'Did you say, Let's go?' he asked.",
              "What do quotation marks enclose?",
              "Where should the quotation marks go: 'He said, That movie was great.'",
              "In American English, punctuation marks usually go _______ quotation marks.",
              "Is the punctuation correct? 'I can’t wait to go,' she said.",
              "When quoting a book, should the title be in quotation marks?",
              "Where does the punctuation go in this sentence: The sign said 'No entry'.",
              "Is the sentence correct? 'I just finished reading,' said John 'The best book ever.'"
            ],
            choices: [
              ["She said, 'Hello.'"],
              ["'I love ice cream,' she said.", "I love ice cream she said."],
              ["Yes", "No"],
              ["Dialogue or quotes", "Items in a list"],
              ["He said, 'That movie was great.'"],
              ["Inside", "Outside"],
              ["Yes", "No"],
              ["No", "Yes"],
              ["The sign said 'No entry.'"],
              ["Yes", "No"]
            ],
            explanations: [
              "Explanation: Quotation marks are placed around direct speech or quotes, such as 'Hello.'",
              "Explanation: In American English, punctuation goes inside the quotation marks.",
              "Explanation: The comma should come after 'Let’s go' in the direct quote.",
              "Explanation: Quotation marks enclose direct speech or quotations, setting them apart from the rest of the sentence.",
              "Explanation: In direct quotes, the punctuation (comma) should go inside the quotation marks.",
              "Explanation: In American English, commas and periods go inside the quotation marks.",
              "Explanation: The punctuation is correct here because the comma comes inside the quotation marks.",
              "Explanation: Book titles are italicized, while shorter works like poems or articles are put in quotation marks.",
              "Explanation: Quotation marks go around the quote 'No entry.'",
              "Explanation: The second part of the quote should start with 'said John,' and punctuation should be inside the quotation marks."
            ]
          }
        ]
      }
    ]
  },

  commonGrammarMistakes: {
    title: "Common Grammar Mistakes",
    category: [
      {
        mode: "Subject-Verb Agreement",
        description: "Explanation: Subject-verb agreement means that the subject and verb in a sentence must agree in number. A singular subject takes a singular verb, and a plural subject takes a plural verb.",
        test: [
          {
            question: [
              "Which is correct?",
              "'The dogs _____ in the yard.'",
              "Identify the error: 'He don’t know the answer.'",
              "Which is correct: 'He _____ very tired.'",
              "Choose the correct form: 'The team _____ working hard.'",
              "'The children _____ playing outside.'",
              "Is this sentence correct? 'She and her friends goes to the park.'",
              "Which verb agrees with the subject: 'The book and the pen _____ on the table.'",
              "Choose the correct form: 'The cat or the dogs _____ making the noise.'",
              "Which is correct? 'There _____ many reasons to leave.'"
            ],
            choices: [
              ["She walk to school.", "She walks to school."],
              ["is", "are"],
              ["don’t", "know"],
              ["feel", "feels"],
              ["is", "are"],
              ["is", "are"],
              ["Yes", "No"],
              ["is", "are"],
              ["is", "are"],
              ["is", "are"]
            ],
            explanations: [
              "Explanation: The subject 'She' is singular, so the verb 'walks' should be singular to match.",
              "Explanation: 'Dogs' is plural, so the verb 'are' should match the plural subject.",
              "Explanation: 'He' is singular, so 'doesn't' is the correct verb form, not 'don’t.'",
              "Explanation: 'He' is singular, so the correct verb form is 'feels.'",
              "Explanation: The subject 'team' is singular, so the verb 'is' should be used.",
              "Explanation: 'Children' is plural, so 'are' is the correct verb.",
              "Explanation: The subject 'friends' is plural, so 'go' should be used, not 'goes.'",
              "Explanation: When subjects are joined by 'and,' the verb is plural, so 'are' is correct.",
              "Explanation: When subjects are joined by 'or,' the verb agrees with the closest subject, which is 'dogs' (plural), so 'are' is correct.",
              "Explanation: 'Reasons' is plural, so the verb 'are' should be used."
            ]
          }
        ]
      },
      {
        mode: "Misplaced Modifiers",
        description: "Explanation: A misplaced modifier is a word or phrase that is placed awkwardly in a sentence, making it unclear or changing the meaning of the sentence. Modifiers should be placed next to the words they modify.",
        test: [
          {
            question: [
              "Identify the misplaced modifier: 'She almost drove the kids to school every day.'",
              "Which sentence is correct?",
              "Find the error: 'Running quickly, the car almost hit her.'",
              "Which is correct? 'He barely touched his food.'",
              "Fix the misplaced modifier: 'She nearly gave all the homework to her students.'",
              "Choose the correct sentence:",
              "Where is the misplaced modifier: 'The young boy threw the ball to his friend with excitement.'",
              "Is this sentence correct? 'She saw the bird flying through the telescope.'",
              "Fix the sentence: 'She almost studied the entire night.'",
              "Which sentence is clearer? 'I saw the movie driving home.'"
            ],
            choices: [
              ["She", "almost"],
              ["I only ate the pizza.", "I ate only the pizza."],
              ["Running quickly", "almost hit her"],
              ["Yes", "No"],
              ["She gave nearly all the homework to her students."],
              ["The man walked the dog with a hat.", "The man with a hat walked the dog."],
              ["with excitement"],
              ["Yes", "No"],
              ["She studied almost the entire night."],
              ["Yes", "No"]
            ],
            explanations: [
              "Explanation: 'Almost' should be placed closer to what it modifies to clarify the meaning.",
              "Explanation: 'Only' modifies 'the pizza,' so it should be placed next to the object it's modifying.",
              "Explanation: The modifier 'Running quickly' modifies the wrong subject (the car). It should refer to a person.",
              "Explanation: 'Barely' is correctly modifying 'touched' in this sentence.",
              "Explanation: 'Nearly' should be placed next to the correct part of the sentence to avoid confusion.",
              "Explanation: The phrase 'with a hat' should modify 'the man,' so it must be placed next to 'the man.'",
              "Explanation: The modifier 'with excitement' should modify 'threw the ball' and should be placed near the action.",
              "Explanation: The placement of the modifier makes it sound like the bird was flying through the telescope, which is incorrect.",
              "Explanation: 'Almost' should modify 'the entire night,' not the verb 'studied.'",
              "Explanation: The sentence 'I saw the movie driving home' incorrectly implies that the movie was driving."
            ]
          }
        ]
      },
      {
        mode: "Double Negatives",
        description: "Explanation: A double negative occurs when two forms of negation are used in the same sentence. In English, using two negatives can cancel each other out and lead to confusion.",
        test: [
          {
            question: [
              "Is this sentence correct? 'I don’t have nothing.'",
              "Fix the sentence: 'He can’t find no pencils.'",
              "Is this sentence correct? 'She didn’t say nothing.'",
              "Correct the error: 'There isn’t no milk left.'",
              "Choose the correct sentence:",
              "Which is grammatically correct?",
              "Fix the double negative: 'She didn’t go nowhere today.'",
              "Is this sentence correct?: 'He doesn’t have nothing to do.'",
              "Rewrite this sentence properly: 'I don’t have no money.'",
              "Is this sentence correct? 'There isn’t nothing in the fridge.'"
            ],
            choices: [
              ["Yes", "No"],
              ["He can’t find any pencils."],
              ["Yes", "No"],
              ["There isn’t any milk left."],
              ["I don’t know nobody here.", "I don’t know anybody here."],
              ["They never did nothing wrong.", "They never did anything wrong."],
              ["She didn’t go anywhere today."],
              ["Yes", "No"],
              ["I don’t have any money."],
              ["Yes", "No"]
            ],
            explanations: [
              "Explanation: 'Don’t have nothing' is a double negative. The correct form is 'don’t have anything.'",
              "Explanation: 'Can’t find no pencils' should be corrected to 'can’t find any pencils' to avoid the double negative.",
              "Explanation: The correct form is 'didn’t say anything' to avoid the double negative.",
              "Explanation: 'Isn’t no milk' is a double negative. The correct form is 'isn’t any milk.'",
              "Explanation: Using 'anybody' instead of 'nobody' eliminates the double negative in this sentence.",
              "Explanation: 'Never did anything wrong' is correct. Double negatives like 'never did nothing' cancel each other out.",
              "Explanation: 'Didn’t go anywhere' is the correct form because it avoids the double negative.",
              "Explanation: The correct form is 'doesn’t have anything to do' to avoid the double negative.",
              "Explanation: The correct form is 'I don’t have any money.'",
              "Explanation: 'There isn’t anything' is the correct form, avoiding the double negative."
            ]
          }
        ]
      }
    ]
  },

  verbTenses: {
    title: "Verb Tenses",
    category: [
      {
        mode: "Present Simple vs. Present Continuous",
        description: "Explanation: The present simple tense is used for habitual actions, facts, and general truths. The present continuous tense is used for actions happening right now or temporary actions.",
        test: [
          {
            question: [
              "Choose the correct form: 'I _____ breakfast every morning.'",
              "What’s the difference between 'He works' and 'He is working'?",
              "Which sentence is in the present continuous tense?",
              "Which is correct? 'She _____ to school every day.'",
              "Is this sentence correct? 'They are usually eating dinner at 7 PM.'",
              "Which sentence describes a habit?",
              "Choose the present continuous form: 'I _____ my homework right now.'",
              "Correct the sentence: 'We are playing soccer every weekend.'",
              "Which describes a temporary action? 'He _____ in New York for the summer.'",
              "Complete the sentence: 'They _____ the movie right now.'"
            ],
            choices: [
              ["eat", "am eating"],
              ["Short answer: 'He works' is a habit, while 'He is working' is happening now."],
              ["I am reading a book.", "I read books."],
              ["goes", "is going"],
              ["Yes", "No"],
              ["She walks to work every day.", "She is walking to work now."],
              ["do", "am doing"],
              ["Short answer: We play soccer every weekend."],
              ["stays", "is staying"],
              ["watch", "are watching"]
            ],
            explanations: [
              "Explanation: The present simple is used for habitual actions or routines, like 'I eat breakfast every morning.'",
              "Explanation: 'He works' is a habit, while 'He is working' describes something happening right now.",
              "Explanation: The present continuous describes an action happening now. 'I am reading' is an example.",
              "Explanation: The present simple is used to describe habits or routines, such as 'She goes to school every day.'",
              "Explanation: The present continuous is not used for regular activities that happen every day. Use the present simple instead.",
              "Explanation: The sentence 'She walks to work every day' is a habit, so we use the present simple tense.",
              "Explanation: The present continuous is used for ongoing actions, like 'I am doing my homework right now.'",
              "Explanation: The sentence 'We play soccer every weekend' uses the present simple because it's a habitual action.",
              "Explanation: The present continuous ('is staying') is used to describe temporary actions happening now or in the near future.",
              "Explanation: The present continuous ('are watching') is used to describe actions happening right now."
            ]
          }
        ]
      },
      {
        mode: "Past Simple vs. Past Continuous",
        description: "Explanation: The past simple tense is used for completed actions in the past, while the past continuous tense describes actions that were ongoing at a specific time in the past.",
        test: [
          {
            question: [
              "Which sentence is in the past continuous tense?",
              "Which describes an ongoing action? 'They _____ dinner when the guests arrived.'",
              "Is this sentence correct? 'She was study when the power went out.'",
              "Choose the correct form: 'He _____ football when it started raining.'",
              "What’s the difference between 'I worked' and 'I was working'?",
              "Which sentence uses the past simple correctly?",
              "Choose the correct form: 'They _____ TV when I called.'",
              "Which describes a completed action? 'We _____ the movie last night.'",
              "Complete the sentence: 'While they _____, the phone rang.'",
              "Is this sentence correct? 'She was walk to school when it started raining.'"
            ],
            choices: [
              ["I was reading when he called.", "I read when he called."],
              ["ate", "were eating"],
              ["Yes", "No"],
              ["played", "was playing"],
              ["Short answer: 'I worked' is a completed action; 'I was working' means the action was ongoing."],
              ["I saw her yesterday.", "I was seeing her yesterday."],
              ["watched", "were watching"],
              ["watched", "were watching"],
              ["were talking", "talked"],
              ["Yes", "No"]
            ],
            explanations: [
              "Explanation: The past continuous ('was reading') describes an ongoing action in the past, interrupted by another action ('he called').",
              "Explanation: The past continuous ('were eating') is used to describe an action that was in progress when something else happened.",
              "Explanation: 'Was study' is incorrect. The correct form is 'was studying' to indicate an ongoing action in the past.",
              "Explanation: The past continuous ('was playing') is used to describe an ongoing action interrupted by another event (e.g., rain).",
              "Explanation: 'I worked' is a completed action, while 'I was working' describes an ongoing action in the past.",
              "Explanation: The past simple ('I saw') is used for completed actions, like seeing someone yesterday.",
              "Explanation: 'Were watching' is the past continuous, used to describe something happening at a specific time in the past.",
              "Explanation: The past simple ('watched') describes a completed action in the past.",
              "Explanation: The past continuous ('were talking') describes an ongoing action when something else (the phone ringing) happened.",
              "Explanation: The correct form is 'was walking,' not 'was walk.'"
            ]
          }
        ]
      },
      {
        mode: "Future Simple vs. Future Continuous",
        description: "Explanation: The future simple tense describes actions that will happen in the future, while the future continuous tense is used for actions that will be ongoing at a specific time in the future.",
        test: [
          {
            question: [
              "Which sentence is in the future continuous tense?",
              "Choose the correct form: 'They _____ dinner at 7 PM tomorrow.'",
              "Which describes an ongoing action in the future? 'By this time tomorrow, she _____.'",
              "Is this sentence correct? 'They will be study at 8 PM.'",
              "Complete the sentence: 'He _____ when you arrive.'",
              "Which is correct? 'I _____ finish the project by next week.'",
              "Choose the correct future continuous form: 'At 10 AM tomorrow, they _____ a meeting.'",
              "Which sentence is correct? 'By next week, we will have finish the project.'",
              "What’s the difference between 'I will call you' and 'I will be calling you'?",
              "Correct the sentence: 'They will watch TV at this time tomorrow.'"
            ],
            choices: [
              ["I will be traveling next week.", "I will travel next week."],
              ["will eat", "will be eating"],
              ["will be working", "will work"],
              ["Yes", "No"],
              ["will sleep", "will be sleeping"],
              ["will", "will be"],
              ["will have", "will be having"],
              ["Yes", "No"],
              ["Short answer: 'I will call you' means the action will happen; 'I will be calling you' means it will be ongoing."],
              ["Short answer: They will be watching TV at this time tomorrow."]
            ],
            explanations: [
              "Explanation: The future continuous ('will be traveling') describes an action that will be ongoing at a specific time in the future.",
              "Explanation: The future continuous ('will be eating') describes an action that will be happening at 7 PM tomorrow.",
              "Explanation: The future continuous ('will be working') is used to describe something that will be happening at a specific time tomorrow.",
              "Explanation: The correct form is 'will be studying' to indicate an ongoing future action.",
              "Explanation: The future continuous ('will be sleeping') is used to describe an ongoing action when another action occurs.",
              "Explanation: 'Will' is used to indicate future events, as in 'I will finish the project.'",
              "Explanation: The future continuous ('will be having') describes an action that will be in progress at 10 AM tomorrow.",
              "Explanation: The future perfect is needed here: 'We will have finished,' not 'will have finish.'",
              "Explanation: 'I will call you' refers to a specific action, while 'I will be calling you' describes an ongoing action.",
              "Explanation: The correct form is 'They will be watching TV at this time tomorrow.'"
            ]
          }
        ]
      }
    ]
  },

  wordUsage: {
    title: "Word Usage",
    category: [
      {
        mode: "Homophones",
        description: "Explanation: Homophones are words that sound the same but have different meanings and spellings (e.g., their, there, they’re).",
        test: [
          {
            question: [
              "Choose the correct word: '_____ going to the park.'",
              "Which is correct? 'I can _____ the music.'",
              "Correct the sentence: 'There house is on the left.'",
              "Which is the correct form of 'your'? 'Is this _____ book?'",
              "What’s the difference between 'its' and 'it’s'?",
              "Fill in the blank: 'The dog wagged _____ tail.'",
              "Correct the sentence: 'I _____ my keys yesterday.'",
              "Choose the correct word: 'I _____ letters to my friend.'",
              "Fill in the blank: 'They went _____ the store.'",
              "Correct the sentence: 'She likes the color blue, _____."
            ],
            choices: [
              ["They’re", "Their", "There"],
              ["here", "hear"],
              ["Short answer: Their house is on the left."],
              ["Short answer: your"],
              ["Short answer: 'its' shows possession, while 'it’s' is a contraction for 'it is.'"],
              ["its", "it’s"],
              ["Short answer: lost"],
              ["write", "right"],
              ["to", "two", "too"],
              ["to", "too", "two"]
            ],
            explanations: [
              "Explanation: 'They’re' is the contraction for 'they are,' which fits the sentence 'They’re going to the park.'",
              "Explanation: 'Hear' is the correct word because it refers to the ability to perceive sound.",
              "Explanation: 'Their' is the possessive form, used to show ownership (e.g., 'Their house').",
              "Explanation: 'Your' is the possessive form, used to indicate ownership (e.g., 'Is this your book?').",
              "Explanation: 'Its' shows possession, while 'it’s' is the contraction for 'it is.'",
              "Explanation: 'Its' is the possessive form, indicating the dog’s tail.",
              "Explanation: 'Lost' is the correct past tense form of the verb.",
              "Explanation: 'Write' means to compose a letter, while 'right' refers to direction or correctness.",
              "Explanation: 'To' is used to show direction (e.g., 'They went to the store').",
              "Explanation: 'Too' means 'also' or 'in addition,' which is correct in this sentence."
            ]
          }
        ]
      },
      {
        mode: "Commonly Confused Words",
        description: "Explanation: Some words are commonly confused because they look or sound similar but have different meanings (e.g., affect vs. effect).",
        test: [
          {
            question: [
              "Which is correct? 'The weather can _____ your mood.'",
              "Choose the correct word: 'She has a positive _____ on her students.'",
              "Fill in the blank: 'I need to _____ the report by Friday.'",
              "Which is correct? 'She gave me a nice _____ on my outfit.'",
              "What’s the difference between 'accept' and 'except'?",
              "Choose the correct word: 'I will _____ your invitation.'",
              "Is this sentence correct? 'I bought everything accept the milk.'",
              "Correct the sentence: 'The weather had an affect on the game.'",
              "Which is correct? 'I _____ to the store yesterday.'",
              "Correct the sentence: 'She has _____ to the park every day.'"
            ],
            choices: [
              ["affect", "effect"],
              ["affect", "effect"],
              ["complete", "compliment"],
              ["complement", "compliment"],
              ["Short answer: 'Accept' means to receive, while 'except' means to exclude."],
              ["accept", "except"],
              ["Yes", "No"],
              ["Short answer: The weather had an effect on the game."],
              ["went", "gone"],
              ["gone", "went"]
            ],
            explanations: [
              "Explanation: 'Affect' is a verb meaning to influence, while 'effect' is a noun referring to the result.",
              "Explanation: 'Effect' is the correct noun in this sentence because it refers to a result.",
              "Explanation: 'Complete' means to finish something, while 'compliment' refers to giving praise.",
              "Explanation: 'Compliment' is the correct word because it refers to praise.",
              "Explanation: 'Accept' means to receive something, while 'except' means to exclude.",
              "Explanation: 'Accept' is the correct word because it means to receive an invitation.",
              "Explanation: 'Accept' is the correct word, not 'except,' because it means to receive or agree.",
              "Explanation: 'Effect' is a noun and is correct in this sentence because it refers to a result.",
              "Explanation: 'Went' is the past tense form, and it is correct here.",
              "Explanation: 'Gone' is the past participle, used with 'has,' so 'has gone' is correct."
            ]
          }
        ]
      },
      {
        mode: "Synonyms and Antonyms",
        description: "Explanation: Synonyms are words with similar meanings, while antonyms are words with opposite meanings.",
        test: [
          {
            question: [
              "Choose a synonym for 'happy':",
              "Which is an antonym for 'cold'?",
              "What’s a synonym for 'big'?",
              "Choose an antonym for 'fast':",
              "Fill in the blank with a synonym for smart: 'She is very _____.'",
              "What’s an antonym for 'loud'?",
              "Choose a synonym for 'small':",
              "Which is an antonym for 'bright'?",
              "Fill in the blank with an antonym for exciting: 'The movie was very _____.'",
              "What’s a synonym for 'beautiful'?"
            ],
            choices: [
              ["sad", "joyful", "angry"],
              ["hot", "cool", "warm"],
              ["small", "large", "long"],
              ["slow", "quick", "swift"],
              ["intelligent", "dumb", "unkind"],
              ["deafening", "silent", "booming"],
              ["tiny", "large", "huge"],
              ["light", "dark", "sunny"],
              ["fun", "boring"],
              ["ugly", "gorgeous", "pretty"]
            ],
            explanations: [
              "Explanation: A synonym for 'happy' is 'joyful,' because both words have similar meanings.",
              "Explanation: An antonym is a word with the opposite meaning. 'Hot' is the opposite of 'cold.'",
              "Explanation: A synonym for 'big' is 'large' because both words mean the same thing.",
              "Explanation: 'Slow' is the opposite of 'fast,' making it the correct antonym.",
              "Explanation: A synonym for 'smart' is 'intelligent,' as they both describe a person’s mental ability.",
              "Explanation: The opposite of 'loud' is 'quiet,' making it the correct antonym.",
              "Explanation: A synonym for 'small' is 'tiny,' as both words describe something of small size.",
              "Explanation: 'Dark' is the opposite of 'bright,' making it the correct antonym.",
              "Explanation: The opposite of 'exciting' is 'boring,' which describes the opposite mood.",
              "Explanation: A synonym for 'beautiful' is 'pretty,' as both describe attractiveness."
            ]
          }
        ]
      }
    ]
  },

  writingStyle: {
    title: "Writing Style",
    category: [
      {
        mode: "Formal vs. Informal Writing",
        description: "Explanation: Formal writing is used in professional and academic settings, while informal writing is used in casual or personal contexts.",
        test: [
          {
            question: [
              "Which is more formal?",
              "Choose the formal sentence:",
              "Which sentence is informal?",
              "Which is appropriate for a business letter?",
              "Correct the sentence to make it formal: 'I’m super excited about the meeting!'",
              "Is this sentence formal or informal? 'Let me know if you need anything.'",
              "Choose the formal phrase:",
              "Fill in the blank: In academic writing, you should avoid using ____.",
              "Which is more appropriate in an email to your boss?",
              "Rewrite this informal sentence formally: 'Can you hit me back when you get this?'"
            ],
            choices: [
              ["Hey, what’s up?", "Dear Sir or Madam,"],
              ["Thanks for your email.", "I appreciate your correspondence."],
              ["I regret to inform you…", "Sorry, can’t make it."],
              ["I am writing to express…", "What’s good?"],
              ["Short answer: I am looking forward to the meeting."],
              ["Formal", "Informal"],
              ["I would like to schedule a meeting.", "Let’s set up a chat."],
              ["contractions", "formal phrases"],
              ["Hey, just checking in.", "I would like an update on the project."],
              ["Short answer: Could you please respond when you see this?"]
            ],
            explanations: [
              "Explanation: 'Dear Sir or Madam' is formal, used in professional or business settings, while 'Hey, what’s up?' is informal.",
              "Explanation: 'I appreciate your correspondence' is more formal than 'Thanks for your email,' making it the correct choice.",
              "Explanation: 'Sorry, can’t make it' is an informal phrase often used in casual conversation.",
              "Explanation: 'I am writing to express' is the formal way to begin a business letter.",
              "Explanation: In formal writing, avoid casual phrases like 'super excited.' A better alternative is 'I am looking forward to the meeting.'",
              "Explanation: 'Let me know if you need anything' is informal and used in casual contexts.",
              "Explanation: 'I would like to schedule a meeting' is formal, used in professional settings.",
              "Explanation: In formal writing, avoid contractions like 'can’t' and 'won’t.'",
              "Explanation: In business communication, it’s best to use formal language, such as 'I would like an update.'",
              "Explanation: In formal writing, 'Could you please respond when you receive this?' is better than informal phrases like 'hit me back.'"
            ]
          }
        ]
      },
      {
        mode: "Active vs. Passive Voice",
        description: "Explanation: In active voice, the subject performs the action. In passive voice, the subject receives the action.",
        test: [
          {
            question: [
              "Which sentence is in active voice?",
              "Choose the passive sentence:",
              "Is this sentence active or passive? 'The letter was mailed yesterday.'",
              "Change the sentence to active voice: 'The cake was eaten by the kids.'",
              "Which is passive voice?",
              "Rewrite the sentence in passive voice: 'The teacher gave a test.'",
              "Choose the active sentence:",
              "Which sentence is in passive voice?",
              "Correct the sentence to make it active: 'The homework was completed by the class.'",
              "Is this sentence passive or active? 'The decision was made by the committee.'"
            ],
            choices: [
              ["The ball was thrown by John.", "John threw the ball."],
              ["The report was written by Sarah.", "Sarah wrote the report."],
              ["Active", "Passive"],
              ["Short answer: The kids ate the cake."],
              ["The team won the game.", "The game was won by the team."],
              ["Short answer: A test was given by the teacher."],
              ["The car was driven by her.", "She drove the car."],
              ["The books were read by the students.", "The students read the books."],
              ["Short answer: The class completed the homework."],
              ["Active", "Passive"]
            ],
            explanations: [
              "Explanation: In active voice, the subject performs the action. 'John threw the ball' is an active sentence.",
              "Explanation: In passive voice, the action is performed on the subject. 'The report was written by Sarah' is an example of passive voice.",
              "Explanation: 'The letter was mailed yesterday' is passive because the subject receives the action.",
              "Explanation: The active version is 'The kids ate the cake,' where the subject (the kids) performs the action.",
              "Explanation: In passive voice, the focus is on the action being done to the subject, such as 'The game was won by the team.'",
              "Explanation: The active form is 'The teacher gave a test,' where the subject performs the action.",
              "Explanation: 'She drove the car' is active because the subject performs the action.",
              "Explanation: In passive voice, the action is done to the subject: 'The books were read by the students.'",
              "Explanation: The active form is 'The class completed the homework.'",
              "Explanation: The sentence 'The decision was made by the committee' is in passive voice because the action is done to the subject."
            ]
          }
        ]
      },
      {
        mode: "Concise vs. Wordy Writing",
        description: "Explanation: Concise writing conveys the message clearly and directly, while wordy writing uses unnecessary words that make the message less clear.",
        test: [
          {
            question: [
              "Which is more concise?",
              "Rewrite the sentence concisely: 'In my opinion, I believe that this is correct.'",
              "Which sentence is wordy?",
              "Correct the sentence to make it concise: 'At this point in time, we are ready to begin.'",
              "Choose the concise sentence:",
              "Rewrite the sentence: 'He is a person who works hard.'",
              "Which is wordy?",
              "Rewrite the sentence to make it more concise: 'There are many reasons as to why I think this is a good idea.'",
              "Choose the concise sentence:",
              "Correct the sentence: 'The weather, which was sunny and bright, made us feel happy and joyful.'"
            ],
            choices: [
              ["Due to the fact that", "Because"],
              ["Short answer: I think this is correct."],
              ["He walked to the store.", "He proceeded to walk to the store."],
              ["Short answer: We are ready to begin."],
              ["The book that was on the table is mine.", "The book on the table is mine."],
              ["Short answer: He works hard."],
              ["She finished the project.", "She completed the project in a manner that was thorough and timely."],
              ["Short answer: There are many reasons why this is a good idea."],
              ["The report contains information that is relevant.", "The report contains relevant information."],
              ["Short answer: The bright and sunny weather made us feel happy."]
            ],
            explanations: [
              "Explanation: 'Because' is more concise than 'Due to the fact that.'",
              "Explanation: The sentence can be shortened to 'I think this is correct' to eliminate unnecessary words.",
              "Explanation: 'He proceeded to walk to the store' is wordy. The concise version is 'He walked to the store.'",
              "Explanation: The sentence can be made more concise by saying 'We are ready to begin.'",
              "Explanation: The concise version is 'The book on the table is mine,' without extra words.",
              "Explanation: 'He works hard' is more concise than 'He is a person who works hard.'",
              "Explanation: 'She completed the project' is concise, while the other version adds unnecessary details.",
              "Explanation: The concise version is 'There are many reasons this is a good idea.'",
              "Explanation: 'The report contains relevant information' is the concise form of this sentence.",
              "Explanation: The concise version is 'The bright and sunny weather made us feel happy.'"
            ]
          }
        ]
      }
    ]
  }
}


let openCategory = null;  // Track the currently open category

function makeButton(category, parent) {
  // Create container
  const containerDiv = document.createElement("div");
  containerDiv.className = 'category-container'; // Use className

  // Create the button element for the category
  const categoryButton = document.createElement("button");
  categoryButton.innerHTML = category.title;

  // Array to store mode links for toggling
  let modeLinks = [];

  // Iterate over each mode in the 'category' array and create a unique 'a' tag
  category.category.forEach((modeItem) => {
      const modeLink = document.createElement("a");
      // Create a unique href link (base URL can be customized)
      modeLink.href = `https://example.com/${encodeURIComponent(modeItem.mode.trim())}`;
      modeLink.innerHTML = modeItem.mode;
      modeLink.style.display = "none"; // Initially hidden
      modeLinks.push(modeLink); // Store for toggling
      containerDiv.appendChild(modeLink); // Add link below the button
  });

  // Toggle the visibility of all links when the button is clicked
  categoryButton.addEventListener("click", (e) => {
      // If there is an open category, close it
      if (openCategory && openCategory !== modeLinks) {
          openCategory.forEach(link => {
              link.style.display = "none"; // Hide links of previously open category
          });
      }

      // Toggle the visibility of the clicked category's links
      const isOpen = modeLinks[0].style.display === "block";
      modeLinks.forEach(link => {
          link.style.display = isOpen ? "none" : "block"; // Toggle visibility
      });

      // Set the currently open category
      openCategory = isOpen ? null : modeLinks;
  });

  // Add the button to the container
  containerDiv.insertBefore(categoryButton, containerDiv.firstChild);
  parent.appendChild(containerDiv);
}

// Assuming you have a buttonHolder div where buttons will be added
let buttonHolder = document.getElementById("buttonHolder");

// Loop through the categories to create buttons for each category
for (let cat in categories) {
    makeButton(categories[cat], buttonHolder);
}

const quizzes = {
  "SentenceStructure": {
      title: "Sentence Structure",
      subConcepts: [
          {
              subConcept: "Simple Sentences",
              explanation: "A simple sentence contains a subject and a verb and expresses a complete thought. It consists of one independent clause.",
              questions: [
                  { type: "multiple-choice", question: "Which of the following is a simple sentence?", choices: ["She runs.", "When she runs.", "Although she runs."], correctAnswer: 0, explanation: "A simple sentence has only one independent clause." },
                  { type: "multiple-choice", question: "A simple sentence has how many independent clauses?", choices: ["1", "2", "3"], correctAnswer: 0, explanation: "A simple sentence consists of only one independent clause." },
                  { type: "multiple-choice", question: "Identify the subject in the sentence: 'The cat slept.'", choices: ["The cat", "slept", "The"], correctAnswer: 0, explanation: "The subject of the sentence is 'The cat'." },
                  { type: "multiple-choice", question: "Is 'I am happy' a simple sentence?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, it is a simple sentence." },
                  { type: "multiple-choice", question: "Choose the correct simple sentence:", choices: ["The dog barks loudly.", "The dog, barking loudly, ran away."], correctAnswer: 0, explanation: "The correct simple sentence is 'The dog barks loudly.'" },
                  { type: "multiple-choice", question: "Does a simple sentence need both a subject and a verb?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, a simple sentence needs both a subject and a verb." },
                  { type: "multiple-choice", question: "Is 'John and Mary went to the park' a simple sentence?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, this is a simple sentence." },
                  { type: "multiple-choice", question: "What type of clause does a simple sentence contain?", choices: ["Independent", "Dependent"], correctAnswer: 0, explanation: "A simple sentence contains one independent clause." },
                  { type: "multiple-choice", question: "Can a simple sentence contain a compound subject?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, a simple sentence can contain a compound subject." },
                  { type: "short-response", question: "Identify the verb in the sentence: 'The sun shines.'", correctAnswer: "shines", explanation: "The verb in the sentence is 'shines'." }
              ]
          },
          {
              subConcept: "Compound Sentences",
              explanation: "A compound sentence contains two independent clauses joined by a coordinating conjunction (for, and, nor, but, or, yet, so).",
              questions: [
                  { type: "multiple-choice", question: "What joins two independent clauses in a compound sentence?", choices: ["Coordinating conjunction", "Subordinating conjunction"], correctAnswer: 0, explanation: "A coordinating conjunction joins two independent clauses." },
                  { type: "multiple-choice", question: "Which of the following is a compound sentence?", choices: ["I went home, and I took a nap.", "Because I was tired, I went home."], correctAnswer: 0, explanation: "The compound sentence is 'I went home, and I took a nap.'" },
                  { type: "short-response", question: "What does FANBOYS stand for?", correctAnswer: "For, And, Nor, But, Or, Yet, So", explanation: "FANBOYS stands for 'For, And, Nor, But, Or, Yet, So'." },
                  { type: "multiple-choice", question: "Choose the correct compound sentence:", choices: ["She sings and dances.", "She sings, and she dances."], correctAnswer: 1, explanation: "The correct compound sentence is 'She sings, and she dances.'" },
                  { type: "multiple-choice", question: "Which is the correct coordinating conjunction to join these sentences: 'I was tired __ I went to bed'?", choices: ["so", "because", "but"], correctAnswer: 0, explanation: "The correct coordinating conjunction is 'so'." },
                  { type: "multiple-choice", question: "What punctuation often comes before a coordinating conjunction?", choices: ["Comma", "Period"], correctAnswer: 0, explanation: "A comma often comes before a coordinating conjunction." },
                  { type: "multiple-choice", question: "Which sentence is incorrect?", choices: ["I wanted to go, but I stayed home.", "I wanted to go but I stayed home."], correctAnswer: 1, explanation: "The sentence 'I wanted to go but I stayed home' is incorrect because it is missing a comma." },
                  { type: "multiple-choice", question: "How many independent clauses does a compound sentence have?", choices: ["1", "2", "3"], correctAnswer: 1, explanation: "A compound sentence has two independent clauses." },
                  { type: "multiple-choice", question: "Is 'I read a book, and I watched a movie' a compound sentence?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, this is a compound sentence." },
                  { type: "short-response", question: "What is the conjunction in this sentence: 'He likes ice cream, but he hates cake.'", correctAnswer: "but", explanation: "The conjunction in this sentence is 'but'." }
              ]
          },
          {
              subConcept: "Complex Sentences",
              explanation: "A complex sentence contains one independent clause and at least one dependent clause. Dependent clauses cannot stand alone as a complete sentence.",
              questions: [
                  { type: "multiple-choice", question: "Which of the following is a complex sentence?", choices: ["I finished my homework before I went to bed.", "I finished my homework."], correctAnswer: 0, explanation: "The complex sentence is 'I finished my homework before I went to bed.'" },
                  { type: "multiple-choice", question: "A complex sentence contains what type of clauses?", choices: ["One independent and one or more dependent clauses", "Two independent clauses"], correctAnswer: 0, explanation: "A complex sentence contains one independent clause and one or more dependent clauses." },
                  { type: "multiple-choice", question: "Which word often begins a dependent clause?", choices: ["Although", "And", "But"], correctAnswer: 0, explanation: "'Although' often begins a dependent clause." },
                  { type: "short-response", question: "What is the dependent clause in the sentence: 'Because it was raining, we stayed indoors'?", correctAnswer: "Because it was raining", explanation: "The dependent clause in this sentence is 'Because it was raining'." },
                  { type: "short-response", question: "What is the independent clause in the sentence: 'I studied until I was tired'?", correctAnswer: "I studied", explanation: "The independent clause is 'I studied'." },
                  { type: "multiple-choice", question: "Which sentence is correct?", choices: ["Since I was late, I missed the meeting.", "Since I was late I missed the meeting."], correctAnswer: 0, explanation: "The correct sentence is 'Since I was late, I missed the meeting.'" },
                  { type: "multiple-choice", question: "Which sentence is NOT a complex sentence?", choices: ["I went home after I finished work.", "I went home, and I watched TV."], correctAnswer: 1, explanation: "The sentence 'I went home, and I watched TV.' is not a complex sentence." },
                  { type: "multiple-choice", question: "What connects a dependent clause to an independent clause?", choices: ["Subordinating conjunction", "Coordinating conjunction"], correctAnswer: 0, explanation: "A subordinating conjunction connects a dependent clause to an independent clause." },
                  { type: "multiple-choice", question: "Which of the following is a dependent clause?", choices: ["After the rain stopped", "The rain stopped"], correctAnswer: 0, explanation: "The dependent clause is 'After the rain stopped'." },
                  { type: "short-response", question: "Identify the independent clause in the sentence: 'Before I left, I finished my project.'", correctAnswer: "I finished my project", explanation: "The independent clause is 'I finished my project'." }
              ]
          }
      ]
  },
  "Punctuation": {
      title: "Punctuation",
      subConcepts: [
          {
              subConcept: "Commas",
              explanation: "Commas are used to separate items in a list, before conjunctions in compound sentences, after introductory elements, and to set off clauses.",
              questions: [
                  { type: "short-response", question: "Where should the comma go: 'I bought apples oranges and bananas.'", correctAnswer: "I bought apples, oranges, and bananas.", explanation: "The comma should separate the items: apples, oranges, and bananas." },
                  { type: "multiple-choice", question: "Is this sentence punctuated correctly? 'I like pizza, and I like burgers.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, this sentence is punctuated correctly." },
                  { type: "short-response", question: "Place a comma: 'Before we start let's review the rules.'", correctAnswer: "Before we start, let's review the rules.", explanation: "The comma should be placed after 'Before we start'." },
                  { type: "multiple-choice", question: "In a list, commas separate which elements?", choices: ["Items", "Clauses"], correctAnswer: 0, explanation: "In a list, commas separate items." },
                  { type: "multiple-choice", question: "Which sentence needs a comma?", choices: ["She danced, but he did not.", "She danced but he did not."], correctAnswer: 1, explanation: "The sentence 'She danced but he did not.' needs a comma before 'but'." },
                  { type: "multiple-choice", question: "Identify the error: 'My brother, John plays soccer.'", choices: ["Missing comma", "Comma unnecessary"], correctAnswer: 0, explanation: "A comma is missing after 'John'." },
                  { type: "short-response", question: "Where should the comma go: 'At the end of the day we went home.'", correctAnswer: "At the end of the day, we went home.", explanation: "The comma should be placed after 'At the end of the day'." },
                  { type: "multiple-choice", question: "Which sentence has correct comma placement?", choices: ["After dinner, we went to the park.", "After dinner we went to the park."], correctAnswer: 0, explanation: "The correct sentence is 'After dinner, we went to the park.'" },
                  { type: "multiple-choice", question: "Commas are used to separate what in a compound sentence?", choices: ["Clauses", "Words"], correctAnswer: 0, explanation: "Commas are used to separate clauses in a compound sentence." },
                  { type: "short-response", question: "Add a comma: 'She loves running but she also loves swimming.'", correctAnswer: "She loves running, but she also loves swimming.", explanation: "A comma is needed before 'but'." }
              ]
          },
          {
              subConcept: "Apostrophes",
              explanation: "Apostrophes are used to show possession and to form contractions. For example, 'it's' is a contraction for 'it is,' while 'its' is possessive.",
              questions: [
                  { type: "multiple-choice", question: "Is 'it's' the correct form in this sentence: 'It's a beautiful day.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "'It's' is correct because it is a contraction for 'it is.'" },
                  { type: "short-response", question: "Which is correct for possession: 'The cat's toy' or 'The cats toy'?", correctAnswer: "The cat's toy", explanation: "'The cat's toy' is correct for possession." },
                  { type: "multiple-choice", question: "Which sentence uses an apostrophe incorrectly?", choices: ["The dog's leash is red.", "Its a sunny day."], correctAnswer: 1, explanation: "'Its a sunny day' is incorrect. It should be 'It's a sunny day.'" },
                  { type: "short-response", question: "Where should the apostrophe go: 'Thats Johns car.'", correctAnswer: "That's John's car.", explanation: "The correct sentence is 'That's John's car.'" },
                  { type: "short-response", question: "What is the contraction for 'they are'?", correctAnswer: "they're", explanation: "The contraction for 'they are' is 'they're.'" },
                  { type: "multiple-choice", question: "Does this sentence need an apostrophe? 'The players shoes are dirty.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, 'The players' shoes' should be 'The players' shoes.'" },
                  { type: "multiple-choice", question: "Choose the correct possessive form:", choices: ["The children's toys", "The childrens toys"], correctAnswer: 0, explanation: "The correct possessive form is 'The children's toys.'" },
                  { type: "multiple-choice", question: "Which is the contraction for 'you are'?", choices: ["You're", "Your"], correctAnswer: 0, explanation: "'You're' is the contraction for 'you are.'" },
                  { type: "short-response", question: "Where should the apostrophe go: 'Wheres my book?'", correctAnswer: "Where's my book?", explanation: "The correct sentence is 'Where's my book?'" },
                  { type: "multiple-choice", question: "Identify the mistake: 'Its been a long day.'", choices: ["Apostrophe needed", "No mistake"], correctAnswer: 0, explanation: "The correct sentence is 'It's been a long day.' with an apostrophe." }
              ]
          },
          {
              subConcept: "Quotation Marks",
              explanation: "Quotation marks are used to indicate direct speech, quotes, or specific titles. They can also highlight certain words for emphasis.",
              questions: [
                  { type: "short-response", question: "Where should the quotation marks go: 'She said, Hello.'", correctAnswer: '"She said, \'Hello.\'"', explanation: "The correct sentence is: 'She said, \"Hello.\"'" },
                  { type: "multiple-choice", question: "Which sentence uses quotation marks correctly?", choices: ["'I love ice cream,' she said.", "I love ice cream she said."], correctAnswer: 0, explanation: "The correct sentence is: 'I love ice cream,' she said." },
                  { type: "multiple-choice", question: "Is this sentence punctuated correctly? 'Did you say, Let’s go?' he asked.", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, the sentence is punctuated correctly." },
                  { type: "multiple-choice", question: "What do quotation marks enclose?", choices: ["Dialogue or quotes", "Items in a list"], correctAnswer: 0, explanation: "Quotation marks enclose dialogue or quotes." },
                  { type: "short-response", question: "Where should the quotation marks go: 'He said, That movie was great.'", correctAnswer: '"He said, \'That movie was great.\'"', explanation: "The correct sentence is: 'He said, \"That movie was great.\"'" },
                  { type: "multiple-choice", question: "In American English, punctuation marks usually go _______ quotation marks.", choices: ["Inside", "Outside"], correctAnswer: 0, explanation: "Punctuation marks usually go inside quotation marks." },
                  { type: "multiple-choice", question: "Is the punctuation correct? 'I can’t wait to go,' she said.", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, the punctuation is correct." },
                  { type: "multiple-choice", question: "When quoting a book, should the title be in quotation marks?", choices: ["No", "Yes"], correctAnswer: 1, explanation: "Yes, the title should be in quotation marks when quoting a book." },
                  { type: "short-response", question: "Where do the quotation marks go in this sentence: 'The sign said No entry.'", correctAnswer: 'The correct sentence is: \'The sign said "No entry."\'.', explanation: "The correct sentence is: 'The sign said \"No entry.\"'" },
                  { type: "multiple-choice", question: "Is the sentence correct? 'I just finished reading,' said John 'The best book ever.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; there should be a period after 'reading.'" }
              ]
          }
      ]
  },
  "CommonGrammarMistakes": {
      title: "Common Grammar Mistakes",
      subConcepts: [
          {
              subConcept: "Subject-Verb Agreement",
              explanation: "Subject-verb agreement means that the subject and verb in a sentence must agree in number. A singular subject takes a singular verb, and a plural subject takes a plural verb.",
              questions: [
                  { type: "multiple-choice", question: "Which is correct?", choices: ["She walk to school.", "She walks to school."], correctAnswer: 1, explanation: "The correct sentence is 'She walks to school.'" },
                  { type: "multiple-choice", question: "'The dogs _____ in the yard.'", choices: ["is", "are"], correctAnswer: 1, explanation: "The correct sentence is 'The dogs are in the yard.'" },
                  { type: "multiple-choice", question: "Identify the error: 'He don’t know the answer.'", choices: ["don’t", "know"], correctAnswer: 0, explanation: "The error is 'don’t'; it should be 'doesn’t.'" },
                  { type: "multiple-choice", question: "Which is correct: 'He _____ very tired.'", choices: ["feel", "feels"], correctAnswer: 1, explanation: "The correct sentence is 'He feels very tired.'" },
                  { type: "multiple-choice", question: "Choose the correct form: 'The team _____ working hard.'", choices: ["is", "are"], correctAnswer: 0, explanation: "The correct form is 'The team is working hard.'" },
                  { type: "multiple-choice", question: "'The children _____ playing outside.'", choices: ["is", "are"], correctAnswer: 1, explanation: "The correct sentence is 'The children are playing outside.'" },
                  { type: "multiple-choice", question: "Is this sentence correct? 'She and her friends goes to the park.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She and her friends go to the park.'" },
                  { type: "multiple-choice", question: "Which verb agrees with the subject: 'The book and the pen _____ on the table.'", choices: ["is", "are"], correctAnswer: 1, explanation: "The correct verb is 'are': 'The book and the pen are on the table.'" },
                  { type: "multiple-choice", question: "Choose the correct form: 'The cat or the dogs _____ making the noise.'", choices: ["is", "are"], correctAnswer: 0, explanation: "The correct form is 'The cat or the dogs is making the noise.'" },
                  { type: "multiple-choice", question: "Which is correct? 'There _____ many reasons to leave.'", choices: ["is", "are"], correctAnswer: 1, explanation: "The correct sentence is 'There are many reasons to leave.'" }
              ]
          },
          {
              subConcept: "Misplaced Modifiers",
              explanation: "A misplaced modifier is a word or phrase that is placed awkwardly in a sentence, making it unclear or changing the meaning of the sentence. Modifiers should be placed next to the words they modify.",
              questions: [
                  { type: "multiple-choice", question: "Identify the misplaced modifier: 'She almost drove the kids to school every day.'", choices: ["She", "almost"], correctAnswer: 1, explanation: "The modifier 'almost' is misplaced." },
                  { type: "multiple-choice", question: "Which sentence is correct?", choices: ["I only ate the pizza.", "I ate only the pizza."], correctAnswer: 1, explanation: "The correct sentence is 'I ate only the pizza.'" },
                  { type: "multiple-choice", question: "Find the error: 'Running quickly, the car almost hit her.'", choices: ["Running quickly", "almost hit her"], correctAnswer: 0, explanation: "The modifier 'Running quickly' is misplaced." },
                  { type: "multiple-choice", question: "Which is correct? 'He barely touched his food.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "The sentence is correct: 'He barely touched his food.'" },
                  { type: "short-response", question: "Fix the misplaced modifier: 'She nearly gave all the homework to her students.'", correctAnswer: "She gave nearly all the homework to her students.", explanation: "The correct sentence is: 'She gave nearly all the homework to her students.'" },
                  { type: "multiple-choice", question: "Choose the correct sentence:", choices: ["The man walked the dog with a hat.", "The man with a hat walked the dog."], correctAnswer: 1, explanation: "The correct sentence is 'The man with a hat walked the dog.'" },
                  { type: "short-response", question: "Where is the misplaced modifier: 'The young boy threw the ball to his friend with excitement.'", correctAnswer: "with excitement", explanation: "The misplaced modifier is 'with excitement.'" },
                  { type: "multiple-choice", question: "Which is correct? 'She saw the bird flying through the telescope.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is unclear and needs revision." },
                  { type: "short-response", question: "Fix the sentence: 'She almost studied the entire night.'", correctAnswer: "She studied almost the entire night.", explanation: "The correct sentence is 'She studied almost the entire night.'" },
                  { type: "multiple-choice", question: "Which sentence is clearer? 'I saw the movie driving home.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence needs revision for clarity." }
              ]
          },
          {
              subConcept: "Double Negatives",
              explanation: "A double negative occurs when two forms of negation are used in the same sentence. In English, using two negatives can cancel each other out and lead to confusion.",
              questions: [
                  { type: "multiple-choice", question: "Which is incorrect? 'I don’t have nothing.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "The sentence is incorrect; it should be 'I don’t have anything.'" },
                  { type: "short-response", question: "Fix the sentence: 'He can’t find no pencils.'", correctAnswer: "He can’t find any pencils.", explanation: "The correct sentence is 'He can’t find any pencils.'" },
                  { type: "multiple-choice", question: "Which is correct? 'She didn’t say nothing.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She didn’t say anything.'" },
                  { type: "short-response", question: "Correct the error: 'There isn’t no milk left.'", correctAnswer: "There isn’t any milk left.", explanation: "The correct sentence is 'There isn’t any milk left.'" },
                  { type: "multiple-choice", question: "Choose the correct sentence:", choices: ["I don’t know nobody here.", "I don’t know anybody here."], correctAnswer: 1, explanation: "The correct sentence is 'I don’t know anybody here.'" },
                  { type: "multiple-choice", question: "Which is grammatically correct?", choices: ["They never did nothing wrong.", "They never did anything wrong."], correctAnswer: 1, explanation: "The correct sentence is 'They never did anything wrong.'" },
                  { type: "short-response", question: "Fix the double negative: 'She didn’t go nowhere today.'", correctAnswer: "She didn’t go anywhere today.", explanation: "The correct sentence is 'She didn’t go anywhere today.'" },
                  { type: "multiple-choice", question: "Choose the correct form: 'He doesn’t have nothing to do.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The correct sentence is 'He doesn’t have anything to do.'" },
                  { type: "short-response", question: "What’s wrong with this sentence: 'I ain’t got no money.'", correctAnswer: "I haven’t got any money.", explanation: "The correct sentence is 'I haven’t got any money.'" },
                  { type: "multiple-choice", question: "Is this sentence correct? 'There isn’t nothing in the fridge.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'There isn’t anything in the fridge.'" }
              ]
          }
      ]
  },
  "VerbTenses": {
      title: "Verb Tenses",
      subConcepts: [
          {
              subConcept: "Present Simple vs. Present Continuous",
              explanation: "The present simple tense is used for habitual actions, facts, and general truths. The present continuous tense is used for actions happening right now or temporary actions.",
              questions: [
                  { type: "multiple-choice", question: "Choose the correct form: 'I _____ breakfast every morning.'", choices: ["eat", "am eating"], correctAnswer: 0, explanation: "The correct sentence is 'I eat breakfast every morning.'" },
                  { type: "short-response", question: "What’s the difference between 'He works' and 'He is working'?", correctAnswer: "'He works' is present simple, meaning it’s a regular action, while 'He is working' is present continuous, meaning it’s happening right now.", explanation: "The present simple is for habitual actions, while present continuous is for temporary actions." },
                  { type: "multiple-choice", question: "Which sentence is in the present continuous tense?", choices: ["I am reading a book.", "I read books."], correctAnswer: 0, explanation: "The sentence 'I am reading a book.' is in present continuous tense." },
                  { type: "multiple-choice", question: "Which is correct? 'She _____ to school every day.'", choices: ["goes", "is going"], correctAnswer: 0, explanation: "The correct sentence is 'She goes to school every day.'" },
                  { type: "multiple-choice", question: "Is this sentence correct? 'They are usually eating dinner at 7 PM.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; the present continuous should not be used for habitual actions." },
                  { type: "multiple-choice", question: "Which sentence describes a habit?", choices: ["She walks to work every day.", "She is walking to work now."], correctAnswer: 0, explanation: "'She walks to work every day.' describes a habit." },
                  { type: "multiple-choice", question: "Choose the present continuous form: 'I _____ my homework right now.'", choices: ["do", "am doing"], correctAnswer: 1, explanation: "The correct sentence is 'I am doing my homework right now.'" },
                  { type: "short-response", question: "Correct the sentence: 'We are playing soccer every weekend.'", correctAnswer: "We play soccer every weekend.", explanation: "The correct sentence is 'We play soccer every weekend.'" },
                  { type: "multiple-choice", question: "Which describes a temporary action? 'He _____ in New York for the summer.'", choices: ["stays", "is staying"], correctAnswer: 1, explanation: "'He is staying in New York for the summer.' describes a temporary action." },
                  { type: "multiple-choice", question: "Complete the sentence: 'They _____ the movie right now.'", choices: ["watch", "are watching"], correctAnswer: 1, explanation: "The correct sentence is 'They are watching the movie right now.'" }
              ]
          },
          {
              subConcept: "Past Simple vs. Past Continuous",
              explanation: "The past simple tense is used for completed actions in the past, while the past continuous tense describes actions that were ongoing at a specific time in the past.",
              questions: [
                  { type: "multiple-choice", question: "Which sentence is in the past continuous tense?", choices: ["I was reading when he called.", "I read when he called."], correctAnswer: 0, explanation: "'I was reading when he called.' is in past continuous." },
                  { type: "multiple-choice", question: "Which describes an ongoing action? 'They _____ dinner when the guests arrived.'", choices: ["ate", "were eating"], correctAnswer: 1, explanation: "'They were eating dinner when the guests arrived.' describes an ongoing action." },
                  { type: "multiple-choice", question: "Is this sentence correct? 'She was study when the power went out.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She was studying when the power went out.'" },
                  { type: "multiple-choice", question: "Choose the correct form: 'He _____ football when it started raining.'", choices: ["played", "was playing"], correctAnswer: 1, explanation: "'He was playing football when it started raining.' is the correct sentence." },
                  { type: "short-response", question: "What’s the difference between 'I worked' and 'I was working'?", correctAnswer: "'I worked' is past simple for a completed action, while 'I was working' is past continuous for an ongoing action.", explanation: "'I worked' is past simple for completed actions, while 'I was working' is for ongoing actions in the past." },
                  { type: "multiple-choice", question: "Which sentence uses the past simple correctly?", choices: ["I saw her yesterday.", "I was seeing her yesterday."], correctAnswer: 0, explanation: "The correct sentence is 'I saw her yesterday.'" },
                  { type: "multiple-choice", question: "Choose the correct form: 'They _____ TV when I called.'", choices: ["watched", "were watching"], correctAnswer: 1, explanation: "'They were watching TV when I called.' is the correct sentence." },
                  { type: "multiple-choice", question: "Which describes a completed action? 'We _____ the movie last night.'", choices: ["watched", "were watching"], correctAnswer: 0, explanation: "'We watched the movie last night.' is a completed action." },
                  { type: "multiple-choice", question: "Complete the sentence: 'While they _____, the phone rang.'", choices: ["were talking", "talked"], correctAnswer: 0, explanation: "'While they were talking, the phone rang.' is the correct sentence." },
                  { type: "multiple-choice", question: "Is this sentence correct? 'She was walk to school when it started raining.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She was walking to school when it started raining.'" }
              ]
          },
          {
              subConcept: "Future Simple vs. Future Continuous",
              explanation: "The future simple tense describes actions that will happen in the future, while the future continuous tense is used for actions that will be ongoing at a specific time in the future.",
              questions: [
                  { type: "multiple-choice", question: "Which sentence is in the future continuous tense?", choices: ["I will be traveling next week.", "I will travel next week."], correctAnswer: 0, explanation: "'I will be traveling next week.' is in future continuous tense." },
                  { type: "multiple-choice", question: "Choose the correct form: 'They _____ dinner at 7 PM tomorrow.'", choices: ["will eat", "will be eating"], correctAnswer: 1, explanation: "'They will be eating dinner at 7 PM tomorrow.' is in future continuous tense." },
                  { type: "multiple-choice", question: "Which describes an ongoing action in the future? 'By this time tomorrow, she _____.'", choices: ["will be working", "will work"], correctAnswer: 0, explanation: "'By this time tomorrow, she will be working.' is in future continuous tense." },
                  { type: "multiple-choice", question: "Is this sentence correct? 'They will be study at 8 PM.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'They will be studying at 8 PM.'" },
                  { type: "multiple-choice", question: "Complete the sentence: 'He _____ when you arrive.'", choices: ["will sleep", "will be sleeping"], correctAnswer: 1, explanation: "'He will be sleeping when you arrive.' is the correct sentence." },
                  { type: "multiple-choice", question: "Which is correct? 'I _____ finish the project by next week.'", choices: ["will", "will be"], correctAnswer: 0, explanation: "'I will finish the project by next week.' is the correct sentence." },
                  { type: "multiple-choice", question: "Choose the correct future continuous form: 'At 10 AM tomorrow, they _____ a meeting.'", choices: ["will have", "will be having"], correctAnswer: 1, explanation: "'They will be having a meeting at 10 AM tomorrow.' is future continuous tense." },
                  { type: "multiple-choice", question: "Which sentence is correct? 'By next week, we will have finish the project.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'By next week, we will have finished the project.'" },
                  { type: "short-response", question: "What’s the difference between 'I will call you' and 'I will be calling you'?", correctAnswer: "'I will call you' is a single action, while 'I will be calling you' is an ongoing action at a specific time.", explanation: "'I will call you' is a single action, and 'I will be calling you' describes an ongoing action." },
                  { type: "short-response", question: "Correct the sentence: 'They will watch TV at this time tomorrow.'", correctAnswer: "They will be watching TV at this time tomorrow.", explanation: "The correct sentence is 'They will be watching TV at this time tomorrow.'" }
              ]
          }
      ]
  },
  "WordUsage": {
      title: "Word Usage",
      subConcepts: [
          {
              subConcept: "Homophones",
              explanation: "Homophones are words that sound the same but have different meanings and spellings (e.g., their, there, they’re).",
              questions: [
                  { type: "multiple-choice", question: "Choose the correct word: '_____ going to the park.'", choices: ["They’re", "Their", "There"], correctAnswer: 0, explanation: "The correct sentence is 'They’re going to the park.'" },
                  { type: "multiple-choice", question: "Which is correct? 'I can _____ the music.'", choices: ["here", "hear"], correctAnswer: 1, explanation: "The correct sentence is 'I can hear the music.'" },
                  { type: "short-response", question: "Correct the sentence: 'There house is on the left.'", correctAnswer: "Their house is on the left.", explanation: "The correct sentence is 'Their house is on the left.'" },
                  { type: "short-response", question: "Which is the correct form of 'your'? 'Is this _____ book?'", correctAnswer: "your", explanation: "'Your' is the correct form." },
                  { type: "short-response", question: "What’s the difference between 'its' and 'it’s'?", correctAnswer: "'Its' is possessive, and 'it’s' is a contraction of 'it is.'", explanation: "'Its' shows possession, and 'it’s' is a contraction." },
                  { type: "multiple-choice", question: "Fill in the blank: 'The dog wagged _____ tail.'", choices: ["its", "it’s"], correctAnswer: 0, explanation: "'The dog wagged its tail' is correct." },
                  { type: "short-response", question: "Correct the sentence: 'I _____ my keys yesterday.'", correctAnswer: "lost", explanation: "The correct sentence is 'I lost my keys yesterday.'" },
                  { type: "multiple-choice", question: "Choose the correct word: 'I _____ a letter to my friend.'", choices: ["write", "right"], correctAnswer: 0, explanation: "The correct word is 'write.'" },
                  { type: "multiple-choice", question: "Fill in the blank: 'They went _____ the store.'", choices: ["to", "two", "too"], correctAnswer: 0, explanation: "The correct sentence is 'They went to the store.'" },
                  { type: "multiple-choice", question: "Correct the sentence: 'She likes the color blue, _____.", choices: ["to", "too", "two"], correctAnswer: 1, explanation: "The correct sentence is 'She likes the color blue, too.'" }
              ]
          },
          {
              subConcept: "Commonly Confused Words",
              explanation: "Some words are commonly confused because they look or sound similar but have different meanings (e.g., affect vs. effect).",
              questions: [
                  { type: "multiple-choice", question: "Which is correct? 'The weather can _____ your mood.'", choices: ["affect", "effect"], correctAnswer: 0, explanation: "'Affect' is correct because it is a verb." },
                  { type: "multiple-choice", question: "Choose the correct word: 'She has a positive _____ on her students.'", choices: ["affect", "effect"], correctAnswer: 1, explanation: "'Effect' is correct because it is a noun." },
                  { type: "short-response", question: "Fill in the blank: 'I need to _____ the report by Friday.'", correctAnswer: "complete", explanation: "The correct word is 'complete.'" },
                  { type: "multiple-choice", question: "Which is correct? 'She gave me a nice _____ on my outfit.'", choices: ["complement", "compliment"], correctAnswer: 1, explanation: "'Compliment' is correct because it means a kind remark." },
                  { type: "short-response", question: "What’s the difference between 'accept' and 'except'?", correctAnswer: "'Accept' means to receive, and 'except' means to exclude.", explanation: "'Accept' means to receive, and 'except' means to exclude." },
                  { type: "multiple-choice", question: "Choose the correct word: 'I will _____ your invitation.'", choices: ["accept", "except"], correctAnswer: 0, explanation: "The correct sentence is 'I will accept your invitation.'" },
                  { type: "multiple-choice", question: "Is this sentence correct? 'I bought everything accept the milk.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'I bought everything except the milk.'" },
                  { type: "short-response", question: "Correct the sentence: 'The weather had an affect on the game.'", correctAnswer: "The weather had an effect on the game.", explanation: "The correct sentence is 'The weather had an effect on the game.'" },
                  { type: "multiple-choice", question: "Which is correct? 'I _____ to the store yesterday.'", choices: ["went", "gone"], correctAnswer: 0, explanation: "The correct sentence is 'I went to the store yesterday.'" },
                  { type: "multiple-choice", question: "Correct the sentence: 'She has _____ to the park every day.'", choices: ["gone", "went"], correctAnswer: 0, explanation: "The correct sentence is 'She has gone to the park every day.'" }
              ]
          },
          {
              subConcept: "Synonyms and Antonyms",
              explanation: "Synonyms are words with similar meanings, while antonyms are words with opposite meanings.",
              questions: [
                  { type: "multiple-choice", question: "Choose a synonym for 'happy':", choices: ["sad", "joyful", "angry"], correctAnswer: 1, explanation: "'Joyful' is a synonym for 'happy.'" },
                  { type: "multiple-choice", question: "Which is an antonym for 'cold'?", choices: ["hot", "cool", "warm"], correctAnswer: 0, explanation: "'Hot' is an antonym for 'cold.'" },
                  { type: "short-response", question: "What’s a synonym for 'big'?", correctAnswer: "large", explanation: "'Large' is a synonym for 'big.'" },
                  { type: "multiple-choice", question: "Choose an antonym for 'fast':", choices: ["slow", "quick", "swift"], correctAnswer: 0, explanation: "'Slow' is an antonym for 'fast.'" },
                  { type: "multiple-choice", question: "Fill in the blank with a synonym: 'She is very _____.'", choices: ["intelligent", "dumb", "unkind"], correctAnswer: 0, explanation: "'Intelligent' is a synonym for 'smart.'" },
                  { type: "short-response", question: "What’s an antonym for 'loud'?", correctAnswer: "quiet", explanation: "'Quiet' is an antonym for 'loud.'" },
                  { type: "multiple-choice", question: "Choose a synonym for 'small':", choices: ["tiny", "large", "huge"], correctAnswer: 0, explanation: "'Tiny' is a synonym for 'small.'" },
                  { type: "multiple-choice", question: "Which is an antonym for 'bright'?", choices: ["light", "dark", "sunny"], correctAnswer: 1, explanation: "'Dark' is an antonym for 'bright.'" },
                  { type: "multiple-choice", question: "Fill in the blank with an antonym: 'The movie was very _____.'", choices: ["exciting", "boring"], correctAnswer: 1, explanation: "'Boring' is an antonym for 'exciting.'" },
                  { type: "short-response", question: "What’s a synonym for 'beautiful'?", correctAnswer: "gorgeous", explanation: "'Gorgeous' is a synonym for 'beautiful.'" }
              ]
          }
      ]
  },

  "WritingStyle": {
    title: "Writing Style",
    subConcepts: [
        {
            subConcept: "Formal vs. Informal Writing",
            explanation: "Formal writing is used in professional and academic settings, while informal writing is used in casual or personal contexts.",
            questions: [
                { type: "multiple-choice", question: "Which is more formal?", choices: ["Hey, what’s up?", "Dear Sir or Madam,"], correctAnswer: 1, explanation: "'Dear Sir or Madam,' is more formal." },
                { type: "multiple-choice", question: "Choose the formal sentence:", choices: ["Thanks for your email.", "I appreciate your correspondence."], correctAnswer: 1, explanation: "'I appreciate your correspondence.' is more formal." },
                { type: "multiple-choice", question: "Which sentence is informal?", choices: ["I regret to inform you…", "Sorry, can’t make it."], correctAnswer: 1, explanation: "'Sorry, can’t make it.' is informal." },
                { type: "multiple-choice", question: "Which is appropriate for a business letter?", choices: ["I am writing to express…", "What’s good?"], correctAnswer: 0, explanation: "'I am writing to express…' is appropriate for a business letter." },
                { type: "short-response", question: "Correct the sentence to make it formal: 'I’m super excited about the meeting!'", correctAnswer: "I am very excited about the meeting.", explanation: "The formal version is 'I am very excited about the meeting.'" },
                { type: "multiple-choice", question: "Is this sentence formal or informal? 'Let me know if you need anything.'", choices: ["Formal", "Informal"], correctAnswer: 1, explanation: "'Let me know if you need anything.' is informal." },
                { type: "multiple-choice", question: "Choose the formal phrase:", choices: ["I would like to schedule a meeting.", "Let’s set up a chat."], correctAnswer: 0, explanation: "'I would like to schedule a meeting.' is more formal." },
                { type: "multiple-choice", question: "Fill in the blank: In academic writing, you should avoid using ____.", choices: ["contractions", "formal phrases"], correctAnswer: 0, explanation: "In academic writing, contractions should be avoided." },
                { type: "multiple-choice", question: "Which is more appropriate in an email to your boss?", choices: ["Hey, just checking in.", "I would like an update on the project."], correctAnswer: 1, explanation: "'I would like an update on the project.' is more appropriate." },
                { type: "short-response", question: "Rewrite this informal sentence formally: 'Can you hit me back when you get this?'", correctAnswer: "Could you please respond when you receive this?", explanation: "The formal version is 'Could you please respond when you receive this?'" }
            ]
        },
        {
            subConcept: "Active vs. Passive Voice",
            explanation: "In active voice, the subject performs the action. In passive voice, the subject receives the action.",
            questions: [
                { type: "multiple-choice", question: "Which sentence is in active voice?", choices: ["The ball was thrown by John.", "John threw the ball."], correctAnswer: 1, explanation: "'John threw the ball.' is in active voice." },
                { type: "multiple-choice", question: "Choose the passive sentence:", choices: ["The report was written by Sarah.", "Sarah wrote the report."], correctAnswer: 0, explanation: "'The report was written by Sarah.' is in passive voice." },
                { type: "multiple-choice", question: "Is this sentence active or passive? 'The letter was mailed yesterday.'", choices: ["Active", "Passive"], correctAnswer: 1, explanation: "'The letter was mailed yesterday.' is in passive voice." },
                { type: "short-response", question: "Change the sentence to active voice: 'The cake was eaten by the kids.'", correctAnswer: "The kids ate the cake.", explanation: "The active version is 'The kids ate the cake.'" },
                { type: "multiple-choice", question: "Which is passive voice?", choices: ["The team won the game.", "The game was won by the team."], correctAnswer: 1, explanation: "'The game was won by the team.' is in passive voice." },
                { type: "short-response", question: "Rewrite the sentence in passive voice: 'The teacher gave a test.'", correctAnswer: "A test was given by the teacher.", explanation: "The passive version is 'A test was given by the teacher.'" },
                { type: "multiple-choice", question: "Choose the active sentence:", choices: ["The car was driven by her.", "She drove the car."], correctAnswer: 1, explanation: "'She drove the car.' is in active voice." },
                { type: "multiple-choice", question: "Which sentence is in passive voice?", choices: ["The books were read by the students.", "The students read the books."], correctAnswer: 0, explanation: "'The books were read by the students.' is in passive voice." },
                { type: "short-response", question: "Correct the sentence to make it active: 'The homework was completed by the class.'", correctAnswer: "The class completed the homework.", explanation: "The active version is 'The class completed the homework.'" },
                { type: "multiple-choice", question: "Is this sentence passive or active? 'The decision was made by the committee.'", choices: ["Active", "Passive"], correctAnswer: 1, explanation: "'The decision was made by the committee.' is in passive voice." }
            ]
        },
        {
            subConcept: "Concise vs. Wordy Writing",
            explanation: "Concise writing conveys the message clearly and directly, while wordy writing uses unnecessary words that make the message less clear.",
            questions: [
                { type: "multiple-choice", question: "Which is more concise?", choices: ["Due to the fact that", "Because"], correctAnswer: 1, explanation: "'Because' is more concise than 'Due to the fact that.'" },
                { type: "short-response", question: "Rewrite the sentence concisely: 'In my opinion, I believe that this is correct.'", correctAnswer: "I believe this is correct.", explanation: "The concise version is 'I believe this is correct.'" },
                { type: "multiple-choice", question: "Which sentence is wordy?", choices: ["He walked to the store.", "He proceeded to walk to the store."], correctAnswer: 1, explanation: "'He proceeded to walk to the store.' is wordy." },
                { type: "short-response", question: "Correct the sentence to make it concise: 'At this point in time, we are ready to begin.'", correctAnswer: "We are ready to begin.", explanation: "The concise version is 'We are ready to begin.'" },
                { type: "multiple-choice", question: "Choose the concise sentence:", choices: ["The book that was on the table is mine.", "The book on the table is mine."], correctAnswer: 1, explanation: "'The book on the table is mine.' is more concise." },
                { type: "short-response", question: "Rewrite the sentence: 'He is a person who works hard.'", correctAnswer: "He works hard.", explanation: "The concise version is 'He works hard.'" },
                { type: "multiple-choice", question: "Which is wordy?", choices: ["She finished the project.", "She completed the project in a manner that was thorough and timely."], correctAnswer: 1, explanation: "'She completed the project in a manner that was thorough and timely.' is wordy." },
                { type: "short-response", question: "Rewrite the sentence to make it more concise: 'There are many reasons why I think this is a good idea.'", correctAnswer: "I think this is a good idea for many reasons.", explanation: "The concise version is 'I think this is a good idea for many reasons.'" },
                { type: "multiple-choice", question: "Choose the concise sentence:", choices: ["The report contains information that is relevant.", "The report contains relevant information."], correctAnswer: 1, explanation: "'The report contains relevant information.' is more concise." },
                { type: "short-response", question: "Correct the sentence: 'The weather, which was sunny and bright, made us feel happy and joyful.'", correctAnswer: "The sunny and bright weather made us happy.", explanation: "The concise version is 'The sunny and bright weather made us happy.'" }
            ]
        }
    ]
}

};



