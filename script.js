

function run(){
    let eng = Number(document.getElementById("eng").value)
    let maths = Number(document.getElementById("maths").value)
    let phy = Number(document.getElementById("phy").value)
    let che = Number(document.getElementById("che").value)
    let urd = Number(document.getElementById("urd").value)


    if (eng == "" || maths == "" || phy == "" || che == "" || urd == "" ){
        alert("please fiil up all marks")
    }

    else if(eng > 98 || maths > 98 || phy > 98 || che > 98 || urd > 98){
        alert("max marks is 98")
    }

    else {

        let obtValue = eng + maths + phy + che + urd
        document.getElementById("obt").innerHTML = obtValue
        let totalMarks = 300

        let per = obtValue / totalMarks * 100
        document.getElementById("per").innerHTML = per + "%"

    }


}