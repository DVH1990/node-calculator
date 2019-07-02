# node-calculator
#### Description
Quick and basic node server (Typescript) calculator that also works as a CLI

#### Cloning the Repository and Dependencies
Go to a directory of your choice, then perform:

```sh
$ git clone https://github.com/DVH1990/node-calculator.git
$ npm i
```

Once installed, run the following in the project directory:

```sh
npm run prod
```

You will now have a running calculator available at http://localhost:3000/

#### How to Use

The calculator supports two actions, division (div) and multiplication (mul).

To use as a web application:

```sh
http://localhost:3000/calc?action=(div|mul)&left=(number)&right=(number)
```

Examples:

```sh
// Dividing 10 by 2
http://localhost:3000/calc?action=div&left=10&right=2


// Multiplying 4 by 2
http://localhost:3000/calc?action=mul&left=4&right=2
```

To use as a command line tool:

```sh
// From project directory
cd dist/
node calcCli.js calc <action> <left> <right>
```

Examples:

```sh
// Dividing 10 by 2
node calcCli.js calc mul 10 2

// Multiplying 4 by 2
node calcCli.js calc mul 4 2
```

To get help:

```sh
node calcCli.js -help

```




