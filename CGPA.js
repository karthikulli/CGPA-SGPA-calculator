/*Internal_calaulate */

let sessional_1_element = document.getElementById("sessional_1")
let sessional_2_element = document.getElementById("sessional_2")
let Assignment_1_element = document.getElementById("Assignment_1")
let Assignment_2_element = document.getElementById("Assignment_2")
let Quiz_1_element = document.getElementById("Quiz_1")
let Quiz_2_element = document.getElementById("Quiz_2")
let Attedence_element = document.getElementById("Attedence")
let sessional_total_marks = 0
let Assignment_Quiz_Total_Marks = 0
let Attedence_Marks = 0
let marks_error = "Invalid marks"
let total = document.getElementById("marks_viewer")

function Internal_calaulate() {
    total.textContent = "Total Marks : "
    let sessional_1_value = sessional_1_element.value
    let sessional_2_value = sessional_2_element.value
    let Assignment_1_value = Assignment_1_element.value
    let Assignment_2_value = Assignment_2_element.value
    let Quiz_1_value = Quiz_1_element.value
    let Quiz_2_value = Quiz_2_element.value
    let Attedence_value = Attedence_element.value
    sessional_1_value = parseInt(sessional_1_value)
    sessional_2_value = parseInt(sessional_2_value)
    Assignment_1_value = parseInt(Assignment_1_value)
    Assignment_2_value = parseInt(Assignment_2_value)
    Quiz_1_value = parseInt(Quiz_1_value)
    Quiz_2_value = parseInt(Quiz_2_value)
    Attedence_value = parseInt(Attedence_value)
    if (sessional_1_value > sessional_2_value) {
        let s1 = (sessional_1_value / 100) * 80
        let s2 = (sessional_2_value / 100) * 20
        sessional_total_marks = (s1 + s2)
    } else {
        let s1 = (sessional_1_value / 100) * 20
        let s2 = (sessional_2_value / 100) * 80
        sessional_total_marks = (s1 + s2)
    }
    let marks_obtained = Assignment_1_value + Assignment_2_value + Quiz_1_value + Quiz_2_value
    Assignment_Quiz_Total_Marks = (marks_obtained * 7) / 48

    if (Attedence_value >= 90) {
        Attedence_Marks = 5
    } else if (Attedence_value < 90 && Attedence_value >= 85) {
        Attedence_Marks = 4
    } else if (Attedence_value < 85 && Attedence_value >= 80) {
        Attedence_Marks = 3
    } else if (Attedence_value < 80 && Attedence_value >= 75) {
        Attedence_Marks = 2
    } else {
        Attedence_Marks = 0
    }
    let Total_marks = sessional_total_marks + Assignment_Quiz_Total_Marks + Attedence_Marks
    total.textContent += (Math.round(Total_marks))
    total.style.backgroundColor = "green"
    total.style.color = "#ffffff"
    total.style.textAlign = "center"
}


/*External Calculator  */

let Ex_button_el = document.getElementById("Ex_button");

let Ex_subject1_el = document.getElementById("Ex_subject1");
let Ex_credits1_el = document.getElementById("Ex_credits1");

let Ex_subject2_el = document.getElementById("Ex_subject2");
let Ex_credits2_el = document.getElementById("Ex_credits2");

let Ex_subject3_el = document.getElementById("Ex_subject3");
let Ex_credits3_el = document.getElementById("Ex_credits3");

let Ex_subject4_el = document.getElementById("Ex_subject4");
let Ex_credits4_el = document.getElementById("Ex_credits4");

let Ex_subject5_el = document.getElementById("Ex_subject5");
let Ex_credits5_el = document.getElementById("Ex_credits5");

let Ex_lab1_el = document.getElementById("Ex_lab1");
let ex_lab_credit1 = document.getElementById("Ex__Lab_credits1");

let Ex_lab2_el = document.getElementById("Ex_lab2");
let ex_lab_credit2 = document.getElementById("Ex__Lab_credits2");

let Ex_lab3_el = document.getElementById("Ex_lab3");
let ex_lab_credit3 = document.getElementById("Ex__Lab_credits3");

let Ex_lab4_el = document.getElementById("Ex_lab4");
let ex_lab_credit4 = document.getElementById("Ex__Lab_credits4");

let Ex_lab5_el = document.getElementById("Ex_lab5");
let ex_lab_credit5 = document.getElementById("Ex__Lab_credits5");

let Display_result_el = document.getElementById("Display_result");

function External(grade, credit) {
    if (grade === "A+") {
        return (10 * credit)
    } else if (grade === "A") {
        return (9 * credit)
    } else if (grade === "B") {
        return (8 * credit)
    } else if (grade === "C") {
        return (7 * credit)
    } else if (grade === "D") {
        return (6 * credit)
    } else if (grade === "E") {
        return (5 * credit)
    } else if (grade === "F") {
        return (4 * credit)
    }

}

