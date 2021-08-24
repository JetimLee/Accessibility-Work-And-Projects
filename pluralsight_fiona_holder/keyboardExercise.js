const my_input = document.getElementById("my_input");
const otherInput = document.getElementById("otherInput");

const dKey = () => {
  console.log("you pressed the d key!");
};
const ctrlAndApostrophe = () => {
  console.log("You pressed the control and the ' key together!");
};
otherInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
my_input.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "d") {
    dKey();
  } else if (e.key === "'" && e.ctrlKey) {
    ctrlAndApostrophe();
  }
  let inputValue = e.target.value;
  console.log(inputValue);
});

const allFormInputs = document.getElementsByTagName("input");

const submitBtn = document.getElementById("submitBtn");
const validationSum = document.getElementById("validation-sum");
console.log(submitBtn);
const validateInputs = (e) => {
  //   e.preventDefault();
  for (let i = 0; i < allFormInputs.length; i++) {
    if (
      allFormInputs[i].value === "" &&
      allFormInputs[i].hasAttribute("required")
    ) {
      allFormInputs[i].setAttribute("aria-invalid", true);
      allFormInputs[i].classList.add("error");
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `${allFormInputs[i].name} is empty, please provide a value`;
      validationSum.append(errorMessage);
    }
  }
};

submitBtn.addEventListener("click", () => {
  validateInputs();
});
