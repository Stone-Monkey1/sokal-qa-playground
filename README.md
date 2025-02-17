Welcome to the testing ground for our QA tool. I made this an angular application. It might have been better in the short term to make this a Vue app to match our QA application. However, I think it's important for us to get experience working in different frontend frameworks. Exposure to new things is good, also, all the frontend frameworks are quite similar. The main difference between a Vue project and an Angular project is that Angular uses ts (TypeScript) instead of the js (JavaScript) used in Vue and what we typically use. You'll find that ts does basically everything js does, and then some. It's just a bit more modern, but it hsould look pretty similar to what you're used to. Additionally, we shoouldn't be needing to use much ts in the application anyway, just as a way to help us tie things together.

Where are things?
1. Angular projects are very well organized. It's what typically makes Angualr great for large projects, but a bit overkill for smaller projects, like ours :).
2. If you navigate into frontend > src > app you'll notice a pages file and several app. files. These are the nervous system of our project.
3. I'll give a basic rundown of these files:
    app.component.css - ignore this we'll put any global CSS we need in the styles.css file.
    app.component.html - this is where we put the components we're using in the project. Currently this just has our <app-navigation></app-navigation> component, which is our navigation bar. You'll notice that this nomenclature matches what you'll find in src > app > components > navigation.components.ts as the "selector". This just means you need to call in an HTML file to get that component to populate. We also have the <router-outlet></router-outlet> which displays the content of whatever page we're on. Easy!
    app.component.spec.ts - can ignore this, it gets auto generated when making the application
    app.component.ts - this file ties all the other app. files together. It's also where I added a script to set the titles of the pages in the project.
4. Pages are stored in frontend > src > app > pages. Each page has it's own folder that contains a .css, .html, .spec.ts, and .ts files. The HTML file contains the HTML for the page, the CSS contains the CSS for the page, the .ts file ties it all together, and you can ignore the spec.ts file. If you want to add any content, it shoould feel pretty similar to what we typically do, except CSS and HTML are stored in different locations.

How can I add another component?
1. Open the terminal.
2. Ensure you're inside the pages file, so you may need to cd frontend/src/app/pages.
3. in the terminal type "ng g component componentName" change componentName to the name of the page or component you want.
4. Currently there is an issue with the generate component command not being updated to the current formatting Angular requires, so you'll need to manually go into the .ts file that was created from the command and add "standalone: true," underneath the selector.
5. You'll then need to go to app.routes.ts and ensure you're new page is being imported, you can jsut match the formatting of the other imports present in there.