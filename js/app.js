
/**
 * This project is a calcutor which was ceated by a LaSyntax member.
 *
 * @author Hugues KOUYE <hugueskouye1@gmail.com>
 * 
 * @link https://github.com/KouyeHugues
 * @link https://ePatriote.com
 * @link https://LaSyntax.com
 */

//We selecte all button
const touches = [...document.querySelectorAll('.bouton')];
//Replacement of the content of touches variable by the data-key
const listKeycode = touches.map(touches => touches.dataset.key);
//Selecting of div screen
const screen = document.querySelector('.screen');

//Keyboard Event
document.addEventListener("keydown", (e)=>{
 const value = e.keyCode.toString();
 calculate(value)
})

//Touches Event
document.addEventListener("click", (e)=>{
const value = e.target.dataset.key;
calculate(value)
})

//function of the calculation
const calculate = (value) =>{

    //we check if the value enter by the user is really in our listKeycode array
    if(listKeycode.includes(value))
    {
        switch(value)
        {
            //"8" 8 corresponds to the delete key
            case "8":
                screen.textContent = "";
                break;
            // 8 corresponds to the equal key
            case "13":
                //operation an display of the result
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                //default cntente in our screen
                const indexKeycode = listKeycode.indexOf(value);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
                console.log(touche)
        }
    }
}

//error alert
window.addEventListener("error", (e)=>{
    alert("Une erreur est survenue dans votre calcule : " + e.message)
})