function total_credits(cre1, cre2, cre3, cre4, cre5, lab_cre1, lab_cre2, lab_cre3, lab_cre4, lab_cre5) {
    return (10 * cre1 + 10 * cre2 + 10 * cre3 + 10 * cre4 + 10 * cre5 + 10 * lab_cre1 + 10 * lab_cre2 + 10 * lab_cre3 + 10 * lab_cre4 + 10 * lab_cre5);
}

function obtained_credits(sub1_cred1, sub2_cred2, sub3_cred3, sub4_cred4, sub5_cred5, lab1_cre1, lab2_cre2, lab3_cre3, lab4_cre4, lab5_cre5) {
    return (sub1_cred1 + sub2_cred2 + sub3_cred3 + sub4_cred4 + sub5_cred5 + lab1_cre1 + lab2_cre2 + lab3_cre3 + lab4_cre4 + lab5_cre5);
}

Ex_button_el.onclick = function() {
    let sub1 = Ex_subject1_el.value;
    let cre1 = Ex_credits1_el.value;
    let sub1_cred1 = External(sub1, cre1);

    let sub2 = Ex_subject2_el.value;
    let cre2 = Ex_credits2_el.value;
    let sub2_cred2 = External(sub2, cre2);

    let sub3 = Ex_subject3_el.value;
    let cre3 = Ex_credits3_el.value;
    let sub3_cred3 = External(sub3, cre3);

    let sub4 = Ex_subject4_el.value;
    let cre4 = Ex_credits4_el.value;
    let sub4_cred4 = External(sub4, cre4);

    let sub5 = Ex_subject5_el.value;
    let cre5 = Ex_credits5_el.value;
    let sub5_cred5 = External(sub5, cre5);

    let lab1 = Ex_lab1_el.value;
    let lab_cre1 = ex_lab_credit1.value;
    let lab1_cre1 = External(lab1, lab_cre1);

    let lab2 = Ex_lab2_el.value;
    let lab_cre2 = ex_lab_credit2.value;
    let lab2_cre2 = External(lab2, lab_cre2);

    let lab3 = Ex_lab3_el.value;
    let lab_cre3 = ex_lab_credit3.value;
    let lab3_cre3 = External(lab3, lab_cre3);

    let lab4 = Ex_lab4_el.value;
    let lab_cre4 = ex_lab_credit4.value;
    let lab4_cre4 = External(lab4, lab_cre4);

    let lab5 = Ex_lab5_el.value;
    let lab_cre5 = ex_lab_credit5.value;
    let lab5_cre5 = External(lab5, lab_cre5);

    let total_num_of_credits = total_credits(cre1, cre2, cre3, cre4, cre5, lab_cre1, lab_cre2, lab_cre3, lab_cre4, lab_cre5);

    let obtained_num_of_credits = obtained_credits(sub1_cred1, sub2_cred2, sub3_cred3, sub4_cred4, sub5_cred5, lab1_cre1, lab2_cre2, lab3_cre3, lab4_cre4, lab5_cre5)

    let Obtained_CGPA = (obtained_num_of_credits / total_num_of_credits) * 10;


    Display_result_el.textContent = Obtained_CGPA.toFixed(2) + " CGPA";

}

/*  CGPA CALCULATOR  */

let CGPA_btn_el = document.getElementById("CGPA_btn");

let sem_1_el = document.getElementById("sem_1");
let sem_2_el = document.getElementById("sem_2");
let sem_3_el = document.getElementById("sem_3");
let sem_4_el = document.getElementById("sem_4");
let sem_5_el = document.getElementById("sem_5");
let sem_6_el = document.getElementById("sem_6");
let sem_7_el = document.getElementById("sem_7");
let result_el = document.getElementById("result");

let count = 0;

function Calculate_CGPA(sem_value) {
    if (sem_value === "") {
        sem_value = 0;
        return sem_value;
    } else {
        count += 1;
        return parseFloat(sem_value)
    }
}

function AVG_CGPA(sem_1, sem_2, sem_3, sem_4, sem_5, sem_6, sem_7) {
    return (sem_1 + sem_2 + sem_3 + sem_4 + sem_5 + sem_6 + sem_7) / count;
}

CGPA_btn_el.addEventListener("click", function() {
    let sem_1_value = sem_1_el.value;
    let sem_1 = Calculate_CGPA(sem_1_value)
    let sem_2_value = sem_2_el.value;
    let sem_2 = Calculate_CGPA(sem_2_value)
    let sem_3_value = sem_3_el.value;
    let sem_3 = Calculate_CGPA(sem_3_value)
    let sem_4_value = sem_4_el.value;
    let sem_4 = Calculate_CGPA(sem_4_value)
    let sem_5_value = sem_5_el.value;
    let sem_5 = Calculate_CGPA(sem_5_value)
    let sem_6_value = sem_6_el.value;
    let sem_6 = Calculate_CGPA(sem_6_value)
    let sem_7_value = sem_7_el.value;
    let sem_7 = Calculate_CGPA(sem_7_value)
    over_all = AVG_CGPA(sem_1, sem_2, sem_3, sem_4, sem_5, sem_6, sem_7)
    result_el.textContent = over_all.toFixed(2);

})
