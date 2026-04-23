function foreign(language) {
    if(language === "USA" || language === "England") {
        console.log("English");
    } else if(language === "Argentina" ||  language === "Mexico" || language === "Spain")  {
        console.log("Spanish");
    } else if(language === "Spanish"){
            console.log("Argentina" , "Mexico");
    } else if(language === "English"){
            console.log("USA");
    }
    else{
        console.log("unknown");
    }
}

foreign("USA");
foreign("Argentina");
foreign("Mexico");
foreign("Germany");