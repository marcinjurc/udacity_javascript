/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Marcin");

 //var awesomeThoughts = "I'm Marcin and I am AWESOME";
 //var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 //$("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%", "Marcin Jurczyński");
 var formatedRole = HTMLheaderRole.replace("%data%","Web Developer");

 $("#header").prepend(formattedName);
 $("#header").append(formatedRole);
