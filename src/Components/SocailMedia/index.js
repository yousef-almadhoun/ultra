import React from "react";
import axios from "axios";

import { SocialMediaSection, Social, SocialIcon, SocialP, Info1, Info2 } from './style';

class SocailMedia extends React.Component {

  state = {
    social: []
  }

  componentDidMount() {
    axios.get('js/data.json').then(res => {
      this.setState({
        social: res.data.social
      });
    });
  };

  render() {

    const { social } = this.state;

    const socialList = social.map((socialItem) => {
        return (
          <Social key={socialItem.id} item={socialItem.id}>
            <SocialIcon className={socialItem.icon}></SocialIcon>
            <SocialP>
              <Info1>{socialItem.title}</Info1>
              <Info2>{socialItem.body}</Info2>
            </SocialP>
          </Social>
        );
    })

    return (
      <SocialMediaSection>
        {socialList}
      </SocialMediaSection>
    );
  };
};

export default SocailMedia;
