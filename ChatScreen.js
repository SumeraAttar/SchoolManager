import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import io from 'socket.io-client';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo

const socket = io('http://your-server-ip:4000');

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, msg)
      );
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    socket.emit('chat message', messages[0]);
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#DCF8C6',
          },
          left: {
            backgroundColor: '#ECECEC',
          },
        }}
        textStyle={{
          right: {
            color: '#000',
          },
          left: {
            color: '#000',
          },
        }}
      />
    );
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;
    return (
      <View style={styles.messageContainer}>
        {currentMessage.user.name && (
          <Text style={styles.username}>{currentMessage.user.name}</Text>
        )}
        <Bubble {...props} />
      </View>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        name: 'User1', // replace with dynamic user name
      }}
      renderSend={renderSend}
      renderBubble={renderBubble}
      renderMessage={renderMessage}
    />
  );
};

const styles = StyleSheet.create({
  sendButton: {
    backgroundColor: '#34B7F1',
    borderRadius: 25,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
  messageContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#075E54',
  },
});

export default ChatScreen;
