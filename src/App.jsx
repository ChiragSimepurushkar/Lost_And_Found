import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, collection, serverTimestamp, addDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth, appId, signInUser } from '../src/utils/firebase.js';
import { createChatId } from '../src/utils/helper.js';

import Header from './components/Header.jsx';
import LandingPage from './components/LandingPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ReportItemPage from './components/ReportItemPage.jsx';
import ItemDetailPage from './components/IteamDetailPage.jsx';
import ChatPage from './components/ChatPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx';


// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newChatInput, setNewChatInput] = useState('');
  const [currentChatWith, setCurrentChatWith] = useState(null);

  // Auth and Data Fetching Logic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setIsAuthReady(true);
      if (currentUser) {
        const q = collection(db, `/artifacts/${appId}/public/data/items`);
        const unsubscribeItems = onSnapshot(q, (snapshot) => {
          const fetchedItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setItems(fetchedItems);
          const uniqueCategories = [...new Set(fetchedItems.map(item => item.category))];
          setCategories(['All', ...uniqueCategories]);
        }, (error) => {
          console.error("Error fetching items: ", error);
        });

        return () => unsubscribeItems();
      }
    });

    signInUser();

    return () => unsubscribe();
  }, []);

  // Effect to handle real-time chat messages
  useEffect(() => {
    if (!isAuthReady || !user || !currentChatWith) return;

    const chatId = createChatId(user.uid, currentChatWith);
    const q = collection(db, `/artifacts/${appId}/public/data/chats/${chatId}/messages`);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => doc.data()).sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate());
      setChatMessages(messages);
    }, (error) => {
      console.error("Error fetching chat messages: ", error);
    });

    return () => unsubscribe();
  }, [user, currentChatWith, isAuthReady]);

  // Handle reporting a new item
  const handleReportItem = async (e) => {
    e.preventDefault();
    const form = e.target;
    // Simple mock geocoding for demonstration
    const geocodedLocation = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    };

    const newItem = {
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      imageUrl: form.imageUrl.value,
      status: form.type.value, // 'lost' or 'found'
      userId: user.uid,
      timestamp: serverTimestamp(),
      userDisplayName: user.email || 'Anonymous User',
      coordinates: geocodedLocation,
    };

    if (!user) {
      console.error("User not authenticated.");
      return;
    }

    try {
      await addDoc(collection(db, `/artifacts/${appId}/public/data/items`), newItem);
      setCurrentPage('dashboard');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Handle item click to show details
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentPage('itemDetail');
  };

  // Handle sending a chat message
  const handleSendMessage = async () => {
    if (!newChatInput.trim() || !user || !selectedItem) return;

    const chatId = createChatId(user.uid, selectedItem.userId);
    const newMessage = {
      senderId: user.uid,
      text: newChatInput,
      timestamp: serverTimestamp(),
    };

    try {
      const chatDocRef = doc(db, `/artifacts/${appId}/public/data/chats`, chatId);
      const chatDocSnap = await getDoc(chatDocRef);

      if (!chatDocSnap.exists()) {
        await setDoc(chatDocRef, {
          user1: user.uid,
          user2: selectedItem.userId,
          lastMessageAt: serverTimestamp(),
          itemTitle: selectedItem.title,
        });
      } else {
        await updateDoc(chatDocRef, { lastMessageAt: serverTimestamp() });
      }

      await addDoc(collection(db, `/artifacts/${appId}/public/data/chats/${chatId}/messages`), newMessage);
      setNewChatInput('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  // Main App rendering logic
  let content;
  if (!isAuthReady) {
    content = (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Loading application...</p>
      </div>
    );
  } else {
    switch (currentPage) {
      case 'landing':
        content = <LandingPage setCurrentPage={setCurrentPage} items={items} />;
        break;
      case 'dashboard':
        content = <Dashboard items={items} categories={categories} handleItemClick={handleItemClick} />;
        break;
      case 'report':
        content = <ReportItemPage handleReportItem={handleReportItem} />;
        break;
      case 'profile':
        content = <ProfilePage items={items} user={user} />;
        break;
      case 'itemDetail':
        content = <ItemDetailPage selectedItem={selectedItem} user={user} setCurrentChatWith={setCurrentChatWith} setCurrentPage={setCurrentPage} />;
        break;
      case 'chat':
        content = <ChatPage chatMessages={chatMessages} newChatInput={newChatInput} setNewChatInput={setNewChatInput} handleSendMessage={handleSendMessage} user={user} />;
        break;
       case 'signup':
        content = <Signup />;
        break;
      case 'about':
        content = <AboutPage />;
        break;
      default:
        content = <LandingPage setCurrentPage={setCurrentPage} items={items} />;
    }
  }

  return (
    <div className="App bg-gray-100 min-h-screen font-sans">
      <Header setCurrentPage={setCurrentPage} />
      {content}
      <Footer/>
    </div>
  );
};

export default App;