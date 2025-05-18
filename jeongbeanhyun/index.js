//조건에 맞지 않을 경우 에러메세지
function showError(input, errorId, message){
    input.style.border = "2px solid red";
    const errorDiv = document.getElementById(errorId);
    errorDiv.textContent = message;
    errorDiv.style.color = "red";
}

//조건 성공했을 경우
function showSuccess(input, errorId){
    input.style.border = "2px solid green";
    document.getElementById(errorId).textContent = "";
}

//이름 검증
function validateName(input, errorId){
    let nameValue = input.value.trim();

    if(nameValue === ""){
        showError(input, errorId, "이름을 입력하세요.");
        return false;
    }

    showSuccess(input, errorId);
    return true;
}

//이메일 검증
function validateEmail(input, errorId){
    let email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        showError(input, errorId, "유효한 이메일을 입력하세요.");
        return false;
    }

    showSuccess(input, errorId);
    return true;
}

//비밀번호 검증
function validatePassword(input, errorId){
    let pw = input.value.trim();
    const pwPattern = /^.{6,}$/;

    if(!pwPattern.test(pw)){
        showError(input, errorId, "비밀번호는 최소 6자입니다.");
        return false;
    }

    showSuccess(input, errorId);
    return true;
}

//비밀번호가 일치하지 않을 경우
function validatePasswordMatch(input, confirmInput, errorId){
    let pw1 = input.value.trim();
    let pw2 = confirmInput.value.trim();

    if(pw1 != pw2){
        showError(confirmInput, errorId, "비밀번호가 일치하지 않습니다.");
        return false;
    }

    showSuccess(confirmInput, errorId);
    return true;
}

//submit 이벤트 함수
function eventSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("pw");
    const passwordConfirmInput = document.getElementById("pwConfirm");

    const isNameValid = validateName(nameInput, "nameError");
    const isEmailValid = validateEmail(emailInput, "emailError");
    const isPasswordValid = validatePassword(passwordInput, "pwError");
    const isPasswordMatchValid = validatePasswordMatch(passwordInput, passwordConfirmInput, "pwConfirmError");

    if(isNameValid && isEmailValid && isPasswordValid && isPasswordMatchValid){
        alert("회원가입 완료!");
    }
}

//form 이벤트리스너
document.querySelector("form").addEventListener("submit", eventSubmit);

//비밀번호 보기 토글
function passwordToggle( ){
    const pwInput = document.getElementById("pw");

    if(pwInput.type === "password"){
        pwInput.type = "text";
    }else{
        pwInput.type = "password";
    }
}

//비밀번호 확인 보기 토글
function passwordConfirmToggle( ){
    const pwInput = document.getElementById("pwConfirm");

    if(pwInput.type === "password"){
        pwInput.type = "text";
    }else{
        pwInput.type = "password";
    }
}

//비밀번호 보기 이벤트
const passwordSpan = document.getElementById("toggle");
passwordSpan.addEventListener("click", passwordToggle);

const passwordConfirmSpan = document.getElementById("toggleConfirm");
passwordConfirmSpan.addEventListener("click", passwordConfirmToggle);

