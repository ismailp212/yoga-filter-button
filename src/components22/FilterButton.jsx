
import React, { useState } from "react";
import "../FilterButton.css";
import DurreSlider from './DurationSlider';
// import '/Users/___ISMAIL___/Desktop/react-first-test/src/FilterButton.css';
 import '../FilterButton.css';


const options = [
  {
    label: "Yoga Classique",
    subOptions: ["Yen", "Option 2", "Option 3", "Option 4"]
  },
  {
    label: "Sophrologie",
    subOptions: ["Option 1", "Option 2", "Option 3", "Option 4"]
  },
  {
    label: "Yoga Therapie",
    subOptions: ["Option 1", "Option 2", "Option 3", "Option 4"]
  },
  {
    label: "Power Yoga",
    subOptions: ["Option 1", "Option 2", "Option 3", "Option 4"]
  }
];

export default function FilterButton() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [showSection, setShowSection] = useState(false);

  const handleClickBtn = () => {
    setShowSection(!showSection);
  };


  const handleClick = (optionIndex) => {
    if (selectedOption === optionIndex) {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionIndex);
      setShowSection(true);
    }
  };
  


  
  return (
    <div className="search-filter">
   
    <button className="filter-btn" onClick={handleClickBtn}>Filtrer la recherche</button>
      {showSection && (

    <div className="discipline-opt">
      <form action="" method="">
      <div className="filrage-options">
      <ul className="options-filter">
                <li className="title-list-filter" style={{marginTop:'-8px'}}>Discipline</li>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={selectedOption === index ? "selected" : ""}
                    onClick={() => handleClick(index, false)}
                  >
                    <label htmlFor="idz">{option.label}</label>
                    <hr />
                    {selectedOption === index && (
                      <table className="sub-options-filter">
                        {option.subOptions.map((subOption, subIndex) => (
                          <tr
                            key={subIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <td>{subOption}</td>
                            <td>
                              <input
                                type="checkbox"
                                onBlur={(e) => {
                                  if (
                                    e.relatedTarget &&
                                    e.relatedTarget.tagName !== "INPUT"
                                  ) {
                                    setShowSection(false);
                                  }                                 
                                }}
                                id="idz"

                              />
                            </td>
                          </tr>
                        ))}
                      </table>
                    )}
                  </li>
                ))}
              </ul>
      <ul className="list-filter">
           <li className="title-list-filter">Niveau</li>

             <table className="table-filter">
               <tr>
               <td><label htmlFor="db">Debutant</label></td>
                 <td><input type='checkbox' id='db'/></td>
               </tr>
               <tr>
               <td><label htmlFor="int">Intermediaire</label></td>
                 <td><input type='checkbox' id='int'/></td>
               </tr>
               <tr>
               <td><label htmlFor="avc">Avancee</label></td>
                 <td><input type='checkbox' id='avc'/></td>
               </tr>
               <tr>
               <td><label htmlFor="prf">Proffesionel</label></td>
                 <td><input type='checkbox' id='prf'/></td>
               </tr>
             </table>
           </ul>
              <ul className="list-filter">
                <li className="title-list-filter">Duration</li>
                <div className="duration-section">
                <DurreSlider/>
                </div>
              </ul>
              
              <ul className="list-filter">
                <li className="title-list-filter">Language</li>

                <table className="table-filter">
                  <tr>
                    <td><label htmlFor="fr">Francais</label></td>
                    <td><input type='checkbox' id='fr'/></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="en">Anglais</label></td>
                    <td><input type='checkbox' id='en'/></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="ar">Arabe</label></td>
                    <td><input type='checkbox' id='ar'/></td>
                  </tr>
                  <tr>
                  <td><label htmlFor="es">Espagnol</label></td>
                    <td><input type='checkbox' id='es'/></td>
                  </tr>
                </table>
              </ul>
              </div>
              <div className="valider-filter-btn">
                    <button type="submit" onSubmit={{}}>Valider</button>
                </div>
                </form>
                
              </div>


      )}
             
              
    </div>
  );
}
