const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep() {
  if (currentStep > 0) {
    steps[currentStep - 1].classList.remove('active');
  }
  if (currentStep < steps.length) {
    steps[currentStep].classList.add('active');
    currentStep++;
    setTimeout(showStep, 1000); // Delay between steps
  }
}

showStep();
