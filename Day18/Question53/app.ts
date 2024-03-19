// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside
//another list that shows what a computer programmer knows, like coding languages,
// tools, and software frameworks. Find a way to get three specific skills from
//this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier
// to work with and understand specific pieces of information.

let DeveloperSkills = {
  Languages: ["javaScript", "TypeScript", "phython"],
  tools: ["git", "webpack", "docker"],
  framWorks: ["React", "Spring", "Django"],
};
let { Languages, framWorks, tools } = DeveloperSkills;

console.log(`Language: ${DeveloperSkills.Languages[0]}, Tools: ${DeveloperSkills.tools[0]}, FrameWork: ${DeveloperSkills.framWorks[0]}`);
