const person = {
  firstName: 'George',
  lastName: 'Michael',
  hobby: 'fighting for democracy!',
};

console.log(person);

fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Software engineer';
console.log('George has a job and its: ', person.job);

person['previousJob'] = 'Singer';
console.log("George's previous job was a ", person['previousJob']);

console.log('The complete person object: ', person);
