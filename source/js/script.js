

//Переменные для окна отправки формы

var popupSuccess = document.querySelector(".popup--success");
var buttonSend = document.querySelector(".review__button");
var closeSuccess = document.querySelector(".popup__close--success");
var popupFailure = document.querySelector(".popup--failure");
var closeFailure = document.querySelector(".button--close-failure");
var review = document.querySelector(".review");
var reviewName = review.querySelector("[name=user-name]");
var reviewSurname = review.querySelector("[name=user-surname]");
var reviewPatronymic = review.querySelector("[name=patronymic]");
var userTel = review.querySelector("[name=user-tel]");
var userMail = review.querySelector("[name=user-mail]");
var message = review.querySelector("[name=message]");
var empty = "";


//Вызов всплывающих окошек

buttonSend.addEventListener("click", function(evt) {
  if (reviewName.value === empty || reviewSurname.value === empty || reviewPatronymic.value === empty || userTel.value === empty || userMail.value === empty || message.value === empty) {
    evt.preventDefault();
    popupFailure.classList.add("modal-show");
  }

});

closeSuccess.addEventListener("click", function(evt){
  evt.preventDefault();
  popupSuccess.classList.remove("modal-show");
});

closeFailure.addEventListener("click", function(evt){
  evt.preventDefault();
  popupFailure.classList.remove("modal-show");
});






