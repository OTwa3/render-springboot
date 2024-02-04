document.addEventListener("DOMContentLoaded", function() {
    let pageNum = 1
    let score = 0
   

    function questionAnswered(questionButtons){
        let isChecked = false
        for (button of questionButtons){
            if (button.checked == true){
                isChecked = true
            }
        }
        return isChecked
    }


    function getAnswer(buttonName, qID){
        if (qID == document.getElementById("q1")){
            if (buttonName.checked == true && buttonName == document.getElementById("1.A.CORRECT")){
                document.getElementById("useranswer1").textContent = "You Answered: A. 16"
                document.getElementById("correctanswer1").textContent = "Correct Answer: A. 16 "
                document.getElementById("useranswer1").style.display = "block"
                document.getElementById("correctanswer1").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("1.B.INCORRECT")){
                document.getElementById("useranswer1").textContent = "You Answered: B. 18"
                document.getElementById("correctanswer1").textContent = "Correct Answer: A. 16 "
                document.getElementById("useranswer1").style.display = "block"
                document.getElementById("correctanswer1").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("1.C.INCORRECT")){
                document.getElementById("useranswer1").textContent = "You Answered: C. 22"
                document.getElementById("correctanswer1").textContent = "Correct Answer: A. 16 "
                document.getElementById("useranswer1").style.display = "block"
                document.getElementById("correctanswer1").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("1.D.INCORRECT")){
                document.getElementById("useranswer1").textContent = "You Answered: D. -4"
                document.getElementById("correctanswer1").textContent = "Correct Answer: A. 16 "
                document.getElementById("useranswer1").style.display = "block"
                document.getElementById("correctanswer1").style.display = "block"
            }
        }
            
        else if (qID == document.getElementById("q2")){
            if (buttonName.checked == true && buttonName == document.getElementById("2.A.INCORRECT")){
                document.getElementById("useranswer2").textContent = "You Answered: A. 20"
                document.getElementById("correctanswer2").textContent = "Correct Answer: C. 21 "
                document.getElementById("useranswer2").style.display = "block"
                document.getElementById("correctanswer2").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("2.B.INCORRECT")){
                document.getElementById("useranswer2").textContent = "You Answered: B. 17"
                document.getElementById("correctanswer2").textContent = "Correct Answer: C. 21 "
                document.getElementById("useranswer2").style.display = "block"
                document.getElementById("correctanswer2").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("2.C.CORRECT")){
                document.getElementById("useranswer2").textContent = "You Answered: C. 21"
                document.getElementById("correctanswer2").textContent = "Correct Answer: C. 21 "
                document.getElementById("useranswer2").style.display = "block"
                document.getElementById("correctanswer2").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("2.D.INCORRECT")){
                document.getElementById("useranswer2").textContent = "You Answered: D. 3"
                document.getElementById("correctanswer2").textContent = "Correct Answer: C. 21 "
                document.getElementById("useranswer2").style.display = "block"
                document.getElementById("correctanswer2").style.display = "block"
            }
        }

        else if (qID == document.getElementById("q3")){
            if (buttonName.checked == true && buttonName == document.getElementById("3.A.INCORRECT")){
                document.getElementById("useranswer3").textContent = "You Answered: A. -18"
                document.getElementById("correctanswer3").textContent = "Correct Answer: D. 1 "
                document.getElementById("useranswer3").style.display = "block"
                document.getElementById("correctanswer3").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("3.B.INCORRECT")){
                document.getElementById("useranswer3").textContent = "You Answered: B. -12"
                document.getElementById("correctanswer3").textContent = "Correct Answer: D. 1 "
                document.getElementById("useranswer3").style.display = "block"
                document.getElementById("correctanswer3").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("3.C.INCORRECT")){
                document.getElementById("useranswer3").textContent = "You Answered: C. 3"
                document.getElementById("correctanswer3").textContent = "Correct Answer: D. 1 "
                document.getElementById("useranswer3").style.display = "block"
                document.getElementById("correctanswer3").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("3.D.CORRECT")){
                document.getElementById("useranswer3").textContent = "You Answered: D. 1"
                document.getElementById("correctanswer3").textContent = "Correct Answer: D. 1 "
                document.getElementById("useranswer3").style.display = "block"
                document.getElementById("correctanswer3").style.display = "block"
            }
        }

        else if (qID == document.getElementById("q4")){
            if (buttonName.checked == true && buttonName == document.getElementById("4.A.CORRECT")){
                document.getElementById("useranswer4").textContent = "You Answered: A. 15"
                document.getElementById("correctanswer4").textContent = "Correct Answer: A. 15 "
                document.getElementById("useranswer4").style.display = "block"
                document.getElementById("correctanswer4").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("4.B.INCORRECT")){
                document.getElementById("useranswer4").textContent = "You Answered: B. 2"
                document.getElementById("correctanswer4").textContent = "Correct Answer: A. 15 "
                document.getElementById("useranswer4").style.display = "block"
                document.getElementById("correctanswer4").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("4.C.INCORRECT")){
                document.getElementById("useranswer4").textContent = "You Answered: C. 8"
                document.getElementById("correctanswer4").textContent = "Correct Answer: A. 15 "
                document.getElementById("useranswer4").style.display = "block"
                document.getElementById("correctanswer4").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("4.D.INCORRECT")){
                document.getElementById("useranswer4").textContent = "You Answered: D. 16"
                document.getElementById("correctanswer4").textContent = "Correct Answer: A. 15 "
                document.getElementById("useranswer4").style.display = "block"
                document.getElementById("correctanswer4").style.display = "block"
            }
        }
       
       
        else if (qID == document.getElementById("q5")){
            if (buttonName.checked == true && buttonName == document.getElementById("5.A.INCORRECT")){
                document.getElementById("useranswer5").textContent = "You Answered: A. 7"
                document.getElementById("correctanswer5").textContent = "Correct Answer: B. 4 "
                document.getElementById("useranswer5").style.display = "block"
                document.getElementById("correctanswer5").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("5.B.CORRECT")){
                document.getElementById("useranswer5").textContent = "You Answered: B. 4"
                document.getElementById("correctanswer5").textContent = "Correct Answer: B. 4 "
                document.getElementById("useranswer5").style.display = "block"
                document.getElementById("correctanswer5").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("5.C.INCORRECT")){
                document.getElementById("useranswer5").textContent = "You Answered: C. 10"
                document.getElementById("correctanswer5").textContent = "Correct Answer: B. 4 "
                document.getElementById("useranswer5").style.display = "block"
                document.getElementById("correctanswer5").style.display = "block"
            }
            else if (buttonName.checked == true && buttonName == document.getElementById("5.D.INCORRECT")){
                document.getElementById("useranswer5").textContent = "You Answered: D. 6"
                document.getElementById("correctanswer5").textContent = "Correct Answer: B. 4 "
                document.getElementById("useranswer5").style.display = "block"
                document.getElementById("correctanswer5").style.display = "block"
            }
        }
       

        
    }

  

    document.getElementById("Next").addEventListener("click", nextQuestion)
    q1Buttons = document.getElementsByName("Q1")
    q2Buttons = document.getElementsByName("Q2")
    q3Buttons = document.getElementsByName("Q3")
    q4Buttons = document.getElementsByName("Q4")
    q5Buttons = document.getElementsByName("Q5")
    function nextQuestion(evt){

        if (pageNum <= 4) {

            if (pageNum == 1){
                let isAnswered = questionAnswered(q1Buttons)
                if (isAnswered == false){
                    alert("Please answer the question before moving on.")
                }
                else {
                    pageNum += 1
                    document.querySelector("#q1").style.display = "none"
                    document.querySelector("#q2").style.display = "block"
                    document.querySelector("#q3").style.display = "none"
                    document.querySelector("#q4").style.display = "none"
                    document.querySelector("#q5").style.display = "none"
                    document.querySelector("#Previous").style.display = "block"
                }
            }

            else if (pageNum == 2){
                let isAnswered = questionAnswered(q2Buttons)
                if (isAnswered == false){
                    alert("Please answer the question before moving on.")
                }
                else {
                    pageNum += 1
                    document.querySelector("#q1").style.display = "none"
                    document.querySelector("#q2").style.display = "none"
                    document.querySelector("#q3").style.display = "block"
                    document.querySelector("#q4").style.display = "none"
                    document.querySelector("#q5").style.display = "none"
                    
                }
               
   
            }

            else if (pageNum == 3){
                let isAnswered = questionAnswered(q3Buttons)
                if (isAnswered == false){
                    alert("Please answer the question before moving on.")
                }
                else {
                pageNum += 1
                document.querySelector("#q1").style.display = "none"
                document.querySelector("#q2").style.display = "none"
                document.querySelector("#q3").style.display = "none"
                document.querySelector("#q4").style.display = "block"
                document.querySelector("#q5").style.display = "none"
                }
            }
   
            else if (pageNum == 4){
                let isAnswered = questionAnswered(q4Buttons)
                if (isAnswered == false){
                    alert("Please answer the question before moving on.")
                }
                else {
                pageNum += 1
                document.querySelector("#q1").style.display = "none"
                document.querySelector("#q2").style.display = "none"
                document.querySelector("#q3").style.display = "none"
                document.querySelector("#q4").style.display = "none"
                document.querySelector("#q5").style.display = "block"
                document.querySelector("#Previous").style.display = "block"
                document.querySelector("#Submit").style.display = "block"
                document.querySelector("#Next").style.display = "none"
                }
            }
        }

        else {
            alert("You've reached the last question. Please submit.")
        }

    }

    document.getElementById("Previous").addEventListener("click", previousQuestion)
    function previousQuestion(evt){
       

        if (pageNum == 2){
            document.querySelector("#q1").style.display = "block"
            document.querySelector("#q2").style.display = "none"
            document.querySelector("#q3").style.display = "none"
            document.querySelector("#q4").style.display = "none"
            document.querySelector("#q5").style.display = "none"
            document.querySelector("#Previous").style.display = "none"
            pageNum -= 1
        }

        else if (pageNum == 3){
            document.querySelector("#q1").style.display = "none"
            document.querySelector("#q2").style.display = "block"
            document.querySelector("#q3").style.display = "none"
            document.querySelector("#q4").style.display = "none"
            document.querySelector("#q5").style.display = "none"
            pageNum -= 1
        }

        else if (pageNum == 4){
            document.querySelector("#q1").style.display = "none"
            document.querySelector("#q2").style.display = "none"
            document.querySelector("#q3").style.display = "block"
            document.querySelector("#q4").style.display = "none"
            document.querySelector("#q5").style.display = "none"
            pageNum -= 1
        }

        else if (pageNum == 5){
            document.querySelector("#q1").style.display = "none"
            document.querySelector("#q2").style.display = "none"
            document.querySelector("#q3").style.display = "none"
            document.querySelector("#q4").style.display = "block"
            document.querySelector("#q5").style.display = "none"
            document.querySelector("#Submit").style.display = "none"
            document.querySelector("#Next").style.display = "block"
            pageNum -= 1

        }

    }


    document.getElementById("Submit").addEventListener("click", submitQuestions)
    function submitQuestions(evt){
        if (pageNum == 5){
            let isAnswered = questionAnswered(q5Buttons)
            if (isAnswered == false){
                alert("Please answer the question before submitting.")
            }
            else {
                if (document.getElementById("1.A.CORRECT").checked){
                    score += 1
                   
                }
        
                if (document.getElementById("2.C.CORRECT").checked){
                    score += 1
                   
                }
        
                if (document.getElementById("3.D.CORRECT").checked){
                    score += 1
                   
                }
        
                if (document.getElementById("4.A.CORRECT").checked){
                    score += 1
                   
                }
        
                if (document.getElementById("5.B.CORRECT").checked){
                    score += 1
                   
                }
                document.querySelector("#q5").style.display = "none"
                document.querySelector("#q4").style.display = "none"
                document.querySelector("#q1").style.display = "none"            
                document.querySelector("#q2").style.display = "none"
                document.querySelector("#q3").style.display = "none"
                document.querySelector("#prompt").style.display = "none"
                document.querySelector("#buttons").style.display = "none"

                getAnswer(document.getElementById("1.A.CORRECT"), document.getElementById("q1"))
                getAnswer(document.getElementById("1.B.INCORRECT"), document.getElementById("q1"))
                getAnswer(document.getElementById("1.C.INCORRECT"), document.getElementById("q1"))
                getAnswer(document.getElementById("1.D.INCORRECT"), document.getElementById("q1"))

                getAnswer(document.getElementById("2.A.INCORRECT"), document.getElementById("q2"))
                getAnswer(document.getElementById("2.B.INCORRECT"), document.getElementById("q2"))
                getAnswer(document.getElementById("2.C.CORRECT"), document.getElementById("q2"))
                getAnswer(document.getElementById("2.D.INCORRECT"), document.getElementById("q2"))

                getAnswer(document.getElementById("3.A.INCORRECT"), document.getElementById("q3"))
                getAnswer(document.getElementById("3.B.INCORRECT"), document.getElementById("q3"))
                getAnswer(document.getElementById("3.C.INCORRECT"), document.getElementById("q3"))
                getAnswer(document.getElementById("3.D.CORRECT"), document.getElementById("q3"))

                getAnswer(document.getElementById("4.A.CORRECT"), document.getElementById("q4"))
                getAnswer(document.getElementById("4.B.INCORRECT"), document.getElementById("q4"))
                getAnswer(document.getElementById("4.C.INCORRECT"), document.getElementById("q4"))
                getAnswer(document.getElementById("4.D.INCORRECT"), document.getElementById("q4"))

                getAnswer(document.getElementById("5.A.INCORRECT"), document.getElementById("q5"))
                getAnswer(document.getElementById("5.B.CORRECT"), document.getElementById("q5"))
                getAnswer(document.getElementById("5.C.INCORRECT"), document.getElementById("q5"))
                getAnswer(document.getElementById("5.D.INCORRECT"), document.getElementById("q5"))




                document.querySelector("#results").style.display = "block"

                document.querySelector("#scored").textContent = "Your score is: " + score
                document.querySelector("#scored").style.display = "block"



            }
           
        }

       
    }
    });


    