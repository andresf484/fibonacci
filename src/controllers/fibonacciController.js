
class FibonacciController {

    calcularFibonacci = async (req, res) => {
        try {
            
            const fibonacci_array = [];
            const fibonacci_invertido = [];

            //let date= new Date().toLocaleDateString("en-GB", {timeZone: "America/Bogota"});
            let date= new Date();

            //let datetext = date.toTimeString().split(' ')[0];

            let hour = date.getHours();
            let minutes_semilla = 49 /*date.getMinutes()*/;
            let seconds_cantnum = 8 /*date.getSeconds();*/

            if (minutes_semilla < 10) {
                fibonacci_array[0] = 0;
                fibonacci_array[1] = minutes_semilla;
            } else {
                let partido = (""+minutes_semilla).split("");
                fibonacci_array[0] = parseInt(partido[0]);
                fibonacci_array[1] = parseInt(partido[1]);
                //console.log(partido);
            }

            //console.log(fibonacci_array[0] + fibonacci_array[1]);

            // Llenar el array
            for (let i = 0; i < seconds_cantnum; i++) {
                fibonacci_array[i+2] = fibonacci_array[i] + fibonacci_array[i+1];
            }

            // Invertir el array
            for (let j = 0; j < fibonacci_array.length; j++) {
                fibonacci_invertido[j] = fibonacci_array[fibonacci_array.length - j - 1];
            }
            
            return res.status(200).json({
                'Hora de generación cálculo:' : hour + ":" + minutes_semilla + ":" + seconds_cantnum,
                'Array fibonacci invertido: ': fibonacci_invertido+''
            });
        } catch (error) {
            return res.status(500).json({ "Error Type": error.name, "Detalle": error.message });
        }
    }

}

module.exports = FibonacciController;