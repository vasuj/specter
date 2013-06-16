# Specter Is

An open source platform that simplifies the process of blogging by providing:

* A pleasant writing environment

* A system that can be configured and deployed in minutes

* Customization that is limited only by your imagination.

Does all this sound too good to be true? Don't believe what I say? See it in [action](http://specterdemo.aws.af.cm/) for yourself




# Getting specter up and running

1. Clone the repository

2. [Download](http://www.elasticsearch.org/download/) elastic search for your platform

3. `cd` to the location where you cloned specter. Do an `npm install` to install all the dependencies and then `npm start` to run it. Specter should now be running on [http://localhost:3000](http://localhost:3000)


# Doing stuff with specter.


All right so you have installed specter and it is running. What next ?  Here is a typical workflow with specter.


*  If you are running specter for the first time you will have no posts in the database and it will automatically take you to [/create](http://localhost:3000/create) . Here you can create a post that you want to publish. The writing envrionment in specter is based on [abstract](https://github.com/brislink/Abstract). All of your drafts will be saved locally.

*  To publish your draft you need to provide specter with a secret. These are defined in `\specter\constants\contributors.js` file. Edit the file if you want or use the default secret to publish an article.

*  To edit an article you need to `url-of-the-article\edit` and you will be taken to the edit screen where you can make changes to you post and then publish it in the same way like you did before.

* To delete an article you need to `url-of-the-article\delete` and provide it with your secret.


**Don't have time to check out specter locally. Play with the [live version here](http://specterdemo.aws.af.cm/)  `\create, \edit, \delete` will work. Use by!invitation& as secret. Enjoy **

#Creating contributors in specter


Specter has no concept of sessions. The operations in specter are controlled through urls which have to edited manually. To provide security specter maintains a contributors, `\specter\constants\contributors.js` , file that defines all the users who are authorized to perform actions on specter. To add another contributor all you need to do is edit the contributors file and add a 

       {
           name:"",
           secret:""
     }


to one of the sections : admins, users or guests.

An administrator has the highest authority he can edit or delete any post. A user and a guest have equal privileges and they can edit or delete only their own posts.



# Theming specter


Theming specter is incredibly easy. In the `\views` directory there are templates that use pure html and a bit of [mustache](http://mustache.github.io/) by default theyu are all built on twitter bootstrap so just by switching the css to one of the [swatches](http://bootswatch.com/) you can get a lot of diversity. Other wise if you prefer to write you own css you can create a styles file in `\specter\public\styles` directory and link it to any template that you want. 


Specter imposes no restrictions on the structuring your markup either. Only thing it cares about is the mustache variables. As long as you are using the right variables in the templates feel free to change the html structure to any form that you want.


# Coming soon

Detailed tutorials on how  to configure, modify and personalize specter.
