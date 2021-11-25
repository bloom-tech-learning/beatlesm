#   Objective 1 - Install Node on Mac (if needed)

## <span style="color:red">Overview</span>

In preprocessing, there are three main concepts we need to understand:

1.  The language or syntax that we use to write our code (LESS)
2.  The compiler that converts the language (Node)
3.  The CSS output from the compiler (Normal CSS)

This module focuses on the compiler. To use our language (LESS), we need to have a compiler that understands that specific language input.

A compiler is a program that converts language into code. In our case, LESS is the language, and CSS is the output code. We utilize compilers to provide more features than standard CSS can offer.

## Follow Along

Installing our working environment can be daunting at first. We will be covering a lot of ground. Get through each step before going back and trying to learn everything you did.

If you are on a mac, follow the mac instructions below. If you are on a PC, scroll down after the mac instructions to the PC instructions. If you are on Linux, chances are Node is already installed in your system. Run `node -v` in a shell to make sure, and then you can look at step 3 in the mac instructions.

### Step By Step Install Instructions for Mac

####    [Step 1: Install Homebrew and Node](https://brew.sh/)

-   Follow the instructions on how to install Homebrew using your terminal
-   Pay attention to your terminal as the installer will ask for a password
-   Once Homebrew is installed, run `brew install node` in your terminal
-   Pay attention to your terminal, as there might be small issues to troubleshoot
-   Restart your terminal after installation
-   Run `node -v` in your terminal to make sure node was installed correctly

####    Step 2: Install Less

**NOTE:** You will see our commands have `-g` in them. Please write the commands exactly as you see them. Globally installing packages is ideal for our situation.

-   Open terminal and run npm install -g less
-   If it's not working, restart your terminal and try again

####    Step 3: Install less-watch-compiler

-   Open the terminal and run npm install -g less-watch-compiler

####    Step 4: Use less-watch-compiler On Your Project

-   Fork and clone [Preprocessing-Part-I](https://github.com/LambdaSchool/Preprocessing-I)
-   `cd` into your project on your local machine
-   Once you are in the root of your project run less-watch-compiler less css index.less
-   Your project should be up and running; change some styles around in your .less file, and save the file to make sure you see a change in your CSS.
-   Great work, you're all set up!

### Step By Step Install Instructions for PC

####    Step 1: [Install Node.js](https://nodejs.org/en/)

####    Step 2: [Install Git Bash (Git SCM)](https://git-scm.com/download/win)

-   After the installer finishes, open git bash and run node -v to make sure node is installed correctly
-   If you don't see some node version numbers display in your git bash window, restart git bash and try again

####    Step 3: Install Less

**NOTE:** You will see our commands have `-g` in them. Please write the commands exactly as you see them. Globally installing packages is ideal for our situation.

-   Open git bash and run `npm install -g less`
-   If it's not working, restart your git bash and try again

####    Step 4: Install less-watch-compiler

-   Open git bash and run `npm install -g less-watch-compiler`

####    Step 5: Use less-watch-compiler On Your Project

-   Fork and clone [Preprocessing-Part-I](https://github.com/LambdaSchool/Preprocessing-I)
-   `cd` into your project on your local machine
-   Once you are in the root of your project run less-watch-compiler less css index.less
-   Your project should be up and running; change some styles around in your .less file, and save the file to make sure you see a change in your CSS.
-   Great work, you're all set up!

## Challenge

1.  Follow the instructions provided to you in the tutorial above.
2.  Once in your project, change the background color of your body tag to `red`.
3.  Once the background turns red, your compiler is working correctly.



[Previous](../README.md) | [Next](./Object_2.md)