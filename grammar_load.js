
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
      subConcepts:[
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

var selectedCategory = null

function generateQuestion(questions) {

  const quizContainer = document.getElementById('textContainer');
  quizContainer.innerHTML = ''

  const form = document.createElement('form');
  form.setAttribute('action', '/submit.test');
  form.setAttribute('method', 'POST');

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');

    // Add the question text
    const questionLabel = document.createElement('label');
    questionLabel.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionLabel);
    questionDiv.appendChild(document.createElement('br'));

    // Handle multiple-choice questions
    if (question.type === 'multiple-choice') {
      question.choices.forEach((choice, choiceIndex) => {
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', `q${index}`);
        radio.setAttribute('value', choiceIndex);

        const label = document.createElement('label');
        label.textContent = choice;

        questionDiv.appendChild(radio);
        questionDiv.appendChild(label);
        questionDiv.appendChild(document.createElement('br'));
      });
    }

    // Handle short-response questions
    if (question.type === 'short-response') {
      const textInput = document.createElement('input');
      textInput.setAttribute('type', 'text');
      textInput.setAttribute('name', `q${index}`);
      textInput.setAttribute('placeholder', 'Your answer here');

      questionDiv.appendChild(textInput);
      questionDiv.appendChild(document.createElement('br'));
    }

    form.appendChild(questionDiv);
    form.appendChild(document.createElement('br'));
  });

  // Submit button
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit Test');
  form.appendChild(submitButton);

  // Append the form to the quizContainer
  quizContainer.appendChild(form);

}

// Call the function yo generate the form on page load
document.addEventListener('DOMContentLoaded', () => {
  generateQuestion(selectedCategory);
});


