//console.log("Hello World");
// This person : ...
const personArray = ['Me', 'Your future self', 'Albert Einstein', 'Your bestfriend', 'Donald Trump', 'Your neighbor', 'Your crush', 'A complete stranger', 'Your father', 'Your mother', 'The Lord Himself'];
// when this person thinks about you, he feels ...
const emotionArray = ['Love', 'Hatred' ,'Disgust', 'Pity', 'Fear', 'Joy', 'Jalous', 'Angry', 'Suspicious', 'Admiration', 'Sadness'];
// this feeling ...
const durationArray = ['last a brief moment', 'stay a whole year', 'never disappeared', 'stay for the weekend', 'last one cup of tea', 'always be remembered', 'stay for 3 days'];

const randomNumber1 = Math.floor(Math.random()*(personArray.length + 1));
const randomNumber2 = Math.floor(Math.random()*(emotionArray.length + 1));
const randomNumber3 = Math.floor(Math.random()*(durationArray.length + 1));

const messageGenerator = (num1, num2, num3) => {
    console.log(`This person : ${personArray[num1]}`);
    console.log(`When this person thinks about you, they feel : ${emotionArray[num2]}`);
    console.log(`This feeling will ${durationArray[num3]}`);
}

messageGenerator(randomNumber1, randomNumber2, randomNumber3);