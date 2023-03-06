import './App.css';
import Testimonio from './components/Testimonio';

function App() {
    return (
        <div className="App">
            <div className='container-principal'>

                <h1>Esto es lo que dicen nuestros profesionales</h1>

                <Testimonio
                imagen = "shawn"
                nombre = "Shawn Wang "
                pais = "Singapur"
                cargo = "Ingeniero de software"
                empresa = "Amazon"
                testimonio = '"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida " .' />



                <Testimonio
                    imagen="emma"
                    nombre="Emma Bostian"
                    pais="Suecia"
                    cargo="Ingeniero de software"
                    empresa="Spotify"
                    testimonio='"Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".' 
                />

                <Testimonio
                imagen = "sarah"
                nombre = "Sara Chima"
                pais = "Nigeria"
                cargo = "Ingeniero de software"
                empresa = "ChatDesk"
                testimonio = '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble".' />

            </div>

        </div>
    );
}

export default App;
