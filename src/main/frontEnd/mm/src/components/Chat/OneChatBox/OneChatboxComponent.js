import React, { Component } from 'react';
import LeftSide from './LeftComponent';
import RightSide from './RightComponent';

class OneChat extends Component {

  render() {
    const text = "cuz we're running out of time";
    let shownText = "";
    if (text.length > 16) {
      shownText = text.substring(0, 16) + "...";
    }

    return (
      <div className="row orange">
        <div className="col-12 col-lg-4 py-0">
          <div className="container-fluid p-0">
            <div className="row light-orange">
              <div className="col-9">
                <LeftSide name={"He Lin"} lastMsgText={shownText} img="profilePic.png" />
              </div>

              <div className="col-3 d-flex flex-column justify-content-center pr-4">
                <RightSide unreadMsgNum={"100+"} lastMsgTime={"10:00p.m."} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default OneChat;