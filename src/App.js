import Header         from "./components/Header";
import PersonalInfo   from "./components/PersonalInfo";
import Qualifications from "./components/Qualifications";
import Experiences    from "./components/Experience";
import uniqid         from "uniqid";



function App() {
  const qualificationsList = [ <Qualifications /> ]

  const experiencesArr = [{}]
  let experiencesList  = experiencesArr.map(item => <Experiences modifyInfoField={modifyInfoField} key={uniqid()}/>)


  function modifyInfoField() {
    experiencesArr.push({}) 
  }


  return (
    <div>
      <Header />
      <PersonalInfo />
      { qualificationsList }
      { experiencesList }

    </div>
  )
}

// class App extends Component {

//   modifyInfoField(e) {
//     const { name, className, id } = e.target;

//     if (className.includes("delete")) {
//       this.setState( state => {
//         const newStateArr = [...state[name]]
//         newStateArr.splice(id, 1)

//         return {
//           [name]: newStateArr,
//         }
//       });
//     } 
    
//     else  {
//       //decide what field in the state to update based on the name of the button clicked
//       const newInfo =
//         name === "experience"
//           ? {
//               organization: "",
//               position: "",
//               startDate: "",
//               endDate: "",
//             }
//           : {
//               institution: "",
//               certificate: "",
//               startDate: "",
//               endDate: "",
//             };

//       this.setState((state) => {
//         return {
//           [name]: [...state[name], newInfo],
//         };
//       });
//     }
//   }

//   handleChange(e) {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     const enabledStyling = {
//       backgroundColor: "pink",
//     };

//     const disabledStyling = {
//       backgroundColor: "#ccc",
//       color: "white",
//     };

//     const inputsAreFilled = true;

//     return (
//       <div>
//         <Header />
//         <form className="main-form">
//           <PersonalInfo />
//           <Qualifications
//             state={this.state}
//             modifyInfoField={this.modifyInfoField}
//             handleChange={this.handleChange}
//           />
//           {/* <Experience
//             state={this.state}
//             modifyInfoField={this.modifyInfoField}
//             handleChange={this.handleChange}
//           /> */}
//           <button
//             type="submit"
//             className="main-form__button"
//             style={!inputsAreFilled ? enabledStyling : disabledStyling}
//             disabled={true}
//           >
//             Preview CV
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default App;
