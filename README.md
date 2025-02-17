Welcome to the testing ground for our QA tool. I made this an angular application. It might have been better in the short term to make this a Vue app to match our QA application. However, I think it's important for us to get experience working in different frontend frameworks. Exposure to new things is good, also, all the frontend frameworks are quite similar. The main difference between a Vue project and an Angular project is that Angular uses ts (TypeScript) instead of the js (JavaScript) used in Vue and what we typically use. You'll find that ts does basically everything js does, and then some. It's just a bit more modern, but it hsould look pretty similar to what you're used to. Additionally, we shoouldn't be needing to use much ts in the application anyway, just as a way to help us tie things together.

How to get the project on your computer:

1. Open the console in VSCode.
2. Run "git clone https://github.com/Stone-Monkey1/sokal-qa-playground.git"
3. Go back into the terminal and navigate into the repository you just cloned by typing "cd sokal-qa-playground"
4. Now, you need to download the package dependencies.
5. While still in your sokal-qa-playground file, you'll need to "cd frontend" this navigates into the frontend file.
6. To run the application, while in the frontend file in the terminal, run "ng serve" this will run the applcication.
7. Navigate to http://localhost:4200/ to view the application.

Where are things?
1. Angular projects are very well organized. It's what typically makes Angualr great for large projects, but a bit overkill for smaller projects, like ours :).
2. If you navigate into frontend > src > app you'll notice a pages file and several app. files. These are the nervous system of our project.
3. I'll give a basic rundown of these files:
    app.component.css - ignore this we'll put any global CSS we need in the styles.css file.
    app.component.html - this is where we put the components we're using in the project. Currently this just has our <app-navigation></app-navigation> component, which is our navigation bar. You'll notice that this nomenclature matches what you'll find in src > app > components > navigation.components.ts as the "selector". This just means you need to call in an HTML file to get that component to populate. We also have the <router-outlet></router-outlet> which displays the content of whatever page we're on. Easy!
    app.component.spec.ts - can ignore this, it gets auto generated when making the application
    app.component.ts - this file ties all the other app. files together. It's also where I added a script to set the titles of the pages in the project.
4. Pages are stored in frontend > src > app > pages. Each page has it's own folder that contains a .css, .html, .spec.ts, and .ts files. The HTML file contains the HTML for the page, the CSS contains the CSS for the page, the .ts file ties it all together, and you can ignore the spec.ts file. If you want to add any content, it shoould feel pretty similar to what we typically do, except CSS and HTML are stored in different locations.

How can I add another page or update CSS?
1. Open the terminal.
2. Ensure you're inside the pages file, so you may need to cd frontend/src/app/pages.
3. in the terminal type "ng g component componentName" change componentName to the name of the page or component you want.
4. Currently there is an issue with the generate component command not being updated to the current formatting Angular requires, so you'll need to manually go into the .ts file that was created from the command and add "standalone: true," underneath the selector.
5. You'll then need to go to app.routes.ts and ensure you're new page is being imported, you can jsut match the formatting of the other imports present in there.

How to add what you made to github:

1. cd back into the main file sokal-qa-playground.
2. Please make sure you're in the sokal-qa-playground file in the terminal before continuing.
3. If you're adding new components, or CSS, you should be able to just run "git add ." this will add all changed files to the next commit. If you only want to add certain files, you can run "git add XYZ" "XYZ" the relative path of the file you want added.
4. Once you've added the files you changed you're ready to commit "git commit -m "Added specials page"".
5. Before we push we first need to make sure you have the most updated version of the repository, in case someone made an update while you were working on yours. To do that run "git pull origin main --rebase". If no one else has pushed changes, Git will say "Already up to date". If someone has pushed changes, Git will reapply their work on top of the latest commit.
6. If there are discrepancies github will ask if you want to merge them manually, you can probably do that since the changes SHOULDN'T me many. Since we'll only be in a few files :D :D :D
7. Once you've made the manual changes you'll need to mark the changes resolved by running "git add frontend/src/app/pages/specials.component.html" or whichever file it was that had discrepancies. Then, move on with the rebase "git rebase --continue". Then you'll do the same process for the next file.
8. Run "git push origin main"
9. Hopefully it's that smooth