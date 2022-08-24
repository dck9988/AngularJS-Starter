# Bootstrap-AngularJS-Starter
Boilerplate code for a website using Bootstrap 3.3 and AngularJS

## Getting Started
### Prerequisites
Use this repository as a template for your website.
#### Local Apache Server
##### Windows
Install and Configure [XAMPP](https://www.apachefriends.org/index.html)
[How to Configure Document Root](https://www.youtube.com/watch?v=VFZLGNiN0Ok)
###### Linux/Mac
Install and Configure Apache
[How to Configure Document Root](https://askubuntu.com/questions/337874/change-apache-document-root-folder-to-secondary-hard-drive)
#### Git
Git should already be installed on development machine, but if not, install it before continuing. [Git Website](https://git-scm.com/)

Ensure you have git installed by running the following command in your system's command line:
```
git --version
```
#### Node
This project also requires [NodeJS](https://nodejs.org/en/) to be installed. Make sure to include NPM in your installation.

Ensure node and npm are both installed by running the following commands in your system's command line:
```
node -v
npm -v
```
#### Bower
This project uses bower for client side dependency management, to install, run the following command.
```
npm install -g bower
```
Ensure installation worked by running:
```
bower -v
```
#### Grunt
Grunt is our build tool for the front end, to install, run the following command.
```
npm install -g grunt grunt-cli
```
Ensure the installation worked by running:
```
grunt –version
```
#### .htaccess file
Rename `htaccess.txt` to `.htaccess`
### Setting Up Environment
After you have made sure to set your document root to the root of the repository, open your command line. Make sure your command line is in the root of your project. And follow the steps bellow.
1. cd to the ```vendor``` folder in the root of the project.
2. Run the following 3 lines
```
npm install
bower install
grunt dist
```
## Building and Running
If you make any changes to js or less files, make sure to run the following line before testing in a web browser:
```
grunt dist
```
## Built With
* [AngularJS](https://angularjs.org/) - The web framework.
* [Bootstrap 3.3](https://getbootstrap.com/docs/3.3/) - The css framework
* [npm](https://www.npmjs.com/) - Used to install grunt tasks.
* [bower](https://bower.io/) - Frontend dependency management.
* [grunt](https://gruntjs.com/) - Build manager for javascript and less.
* **See bower.json and composer.json files for more**
## Authors
* **Jose Rodriguez Rivas** - *Lead Developer* - [@JoseRivas1998](https://github.com/JoseRivas1998)