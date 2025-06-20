import React, { useState } from 'react';
import cn from 'classnames';
import './VerticalTabs.scss'; // Assuming SCSS file will be created later

// Define the type for tab identifiers
type TabId = "Library" | "Board";

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
      {/* Content for the tabs will be handled separately */}
    </div>
  );
};

export default VerticalTabs;
