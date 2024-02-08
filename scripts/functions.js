// Function to generate HTML content for stars based on the rating value
function generateStarsHTML(ratingValue) {
  const numStars = Math.floor(ratingValue);
  let starsHTML = "";
  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      // Add a filled star
      starsHTML += '<i class="fa fa-star star "></i>';
    } else {
      // Add an empty star
      starsHTML += '<i class="fa fa-star" style="color: #E6EAEF;"></i>';
    }
  }
  return starsHTML;
}
//------------------------------------------------------------------------------------------------------------------------
// Function to toggle Favorite Icon to do somthing
function toggleFavIcon(favIcon) {
  favIcon.addEventListener("click", function () {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");
  });
}
//------------------------------------------------------------------------------------------------------------------------
// Function to update carousel
function updateCarousel(inner, index) {
  inner.style.transform = `translateX(-${index * 100}%)`;
}
//-----------------------------------------------------------------------------------------------------
// Function fetch Carousel Images

function fetchCarouselImages(carouselImagesSrcs) {
  let carouselElementHtml = "";
  carouselImagesSrcs.forEach((ele) => {
    carouselElementHtml += `
    <div class="carousel-item">
    <img src="${ele.imgSrc}" alt=${ele.alt} />
    </div>`;
  });
  return carouselElementHtml;
}
//-----------------------------------------------------------------------------------------------------
// Functions to fetch Desc Data
function fetchDescData(decriptionData) {
  let descHtml = `<div class="title">
<p>${decriptionData.title}</p>
</div>
<div class="desc-card">
<p>
${decriptionData.description}
</p>
</div>`;
  return descHtml;
}

