
let c1_wh = fetch('c1_wh.txt')
c1_wh = c1_wh.text()

let c2_wh = fetch('c2_wh.txt')
c2_wh = c2_wh.text()

let c1_witw = fetch('c1_witw.txt')
c1_witw = c1_witw.text()

let c2_witw = fetch('c2_witw.txt')
c2_witw = c2_witw.text()

let c1_ttm = fetch('c1_ttm.txt')
c1_ttm = c1_ttm.text()

let c2_ttm = fetch('c2_ttm.txt')
c2_ttm = c2_ttm.text()

let c1_tim = fetch('c1_tim.txt')
c1_tim = c1_tim.text()

let c2_tim = fetch('c2_tim.txt')
c2_tim = c2_tim.text()


let c1_pap = fetch('c1_pap.txt')
c1_pap = c1_pap.text()

let c2_pap = fetch('c2_pap.txt')
c2_pap = c2_pap.text()

let c1_ot = fetch('c1_ot.txt')
c1_ot = c1_ot.text()

let c2_ot = fetch('c2_ot.txt')
c2_ot = c2_ot.text()

let c1_m = fetch('c1_m.txt')
c1_m = c1_m.text()

let c2_m = fetch('c2_m.txt')
c2_m = c2_m.text()

let c1_je = fetch('c1_je.txt')
c1_je = c1_je.text()

let c2_je = fetch('c2_je.txt')
c2_je = c2_je.text()

let c1_greatexp = fetch('c1_greatexp')
c1_greatexp = c1_greatexp.text()

let c2_greatexp = fetch('c2_greatexp.txt')
c2_greatexp = c2_greatexp.text()

let c1_frank = fetch('c1_frank.txt')
c1_frank = c1_frank.text()

let c2_frank = fetch('c2_frank.txt')
c2_frank = c2_frank.text()

let c1_drac = fetch('c1_drac.txt')
c1_drac = c1_drac.text()

let c2_drac = fetch('c2_drac.txt')
c2_drac = c2_drac.text()

let c1_alice = fetch('c1_alice.txt')
c1_alice = c1_alice.text()

let c2_alice = fetch('c2_alice.txt')
c2_alice = c1_alice.text()

const books = [
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        chapters: [
            { chapterTitle: "Chapter 1", content: c1_wh },
            { chapterTitle: "Chapter 2", content: "Another chapter begins..." }
        ]
    },
    {
        title: "Metamorphosis",
        author: "Franz Kafka",
        chapters: [
            { chapterTitle: "Chapter 1", content: "When Gregor Samsa woke up one morning..." },
            { chapterTitle: "Chapter 2", content: "As Gregor Samsa continues his life..." }
        ]
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        chapters: [
            { chapterTitle: "Chapter 1", content: "You will rejoice to hear that no disaster..." },
            { chapterTitle: "Chapter 2", content: "I am by birth a Genevese, and my family is one of the most distinguished..." }
        ]
    },
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        chapters: [
            { chapterTitle: "Chapter 1", content: "Alice was beginning to get very tired of sitting by her sister..." },
            { chapterTitle: "Chapter 2", content: "Down the Rabbit-Hole..." }
        ]
    }
];





let currentBook = null;
let currentChapterIndex = 0;
let utterance = null;
let isPaused = false;
let wordIndex = 0;

// Parse the query string to get the bookIndex
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookIndex = urlParams.get('bookIndex');

// Load the selected book
if (bookIndex !== null) {
    currentBook = books[parseInt(bookIndex)];
    document.getElementById('bookTitle').innerText = `${currentBook.title} by ${currentBook.author}`;
    displayChapter(currentBook, currentChapterIndex);
}

// Display the current chapter
function displayChapter(book, chapterIndex) {
    const chapter = book.chapters[chapterIndex];
    document.getElementById('chapterTitle').innerText = chapter.chapterTitle;
    document.getElementById('text').innerText = chapter.content;
}


function readText() {
    if (utterance) {
        speechSynthesis.cancel(); // Stop any ongoing speech
    }

    // Get the content from the books array
    let text = currentBook.chapters[currentChapterIndex].content;

    // Split the text into paragraphs based on double newlines or single newlines
    const paragraphs = text.split(/\n\s*\n|\n/);

    let paragraphIndex = 0;

    // Function to read and highlight each paragraph
    function speakNextParagraph() {
        if (paragraphIndex < paragraphs.length) {
            const paragraphText = paragraphs[paragraphIndex];
            const words = paragraphText.split(/\s+/); // Split paragraph into words
            let wordIndex = 0;

            const utterance = new SpeechSynthesisUtterance(paragraphText);

            // Event to highlight words as they are spoken
            utterance.onboundary = (event) => {
                if (event.name === 'word' && wordIndex < words.length) {
                    highlightWord(wordIndex, words); // Highlight the current word
                    wordIndex++;
                }
            };

            // Event when the utterance is done, move to the next paragraph
            utterance.onend = () => {
                paragraphIndex++;
                // Add a slight delay between paragraphs for more natural spacing
                setTimeout(speakNextParagraph, 50);
            }


            // Speak the current paragraph
            speechSynthesis.speak(utterance);
        }
    }

    // Start reading the first paragraph
    speakNextParagraph();
}

// Function to highlight the currently spoken word
function highlightWord(wordIndex, words) {
    const paragraphElement = document.getElementById('text');
    const paragraphText = words.join(' '); // Reconstruct the full text

    // Clear the paragraphElement and create spans for each word
    paragraphElement.innerHTML = ''; // Clear the text

    // Create text before the current word
    const beforeWord = words.slice(0, wordIndex).join(' ') + ' ';
    const currentWord = words[wordIndex];
    const afterWord = ' ' + words.slice(wordIndex + 1).join(' ');

    // Create spans to style the highlighted word
    const beforeSpan = document.createTextNode(beforeWord);
    const highlightSpan = document.createElement('span');
    highlightSpan.textContent = currentWord;
    highlightSpan.style.backgroundColor = 'yellow'; // Highlighting the word
    const afterSpan = document.createTextNode(afterWord);

    // Append the fragments to the paragraph element
    paragraphElement.appendChild(beforeSpan);
    paragraphElement.appendChild(highlightSpan);
    paragraphElement.appendChild(afterSpan);
}


// Start reading the current chapter
function startReading() {
    if (currentBook) {
        readText();
    }
}

// Pause reading
function pauseReading() {
    if (!isPaused && speechSynthesis.speaking) {
        speechSynthesis.pause();
        isPaused = true;
    }
}

// Resume reading
function resumeReading() {
    if (isPaused && speechSynthesis.paused) {
        speechSynthesis.resume();
        isPaused = false;
    }
}

// Stop reading
function stopReading() {
    if (!isPaused || utterance) {
        speechSynthesis.cancel();
    }
}

// Navigate to the previous chapter
document.getElementById('prevChapter').addEventListener('click', () => {
    if (currentChapterIndex > 0) {
        stopReading();
        currentChapterIndex--;
        displayChapter(currentBook, currentChapterIndex);
    }
});

// Navigate to the next chapter
document.getElementById('nextChapter').addEventListener('click', () => {
    if (currentChapterIndex < currentBook.chapters.length - 1) {
        stopReading();
        currentChapterIndex++;
        displayChapter(currentBook, currentChapterIndex);
    }
});

// Go back to the book selection page
function goBack() {
    stopReading();
    window.location.href = 'library.html'; // Go back to book selection
}