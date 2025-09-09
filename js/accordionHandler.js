document.querySelectorAll("#accordion .question").forEach((question) => {
    question.addEventListener("click", () => {
        const allAnswers = document.querySelectorAll("#accordion .answer");
        const allQuestions = document.querySelectorAll("#accordion .question");
        const answer = question.nextElementSibling;

        const isOpen = answer.classList.contains("open");

        allAnswers.forEach((ans) => ans.classList.remove("open"));
        allQuestions.forEach((q) => q.classList.remove("active"));

        if (!isOpen) {
            answer.classList.add("open");
            question.classList.add("active");
        }
    });
});
