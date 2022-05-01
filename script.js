//display normal content

let contentMain = `
<div class="section-main">
<div class="rating-star"><img class="" src="images/icon-star.svg" alt="" /></div>
<h1>How did we do?</h1>
<p class="text">
  Please let us know how we did with your support request. All feedback is appreciated to help
  us improve our offering!
</p>
<div class="rating-menu">
  <div class="rating-star">1</div>
  <div class="rating-star">2</div>
  <div class="rating-star">3</div>
  <div class="rating-star">4</div>
  <div class="rating-star">5</div>
</div>
<div class="submit-btn">S u b m i t</div>
</div>`;

window.document.body.innerHTML = contentMain;

//get star value number
const allStar = document.querySelectorAll('.rating-star');
const starValue = [];
let starNumSelceted;

allStar.forEach((element) => {
  let starNum = element.innerHTML;
  starValue.push(starNum);
  element.addEventListener('click', () => {
    window.document.body.innerHTML = `
      <div class="section-main section-center">
      <div class=""><img class="" src="images/illustration-thank-you.svg" alt="" /></div>
      <p class="rating-bar">You selected ${starNum} out of 5</p>
      <h1>Thank you!</h1>
      <p class="text">
        We appreciate you taking the time to give a rating. If you ever need more support, don't
        hesitate to get in touch!
      </p>
    </div>`;
  });
});
starValue.shift(0);
