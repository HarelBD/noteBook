const textBoxEl = document.querySelector('textarea#text_Input'),
      dateBoxEl = document.querySelector('input#userDate'),
      timeBoxEl = document.querySelector('input#userTime'),
      notesEl = document.querySelector('div#notes');
      // נשים בצורה גלובלית כי אולי נרצה להשתמש בהם בעוד כמה מקומות

// מערך ריק שאנחנו דוחפים אליו אובייקטים עם מערך באמצעות הפוש
    let notes_ar = JSON.parse(localStorage.getItem('notes')) || [];


function sendInfo(){
    // יצירת ID יחודי על יידי מספר יוניקס
    let UniqId =  Date.now()

    const note = {
        // note קיים לי באייצ'טימל
        // אובייקט עם מערך
        // פה נתתי להם שמות על דעת עצמי וקישרתי את האלמנט שנותן מידע
        note_Text:textBoxEl.value,
        note_Date:dateBoxEl.value,
        note_Time:timeBoxEl.value,
        
        // הזנה שלו באובייקט
        id: UniqId
    }

    notes_ar.push(note);
    
    localStorage.setItem("notes",JSON.stringify(notes_ar))
    // בדיקה איך נראה המערך
console.log(notes_ar);
    printNotes();
    

    textBoxEl.value = ''
    timeBoxEl.value = ''
    dateBoxEl.value = ''
    // איפוס של התיבות לאחר מילוי ושליחה של פתק 
}


// הפונקציה לוקחת את המערך ועושה עליו לולאה אפשר לרשום כל דבר שרוצים בפונקציה של הלולאת מערך


function printNotes(){
    // כאן אנחנו מאפסים את כל ההודעות שיש בלוח
    notesEl.innerHTML = ''
    // כאן אנחנו עושים עליהם לופ
    notes_ar.forEach(function(item){
    notesEl.innerHTML +=`
    <div class="note">
    <div id="xBtn">
    <button id="xBtn" onclick="deleteNote(${item.id})">X</button>
    </div>
    <div id="divDate">
        <p>${item.note_Date}</p>
        
        </div>
        <div id="divTime">
        <p>${item.note_Time}</p>
        </div>
        <div id="divText">
            <p>${item.note_Text}</p>
            </div>
    </div>`;
 
    })
}
function deleteNote(id){
// const currentIndex = notes.findIndex(item => item.id=== id)
notes_ar.forEach((item,i)=> {
    if (item.id === id) {
      notes_ar.splice(i,1)
      printNotes();
    //   בדיקה מה האובייקט שאתה מקבל
      console.log(id)
    }
    });
    
}


function deleteAll(){
if (confirm("are you sure you want to delete all the Notes?")){
    notes_ar.splice(0, notes_ar.length)
    printNotes(localStorage.setItem("notes",JSON.stringify(notes_ar)));
}
else{}
}
printNotes();

//session storage
// שומר מידע זמני עד היציאה של המשתמש מאותו אתר

// cookies
// מידע נשמר ונשלח גם לצד שרת וגם לצד לקוח

// Local Storage
// שומר מידע אך ורק בצד לקוח

    // set item מכניס ערך חדש ללוקאל סטורג'
    // ***כאשר נשמור את אותו ערך עם אותו מפתח הוא ידרוס לנו את הערך הישן, לדוגמא ערך מס' 3 ויציג את ערך מס' 4
    // localStorage.setItem('notes', 3);
    // localStorage.setItem('notes', 4);

    // מוחק ערך מהלוקאל סטורג'
    // localStorage.removeItem('notes')

    // מושך את המידע מהלוקאל סטורג'
    // console.log(localStorage.getItem('notes'))

    // localStorage.clear();

    // JSON.parse
    // JSON.stringify


    // const obg = {
    //     name:'moti',
    //     age:17,
    //     last_name:"chaclon"
    // }
    // localStorage.setItem("person", JSON.stringify(obg))

    

    // בלוקאל סטורג' אנחנו נרצה שהמערך יופיע לנו כסטרינג כדי להציג את הנתונים, ובפרוייקט אנחנו נרצה שהמערך יופיע לנו בצורת אובייקט, לכן נצטרך את שתי המצבים.
