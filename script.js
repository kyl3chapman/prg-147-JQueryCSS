window.onload = function () {
    "use strict";
    // declare variables
    var aas = document.getElementById("aas");
    var h2Elements = aas.getElementsByTagName("h2");
    var h2Node;
    for (var i = 0; i < h2Elements.length; i++) {
        h2Node = h2Elements[i];
        //attaching the event handler
        h2Node.onclick = function () {
            // this function will change the class of the detail to open or close -open is visible, close is hidden
            var h2 = this; // current h2Node
            if (h2.getAttribute("class") === "open") {
                // by using id attributes, determine which H2 is selected and
                // toggle the + - indicators
                if (h2.getAttribute("id") === "one") {
                    document.getElementById("i-one").innerHTML = "";
                }
                //if the class is currently open, it changes to closed
                h2.setAttribute("class", "close");
            }
            else {
                //if the class is currently closed, it changes to open
                h2.setAttribute("class", "open");
                // by using id attributes, determine which H2 is selected and
                // toggle the + - indicators              
                if (h2.getAttribute("id") === "one") {
                    document.getElementById("i-one").innerHTML = "";
                }
            }
            // changes the sibling node, directly following the h2
            if (h2.nextElementSibling.getAttribute("class") === "close") {
                h2.nextElementSibling.setAttribute("class", "open");
            }
            else {
                h2.nextElementSibling.setAttribute("class", "close")
            }
        }
    }
    $(document).ready(function () {
        $("#i-one").click(function () {
            $(".close").hide("slow", function () {});
        });
    });
    $(document).ready(function () {
        "use strict";
        $("p").click(function () {
            $(this).toggleClass("highlight");
        });
        $("h2").click(function () {
            $(this).css("color", "#A415C4");
        });
        $("#small").click(function () {
            $("body").css("font-size", "1em");
        });
        $("#medium").click(function () {
            $("body").css("font-size", "1.3em");
        });
        $("#large").click(function () {
            $("body").css("font-size", "1.6em");
        });
    });
    //button to turn text to color
    $(document).ready(function () {
        $("#button1").click(function () {
            $("h1, h2, p").toggleClass("rebeccapurple");
        });
    });
    //div resize
    $(document).ready(function () {
        $("#button2").click(function () {
            $("#aas").width(950).height(600);
        });
    });
    $('.print').click(function () {
        window.print();
        return false;
    });
}