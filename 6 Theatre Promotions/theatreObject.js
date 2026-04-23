function theatre(day, age) {

    const prices = {
        Weekday: [12, 18, 12],
        Weekend: [15, 20, 15],
        Holiday: [5, 12, 10]
    };

    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    let index;

    if (age <= 18) {
        index = 0;
    } else if (age <= 64) {
        index = 1;
    } else {
        index = 2;
    }

    console.log(prices[day][index] + "$");
}