const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function ticketPrice(age, matinee) {
  let cost = getTicketCost(age);
  if (matinee) {
    cost = matineeDiscount(cost);
  }
  alert('Your ticket will cost $' + cost);
}

function getTicketCost(age) {
  if (age > 12 && age < 65) {
    return GENERAL_ADMISSION_TICKET_COST;
  }
  return CHILD_AND_SENIOR_TICKET_COST;
}

function matineeDiscount(cost) {
  return cost - MATINEE_DISCOUNT;
}