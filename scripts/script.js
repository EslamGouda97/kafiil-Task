//------------------------------------------Header-------------------------------------
const titleElement = document.querySelector(".header .title ");
titleElement.innerHTML = `<h4>${serviceData.title}</h4><p>${serviceData.description}</p>`;

//------------------------------Header Rating-----------------------------------------
const ratingLeft = document.querySelector(".rating-left");
const ratingRight = document.querySelector(".rating-right .fa-heart");

ratingLeft.innerHTML = `${generateStarsHTML(
  serviceData.rating
)}<div class="rating-number">${serviceData.rating} (${
  serviceData.ratingCount
})</div>`;
toggleFavIcon(ratingRight);
//-----------------------------Header carousel---------------------------------------------
const carousel = document.querySelector(".carousel");
const prevBtn = carousel.querySelector(".prev-btn");
const nextBtn = carousel.querySelector(".next-btn");
const carouselInner = carousel.querySelector(".carousel-inner");

carouselInner.innerHTML = fetchCarouselImages(carouselImagesSrc);
let currentIndex = 0;

function updateCarousel(index) {
  currentIndex =
    (index + carouselInner.children.length) % carouselInner.children.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => updateCarousel(currentIndex - 1));
nextBtn.addEventListener("click", () => updateCarousel(currentIndex + 1));

//-------------------------------Fetch the description data----------------------------------
const descSection = document.querySelector(".desc-section");
descSection.innerHTML = fetchDescData(descData);

//-------------------------------Fetch the services data and select a service card----------------
const servicetitleElement = document.querySelector(".section-header .title ");
servicetitleElement.innerHTML = `<p>${ServiceheaderData.title}<P>`;

const servicesCards = document.getElementById("services-cards");
servicesCards.innerHTML = fetchServicesCards(servicesData);

const selectAllButton = document.getElementById("select-all-btn");
const serviceCard = document.querySelectorAll(".service-card");
selectServiceCards(serviceCard, selectAllButton);

//--------------------------------purchase service------------------------------------
const purchaseElement = document.querySelector(".service-purchase .title ");
purchaseElement.innerHTML = `<p>${purchaseData.title}<P>`;

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantitySpan = document.querySelector(".quantity");
const moneyDiv = document.querySelector(".money");
const purchaseBtn = document.querySelector(".purchase-btn");

let count = 0;
const pricePerService = 100;

function updateCount(delta) {
  count += delta;
  if (count < 0) count = 0;
  quantitySpan.textContent = count;
  moneyDiv.textContent = `$${count * pricePerService}`;
}

minusBtn.addEventListener("click", () => updateCount(-1));
plusBtn.addEventListener("click", () => updateCount(1));

purchaseBtn.addEventListener("click", () => {
  // Perform purchase logic here
  alert(
    `You purchased ${count} services for a total of $${(
      count * pricePerService
    ).toFixed(2)}`
  );
});

//--------------------------------------------------Services rating-----------------
let serviceRatingtitle = document.querySelector(".service-rating-title");
serviceRatingtitle.innerHTML = fetchServicesRatingTitle(serviceData);

let serviceRatingElement = document.querySelector(".service-rating-card");
serviceRatingElement.innerHTML = fillServiceRatingsContainer(serviceRates);

document.querySelectorAll(".service-bar").forEach(function (serviceBar) {
  let rating = parseFloat(
    serviceBar.querySelector(".rating-numbers").textContent
  );
  rating = Math.max(0, Math.min(rating, 5));
  let filledPortion = serviceBar.querySelector(".filled-portion");
  filledPortion.style.width = `${(rating / 5) * 100}%`;
});

//------------------------------------------Seller Reviews----------------------------------------------------------
const reviewsContainer = document.querySelector(".reviews-container");
reviewsContainer.innerHTML = fetchReviews(reviewData, userData);

//------------------------------------------suggested services ----------------------------------------------------------
const cardsContainer = document.querySelector(".card-container");
cardsContainer.innerHTML = fillCardsContainer(suggestionArray);

const favIcons = document.querySelectorAll(".fav i");
const favServices = toggleFavIcons(favIcons);

//------------------------------------------seller Account  ----------------------------------------------------------
const sellerAccount = document.querySelector("#seller-account");
sellerAccount.innerHTML = fetchSellerData(sellerData);

//------------------------------------------info card  ----------------------------------------------------------
const infoCard = document.querySelector(".info");
infoCard.innerHTML = fetchInfoData(infoData);

//------------------------------------------seller services ----------------------------------------------------------
const sellerServicesContainer = document.querySelector("#seller-services");
sellerServicesContainer.innerHTML =
  fillSellerCardsContainer(sellerServicesData);

const sellerFavIcons = document.querySelectorAll(".fav-icon i");
const favSellerServices = toggleFavIcons(sellerFavIcons);
//------------------------------------------change languge----------------------------------------------------------
const languageSelect = document.getElementById("languageSelect");
const languageImage = document.getElementById("languageImage");
const languageName = document.getElementById("languageName");

languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  if (selectedLanguage === "english") {
    languageImage.src = "./assets/language/istockphoto-486407806-612x612.jpg";
  } else if (selectedLanguage === "arabic") {
    languageImage.src = "./assets/language/images.png";
  }
});
//------------------------------------------display the drop down ----------------------------------------------------------
document.querySelector(".profile-icon").addEventListener("click", function () {
  var dropdownMenu = document.getElementById("dropDownMenu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});
//------------------------------------------profile data----------------------------------------------------------
const profiledata = document.querySelector(".user-data");
profiledata.innerHTML = `
<span>${userData.name}</span>
<span>${userData.role}</span>`;
