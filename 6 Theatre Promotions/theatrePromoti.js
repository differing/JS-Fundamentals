/*Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
Weekday	12$	18$	12$
Weekend	15$	20$	15$
Holiday	5$	12$	10$
 */

function theatre(day, age) {

    if(age >= 0 && age <= 18) {
        if(day === "Weekday") {
            console.log("12$");
        } else if (day === "Weekend"){
            console.log("15$");
            
        } else if(day === "Holiday") {
            console.log("5$");
            
        }
    } else if(age >= 19 && age <= 64) {
        if(day === "Weekday") {
            console.log("18$");
        } else if (day === "Weekend"){
            console.log("20$");
            
        } else if(day === "Holiday") {
            console.log("12$");
            
        }
    } else if(age >= 65 && age <= 122) {
        if(day === "Weekday") {
            console.log("12$");
        } else if (day === "Weekend"){
            console.log("15$");
            
        } else if(day === "Holiday") {
            console.log("10$");
            
        }
    } else {
        console.log("Error!");
        
    }
}

theatre('Weekday', 42);