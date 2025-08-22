document.getElementById("bmiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let age = parseInt(document.getElementById("age").value);
  let feet = parseInt(document.getElementById("heightFeet").value) || 0;
  let inches = parseInt(document.getElementById("heightInches").value) || 0;
  let weight = parseFloat(document.getElementById("weight").value);

  let resultBox = document.getElementById("result");

  // ✅ Always clear old result before new one
  resultBox.innerHTML = "";

  // Convert height to meters
  let totalInches = (feet * 12) + inches;
  let heightMeters = totalInches * 0.0254;

  if (heightMeters <= 0 || weight <= 0) {
    resultBox.innerHTML = "⚠️ Please enter valid height and weight.";
    return;
  }

  let bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi <= 24.9) category = "Normal weight";
  else if (bmi <= 29.9) category = "Overweight";
  else category = "Obese";

  // ✅ Show result (inputs stay as they are)
  resultBox.innerHTML = `${name ? name + "," : ""} your BMI is <b>${bmi}</b> <br/>(${category})`;
});
