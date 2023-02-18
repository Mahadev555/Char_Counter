const textarea1 = document.getElementById("textarea");
const charTotal = document.getElementById("total_char");
const charRemain = document.getElementById("remain_char");

textarea1.addEventListener("keyup", () => {
    updateC();
  });

function updateC(){
charTotal.innerText = textarea1.value.length;
charRemain.innerText = textarea1.getAttribute("maxlength") - textarea1.value.length;
}
