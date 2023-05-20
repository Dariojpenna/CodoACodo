document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("form").addEventListener("submit", function(ev){

        ev.preventDefault();
        if(ev.submitter.id === "resumen"){
            const cantidad = document.querySelector("#cantidad").value;
            const categoria = document.querySelector("#categoria").value;
            const total = cantidad * categoria;

            document.querySelector("#total").innerHTML = total;

        }else{
            document.querySelector("#nombre").value = "";
            document.querySelector("#apellido").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#cantidad").value = "0";
            document.querySelector("#categoria").value = 40;
            document.querySelector("#total").innerHTML = "";
        }
            

    })
})