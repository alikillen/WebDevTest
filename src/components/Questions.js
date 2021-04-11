import React from 'react'
import "../App.css"
import "../styles/Questions.css"

function Questions() {
  return (
    <div className="Questions">
      Hismile – Web Developer Candidate Test 
      Alison Killen 
      
      Instructions: To see
      my deployed version of question 4/all answers, please visit:
      https://kind-raman-45362a.netlify.app/ Please also see the zip folder of
      the react app attached to email - I have also answered questions there too
      (in Readme and Challenges folder if you want to view the code). 
      
      The zip folder react app also has all code for question 4. I can provide access to
      my github repo for this material as well. Feel free to ask questions or to
      clarify any details. 
      
      
      1. GIT Knowledge We use GIT heavily in everyday tasks
      and it’s integral for the maintenance of the business. Although most IDE’s
      will have GIT integrated, it’s good to know what the IDE is actually doing
      and how it works. 
      
      
      1.1 Write GIT CLI commands for the following Change to
      your working directory (for demonstrative purposes, the working directory
      is “/Users/exampleuser/Desktop/sites/hismile2018“ 
      
      “cd
      /Users/exampleuser/Desktop/sites/hismile2018” 
      “pwd” to confirm 
      Check the
      status of the repo and current branch 
      
      “git status” (will tell you branch
      you’re on and current status/any uncommitted changes) 
      
      “git branch” (will
      tell you what branch you’re on) 
      
      Perform a pull from origin master 
      
      “git
      pull origin master” 
      
      Create a new branch 
      
      “git branch myfeature” (creates
      new branch) 
      OR 
      
      “git checkout -b myfeature” (will create myfeature and
      checkout to it) 
      
      Checkout the branch you created 
      
      “git checkout myfeature”
      
      
      Add all modified files and commit a change 
      
      “git add .” + “git commit -m
      ‘commiting latest changes’” 
      
      Push your branch to origin
      
       “git push origin
      myfeature” 
      
      Good news! Your changes were reviewed and accepted in a pull
      request. Now you can delete your local branch, it’s now part of master.
      Write the git command to delete the branch you created. 
      
      “git branch -d
      myfeature” 
      
      1.2 Write a typical workflow for pushing new code into the
      master branch with Git. 
      
      Gitflow commands example:
      
       $ git checkout -b hotfix
      (Switched to new branch ‘hotfix’) 
      (do some work on hotfix, finished it) 
      $
      git add . $ git commit -m “hotfix complete” 
      (ready to merge the completed
      hotfix into main/master branch) 
      
      $ git checkout main 
      $ git merge hotfix
      (address any merge conflicts if it is not a fast-forward, make a new
      commit on main branch) 
      $ git add . 
      
      $ git commit -m “hotfix successfully
      merged into main” 
      (ready to delete hotfix branch) 
      $ git branch -d hotfix

      The git workflow or “gitflow” is an optimal method for source control in a
      large project. It allows multiple developers to work on different feature
      branches concurrently, and resolve any merge conflicts as they progress
      through the project. Within the gitflow, there are usually several
      branches that exist simultaneously. The main branch is and should always
      be the most current version of the full project that is ready for
      deployment. There will likely be a development branch, where code that is
      not production-ready is worked on, where new features are added and bugs
      are fixed. The development branch should be the branch where all
      subsequent feature branches are merged, and all tests are performed. The
      development branch can only be merged with master when all the code and
      features on it have been fixed and tested. In the gitflow, additional
      feature branches allow developers to isolate different parts of a project,
      and eventually implement them into the development branch, address any
      merge conflicts, test them, and finally merge to master/main branch for
      deployment. 
      
      
      2. Something is broken! What do we do? Part of a great
      workflow and team environment should be encouraging people to help each
      other when they need it. 
      Scenario:
      
       Our sales period is approaching within
      the next week. Discount codes will go live in less than 5 days and all
      promotional ads/content will start to flow soon. But there’s a problem!
      For some reason the UK and US HiSmile website aren’t generating sales for
      the Teeth Whitening Kit. That’s our flagship product! 
      
      Everyone is
      panicking and it’s up to us, the Web team, to investigate potential
      bugs/issues as to why this may be happening. 
      
      ------- *I was a little
      unclear on this scenario at first - I’ve answered with the assumption that
      there is a problem with the website that is not allowing customers to
      proceed with their purchase of the Teeth Whitening Kit.* -------
      
       When
      working with a team of people, each with different roles and
      responsibilities, it’s important to be empathetic and patient, and to
      maintain clear and timely communication, especially when stressful
      situations arise. When all our staff have been working so hard on prepping
      for a sales period, we would hate to see their hard work go to waste
      because of a bug or other issue with the site! This is a high pressure
      situation that needs a clear and speedy solution: 
      
      Firstly, after noticing
      the issue I would communicate with my teammates - with my colleagues and
      my manager/team leader. It may be a problem with the website, but it will
      obviously affect the business as a whole as it is affecting sales, and
      also our customers. I would consider how we, the web team, will be
      affected by this information - are there other updates or bug fixes we
      need to delay whilst fixing this issue? Can we accurately estimate how
      long it will take us to fix?
      
       We would need to determine what information
      we need to pass on to our leadership team, and our marketing and customer
      care teams in the UK, US and Australia to ensure that they can communicate
      to their teams and, most importantly, to our customers, who are being
      disappointed that they can’t buy the kit right now. As a web team, we need
      to make sure we communicate very rapidly with the relevant staff to ensure
      them we are aware of the issue - hopefully they won’t panic knowing we are
      on the case! Clear communication from us around the issue will ensure that
      other teams and departments feel supported, and that our customers are
      supported. 
      
      Fixing the problem: 
      
      Determine the circumstances in which the
      issue is occuring - why is it only occurring on the UK and US sites? What
      is different about these sites and their development, testing and
      deployment? Is the bug consistent? Under what circumstances does the bug
      occur (e.g. UK customers on desktop cannot proceed to checkout, or US
      customers on mobile cannot add items to their cart, both UK/US click
      proceed to checkout but are not being redirected to paypal, etc).

      Determine it’s source - review all the steps for a customer to get to the
      cart/checkout stage - where is it failing along their path, and look into
      the logic and components/elements in our code that are relevant to this
      step. 
      
      Collaborate - within our AU team, but also with UK and US dev teams
      to determine the source and cause of the bug. What can they tell us about
      it? Do we know the dev who coded the part(s) of the site that are having
      issues, is this something they may have seen before and can advise on?
      
      Once identified, communicate with other teams why the issue is occuring,
      what we are doing to fix it, and how long it will take to fix.
      
       Solve -
      allocate devs as needed to refactor code and implement /test different
      solutions. 
      
      Code review - the fix/refactoring should be reviewed by a
      senior dev to ensure it is working and up to best practices. 
      
      Testing - the
      fix should be tested rigorously in our testing environment before
      deploying. 
      
      Deployment - the fix is pushed to deployment and run through
      our DevOps cycle to ensure efficient deployment of our changes. 
      
      After
      solving - breathe a sigh of relief! And then... conduct a team
      meeting/review to determine how the issue arose, what impact it had, and
      how we can avoid it in future. 
      
      Communicate our conclusions to the
      leadership team and other web teams. Communicate to other teams and
      departments what the issue was and what we are doing to ensure it does not
      happen again. 
      
      Implement safeguards for the future - how can we avoid this
      happening again? Why was it missed in the development and testing phase?
      Review test cases and implementation/testing environment. 
      
      Review DevOps
      practices to ensure that future changes are more robustly tested. 
      
      3.
      JavaScript Download the following JS file and answer the questions within.
      https://cdn.shopify.com/s/files/1/0115/0985/8404/files/dev_test.js?v=1616718661
      
      
      4. Development Recreate this as best you can:
      https://drive.google.com/file/d/15HuBBmvNIqgUU3wivJEDPPv4KOpMTR8p/view?usp=sharing
      You can use frameworks like Vue or React (vue preferable but use whatever
      framework you feel most comfortable with). Minimize other javascript
      libraries. Page hero: Create Page hero using a mobile first approach.
      Tips: try to only load the applicable elements to the applicable screen
      size. Font-family: ‘Helvetica Neue’ Mobile video:
      https://cdn.shopify.com/s/files/1/2502/5300/files/Homepage_Brand_Video_Mobile_Compressed.mp4
      Desktop video:
      https://cdn.shopify.com/s/files/1/2502/5300/files/Homepage_Brand_Video_Desktop_Compressed.mp4
      Hismile logo:
      https://cdn.shopify.com/s/files/1/0115/0985/8404/files/HiSmile_Logo_White_on_Black.jpg?v=1606438014
      
      Optional Challenge: create a burger nav menu for mobile which has
      animations and states 
      
      Greeting Card Text Generator: Create a greeting card
      text generator where the user fills in a form and it renders the html.
      Form inputs not filled will not appear. Use modern html and no inline
      styling for rendered greeting card. Mobile first but not as necessary as
      the first example. 
      
      Optional Challenge: render raw html of the rendered
      signature. 
      
      5. Self Evaluation Rate your confidence in the following from 1
      to 10 (10 being very confident) 
      
      HTML 9/10 
      
      HTML emails 5/10 (I’ve not had
      much practical exposure but I have read/researched and believe I can
      learn) 
      
      CSS 7/10 
      
      JavaScript (up to ES6) 7/10 
      
      GIT 9/10 
      
      Liquid 4/10 (I’ve not
      had much practical exposure but I have read/researched and believe I can
      learn) 
      
      VueJS Ecosystem 4/10 (I’ve not had much practical exposure but I
      have read/researched and believe I can learn)


    </div>
  );
}

export default Questions
