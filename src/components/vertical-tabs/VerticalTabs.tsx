import React from 'react'; // useState removed as it's no longer used
import cn from 'classnames';
import './VerticalTabs.scss';

// Define the type for tab identifiers
type TabId = "Library" | "Board" | "Chat";

// Export TabId so parent components can use it
export type { TabId };

interface VerticalTabsProps {
  onTabChange: (tabId: TabId) => void;
  activeTab: TabId;
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ activeTab, onTabChange }) => {
  // Internal activeTab state has been removed.
  // The component is now controlled by its parent via activeTab and onTabChange props.

  // handleTabClick calls the onTabChange prop passed down from the parent.
  const handleTabClick = (tabId: TabId) => {
    onTabChange(tabId);
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
