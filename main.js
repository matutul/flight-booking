function getElement(id) {
  return document.getElementById(id);
}
const firstClassInput = getElement('firstClassInput');
const economyInput = getElement('economyInput');
// const firstClassIncreaseBtn = getElement('firstClassIncreaseBtn');
// const firstClassDecreaseBtn = getElement('firstClassDecreaseBtn');
// const economyIncreaseBtn = getElement('economyIncreaseBtn');
// const economyDecreaseBtn = getElement('economyDecreaseBtn');
const subTotalCost = getElement('subTotalCost');
const vatCharge = getElement('vatCharge');
const totalCost = getElement('totalCost');
const firstClassPrice = 150;
const economyPrice = 100;

function ticketHandler(id, isIncrease) {
  const ticketCount = getElement(id);
  if (isIncrease) {
    if (ticketCount.value == '') {
      ticketCount.value = 1;
    }
    else {
      ticketCount.value = parseInt(ticketCount.value) + 1;
    }
  }
  else {
    if (ticketCount.value != "" && parseInt(ticketCount.value) > 0) {
      ticketCount.value = parseInt(ticketCount.value) - 1;
    }
  }
  costCalculator();
};


function costCalculator() {
  if (firstClassInput.value == '') {
    firstClassInput.value = 0;
  }
  if (economyInput.value == '') {
    economyInput.value = 0;
  }
  let totalPrice = parseInt(firstClassInput.value) * firstClassPrice + parseInt(economyInput.value) * economyPrice;
  let vat = (totalPrice * 10) / 100;
  subTotalCost.innerText = '$' + totalPrice;
  vatCharge.innerText = '$' + vat;
  totalCost.innerText = '$' + (totalPrice + vat);
};

// for popup window after book now button clicked
function bookingPopUp() {
  let firstClassTicket = parseInt(firstClassInput.value);
  let economyTicket = parseInt(economyInput.value);
  if (firstClassTicket > 0) {
    document.getElementById('cost').appendChild(setPriceTag(firstClassTicket, true));
  }
  if (economyTicket > 0) {
    document.getElementById('cost').appendChild(setPriceTag(economyTicket, false));
  }
  if (firstClassInput.value == '' && economyInput.value == '') {
    noTicketSetup();
  }
  if (firstClassTicket <= 0 && economyTicket <= 0) {
    noTicketSetup();
  }

  let costDiv = (document.getElementById('priceTag')).cloneNode(true);
  costDiv.className = 'ticketInfo';
  document.getElementById('cost').append(costDiv);


  document.getElementById('main').style.opacity = '.1';
  document.getElementById('window-popup').style.display = 'flex';

}

function noTicketSetup() {
  let popUpForNull = document.createElement('p');
  popUpForNull.innerText = 'No ticket selected..!';
  popUpForNull.className = 'ticketInfo';
  document.getElementById('cost').appendChild(popUpForNull);

}

// setting price tag in the pop up window
function setPriceTag(ticket_count, isFirstClass) {
  let ticketName = document.createElement('p');
  let totalTicketPrice = document.createElement('p');
  if (isFirstClass) {
    ticketName.innerText = 'First Class ($150)';
    totalTicketPrice.innerText = 'Cost: $' + (ticket_count * 150);
  }
  else {
    ticketName.innerText = 'Economy ($100)';
    totalTicketPrice.innerText = 'Cost: $' + (ticket_count * 100);
  }
  let ticketQty = document.createElement('p');
  ticketQty.innerText = 'Quantity: ' + ticket_count;

  let priceTagDiv = document.createElement("div");
  priceTagDiv.appendChild(ticketName);
  priceTagDiv.appendChild(ticketQty);
  priceTagDiv.appendChild(totalTicketPrice);
  priceTagDiv.classList = 'ticketInfo';
  return priceTagDiv;
}

function backToHome() {
  document.getElementById('cost').innerHTML = '';
  document.getElementById('main').style.opacity = '1';
  document.getElementById('window-popup').style.display = 'none';
}

// let ticketName = document.createElement('p');
// ticketName.innerText = 'First Class ($150)';
// let ticketQty = document.createElement('p');
// ticketQty.innerText = 'Quantity: ' + firstClassTicket;
// let totalTicketPrice = document.createElement('p');
// totalTicketPrice.innerText = 'Cost: ' + (firstClassTicket * 150);

  // firstClassIncreaseBtn.addEventListener('click', function () {
  //     if (firstClassInput.value == '') {
  //         firstClassInput.value = 1;
  //     }
  //     else {
  //         firstClassInput.value = parseInt(firstClassInput.value) + 1;
  //     }
  // });
  // firstClassDecreaseBtn.addEventListener('click', function () {
  //     if (firstClassInput.value != "" && parseInt(firstClassInput.value) > 0) {
  //         firstClassInput.value = parseInt(firstClassInput.value) - 1;
  //     }
  // });