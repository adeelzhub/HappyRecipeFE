import "./index.css";
import React from "react";
import americanpic from "../../images/american.PNG";
import asianpic from "../../images/asian.PNG";
import barbequepic from "../../images/barbeque.PNG";
import germanpic from "../../images/german.PNG";
import britishpic from "../../images/british.PNG";
import chinesepic from "../../images/chinese.PNG";
import indianpic from "../../images/indian.PNG";
import spanishpic from "../../images/spanish.PNG";
import italianpic from "../../images/italian.PNG";
import mexican_twopic from "../../images/mexican_two.PNG";
import morrocanpic from "../../images/morrocan.PNG";
import thaipic from "../../images/thai.PNG";

function GuestHome() {
  return (
    <div>
      <div className="post">
        <div className="cuisine1">
          <img className="american" src={americanpic} alt="American" />
          <div className="AMERICAN">AMERICAN</div>
          <img className="asian" src={asianpic} alt="Asian" />
          <div className="ASIAN">ASIAN</div>
          <img className="barbeque" src={barbequepic} alt="Barbeque" />
          <div className="BARBEQUE">BARBEQUE</div>
          <img className="german" src={germanpic} alt="German" />
          <div className="GERMAN">GERMAN</div>
        </div>

        <div class="cuisine2">
          <img class="british" src={britishpic} alt="British" />
          <div class="BRITISH">BRITISH</div>
          <img class="chinese" src={chinesepic} alt="Chinese" />
          <div class="CHINESE">CHINESE</div>
          <img class="indian" src={indianpic} alt="indian" />
          <div class="INDIAN">INDIAN</div>
          <img class="spanish" src={spanishpic} alt="Spanish" />
          <div class="SPANISH">SPANISH</div>
        </div>

        <div class="cuisine3">
          <img class="italian" src={italianpic} alt="Italian" />
          <div class="ITALIAN">ITALIAN</div>
          <img class="mexican" src={mexican_twopic} alt="Mexican" />
          <div class="MEXICAN">MEXICAN</div>
          <img class="morrocan" src={morrocanpic} alt="Morrocan" />
          <div class="MORROCAN">MORROCAN</div>
          <img class="thai" src={thaipic} alt="Thai" />
          <div class="THAI">THAI</div>
        </div>
      </div>
    </div>
  );
}

export default GuestHome;
