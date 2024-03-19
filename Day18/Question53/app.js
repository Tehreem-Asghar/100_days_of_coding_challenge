// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside
//another list that shows what a computer programmer knows, like coding languages,
// tools, and software frameworks. Find a way to get three specific skills from
//this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier
// to work with and understand specific pieces of information.
var DeveloperSkills = {
    Languages: ["javaScript", "TypeScript", "phython"],
    tools: ["git", "webpack", "docker"],
    framWorks: ["React", "Spring", "Django"],
};
var Languages = DeveloperSkills.Languages, framWorks = DeveloperSkills.framWorks, tools = DeveloperSkills.tools;
console.log("Language: ".concat(DeveloperSkills.Languages[0], ", Tools: ").concat(DeveloperSkills.tools[0], ", FrameWork: ").concat(DeveloperSkills.framWorks[0]));