//------------------------------------------------------------------------------------------------------------------------
// Function to generate HTML content for Services Cards based on the services data
function fetchServicesCards(servicesData) {
  let servicesCardHtml = "";
  servicesData.forEach((ele) => {
    servicesCardHtml += `
    <div class="service-card">
    <div class="card-top">
    <i class="fa-regular fa-circle"></i>
    <i class="fa-solid fa-circle-check hidden"></i>
    <p>
    ${ele.description}
    </p>
    </div>
    <div class="card-botom">
    <div class="card-botom-box">
    <p>$ ${ele.price}</p>
    </div>
    <div class="card-botom-box">
    <p>${ele.period}</p>
    </div>
    </div>
    </div>
    `;
  });
  return servicesCardHtml;
}
// Function to generate HTML content for Services Title based on the services data
function fetchServicesRatingTitle(serviceData) {
  let servicesTitleHtml = `<div class="title2"><p>
    <span class="star"><i class="fa fa-star"></i></span> ${serviceData.rating}
    Service Rating .  ${serviceData.ratingCount} Ratings
  </p>
  </div>`;
  return servicesTitleHtml;
}
//------------------------------------------------------------------------------------------------------------------------
// Function to select Service Card
function selectServiceCards(serviceCards, selectAllButton) {
  // Add event listeners to each service card
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Toggle selection state by toggling CSS class
      card.classList.toggle("selected");

      // Toggle icon based on selection state
      const circleIcon = card.querySelector(".fa-circle");
      circleIcon.classList.toggle("hidden");

      const checkIcon = card.querySelector(".fa-circle-check");
      checkIcon.classList.toggle("hidden");
    });
  });
  // Add event listener to select all button
  selectAllButton.addEventListener("click", () => {
    // Toggle selection state for all service cards
    serviceCards.forEach((card) => {
      if (!card.classList.contains("selected")) {
        card.classList.add("selected");

        // Update icons
        const circleIcon = card.querySelector(".fa-circle");
        circleIcon.classList.add("hidden");

        const checkIcon = card.querySelector(".fa-circle-check");
        checkIcon.classList.remove("hidden");
      }
    });
  });
}
//------------------------------------------------------------------------------------------------------------------------
// Function to fill the container with service rate HTML
function fillServiceRatingsContainer(serviceRates) {
  // HTML content for all service rates
  let serviceRatesHTML = "";

  // Loop through each service rate
  serviceRates.forEach(function (rateData) {
    // Calculate number of filled stars
    let filledStars = Math.round(rateData.rating);

    // Create HTML for filled stars
    let filledStarsHTML = "";
    for (let i = 0; i < filledStars; i++) {
      filledStarsHTML += '<i class="fa fa-star star"></i>';
    }

    // Create HTML for empty stars
    let emptyStarsHTML = "";
    for (let i = 0; i < 5 - filledStars; i++) {
      emptyStarsHTML += '<i class="fa fa-star " style="color: #E6EAEF"></i>';
    }
    const ratingInt = parseInt(rateData.rating);
    // Create HTML for service rate
    let serviceRateHTML = `
      <div class="service-rate">
        <div class="service-name">
          <span>${
            rateData.name
          } <i class="fa fa-star star"></i> ${rateData.serviceRate.toFixed(
      1
    )}</span>
        </div>
        <div class="service-stars">
          ${filledStarsHTML}${emptyStarsHTML}
        </div>
        <div class="service-bar">
          <div class="service-bar-inner" style="width: 100%">
            <div class="filled-portion"></div>
            <div class="remaining-portion"></div>
          </div>
          <span class="rating-numbers">${ratingInt}</span>
        </div>
      </div>
    `;

    serviceRatesHTML += serviceRateHTML;
  });
  return serviceRatesHTML;
}
//----------------------------------------------------------------------------------------------
// Function to fetch the reviews of users
function fetchReviews(reviewData, userData) {
  let reviewCardHtml = "";
  reviewData.forEach((review) => {
    reviewCardHtml += `<div class="review-card">
<div class="user-review">
  <img src="${review.userImg}" alt="User" />
  <div class="user-rate">
    <span class="user-name">${review.user}</span>
    <span>
      <span>
      ${generateStarsHTML(review.rating)}
      </span>
      <span class="time">${review.time}</span>
    </span>
    <p class="review-text">
    ${review.reviewText}
    </p>
  </div>
</div>
</div>`;
  });
  let reviewPostHtml = ` <div class="review-post">
  <img src="${userData.userImg}" alt="User" />
  <div class="user-rate">
    <div class="input-container">
      <textarea placeholder="Write your review here"></textarea>
      <button class="post-review-btn">Post Review</button>
    </div>
  </div>
</div>
  `;
  let reviewContainerHtmlm = reviewCardHtml + reviewPostHtml;
  return reviewContainerHtmlm;
}
//----------------------------------------------------------------------------------------------------------
// Function to create and fill seller Account Data services card
// Function to create and fill seller Account Data services card
function fetchSellerData(sellerData) {
  let cardContainer = `<div class="profile-info">
  <img src="${sellerData.imgSrc}" alt="sellerImg">
  <p>Eslam Gouda </p>
  <p> <i class="fa-solid fa-location-dot"></i> Cairo ,Egypt</p>
  <div class="profile-rating">
${generateStarsHTML(sellerData.rating)}
    <span>${sellerData.rating} (${sellerData.ratingCount})</span>
  </div>
  </div>
  <div class="profile-icons">
  <div class="icon">
    <i class="fa-solid fa-award"></i>
  </div >
  <div class="icon">
    <i class="fa-solid fa-arrow-right-to-bracket"></i>
    </div>
  <div class="icon">
    <i class="fa-regular fa-address-card"></i>
  </div>
  </div>
  <div class="profile-desc">
  <p>${sellerData.desc}</p>
  </div>`;

  return cardContainer;
}
//----------------------------------------------------------------------------------------------------------

