import React, { useState } from 'react';
import cn from 'classnames';
import './VerticalTabs.scss';

// Define the type for tab identifiers
type TabId = "Library" | "Board" | "Chat";

interface VerticalTabsProps {
  // Props can be added here if needed in the future
}

const VerticalTabs: React.FC<VerticalTabsProps> = () => {
  const [activeTab, setActiveTab] = useState<TabId>("Library");

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="vertical-tabs-container">
      <button
        className={cn('vertical-tab-button', { active: activeTab === "Library" })}
        onClick={() => handleTabClick("Library")}
      >
        Library
      </button>
      <button
        className={cn('vertical-tab-button', { active: activeTab === "Board" })}
        onClick={() => handleTabClick("Board")}
      >
        Board
      </button>
      <button
        className={cn('vertical-tab-button', { active: activeTab === "Chat" })}
        onClick={() => handleTabClick("Chat")}
      >
        Chat
      </button>
      {/* Content for the tabs will be handled separately */}
    </div>
  );
};

export default VerticalTabs;
