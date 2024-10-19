const quizzes = {
  "SentenceStructure": {
    title: "Sentence Structure",
    subConcepts: [
      {
        subConcept: "Simple Sentences",
        explanation: "A simple sentence contains a subject and a verb and expresses a complete thought. It consists of one independent clause.",
        questions: [
          { type: "multiple-choice", question: "Which of the following is a simple sentence?", choices: ["She runs.", "When she runs.", "Although she runs."], correctAnswer: 0, explanation: "A simple sentence has only one independent clause. The other examples introduce dependent clauses, making them incomplete without more information." },
          { type: "multiple-choice", question: "A simple sentence has how many independent clauses?", choices: ["1", "2", "3"], correctAnswer: 0, explanation: "A simple sentence has only one independent clause. More than one clause would make it compound or complex." },
          { type: "multiple-choice", question: "Identify the subject in the sentence: 'The cat slept.'", choices: ["The cat", "slept", "The"], correctAnswer: 0, explanation: "The subject is the noun 'The cat,' which performs the action in the sentence." },
          { type: "multiple-choice", question: "Is 'I am happy' a simple sentence?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, 'I am happy' is a simple sentence because it contains one subject (I) and one verb (am) and forms a complete thought." },
          { type: "multiple-choice", question: "Choose the correct simple sentence:", choices: ["The dog barks loudly.", "The dog, barking loudly, ran away."], correctAnswer: 0, explanation: "A simple sentence doesn't include extra phrases or clauses like in the second example, which has a dependent phrase." },
          { type: "multiple-choice", question: "Does a simple sentence need both a subject and a verb?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, every simple sentence requires a subject and a verb to express a complete thought." },
          { type: "multiple-choice", question: "Is 'John and Mary went to the park' a simple sentence?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, 'John and Mary went to the park' is a simple sentence, as it has a compound subject but still forms only one independent clause." },
          { type: "multiple-choice", question: "What type of clause does a simple sentence contain?", choices: ["Independent", "Dependent"], correctAnswer: 0, explanation: "A simple sentence contains one independent clause that can stand alone as a complete thought." },
          { type: "multiple-choice", question: "Can a simple sentence contain a compound subject?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, a simple sentence can contain a compound subject, such as two people or things performing the action." },
          { type: "short-response", question: "Identify the verb in the sentence: 'The sun shines.'", correctAnswer: "shines", explanation: "The verb is 'shines,' as it describes the action the subject is doing." }
        ]
      },
      {
        subConcept: "Compound Sentences",
        explanation: "A compound sentence contains two independent clauses joined by a coordinating conjunction (for, and, nor, but, or, yet, so).",
        questions: [
          { type: "multiple-choice", question: "What joins two independent clauses in a compound sentence?", choices: ["Coordinating conjunction", "Subordinating conjunction"], correctAnswer: 0, explanation: "A coordinating conjunction joins two independent clauses, creating a compound sentence." },
          { type: "multiple-choice", question: "Which of the following is a compound sentence?", choices: ["I went home, and I took a nap.", "Because I was tired, I went home."], correctAnswer: 0, explanation: "The first option is a compound sentence with two independent clauses joined by 'and'. The second is a complex sentence." },
          { type: "short-response", question: "What does FANBOYS stand for?", correctAnswer: "For, And, Nor, But, Or, Yet, So", explanation: "FANBOYS is an acronym for the coordinating conjunctions used in compound sentences." },
          { type: "multiple-choice", question: "Choose the correct compound sentence:", choices: ["She sings and dances.", "She sings, and she dances."], correctAnswer: 1, explanation: "The second option is a compound sentence, as it contains two independent clauses separated by a comma and a coordinating conjunction." },
          { type: "multiple-choice", question: "Which is the correct coordinating conjunction to join these sentences: 'I was tired __ I went to bed'?", choices: ["so", "because", "but"], correctAnswer: 0, explanation: "'So' correctly joins the two independent clauses, showing cause and effect." },
          { type: "multiple-choice", question: "What punctuation often comes before a coordinating conjunction?", choices: ["Comma", "Period"], correctAnswer: 0, explanation: "A comma typically comes before a coordinating conjunction in compound sentences to separate the independent clauses." },
          { type: "multiple-choice", question: "Which sentence is incorrect?", choices: ["I wanted to go, but I stayed home.", "I wanted to go but I stayed home."], correctAnswer: 1, explanation: "The second sentence is incorrect because it's missing a comma before 'but', which is needed in compound sentences." },
          { type: "multiple-choice", question: "How many independent clauses does a compound sentence have?", choices: ["1", "2", "3"], correctAnswer: 1, explanation: "A compound sentence has two independent clauses joined by a coordinating conjunction." },
          { type: "multiple-choice", question: "Is 'I read a book, and I watched a movie' a compound sentence?", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, it's a compound sentence because it contains two independent clauses joined by 'and'." },
          { type: "short-response", question: "What is the conjunction in this sentence: 'He likes ice cream, but he hates cake.'", correctAnswer: "but", explanation: "'But' is the coordinating conjunction linking two independent clauses in this compound sentence." }
        ]
      },
      {
        subConcept: "Complex Sentences",
        explanation: "A complex sentence contains one independent clause and at least one dependent clause. Dependent clauses cannot stand alone as a complete sentence.",
        questions: [
          { type: "multiple-choice", question: "Which of the following is a complex sentence?", choices: ["I finished my homework before I went to bed.", "I finished my homework."], correctAnswer: 0, explanation: "The first sentence is a complex sentence because it contains an independent clause ('I finished my homework') and a dependent clause ('before I went to bed')." },
          { type: "multiple-choice", question: "A complex sentence contains what type of clauses?", choices: ["One independent and one or more dependent clauses", "Two independent clauses"], correctAnswer: 0, explanation: "A complex sentence contains one independent clause and one or more dependent clauses." },
          { type: "multiple-choice", question: "Which word often begins a dependent clause?", choices: ["Although", "And", "But"], correctAnswer: 0, explanation: "'Although' is a subordinating conjunction that often begins a dependent clause." },
          { type: "short-response", question: "What is the dependent clause in the sentence: 'Because it was raining, we stayed indoors'?", correctAnswer: "Because it was raining", explanation: "The dependent clause is 'Because it was raining,' as it can't stand alone as a complete sentence." },
          { type: "short-response", question: "What is the independent clause in the sentence: 'I studied until I was tired'?", correctAnswer: "I studied", explanation: "The independent clause is 'I studied,' which can stand alone as a complete sentence." },
          { type: "multiple-choice", question: "Which sentence is correct?", choices: ["Since I was late, I missed the meeting.", "Since I was late I missed the meeting."], correctAnswer: 0, explanation: "The first sentence is correct because it includes a comma after the dependent clause 'Since I was late'." },
          { type: "multiple-choice", question: "Which sentence is NOT a complex sentence?", choices: ["I went home after I finished work.", "I went home, and I watched TV."], correctAnswer: 1, explanation: "The second sentence is a compound sentence, not a complex one." },
          { type: "multiple-choice", question: "What connects a dependent clause to an independent clause?", choices: ["Subordinating conjunction", "Coordinating conjunction"], correctAnswer: 0, explanation: "A subordinating conjunction connects a dependent clause to an independent clause in a complex sentence." },
          { type: "multiple-choice", question: "Which of the following is a dependent clause?", choices: ["After the rain stopped", "The rain stopped"], correctAnswer: 0, explanation: "'After the rain stopped' is a dependent clause because it cannot stand alone as a complete sentence." },
          { type: "short-response", question: "Identify the independent clause in the sentence: 'Before I left, I finished my project.'", correctAnswer: "I finished my project", explanation: "The independent clause is 'I finished my project,' which can stand alone as a complete sentence." }
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
          { type: "short-response", question: "Where should the comma go: 'I bought apples oranges and bananas.'", correctAnswer: "I bought apples, oranges, and bananas.", explanation: "The comma should separate the items in the list: apples, oranges, and bananas." },
          { type: "multiple-choice", question: "Is this sentence punctuated correctly? 'I like pizza, and I like burgers.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, this sentence is correctly punctuated because it separates two independent clauses with a comma and a coordinating conjunction." },
          { type: "short-response", question: "Place a comma: 'Before we start let's review the rules.'", correctAnswer: "Before we start, let's review the rules.", explanation: "The comma should be placed after 'Before we start' to separate the introductory element from the rest of the sentence." },
          { type: "multiple-choice", question: "In a list, commas separate which elements?", choices: ["Items", "Clauses"], correctAnswer: 0, explanation: "In a list, commas are used to separate items." },
          { type: "multiple-choice", question: "Which sentence needs a comma?", choices: ["She danced, but he did not.", "She danced but he did not."], correctAnswer: 1, explanation: "The second sentence is missing a comma before 'but', which is needed to separate the two independent clauses." },
          { type: "multiple-choice", question: "Identify the error: 'My brother, John plays soccer.'", choices: ["Missing comma", "Comma unnecessary"], correctAnswer: 0, explanation: "A comma is missing after 'John' to set off the nonessential information." },
          { type: "short-response", question: "Where should the comma go: 'At the end of the day we went home.'", correctAnswer: "At the end of the day, we went home.", explanation: "The comma should be placed after 'At the end of the day' to separate the introductory element from the main sentence." },
          { type: "multiple-choice", question: "Which sentence has correct comma placement?", choices: ["After dinner, we went to the park.", "After dinner we went to the park."], correctAnswer: 0, explanation: "The correct sentence includes a comma after the introductory phrase 'After dinner'." },
          { type: "multiple-choice", question: "Commas are used to separate what in a compound sentence?", choices: ["Clauses", "Words"], correctAnswer: 0, explanation: "Commas are used to separate independent clauses in a compound sentence." },
          { type: "short-response", question: "Add a comma: 'She loves running but she also loves swimming.'", correctAnswer: "She loves running, but she also loves swimming.", explanation: "A comma is needed before 'but' to separate the two independent clauses." }
        ]
      },
      {
        subConcept: "Apostrophes",
        explanation: "Apostrophes are used to show possession and to form contractions. For example, 'it's' is a contraction for 'it is,' while 'its' is possessive.",
        questions: [
          { type: "multiple-choice", question: "Is 'it's' the correct form in this sentence: 'It's a beautiful day.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "'It's' is correct because it is a contraction for 'it is'." },
          { type: "short-response", question: "Which is correct for possession: 'The cat's toy' or 'The cats toy'?", correctAnswer: "The cat's toy", explanation: "'The cat's toy' is correct because the apostrophe indicates possession." },
          { type: "multiple-choice", question: "Which sentence uses an apostrophe incorrectly?", choices: ["The dog's leash is red.", "Its a sunny day."], correctAnswer: 1, explanation: "'Its a sunny day' is incorrect because 'it's' should be a contraction for 'it is.'" },
          { type: "short-response", question: "Where should the apostrophe go: 'Thats Johns car.'", correctAnswer: "That's John's car.", explanation: "The correct sentence should be 'That's John's car,' using apostrophes for both contraction and possession." },
          { type: "short-response", question: "What is the contraction for 'they are'?", correctAnswer: "they're", explanation: "The contraction for 'they are' is 'they're.'" },
          { type: "multiple-choice", question: "Does this sentence need an apostrophe? 'The players shoes are dirty.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, 'The players' shoes' should be 'The players' shoes' to show possession." },
          { type: "multiple-choice", question: "Choose the correct possessive form:", choices: ["The children's toys", "The childrens toys"], correctAnswer: 0, explanation: "The correct possessive form is 'The children's toys,' with an apostrophe showing possession." },
          { type: "multiple-choice", question: "Which is the contraction for 'you are'?", choices: ["You're", "Your"], correctAnswer: 0, explanation: "'You're' is the contraction for 'you are,' while 'your' is possessive." },
          { type: "short-response", question: "Where should the apostrophe go: 'Wheres my book?'", correctAnswer: "Where's my book?", explanation: "The correct sentence is 'Where's my book?' as 'where's' is a contraction of 'where is'." },
          { type: "multiple-choice", question: "Identify the mistake: 'Its been a long day.'", choices: ["Apostrophe needed", "No mistake"], correctAnswer: 0, explanation: "The sentence should be 'It's been a long day,' using 'it's' as a contraction for 'it is.'" }
        ]
      },
      {
        subConcept: "Quotation Marks",
        explanation: "Quotation marks are used to indicate direct speech, quotes, or specific titles. They can also highlight certain words for emphasis.",
        questions: [
          { type: "short-response", question: "Where should the quotation marks go: 'She said, Hello.'", correctAnswer: '"She said, \'Hello.\'"', explanation: "The correct sentence is: 'She said, \"Hello.\"' with the speech enclosed in quotation marks." },
          { type: "multiple-choice", question: "Which sentence uses quotation marks correctly?", choices: ["'I love ice cream,' she said.", "I love ice cream she said."], correctAnswer: 0, explanation: "The first sentence correctly uses quotation marks to enclose the speech." },
          { type: "multiple-choice", question: "Is this sentence punctuated correctly? 'Did you say, Let’s go?' he asked.", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, the sentence is punctuated correctly with the question mark outside the quotation marks for the dialogue." },
          { type: "multiple-choice", question: "What do quotation marks enclose?", choices: ["Dialogue or quotes", "Items in a list"], correctAnswer: 0, explanation: "Quotation marks are used to enclose direct speech, quotes, or specific titles." },
          { type: "short-response", question: "Where should the quotation marks go: 'He said, That movie was great.'", correctAnswer: '"He said, \'That movie was great.\'"', explanation: "The correct sentence is: 'He said, \"That movie was great.\"' with the quote inside quotation marks." },
          { type: "multiple-choice", question: "In American English, punctuation marks usually go _______ quotation marks.", choices: ["Inside", "Outside"], correctAnswer: 0, explanation: "In American English, punctuation marks like periods and commas typically go inside quotation marks." },
          { type: "multiple-choice", question: "Is the punctuation correct? 'I can’t wait to go,' she said.", choices: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, the punctuation is correct, with the comma inside the quotation marks." },
          { type: "multiple-choice", question: "When quoting a book, should the title be in quotation marks?", choices: ["No", "Yes"], correctAnswer: 1, explanation: "Yes, when quoting a book, the title should be in quotation marks." },
          { type: "short-response", question: "Where do the quotation marks go in this sentence: 'The sign said No entry.'", correctAnswer: 'The correct sentence is: \'The sign said "No entry."\'.', explanation: "The correct sentence is: 'The sign said \"No entry.\"' with the quote in quotation marks." },
          { type: "multiple-choice", question: "Is the sentence correct? 'I just finished reading,' said John 'The best book ever.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; there should be a period after 'reading' to separate the dialogue from the description." }
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
          { type: "multiple-choice", question: "Which is correct?", choices: ["She walk to school.", "She walks to school."], correctAnswer: 1, explanation: "'Walks' is correct because the subject 'She' is singular and requires a singular verb." },
          { type: "multiple-choice", question: "'The dogs _____ in the yard.'", choices: ["is", "are"], correctAnswer: 1, explanation: "'Are' is correct because 'The dogs' is a plural subject that requires a plural verb." },
          { type: "multiple-choice", question: "Identify the error: 'He don’t know the answer.'", choices: ["don’t", "know"], correctAnswer: 0, explanation: "'Don’t' is incorrect because 'He' is singular and should be followed by 'doesn’t.'" },
          { type: "multiple-choice", question: "Which is correct: 'He _____ very tired.'", choices: ["feel", "feels"], correctAnswer: 1, explanation: "'Feels' is correct because the singular subject 'He' requires a singular verb." },
          { type: "multiple-choice", question: "Choose the correct form: 'The team _____ working hard.'", choices: ["is", "are"], correctAnswer: 0, explanation: "'Is' is correct because 'The team' is treated as a singular subject." },
          { type: "multiple-choice", question: "'The children _____ playing outside.'", choices: ["is", "are"], correctAnswer: 1, explanation: "'Are' is correct because 'The children' is a plural subject that requires a plural verb." },
          { type: "multiple-choice", question: "Is this sentence correct? 'She and her friends goes to the park.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She and her friends go to the park,' as 'friends' is plural." },
          { type: "multiple-choice", question: "Which verb agrees with the subject: 'The book and the pen _____ on the table.'", choices: ["is", "are"], correctAnswer: 1, explanation: "'Are' is correct because 'The book and the pen' is a compound subject, requiring a plural verb." },
          { type: "multiple-choice", question: "Choose the correct form: 'The cat or the dogs _____ making the noise.'", choices: ["is", "are"], correctAnswer: 0, explanation: "'Is' is correct because the subject closest to the verb 'The cat' is singular." },
          { type: "multiple-choice", question: "Which is correct? 'There _____ many reasons to leave.'", choices: ["is", "are"], correctAnswer: 1, explanation: "'Are' is correct because 'reasons' is plural, and the verb must agree with the subject." }
        ]
      },
      {
        subConcept: "Misplaced Modifiers",
        explanation: "A misplaced modifier is a word or phrase that is placed awkwardly in a sentence, making it unclear or changing the meaning of the sentence. Modifiers should be placed next to the words they modify.",
        questions: [
          { type: "multiple-choice", question: "Identify the misplaced modifier: 'She almost drove the kids to school every day.'", choices: ["She", "almost"], correctAnswer: 1, explanation: "The modifier 'almost' is misplaced because it should modify 'every day,' not 'drove.'" },
          { type: "multiple-choice", question: "Which sentence is correct?", choices: ["I only ate the pizza.", "I ate only the pizza."], correctAnswer: 1, explanation: "'I ate only the pizza' is correct because 'only' modifies 'the pizza,' not 'ate'." },
          { type: "multiple-choice", question: "Find the error: 'Running quickly, the car almost hit her.'", choices: ["Running quickly", "almost hit her"], correctAnswer: 0, explanation: "'Running quickly' is misplaced because it seems to modify 'the car,' which doesn't make sense." },
          { type: "multiple-choice", question: "Which is correct? 'He barely touched his food.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "The sentence is correct; 'barely' modifies 'touched' correctly." },
          { type: "short-response", question: "Fix the misplaced modifier: 'She nearly gave all the homework to her students.'", correctAnswer: "She gave nearly all the homework to her students.", explanation: "The correct sentence is 'She gave nearly all the homework to her students,' clarifying that 'nearly' modifies 'all the homework.'" },
          { type: "multiple-choice", question: "Choose the correct sentence:", choices: ["The man walked the dog with a hat.", "The man with a hat walked the dog."], correctAnswer: 1, explanation: "'The man with a hat walked the dog' is correct because 'with a hat' modifies 'the man,' not 'the dog.'" },
          { type: "short-response", question: "Where is the misplaced modifier: 'The young boy threw the ball to his friend with excitement.'", correctAnswer: "with excitement", explanation: "The modifier 'with excitement' is misplaced because it should clarify who was excited." },
          { type: "multiple-choice", question: "Which is correct? 'She saw the bird flying through the telescope.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is unclear; it could mean either she or the bird was flying." },
          { type: "short-response", question: "Fix the sentence: 'She almost studied the entire night.'", correctAnswer: "She studied almost the entire night.", explanation: "The correct sentence is 'She studied almost the entire night,' clarifying that 'almost' modifies 'the entire night.'" },
          { type: "multiple-choice", question: "Which sentence is clearer? 'I saw the movie driving home.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is unclear because it could mean either the person or the movie was driving home." }
        ]
      },
      {
        subConcept: "Double Negatives",
        explanation: "A double negative occurs when two forms of negation are used in the same sentence. In English, using two negatives can cancel each other out and lead to confusion.",
        questions: [
          { type: "multiple-choice", question: "Which is incorrect? 'I don’t have nothing.'", choices: ["Yes", "No"], correctAnswer: 0, explanation: "The sentence is incorrect because 'nothing' creates a double negative. It should be 'I don’t have anything.'" },
          { type: "short-response", question: "Fix the sentence: 'He can’t find no pencils.'", correctAnswer: "He can’t find any pencils.", explanation: "The correct sentence is 'He can’t find any pencils' to avoid a double negative." },
          { type: "multiple-choice", question: "Which is correct? 'She didn’t say nothing.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect because 'nothing' creates a double negative. It should be 'She didn’t say anything.'" },
          { type: "short-response", question: "Correct the error: 'There isn’t no milk left.'", correctAnswer: "There isn’t any milk left.", explanation: "The correct sentence is 'There isn’t any milk left' to avoid the double negative." },
          { type: "multiple-choice", question: "Choose the correct sentence:", choices: ["I don’t know nobody here.", "I don’t know anybody here."], correctAnswer: 1, explanation: "The correct sentence is 'I don’t know anybody here,' as 'nobody' creates a double negative." },
          { type: "multiple-choice", question: "Which is grammatically correct?", choices: ["They never did nothing wrong.", "They never did anything wrong."], correctAnswer: 1, explanation: "'They never did anything wrong' is correct to avoid the double negative 'never' and 'nothing.'" },
          { type: "short-response", question: "Fix the double negative: 'She didn’t go nowhere today.'", correctAnswer: "She didn’t go anywhere today.", explanation: "The correct sentence is 'She didn’t go anywhere today' to avoid a double negative." },
          { type: "multiple-choice", question: "Choose the correct form: 'He doesn’t have nothing to do.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The correct sentence is 'He doesn’t have anything to do' to avoid a double negative." },
          { type: "short-response", question: "What’s wrong with this sentence: 'I ain’t got no money.'", correctAnswer: "I haven’t got any money.", explanation: "The correct sentence is 'I haven’t got any money' to avoid a double negative." },
          { type: "multiple-choice", question: "Is this sentence correct? 'There isn’t nothing in the fridge.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect because 'nothing' creates a double negative. It should be 'There isn’t anything in the fridge.'" }
        ]
      }
    ]
  },
  "verbTenses": {
    title: "Verb Tenses",
    subConcepts: [
      {
        subConcept: "Present Simple vs. Present Continuous",
        explanation: "The present simple tense is used for habitual actions, facts, and general truths. The present continuous tense is used for actions happening right now or temporary actions.",
        questions: [
          { type: "multiple-choice", question: "Choose the correct form: 'I _____ breakfast every morning.'", choices: ["eat", "am eating"], correctAnswer: 0, explanation: "'Eat' is correct because the present simple tense is used for habitual actions." },
          { type: "short-response", question: "What’s the difference between 'He works' and 'He is working'?", correctAnswer: "'He works' is present simple, meaning it’s a regular action, while 'He is working' is present continuous, meaning it’s happening right now.", explanation: "'He works' indicates a habitual action, while 'He is working' describes something happening right now." },
          { type: "multiple-choice", question: "Which sentence is in the present continuous tense?", choices: ["I am reading a book.", "I read books."], correctAnswer: 0, explanation: "The first sentence uses the present continuous tense to describe an ongoing action." },
          { type: "multiple-choice", question: "Which is correct? 'She _____ to school every day.'", choices: ["goes", "is going"], correctAnswer: 0, explanation: "'Goes' is correct because it describes a habitual action in the present simple tense." },
          { type: "multiple-choice", question: "Is this sentence correct? 'They are usually eating dinner at 7 PM.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect because the present continuous tense should not be used for habitual actions like 'usually.'" },
          { type: "multiple-choice", question: "Which sentence describes a habit?", choices: ["She walks to work every day.", "She is walking to work now."], correctAnswer: 0, explanation: "'She walks to work every day' describes a habitual action, which is expressed in the present simple tense." },
          { type: "multiple-choice", question: "Choose the present continuous form: 'I _____ my homework right now.'", choices: ["do", "am doing"], correctAnswer: 1, explanation: "'Am doing' is correct because it describes an action happening at this moment in the present continuous tense." },
          { type: "short-response", question: "Correct the sentence: 'We are playing soccer every weekend.'", correctAnswer: "We play soccer every weekend.", explanation: "The correct sentence is 'We play soccer every weekend,' as it describes a habitual action." },
          { type: "multiple-choice", question: "Which describes a temporary action? 'He _____ in New York for the summer.'", choices: ["stays", "is staying"], correctAnswer: 1, explanation: "'Is staying' is correct because it describes a temporary action in the present continuous tense." },
          { type: "multiple-choice", question: "Complete the sentence: 'They _____ the movie right now.'", choices: ["watch", "are watching"], correctAnswer: 1, explanation: "'Are watching' is correct because it describes an ongoing action happening at the moment." }
        ]
      },
      {
        subConcept: "Past Simple vs. Past Continuous",
        explanation: "The past simple tense is used for completed actions in the past, while the past continuous tense describes actions that were ongoing at a specific time in the past.",
        questions: [
          { type: "multiple-choice", question: "Which sentence is in the past continuous tense?", choices: ["I was reading when he called.", "I read when he called."], correctAnswer: 0, explanation: "'I was reading' is in the past continuous tense, describing an ongoing action in the past." },
          { type: "multiple-choice", question: "Which describes an ongoing action? 'They _____ dinner when the guests arrived.'", choices: ["ate", "were eating"], correctAnswer: 1, explanation: "'Were eating' describes an ongoing action at the time the guests arrived, using the past continuous tense." },
          { type: "multiple-choice", question: "Is this sentence correct? 'She was study when the power went out.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She was studying when the power went out,' using the past continuous tense." },
          { type: "multiple-choice", question: "Choose the correct form: 'He _____ football when it started raining.'", choices: ["played", "was playing"], correctAnswer: 1, explanation: "'Was playing' is correct because it describes an ongoing action interrupted by another event." },
          { type: "short-response", question: "What’s the difference between 'I worked' and 'I was working'?", correctAnswer: "'I worked' is past simple for a completed action, while 'I was working' is past continuous for an ongoing action.", explanation: "'I worked' describes a completed action, while 'I was working' describes an ongoing action in the past." },
          { type: "multiple-choice", question: "Which sentence uses the past simple correctly?", choices: ["I saw her yesterday.", "I was seeing her yesterday."], correctAnswer: 0, explanation: "'I saw her yesterday' is correct because it describes a completed action in the past." },
          { type: "multiple-choice", question: "Choose the correct form: 'They _____ TV when I called.'", choices: ["watched", "were watching"], correctAnswer: 1, explanation: "'Were watching' is correct because it describes an ongoing action interrupted by another event." },
          { type: "multiple-choice", question: "Which describes a completed action? 'We _____ the movie last night.'", choices: ["watched", "were watching"], correctAnswer: 0, explanation: "'Watched' is correct because it describes a completed action in the past." },
          { type: "multiple-choice", question: "Complete the sentence: 'While they _____, the phone rang.'", choices: ["were talking", "talked"], correctAnswer: 0, explanation: "'Were talking' is correct because it describes an ongoing action at the time another event occurred." },
          { type: "multiple-choice", question: "Is this sentence correct? 'She was walk to school when it started raining.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'She was walking to school when it started raining' to use the past continuous tense correctly." }
        ]
      },
      {
        subConcept: "Future Simple vs. Future Continuous",
        explanation: "The future simple tense describes actions that will happen in the future, while the future continuous tense is used for actions that will be ongoing at a specific time in the future.",
        questions: [
          { type: "multiple-choice", question: "Which sentence is in the future continuous tense?", choices: ["I will be traveling next week.", "I will travel next week."], correctAnswer: 0, explanation: "'I will be traveling next week' is correct because it describes an ongoing action in the future." },
          { type: "multiple-choice", question: "Choose the correct form: 'They _____ dinner at 7 PM tomorrow.'", choices: ["will eat", "will be eating"], correctAnswer: 1, explanation: "'Will be eating' is correct because it describes an ongoing action at a specific time in the future." },
          { type: "multiple-choice", question: "Which describes an ongoing action in the future? 'By this time tomorrow, she _____.'", choices: ["will be working", "will work"], correctAnswer: 0, explanation: "'Will be working' is correct because it describes an ongoing action at a specific time in the future." },
          { type: "multiple-choice", question: "Is this sentence correct? 'They will be study at 8 PM.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'They will be studying at 8 PM' to use the future continuous tense." },
          { type: "multiple-choice", question: "Complete the sentence: 'He _____ when you arrive.'", choices: ["will sleep", "will be sleeping"], correctAnswer: 1, explanation: "'Will be sleeping' is correct because it describes an ongoing action at the time of another event in the future." },
          { type: "multiple-choice", question: "Which is correct? 'I _____ finish the project by next week.'", choices: ["will", "will be"], correctAnswer: 0, explanation: "'Will' is correct because the future simple tense describes a definite future action." },
          { type: "multiple-choice", question: "Choose the correct future continuous form: 'At 10 AM tomorrow, they _____ a meeting.'", choices: ["will have", "will be having"], correctAnswer: 1, explanation: "'Will be having' is correct because it describes an ongoing action at a specific time in the future." },
          { type: "multiple-choice", question: "Which sentence is correct? 'By next week, we will have finish the project.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'By next week, we will have finished the project' to use the future perfect tense." },
          { type: "short-response", question: "What’s the difference between 'I will call you' and 'I will be calling you'?", correctAnswer: "'I will call you' is a single action, while 'I will be calling you' is an ongoing action at a specific time.", explanation: "'I will call you' describes a single future action, while 'I will be calling you' describes an ongoing action in the future." },
          { type: "short-response", question: "Correct the sentence: 'They will watch TV at this time tomorrow.'", correctAnswer: "They will be watching TV at this time tomorrow.", explanation: "The correct sentence is 'They will be watching TV at this time tomorrow' to use the future continuous tense." }
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
          { type: "multiple-choice", question: "Choose the correct word: '_____ going to the park.'", choices: ["They’re", "Their", "There"], correctAnswer: 0, explanation: "'They’re' is correct because it is the contraction of 'they are.'" },
          { type: "multiple-choice", question: "Which is correct? 'I can _____ the music.'", choices: ["here", "hear"], correctAnswer: 1, explanation: "'Hear' is correct because it means to perceive sound, while 'here' refers to a location." },
          { type: "short-response", question: "Correct the sentence: 'There house is on the left.'", correctAnswer: "Their house is on the left.", explanation: "'Their' is correct because it shows possession of the house." },
          { type: "short-response", question: "Which is the correct form of 'your'? 'Is this _____ book?'", correctAnswer: "your", explanation: "'Your' is correct because it shows possession." },
          { type: "short-response", question: "What’s the difference between 'its' and 'it’s'?", correctAnswer: "'Its' is possessive, and 'it’s' is a contraction of 'it is.'", explanation: "'Its' shows possession, while 'it’s' is the contraction for 'it is.'" },
          { type: "multiple-choice", question: "Fill in the blank: 'The dog wagged _____ tail.'", choices: ["its", "it’s"], correctAnswer: 0, explanation: "'Its' is correct because it shows possession." },
          { type: "short-response", question: "Correct the sentence: 'I _____ my keys yesterday.'", correctAnswer: "lost", explanation: "'Lost' is correct because it is the past tense of 'lose.'" },
          { type: "multiple-choice", question: "Choose the correct word: 'I _____ a letter to my friend.'", choices: ["write", "right"], correctAnswer: 0, explanation: "'Write' is correct because it refers to the act of composing text." },
          { type: "multiple-choice", question: "Fill in the blank: 'They went _____ the store.'", choices: ["to", "two", "too"], correctAnswer: 0, explanation: "'To' is correct because it shows direction." },
          { type: "multiple-choice", question: "Correct the sentence: 'She likes the color blue, _____.", choices: ["to", "too", "two"], correctAnswer: 1, explanation: "'Too' is correct because it means 'also.'" }
        ]
      },
      {
        subConcept: "Commonly Confused Words",
        explanation: "Some words are commonly confused because they look or sound similar but have different meanings (e.g., affect vs. effect).",
        questions: [
          { type: "multiple-choice", question: "Which is correct? 'The weather can _____ your mood.'", choices: ["affect", "effect"], correctAnswer: 0, explanation: "'Affect' is correct because it is a verb meaning to influence." },
          { type: "multiple-choice", question: "Choose the correct word: 'She has a positive _____ on her students.'", choices: ["affect", "effect"], correctAnswer: 1, explanation: "'Effect' is correct because it is a noun meaning the result." },
          { type: "short-response", question: "Fill in the blank: 'I need to _____ the report by Friday.'", correctAnswer: "complete", explanation: "'Complete' is correct because it means to finish." },
          { type: "multiple-choice", question: "Which is correct? 'She gave me a nice _____ on my outfit.'", choices: ["complement", "compliment"], correctAnswer: 1, explanation: "'Compliment' is correct because it refers to a kind remark." },
          { type: "short-response", question: "What’s the difference between 'accept' and 'except'?", correctAnswer: "'Accept' means to receive, and 'except' means to exclude.", explanation: "'Accept' means to receive, while 'except' means to exclude." },
          { type: "multiple-choice", question: "Choose the correct word: 'I will _____ your invitation.'", choices: ["accept", "except"], correctAnswer: 0, explanation: "'Accept' is correct because it means to receive." },
          { type: "multiple-choice", question: "Is this sentence correct? 'I bought everything accept the milk.'", choices: ["Yes", "No"], correctAnswer: 1, explanation: "The sentence is incorrect; it should be 'except the milk' because 'except' means to exclude." },
          { type: "short-response", question: "Correct the sentence: 'The weather had an affect on the game.'", correctAnswer: "The weather had an effect on the game.", explanation: "'Effect' is correct because it is the noun referring to the result." },
          { type: "multiple-choice", question: "Which is correct? 'I _____ to the store yesterday.'", choices: ["went", "gone"], correctAnswer: 0, explanation: "'Went' is correct because it is the past tense of 'go.'" },
          { type: "multiple-choice", question: "Correct the sentence: 'She has _____ to the park every day.'", choices: ["gone", "went"], correctAnswer: 0, explanation: "'Gone' is correct because it is the past participle of 'go' used with 'has.'" }
        ]
      },
      {
        subConcept: "Synonyms and Antonyms",
        explanation: "Synonyms are words with similar meanings, while antonyms are words with opposite meanings.",
        questions: [
          { type: "multiple-choice", question: "Choose a synonym for 'happy':", choices: ["sad", "joyful", "angry"], correctAnswer: 1, explanation: "'Joyful' is a synonym for 'happy' because both mean experiencing happiness." },
          { type: "multiple-choice", question: "Which is an antonym for 'cold'?", choices: ["hot", "cool", "warm"], correctAnswer: 0, explanation: "'Hot' is an antonym for 'cold' because they have opposite meanings." },
          { type: "short-response", question: "What’s a synonym for 'big'?", correctAnswer: "large", explanation: "'Large' is a synonym for 'big' because they have similar meanings." },
          { type: "multiple-choice", question: "Choose an antonym for 'fast':", choices: ["slow", "quick", "swift"], correctAnswer: 0, explanation: "'Slow' is an antonym for 'fast' because they have opposite meanings." },
          { type: "multiple-choice", question: "Fill in the blank with a synonym for 'smart': 'She is very _____.'", choices: ["intelligent", "dumb", "unkind"], correctAnswer: 0, explanation: "'Intelligent' is a synonym for 'smart' because they have similar meanings." },
          { type: "short-response", question: "What’s an antonym for 'loud'?", correctAnswer: "quiet", explanation: "'Quiet' is an antonym for 'loud' because they have opposite meanings." },
          { type: "multiple-choice", question: "Choose a synonym for 'small':", choices: ["tiny", "large", "huge"], correctAnswer: 0, explanation: "'Tiny' is a synonym for 'small' because they have similar meanings." },
          { type: "multiple-choice", question: "Which is an antonym for 'bright'?", choices: ["light", "dark", "sunny"], correctAnswer: 1, explanation: "'Dark' is an antonym for 'bright' because they have opposite meanings." },
          { type: "multiple-choice", question: "Fill in the blank with an antonym for 'fun': 'The movie was very _____.'", choices: ["exciting", "boring"], correctAnswer: 1, explanation: "'Boring' is an antonym for 'exciting' because they have opposite meanings." },
          { type: "short-response", question: "What’s a synonym for 'beautiful'?", correctAnswer: "gorgeous", explanation: "'Gorgeous' is a synonym for 'beautiful' because they have similar meanings." }
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
          { type: "multiple-choice", question: "Which is more formal?", choices: ["Hey, what’s up?", "Dear Sir or Madam,"], correctAnswer: 1, explanation: "'Dear Sir or Madam,' is more formal because it is a polite and professional greeting." },
          { type: "multiple-choice", question: "Choose the formal sentence:", choices: ["Thanks for your email.", "I appreciate your correspondence."], correctAnswer: 1, explanation: "'I appreciate your correspondence' is more formal because it uses professional language." },
          { type: "multiple-choice", question: "Which sentence is informal?", choices: ["I regret to inform you…", "Sorry, can’t make it."], correctAnswer: 1, explanation: "'Sorry, can’t make it' is informal because it uses casual language and contractions." },
          { type: "multiple-choice", question: "Which is appropriate for a business letter?", choices: ["I am writing to express…", "What’s good?"], correctAnswer: 0, explanation: "'I am writing to express…' is appropriate for a business letter because it is polite and formal." },
          { type: "short-response", question: "Correct the sentence to make it formal: 'I’m super excited about the meeting!'", correctAnswer: "I am very excited about the meeting.", explanation: "The correct formal version is 'I am very excited about the meeting,' avoiding slang like 'super.'" },
          { type: "multiple-choice", question: "Is this sentence formal or informal? 'Let me know if you need anything.'", choices: ["Formal", "Informal"], correctAnswer: 1, explanation: "'Let me know if you need anything' is informal because it uses casual phrasing." },
          { type: "multiple-choice", question: "Choose the formal phrase:", choices: ["I would like to schedule a meeting.", "Let’s set up a chat."], correctAnswer: 0, explanation: "'I would like to schedule a meeting' is formal because it uses polite, professional language." },
          { type: "multiple-choice", question: "Fill in the blank: In academic writing, you should avoid using ____.", choices: ["contractions", "formal phrases"], correctAnswer: 0, explanation: "In academic writing, contractions should be avoided because they make the tone less formal." },
          { type: "multiple-choice", question: "Which is more appropriate in an email to your boss?", choices: ["Hey, just checking in.", "I would like an update on the project."], correctAnswer: 1, explanation: "'I would like an update on the project' is more appropriate because it uses formal language." },
          { type: "short-response", question: "Rewrite this informal sentence formally: 'Can you hit me back when you get this?'", correctAnswer: "Could you please respond when you receive this?", explanation: "The correct formal version is 'Could you please respond when you receive this?'" }
        ]
      },
      {
        subConcept: "Active vs. Passive Voice",
        explanation: "In active voice, the subject performs the action. In passive voice, the subject receives the action.",
        questions: [
          { type: "multiple-choice", question: "Which sentence is in active voice?", choices: ["The ball was thrown by John.", "John threw the ball."], correctAnswer: 1, explanation: "'John threw the ball' is in active voice because the subject 'John' performs the action." },
          { type: "multiple-choice", question: "Choose the passive sentence:", choices: ["The report was written by Sarah.", "Sarah wrote the report."], correctAnswer: 0, explanation: "'The report was written by Sarah' is in passive voice because the subject 'report' receives the action." },
          { type: "multiple-choice", question: "Is this sentence active or passive? 'The letter was mailed yesterday.'", choices: ["Active", "Passive"], correctAnswer: 1, explanation: "'The letter was mailed yesterday' is in passive voice because the subject 'letter' receives the action." },
          { type: "short-response", question: "Change the sentence to active voice: 'The cake was eaten by the kids.'", correctAnswer: "The kids ate the cake.", explanation: "The correct active version is 'The kids ate the cake' because the subject 'kids' performs the action." },
          { type: "multiple-choice", question: "Which is passive voice?", choices: ["The team won the game.", "The game was won by the team."], correctAnswer: 1, explanation: "'The game was won by the team' is in passive voice because the subject 'game' receives the action." },
          { type: "short-response", question: "Rewrite the sentence in passive voice: 'The teacher gave a test.'", correctAnswer: "A test was given by the teacher.", explanation: "The correct passive version is 'A test was given by the teacher' because the subject 'test' receives the action." },
          { type: "multiple-choice", question: "Choose the active sentence:", choices: ["The car was driven by her.", "She drove the car."], correctAnswer: 1, explanation: "'She drove the car' is in active voice because the subject 'She' performs the action." },
          { type: "multiple-choice", question: "Which sentence is in passive voice?", choices: ["The books were read by the students.", "The students read the books."], correctAnswer: 0, explanation: "'The books were read by the students' is in passive voice because the subject 'books' receives the action." },
          { type: "short-response", question: "Correct the sentence to make it active: 'The homework was completed by the class.'", correctAnswer: "The class completed the homework.", explanation: "The correct active version is 'The class completed the homework.'" },
          { type: "multiple-choice", question: "Is this sentence passive or active? 'The decision was made by the committee.'", choices: ["Active", "Passive"], correctAnswer: 1, explanation: "'The decision was made by the committee' is in passive voice because the subject 'decision' receives the action." }
        ]
      },
      {
        subConcept: "Concise vs. Wordy Writing",
        explanation: "Concise writing conveys the message clearly and directly, while wordy writing uses unnecessary words that make the message less clear.",
        questions: [
          { type: "multiple-choice", question: "Which is more concise?", choices: ["Due to the fact that", "Because"], correctAnswer: 1, explanation: "'Because' is more concise than 'Due to the fact that.'" },
          { type: "short-response", question: "Rewrite the sentence concisely: 'In my opinion, I believe that this is correct.'", correctAnswer: "I believe this is correct.", explanation: "The concise version is 'I believe this is correct' because it removes unnecessary phrases." },
          { type: "multiple-choice", question: "Which sentence is wordy?", choices: ["He walked to the store.", "He proceeded to walk to the store."], correctAnswer: 1, explanation: "'He proceeded to walk to the store' is wordy because 'proceeded to' is unnecessary." },
          { type: "short-response", question: "Correct the sentence to make it concise: 'At this point in time, we are ready to begin.'", correctAnswer: "We are ready to begin.", explanation: "The concise version is 'We are ready to begin' because it removes unnecessary words." },
          { type: "multiple-choice", question: "Choose the concise sentence:", choices: ["The book that was on the table is mine.", "The book on the table is mine."], correctAnswer: 1, explanation: "'The book on the table is mine' is more concise because it omits unnecessary words." },
          { type: "short-response", question: "Rewrite the sentence: 'He is a person who works hard.'", correctAnswer: "He works hard.", explanation: "The concise version is 'He works hard' because it removes unnecessary words." },
          { type: "multiple-choice", question: "Which is wordy?", choices: ["She finished the project.", "She completed the project in a manner that was thorough and timely."], correctAnswer: 1, explanation: "'She completed the project in a manner that was thorough and timely' is wordy because it uses too many unnecessary words." },
          { type: "short-response", question: "Rewrite the sentence to make it more concise: 'There are many reasons why I think this is a good idea.'", correctAnswer: "I think this is a good idea for many reasons.", explanation: "The concise version is 'I think this is a good idea for many reasons.'" },
          { type: "multiple-choice", question: "Choose the concise sentence:", choices: ["The report contains information that is relevant.", "The report contains relevant information."], correctAnswer: 1, explanation: "'The report contains relevant information' is more concise because it omits unnecessary words." },
          { type: "multiple-choice", question: "Which is more concise?", choices: ["He arrived at the conclusion that", "He concluded"], correctAnswer: 1, explanation: "'He concluded' is more concise than 'He arrived at the conclusion that.'" }
        ]
      }
    ]
  }
};

var selectedCategory = null

// Object to store user answers
let userAnswers = {};

// Function to check user's selected answers and compare with correct answers
function checkQuestions(event) {
  event.preventDefault(); // Prevent the form from refreshing the page
  
  const questions = selectedCategory.questions; // Example: checking "Simple Sentences" subConcept
  let allCorrect = true; // Variable to track if all answers are correct

  // Loop through all the questions
  questions.forEach((question, index) => {
    const userAnswerElement = document.querySelector(`input[name="q${index}"]:checked`);
    const explanationDiv = document.getElementById(`explanation-${index}`);

    if (userAnswerElement) {
      userAnswer = parseInt(userAnswerElement.value); // Parse as integer for multiple-choice
    
      // Save the user's selected answer
      userAnswers[`q${index}`] = userAnswer;
    
      // Compare the selected answer with the correct answer
      const correctAnswer = question.correctAnswer;
    
        // For multiple-choice, compare as integers
        if (userAnswer === correctAnswer) {
          explanationDiv.textContent = "Correct!";
          explanationDiv.style.color = "green";
        } else {
          allCorrect = false;
          explanationDiv.textContent = `Incorrect: ${question.explanation}`;
          explanationDiv.style.color = "red";
        }
      
    } else {
      // If no answer was selected, prompt the user to select an answer
      allCorrect = false;
      explanationDiv.textContent = "Please provide an answer!";
      explanationDiv.style.color = "orange";
    }
  });

  // Optional: If all questions are correct, you can display a message or take some action
  if (allCorrect) {
    alert("Congratulations! All your answers are correct!");
  }
}

// Example function that saves userAnswers for future use
function saveUserAnswers() {
  // Here you could implement logic to save userAnswers to local storage, a database, or server
  console.log("User answers saved:", userAnswers);
  // Example of saving to local storage
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
}

// Function to generate the quiz dynamically
function generateQuestion(questions) {
  selectedCategory = questions
  questions = selectedCategory.questions
  const quizContainer = document.getElementById('textContainer');
  quizContainer.innerHTML = '';

  const titleText = document.createElement('h1');
  titleText.textContent = selectedCategory.subConcept;

  const desc = document.createElement('h3');
  desc.textContent = selectedCategory.explanation;

  const form = document.createElement('form');
  form.setAttribute('action', '/submit.test');
  form.setAttribute('method', 'GET');

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
    /*
    if (question.type === 'short-response') {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('name', `q${index}`);
      questionDiv.appendChild(input);
      questionDiv.appendChild(document.createElement('br'));
    }
      */

    // Create an explanation div for feedback after submission
    const explanationDiv = document.createElement('div');
    explanationDiv.setAttribute('id', `explanation-${index}`);
    explanationDiv.style.marginTop = '10px';

    questionDiv.appendChild(explanationDiv);
    form.appendChild(questionDiv);
    form.appendChild(document.createElement('br'));
  });

  // Submit button
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit Test');
  form.appendChild(submitButton);

  // Append the form to the quizContainer
  quizContainer.appendChild(titleText)
  quizContainer.appendChild(desc)
  quizContainer.appendChild(form);
  
  // Add event listener to check questions on form submission
  form.addEventListener('submit', checkQuestions);
}

// Call the function to generate the form on page load
document.addEventListener('DOMContentLoaded', () => {
  const questions = quizzes["SentenceStructure"].subConcepts[0].questions; // Use the first subConcept's questions
  generateQuestion(questions);
});
