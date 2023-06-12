function titleCaseEdit(title) {
  // Insert code here;
 
  const words = title.toLowerCase().split(" ");
  
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const titleCase = capitalizedWords.join(" ");

  return titleCase;
}

// Do not edit this line;
module.exports = titleCaseEdit;
