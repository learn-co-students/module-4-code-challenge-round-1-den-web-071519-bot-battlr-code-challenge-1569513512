import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	createBots = (bots) => {
		return bots.map(bot => {
			return <BotCard bot={bot} 
					updateSelected={this.props.updateSelected} 
					army={this.props.army} />
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.createBots(this.props.bots)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
