function takeANumber(people, name){
  people.push(name);
  let position = people.length;
  
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(people){
  if(people.length){
    let head = people.shift();
    return `Currently serving ${head}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  let len = line.length;
  if(len){
    let output = "The line is currently: ";
    let indexedPeople = [];

    for(let i=0; i<len; i++){
      let position = i + 1;
      let person = line[i];
      indexedPeople.push(`${position}. ${person}`);
    }

    output += indexedPeople.join(", ");
    return output;
  }
  else{
    return "The line is currently empty.";
  }
}

let lastNumber = 1;
function takeANumber(katzDeliLine){
    katzDeliLine.push(lastNumber);
    return `Welcome!  You're ticket number #${lastNumber++}`;
}

// takeANumber(katzDeliLine)  "Welcome! You're ticket number #1"
// takeANumber(katzDeliLine)  "Welcome! Your'e ticker number #2"

// nowServing(katzDeliLine)  "Currently serving #1"
// nowServing(katzDeliLine)  "Currently serving #2" []

// takeANumber(katzDeliLine)  "Welcome! You're ticket number #3"










