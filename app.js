const API = require("./lib/API");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

// DISPLAY POST  DETAILS
function displayPostSummary(post) {
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.bold.cyan(`                                ${post.title}          `)
  );
  console.log("");

  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(chalk.cyan(`Website: ${post.content}`));
  console.log("");
  console.log(chalk.cyan("Comments: "));
  for (const comment of post.comments) {
    console.log(chalk.bold.cyan(`          ${comment},`));
    console.log("                             ");
  }

  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );

  console.log(" ");
  const postChoice = readlineSync.keyIn("Hit c key to go back: ", {
    limit: "$<cC>"
  });

  if (postChoice === "c") {
    return mainMenu();
  }
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// DISPLAY POST COMMENTS FUNCTION
function displayPostsDetails(post) {
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.bold.cyan(`                           ${post.title}          `)
  );

  console.log("                             ");
  console.log(chalk.cyan("Comments: "));
  console.log("                             ");
  for (const comment of post.comments) {
    console.log(chalk.bold.cyan(`          ${comment}.`));
    console.log("                             ");
  }
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// LIST OF POSTs FUNCTION
function chooseAPost(posts) {
  console.log("");
  for (const post of posts) {
    console.log("");
    console.log(chalk.bold.cyan(`${post.id}: ${post.title}`));
    console.log(" ");

    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
  }
  console.log("");
  console.log(chalk.bold.white("Please insert 'c' for exit!"));
  console.log(" ");
  const postChoice = readlineSync.question(
    chalk.bold.cyan("                            Please choose an option? ")
  );
  if (postChoice === "c") {
    return mainMenu();
  }
  const post = API.read("posts", postChoice);

  if (post !== undefined) {
    return post;
  } else {
    console.log(" ");
    console.log(chalk.red("Ooops we can't find that post!"));
    return chooseAPost(posts);
  }
}

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  * * * * * * * * * * * * * * M * E * N * U  * * * * * * * * * * * *
mainMenu();
function mainMenu() {
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*            MY POST          *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*            SYSTEM           *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*        1. VIEW POSTS         *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*        2. WRITE A COMMENT     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*       3. DELETE A COMMENT     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*       4. ADD A NEW POST      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*       5. DELETE A POST      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  console.log(
    chalk.cyan(
      "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
    )
  );
  console.log("");
  const choice = readlineSync.question(
    chalk.bold.cyan("   Please choose an option: ")
  );
  console.log("");
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - -  IF OPTION - 1 - LIST POSTS  - - - - - - - - - - - - - - - - - - - - - -
  if (choice === "1") {
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*           P O S T S         *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");

    const posts = API.read("posts");
    console.log(
      chalk.bold.cyan(
        "                         WHICH POST DETAIL DO YOU WANT TO SEE?"
      )
    );
    const post = chooseAPost(posts);
    displayPostSummary(post);
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - -  IF OPTION - 2 - LEAVE A COMMEND  - - - - - - - - - - - - - - - - - - - - - -
  else if (choice === "2") {
    console.log("");

    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*       LEAVE A COMMENT       *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );

    const posts = API.read("posts");
    const post = chooseAPost(posts);
    displayPostsDetails(post);

    const comment = readlineSync.question(
      chalk.cyan("Write your comment here: ")
    );

    post.comments.push(comment);

    API.update("posts", post);
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-* THANK YOU FOR LEAVING A COMMENT *-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    mainMenu();
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - -  IF OPTION - 3 - DELETE A COMMENT  - - - - - - - - -  - - - - -- - - - - - - - - - - - -
  else if (choice === "3") {
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*         DELETE A comment       *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");

    const posts = API.read("posts");
    const post = chooseAPost(posts);

    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.bold.cyan(`                           ${post.title}          `)
    );

    console.log("                             ");
    console.log(chalk.cyan("Comments: "));
    console.log("                             ");
    for (let i = 0; i < post.comments.length; i++) {
      let number = i + 1;
      console.log(chalk.bold.cyan(`${number}. ${post.comments[i]}.`));
      console.log("                             ");
    }

    const del = readlineSync.question(
      chalk.cyan("which comment do you want to delete?: ")
    );
    let answer = del - 1;
    post.comments.splice(answer);

    API.update("posts", post);
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*        COMMENT DELETED          *-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    mainMenu();
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - -  IF OPTION - 4 - ADD NEW POST  - - - - - - - - -  - - - - -- - - - - - - - - - - - -
  else if (choice === "4") {
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*        ADD A NEW POST       *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");

    const title = readlineSync.question(chalk.cyan("Title: "));
    const content = readlineSync.question(chalk.cyan("Content: "));

    API.create("posts", {
      title: title,
      content: content,
      upvotes: 0,
      downvotes: 0,
      comments: []
    });
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*  YOU SUCCESSFULLY ADDED A  NEW POST *-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );

    mainMenu();
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // - - - - -  - - - - - - - - - - - - - - -  IF OPTION - 5 - DELETE A POST   - - - - - - - - - - - - - - - - - - - - - -
  else if (choice === "5") {
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*         DELETE A POST       *-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");

    const posts = API.read("posts");
    const post = chooseAPost(posts);

    API.destroy("posts", post.id);

    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*  YOU SUCCESSFULLY DELETED THE POST *-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    console.log("");
    console.log(
      chalk.cyan(
        "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"
      )
    );
    mainMenu();
    //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - -  - - - - - - - - - - - - - - -  IF OPTION - 5 - DELETE A POST   - - - - - - - - - - - - - - - - - - - - - -
  } else {
    console.log(chalk.red("Sorry we didn't recognize that choice!"));
    mainMenu();
  }
}
