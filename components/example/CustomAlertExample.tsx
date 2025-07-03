import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function CustomerAlertExample() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.showButton}>Show Custom Alert</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image
              source={require('../../assets/images/icon.png')}
              style={styles.icon}
            />
            <Text style={styles.modalTitle}>แจ้งเตือน🚨</Text>
            <Text style={styles.message}>Do you want to delete the Data?</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => setVisible(false)} style={styles.button}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                // Add your confirm action here
                setVisible(false);
              }} style={styles.button}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showButton: {
    fontSize: 16,
    color: 'blue',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    marginBottom: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  cancelText: {
    color: 'red',
  },
  confirmText: {
    color: 'green',
  },
});
