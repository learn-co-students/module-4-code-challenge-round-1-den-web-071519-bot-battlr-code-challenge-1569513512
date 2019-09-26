import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  createCard = (bots) => {
    return bots.map(bot => {
      return <BotCard bot={bot} army={this.props.army} />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.createCard(this.props.army)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
