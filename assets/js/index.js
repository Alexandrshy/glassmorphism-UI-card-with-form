const radios = document.querySelectorAll("input[type=radio]");

radios.forEach((element) => {
  element.addEventListener("click", (event) => {
    const value = event.currentTarget.value;
    const activeForm = document.querySelector(`.invite__item--${value}`);
    const forms = document.querySelectorAll(
      `.invite__item:not(.invite__item--${value})`
    );

    forms.forEach((item) => {
      item.classList.remove("isActive");
    });

    activeForm.classList.add("isActive");
  });
});
