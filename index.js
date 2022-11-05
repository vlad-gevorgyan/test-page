const btnLeft = document.querySelector('.reviews-btn1')
const btnRight = document.querySelector('.reviews-btn2')

btnLeft.addEventListener('click', () => {
  go_to_left()
  go_to_left1()
  go_to_left2()
  go_to_left3()
})

btnRight.addEventListener('click', () => {
  go_to_right()
  go_to_right1()
  go_to_right2()
  go_to_right3()
})

// Images

var theNum = "0";

let arr = ["a-card_5", "a-card_1", "a-card_2", "a-card_3", "a-card_4"];

function go_to_right() {
theNum++;
  if(theNum == arr.length){theNum="0";}
  change_image_2.src='./images/authors-card/'+arr[theNum]+'.jpg';
}


function go_to_left() {
  theNum--;
  if(theNum == "-1"){theNum = arr.length - 1; } console.log(theNum );
  change_image_2.src='./images/authors-card/'+arr[theNum]+'.jpg'; 
}


// Person name

var theName = "0";

let Name = ["Jonathan Vallem", "Floyd Miles", "Dianne Russell", "Jenny Wilson", "Leslie Alexander"];

function go_to_right1() {
  theName++;
  if(theName == Name.length){theName="0";}
  change_name_2.innerHTML= Name[theName];
}

function go_to_left1() {
  theName--;
  if(theName == "-1"){theName = Name.length -1; };
  change_name_2.innerHTML= Name[theName];
}

// City

var theCity = "0"

let city = [ "New York, USA", "Washington, USA","Kyoto, Japan", "Paris, France", "Moscow, Russia"]

function go_to_right2() {
  theCity++;
  if(theCity == city.length){theCity="0";}
  change_city_2.innerHTML= city[theCity];
}

function go_to_left2() {
  theCity--;
  if(theCity == "-1"){theCity = city.length -1; };
  change_city_2.innerHTML= city[theCity];
}

// Comment

var theComment = "0"

let comment = [ "comment1", "comment2", "comment3", "comment4", "comment5"]

function go_to_right3() {
  theComment++;
  if(theComment == comment.length){theComment="0";}
  change_comment_2.innerHTML= comment[theComment];
}

function go_to_left3() {
  theComment--;
  if(theComment == "-1"){theComment = comment.length -1; };
  change_comment_2.innerHTML= comment[theComment];
}
