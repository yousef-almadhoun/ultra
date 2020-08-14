import React from 'react';
import Protfolio from '../Portfolio';

import { ProfileSkills, ProfileDiv, ProfileList, ProfileItem, ProfileItemSpan, ProfileItemSpanWeb, ProfileSkill, SkillsDesc, Bar, Title, Perc, Parent, ParentSpan, Sp1, Sp2, Sp3, ProfileTitle, SkillsTitle, ProfileTitleSpan, SkillsTitleSpan } from './style';

const Profile = () => {
    return (
      <ProfileSkills>
          <div className="container">
              <ProfileDiv>
                  <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                  <ProfileList>
                      <ProfileItem>
                          <ProfileItemSpan>Name</ProfileItemSpan>
                          Yousef El-Madhoun
                      </ProfileItem>
                      <ProfileItem>
                          <ProfileItemSpan>Birthday</ProfileItemSpan>
                          7/7/1999
                      </ProfileItem>
                      <ProfileItem>
                          <ProfileItemSpan>Address</ProfileItemSpan>
                          Ain shams
                      </ProfileItem>
                      <ProfileItem>
                          <ProfileItemSpan>Phone</ProfileItemSpan>
                          4444 5555 6666
                      </ProfileItem>
                      <ProfileItem>
                          <ProfileItemSpan>Email</ProfileItemSpan>
                          yousef@youse.com
                      </ProfileItem>
                      <ProfileItem>
                          <ProfileItemSpan>Website</ProfileItemSpan>
                          <ProfileItemSpanWeb>www.google.com</ProfileItemSpanWeb>
                      </ProfileItem>
                  </ProfileList>
              </ProfileDiv>
              
              <ProfileSkill>
                  <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                  <SkillsDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                  </SkillsDesc>
                  <Bar>
                      <Title>Bootstrap</Title>
                      <Perc>100%</Perc>
                      <Parent>
                        <Sp1></Sp1>
                      </Parent>
                  </Bar>
                  
                  <Bar>
                      <Title>CSS3</Title>
                      <Perc>90%</Perc>
                      <Parent>
                          <Sp2></Sp2>
                      </Parent>
                  </Bar>
                  
                  <Bar>
                      <Title>Photoshop</Title>
                      <Perc>80%</Perc>
                      <Parent>
                          <Sp3></Sp3>
                      </Parent>
                  </Bar>
              </ProfileSkill>
              
          </div>
      </ProfileSkills>
    );
}

export default Profile;