import React from 'react';
import {Text} from 'react-native';
import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';

function ShareComponent() {
  return (
    <Dialog
      footer={
        <DialogFooter>
          <DialogButton text="CANCEL" onPress={() => {}} />
          <DialogButton text="OK" onPress={() => {}} />
        </DialogFooter>
      }>
      <DialogContent>
        <Text>Hello</Text>
      </DialogContent>
    </Dialog>
  );
}

export default ShareComponent;
