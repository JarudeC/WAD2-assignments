function generate_board() {
  //============================================================================
  // Task 1
  // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
  //============================================================================

  let retrieve_friend = document.getElementsByTagName("option");

  // Array to contain the names of user-selected friend(s)
  // For example, if the user selected 'Darryl' and 'Yin Kit',
  //   this array's value will be:
  //      [ 'darryl', 'yinkit' ]
  //
  let friends = []; // Initialize to empty

  // YOUR CODE GOES HERE
  for (let friend of retrieve_friend) {
    if (friend.selected) {
      friends.push(friend.value);
    }
  }
  // Display user's selection in Developer Tools --> Console.
  console.log(friends);

  //============================================================================
  // Task 2
  // Given one or more selected friends and given 4 fruit names,
  //   generate a 'randomized' Array of finalized card names.
  //
  // Card names are as follows:
  //    apple_brandon.png
  //    banana_brandon.png
  //    kiwi_brandon.png
  //    orange_brandon.png
  //
  // where 'brandon' can be replaced with another friend's name,
  // e.g.
  //    apple_nick.png
  // (and so on)
  //
  // Display all 4 fruit cards of one or more selected friends.
  //
  // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
  //       (such that the user can attempt to 'match').
  //
  // Check out this utility function (declared at the bottom of this file)
  //   for randomizing the order of Array elements.
  //        shuffleArray()
  //============================================================================
  const fruits = ["apple", "banana", "kiwi", "orange"];

  // YOUR CODE GOES HERE
  let cards = [];

  for (let friend of friends) {
    for (let fruit of fruits) {
      cards.push(fruit + "_" + friend);
      cards.push(fruit + "_" + friend);
    }
  }

  shuffleArray(cards);
  console.log(cards);

  //============================================================================
  // Task 3
  // Display the cards in <div id="game-board">
  //
  // For this, we will make use of Template Literal (using backticks).
  //
  // NOTE: The game board will always have 4 columns and N rows, where N denotes
  //       (number of selected friends) x 2.
  //
  //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
  //         then the newly generated game board will be
  //         6 (rows) by 4 (columns).
  //============================================================================
  const num_cols = fruits.length;
  const num_rows = friends.length * 2;

  console.log("# of columns: " + num_cols);
  console.log("# of rows: " + num_rows);

  // YOUR CODE GOES HERE

  // You will need to rewrite the value of this result_str (String).
  let result_str = `
        <div style='color: red'>
            <p>This is a sample HTML code that will replace the parent div's innerHTML!</p>
            <p>Instead of paragraph texts, you will display cards here.</p>
        </div>
    `;
  let div = document.createElement("div");
  let table = document.createElement("table");
  table.style.margin = "auto";
  let photo_mapping = {};
  let total_score = 0

  for (let i = 0; i < cards.length; i += num_cols) {
    let tr = document.createElement("tr");
    for (let j = i; j < i + num_cols; j++) {
      let td = document.createElement("td");
      let image = document.createElement("img");
      let card = "hidden";
      image.src = "cards/" + card + ".png";
      image.id = j;
      image.onclick = flip;
      td.appendChild(image);
      tr.appendChild(td);
      photo_mapping[j] = cards[j];
      total_score += 1
    }
    table.appendChild(tr);
  }
  div.appendChild(table);

  // DO NOT MODIFY THE FOLLOWING
  // Replace the innerHTML of <div id="game-board">
  //   with a newly prepared HTML string (result_str).
  let board = document.getElementById("game-board");
  board.innerText = "";
  board.appendChild(div);

  let score = 0
  let scoretext = document.getElementById("score")

  let firstCard = null;
  let secondCard = null;
  let firstid = null;
  let secondid = null;
  let lock = false;
  //helper
  function flip(e) {
    if (lock) return;
    //flips cards and returns
    let img = e.target;
    let id = img.id;
    let card = cards[id];

    img.src = "cards/" + card + ".png";
    if (firstCard == null) {
      firstCard = img.src;
      firstid = id;
    } else if (secondCard == null && id != firstid) {
      secondCard = img.src;
      secondid = id;
      lock = true;
      if (firstCard === secondCard) {
        document.getElementById(firstid).style.opacity = "0.5"
        document.getElementById(secondid).style.opacity = "0.5"
        firstCard = null;
        secondCard = null;
        firstid = null;
        secondid = null;
        lock = false;
        score ++
        if (score >= total_score/2){
            scoretext.innerText = "All Matched, Congratulations"
        }
        else{
            scoretext.innerText = "Total Score: " + score
        }

      } else {
        setTimeout(() => {
          img.src = "cards/hidden.png";
          // set the current to null
          document.getElementById(firstid).src = "cards/hidden.png";
          document.getElementById(secondid).src = "cards/hidden.png";
          firstCard = null;
          secondCard = null;
          firstid = null;
          secondid = null;
          lock = false;
        }, 2000);
      }
    }
  }
}

// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
