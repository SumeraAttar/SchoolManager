// MenuComponent.js
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const menuWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 200],
  });

  return (
    <Animated.View style={[styles.container, { width: menuWidth }]}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Icon name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="home" size={24} color="#000" />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="settings" size={24} color="#000" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="info" size={24} color="#000" />
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 50,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#6200ee',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  menuItems: {
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },
});

export default MenuComponent;