// 1.  Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function InstagramPost(handleOfAuthor, content, imageLinkPostedByAuthor, NumberOfViews, NumberOfLikes){
    this.Handle_Of_Author = handleOfAuthor;
    this.content = content;
    this.Image_Link_Posted_By_Author = imageLinkPostedByAuthor;
    this.Number_Of_Views = NumberOfViews;
    this.Number_Of_Likes = NumberOfLikes;
}


// 2. Create 2 Instagram post objects from the constructor function you created above

//Creating first object from the InstagramPost blue print

const myFirstPost = new InstagramPost("#aamanuels", "I am new here", "https://t3.ftcdn.net/jpg/02/20/14/38/360_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg", 142, 84);
console.log(myFirstPost);


//Creating the second object from the Instagram blue print

const mySecondPost = new InstagramPost("#sholamanuels", "This is to officially announce that I won the election", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlUln1FvM6YStcih9HBUJFI3MXxBTdgwudyr1jwm4yg&s", 1500, 950);
console.log(mySecondPost);


/** 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
 * Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94

 a. Using the factory method, implement a createPerson() factory function that takes
 name, age and location as arguments. Afterwards, create an object representing Musa 
 from the factory function. */

 function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location,
    };
 }
 
 //Creating the object Musa
 const Musa = createPerson("Musa", 19, "Lekki, Lagos State.");
 console.log(Musa);

 /** b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
 Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
 */

 //Create the createjambscores object
 function createjambScores( eng, govt, lit, crk){
    return{
        ENG : eng,
        GOVT: govt,
        LIT: lit,
        CRK : crk,
    };
 }

 const musaJambScores = new createjambScores(70, 85, 82, 94);
 console.log(musaJambScores);

 //Add createjambscores object as a property to the object Musa
 Object.assign(Musa, {musaJambScores});
 console.log(Musa);

 //Another option is to merge both objects
//  Object.assign(Musa, musaJambScore);
//  console.log(Musa);


// 4.  What are the different ways you can clone an object? 
// Give examples for each of them.

// a. Object.assign method
const person1 = {
    firstName: "Mary",
    lastName: "James",
    Nationality: "Nigerian"
  };

  console.log(person1);


  const person2 = Object.assign({}, person1);
  console.log(person2);


// b. spread syntax

const person3 = {...person1};
console.log(person3);

// c. Using the method JSON.parse(JSON.stringify())

const person4 = JSON.parse(JSON.stringify(person1));
console.log(person4);

/**5 . As Nigeria goes to the polls, here is an object representing some of
 *  the Presidential Candidates:
 * 
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’

 * 
 */

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
for(let key of Object.keys(presidentialCandidates)) {
    console.log(presidentialCandidates[key] + " is the presidential candidate of " + [key]);
}


 
