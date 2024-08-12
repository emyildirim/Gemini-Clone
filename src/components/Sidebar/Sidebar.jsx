import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/COntext';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const { prevPrompts, setRecentPrompt, prevChat, newChat } = useContext(Context);
    
    const loadPrompt = async (prompt, index) => {
        setRecentPrompt(prompt);
        prevChat(index);
    }

    return (
      <div className="sidebar">
        <div className="top">
          <img
            onClick={() => setExtended((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt=""
          />
          <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, index) => (
                <div key={index} onClick={()=> loadPrompt(item, index)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.length <= 18 ? item : item.slice(0, 18) + "..."}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    );
}

export default Sidebar;