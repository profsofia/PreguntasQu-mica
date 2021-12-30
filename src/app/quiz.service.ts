import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes : Quiz[] =[
    {
      question: '1.Un recipiente rígido de 80,0 dm³ a 10,0°C, contiene 1,90 mol de CI₂ (g) (M = 71,0 g/mol), 40,0 g de SO₂ (g) (M = 64,0 g/mol) y 52,8 g de CO₂ (g) (M = 44,0 g/mol). La presión de la mezcla y la fracción molar del SO₂ (g) es: Seleccione una:',
      answer:[
        {option: 'a. 0,0382 atm y X SO₂ 0,170', correct: false},
        {option: 'b. 1,08 atm y X SO₂ 0,168', correct: true},
        {option: 'c. 0,926 atm y X SO₂ 7,81.10⁻³', correct: false},
        {option: 'd. 0,5181 atm y X SO₂ 0,625', correct: false}
      ]
    },
    {
      question:'2.Se dispone de 5,50 dm³ de una solución acuosa de ácido láctico (C₂H₄OHCOOH, pKa = 3,08), de pH = 3,60. El número de moles en equilibrio de ácido láctico es: Seleccione una:',
    answer:[
      {option: 'a. 4,16.10⁻⁴ mol', correct: false},
      {option: 'b. 7,57.10⁻⁵ mol', correct: true},
      {option: 'c. 2,16 10⁻⁴ mol', correct: false},
      {option: 'd. 6.20.10⁻⁵ mol', correct: false}
    ]
  },
  {
    question:'3.En un recipiente cerrado 30,0 g de una muestra de Nal (80,0% de pureza) reaccionan con 150 cm³ de una solución de H₂SO₄ 10,0 % m/V, con un rendimiento del 90,0 %. El volumen que ocupa el gas producido medido en CNPT es: Datos: la ecuación que representa la reacción 8 Nal (s) + 5 H₂SO₄ (ac) ➝ 4 I₂ (s) + 4 Na₂SO₄ (ac) + 4 H₂O (l) + H₂S (g)NaI (M = 150 g/mol); H₂SO₄ (M = 98,0 g/mol); H₂S (M = 34,0 g/mol); I₂ (M = 254 g/mol); Na₂SO₄ (M = 142 g/mol); H₂O (M = 18,0 g/mol). Seleccione una:',
    answer:[
      {option: 'a. 0,403 dm³', correct: true},
      {option: 'b. 0,448 dm³', correct: false},
      {option: 'c. 22,4 dm³', correct: false},
      {option: 'd. 0,685 dm³', correct: false}
    ]
  },
  {
    question:'4.En un recipiente rígido de 0,400 dm³ se colocan, a una determinada temperatura, 2,55.10²² moléculas de SbCl₅ (g). 4,80.10⁻² mol de SbCI₃ (g) y 4,80.10⁻² mol de Cl₂ (g). El sistema evoluciona hasta llegar al equilibrio, según la ecuación que representa la reacción: SbCl₅ (g) ⇄ SbCI₃ (g) + Cl₂ (g). Cuando se alcanza el equilibrio quedan 5,20.10⁻² mol de SbCl₅ (g). La cantidad de Cl₂ (g) en el equilibrio es: Seleccione una:',
    answer:[
      {option: 'a. 9,76. 10⁻³ mol de Cl₂' , correct: false},
      {option: 'b. 9,76 10⁻² mol de Cl₂', correct: false},
      {option: 'c. 3,84 10⁻² mol de Cl₂', correct: true},
      {option: 'd. 2,77 mol de Cl₂', correct: false}
    ]
  },
  {
    question:'5.El compuesto J₂O₃ tiene 44 neutrones. El átomo del elemento forma un anión trivalente isoelectrónico con el segundo gas noble. Los dos átomos de J pertenecen al mismo isótopo con el mismo número de neutrones y protones en el núcleo. Los tres átomos de oxígeno pertenecen al mismo nucleído. El número másico del oxígeno y el símbolo de J son: Seleccione una:',
    answer:[
      {option: 'a. A = 18 y J=Al', correct: false},
      {option: 'b. A = 18 y J=N', correct: true},
      {option: 'c. A=16 y J = B', correct: false},
      {option: 'd. A= 16 y J=Al', correct: false}
    ]
  },
  {
    question:'6.Dadas las fórmulas de las siguientes sustancias SiH₄ ; CaF₂. CHCI₃ y CH₄. El orden decreciente en los puntos de ebullición es: Seleccione una:',
    answer:[
      {option: 'a. CHCI₃ > SiH₄ >CH₄ > CaF₂', correct: false},
      {option: 'b. CH₄ > SiH₄> CHCI₃ > CaF₂', correct: false},
      {option: 'c. CaF₂ > CHCI₃ > SiH₄ > CH₄', correct: true},
      {option: 'd. CHCI₃ > CaF₂ > SiH₄ > CH₄', correct: false}
    ]
  },
  {
    question:'7.Se preparan 120 cm³ de una solución 0,100 M de NaNO₃ por agregado de agua a una solución acuosa de NaNO₃ (M = 85,0 g/mol), 3,80 % m/V y densidad 1,08 g/cm³. La masa de la solución concentrada es: Seleccione una:',
    answer:[
      {option: 'a. 29,0 g', correct: true},
      {option: 'b. 26,8 g', correct: false},
      {option: 'c. 23,4 g', correct: false},
      {option: 'd. 20,0 g', correct: false}
    ]
  },
  {
    question:'8.540 g de una sustancia en estado líquido, ocupa un volumen de 300 cm³ a 25,0°C. El volumen molar de la sustancia a esa temperatura es de 80,0 cm³/mol. En una masa de 500 mg. el número de moléculas que hay y el volumen que ocupan es: Seleccione una:',
    answer:[
      {option: 'a. 5,57 10²¹ moléculas y 300 cm³', correct: false},
      {option: 'b. 2,09.10²³ moléculas y 277 cm³', correct: false},
      {option: 'c. 2,09.10²¹ moléculas y 0,278 cm³', correct: true},
      {option: 'd. 6,02 10²³ moléculas y 80,00 cm³', correct: false}
    ]
  },
  {
    question:'9.Dada la siguiente ecuación química sin ajustar: Br₂ (l) + OH⁻ (ac) ➝ H₂O (l) + Br⁻ (ac) + BrO⁻ (ac). En la ecuación química igualada por el método ion electrón en medio básico, indicar el agente reductor y el cambio en el estado de oxidación de la especie química que se oxida: Seleccione una:',
    answer:[
      {option: 'a. Br₂ el Br cambia de 0 a -1', correct: false},
      {option: 'b. Br₂ el Br cambia de 0 a +1', correct: true},
      {option: 'c. OH⁻ y el O cambia es de -2 a 0', correct: false},
      {option: 'd. Br⁻ y el Br cambia de -1 a 0', correct: false}
    ]
  },
  {
    question:'10.La fórmula, el tipo y número de enlaces presentes en una molécula de ácido cloroso son: Seleccione una:',
    answer:[
      {option: 'a. HClO y presenta 1 enlace covalente simple y 2 enlaces covalentes coordinados o dativos', correct: false},
      {option: 'b. HClO₄ presenta 2 enlaces covalentes simples y 3 enlaces covalentes coordinados o dativos.', correct: false},
      {option: 'b. HClO₃ presenta 3 enlaces covalentes simples y 1 enlace covalente doble', correct: false},
      {option: 'd. HClO₂ presenta 2 enlaces covalentes simples y 1 enlace covalente coordinado o dativo', correct: true}
    ]
  }
  ]

  constructor() {}
  
    getQuizzes(){
      return this.quizzes;
    }
}
