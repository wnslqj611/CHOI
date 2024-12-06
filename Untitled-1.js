// 예: 문의 폼 전송 시 알림
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 폼 제출 방지
    alert("문의가 접수되었습니다. 감사합니다!");
});
