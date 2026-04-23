function theatre(day, age) {

    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    if (age <= 18) {
        if (day === "Weekday") console.log("12$");
        else if (day === "Weekend") console.log("15$");
        else if (day === "Holiday") console.log("5$");

    } else if (age <= 64) {
        if (day === "Weekday") console.log("18$");
        else if (day === "Weekend") console.log("20$");
        else if (day === "Holiday") console.log("12$");

    } else {
        if (day === "Weekday") console.log("12$");
        else if (day === "Weekend") console.log("15$");
        else if (day === "Holiday") console.log("10$");
    }
}

theatre("Weekday", 42);
theatre("Holiday", -5);
theatre("Holiday", 150);