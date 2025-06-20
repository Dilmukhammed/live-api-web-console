/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useRef, useState } from "react";
import "./App.scss";
import { LiveAPIProvider } from "./contexts/LiveAPIContext";
import SidePanel from "./components/side-panel/SidePanel";
import { Altair } from "./components/altair/Altair";
import ControlTray from "./components/control-tray/ControlTray";
import VerticalTabs, { TabId } from "./components/vertical-tabs/VerticalTabs"; // Import VerticalTabs and TabId
import LibraryPage from './components/library-page/LibraryPage'; // Import LibraryPage
import BoardPage from './components/board-page/BoardPage'; // Import BoardPage
// import './components/vertical-tabs/VerticalTabs.scss'; // Removed: VerticalTabs.tsx imports its own styles
import cn from "classnames";
import { LiveClientOptions } from "./types";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY as string;
if (typeof API_KEY !== "string") {
  throw new Error("set REACT_APP_GEMINI_API_KEY in .env");
}

const apiOptions: LiveClientOptions = {
  apiKey: API_KEY,
};

function App() {
  // this video reference is used for displaying the active stream, whether that is the webcam or screen capture
  // feel free to style as you see fit
  const videoRef = useRef<HTMLVideoElement>(null);
  // either the screen capture, the video or null, if null we hide it
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [currentTab, setCurrentTab] = useState<TabId>('Chat'); // Default to 'Chat'

  const handleTabChange = (tabId: TabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="App">
      <LiveAPIProvider options={apiOptions}>
        <VerticalTabs activeTab={currentTab} onTabChange={handleTabChange} />
        <div className="streaming-console">
          {currentTab === 'Chat' && <SidePanel />} {/* SidePanel moved here */}
          <main>
            <div className="main-app-area">
              {currentTab === 'Chat' && (
                <>
                  <Altair />
                  <video
                    className={cn("stream", {
                      hidden: !videoRef.current || !videoStream,
                    })}
                    ref={videoRef}
                    autoPlay
                    playsInline
                  />
                </>
              )}
              {currentTab === 'Library' && <LibraryPage />}
              {currentTab === 'Board' && <BoardPage />}
            </div>

            <ControlTray
              videoRef={videoRef}
              supportsVideo={true}
              onVideoStreamChange={setVideoStream}
              enableEditingSettings={true}
            >
              {/* put your own buttons here */}
            </ControlTray>
          </main>
        </div>
      </LiveAPIProvider>
    </div>
  );
}

export default App;