function fetchInfoData(infoData) {
  let infoCardContainer = `<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-dollar-sign"></i><span>Price</span>
</div>
<div class="info-right">
${infoData.price}
</div>
</div>
<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-clock"></i><span>Delivery Duration</span>
</div>
<div class="info-right">
${infoData.deliveryDuration}</div>
</div>
<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-basket-shopping"></i><span>In Progress Orders</span>
</div>
<div class="info-right">
${infoData.inProgressOrders}
</div>
</div>
<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-user-group"></i><span>Customers</span>
</div>
<div class="info-right">
${infoData.customers}
</div>
</div>
<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-percent"></i><span>Sales</span>
</div>
<div class="info-right">
${infoData.sales}
</div>
</div>
<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-list"></i><span>Category</span>
</div>
<div class="info-right">
${infoData.category}
</div>
</div>
<div class="info-row">
<div class="info-left">
  <i class="fa-solid fa-list"></i><span>Subcategory</span>
</div>
<div class="info-right">
${infoData.subcategory}
</div>
</div>`;
  return infoCardContainer;
}
//----------------------------------------------------------------------------------------------------------
// Function to create and fill suggested services card
function createServiceCard(card) {
  let cardContainer = `
 <div class="card">
 <div class="fav">
 <i class="fa-regular fa-heart"></i>
</div>
 <img
   class="service-img"
   src="${card.imgSrc}"
   alt="service Image"
 />
 <div class="description">
   <p>
     ${card.description}
   </p>
   <div class="icons">
     <i class="fa fa-star star"></i>
     <span>${card.stars}</span>
     <i class="fa fa-sharp fa-solid fa-cart-shopping"></i>
     <span>${card.cartCount}</span>
   </div>
   <div class="profile">
     <div>
       <img src="${card.imgSrc}" alt="User" />
       <span>${card.userName}</span>
     </div>
     <div class="cart">
       <i class="fa fa-sharp fa-solid fa-tag"></i>
       <span>${card.price}</span>
     </div>
   </div>
 </div>
 </div>`;

  return cardContainer;
}
//----------------------------------------------------------------------------------------------------------
// Function to create and fill suggested services card
function createSellerServiceCard(card) {
  let cardContainer = `<div class="fourth-aside-card">
  <img
    class="service-img"
    src="${card.imgSrc}"
    alt="service Image"
  />
  <div class="fourth-card-right">
    <p>
      Lorem ipsum dolor sit ame, consecteturLorem ipsum dolor...
    </p>
    <div class="fourth-card-icons">
      <i class="fa fa-star star"></i>
      <span>${card.rate}</span>
      <span>(${card.rateCount})</span>
      <div class="fourth-card-cart">
        <i class="fa fa-sharp fa-solid fa-tag"></i>
        <span>${card.price}</span>
      </div>
    </div>
  </div>
  <div class="fav-icon">
    <i class="fa-regular fa-heart"></i>
   </div>
  </div>
</div>`;

  return cardContainer;
}
//----------------------------------------------------------------------------------------------------------
// Function to create and fill suggest services cards Container
function fillCardsContainer(dataArray) {
  let cardsContainerHtml = "";
  dataArray.forEach((card) => {
    cardsContainerHtml += createServiceCard(card);
  });
  return cardsContainerHtml;
}
//----------------------------------------------------------------------------------------------------------
// Function to create and fill Seller services cards Container
function fillSellerCardsContainer(dataArray) {
  let cardsContainerHtml = "";
  dataArray.forEach((card) => {
    cardsContainerHtml += createSellerServiceCard(card);
  });
  return cardsContainerHtml;
}
//----------------------------------------------------------------------------------------------------------
// Function to toggel and make action and return indexes of toggeled cards at favorite icon
function toggleFavIcons(favIcons) {
  let cardsIndexes = [];

  favIcons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("fa-regular");
      this.classList.toggle("fa-solid");

      // Check if the icon has class fa-solid after toggling
      if (this.classList.contains("fa-solid")) {
        // Add the index to the array if the icon is solid
        cardsIndexes.push(index);
      } else {
        // Remove the index from the array if the icon is regular
        const idx = cardsIndexes.indexOf(index);
        if (idx !== -1) {
          cardsIndexes.splice(idx, 1);
        }
      }

      console.log("Toggled indexes:", cardsIndexes);
    });
  });

  return cardsIndexes;
}
//----------------------------------------------------------------------------------------------------------
