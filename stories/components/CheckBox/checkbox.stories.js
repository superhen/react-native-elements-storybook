import React from 'react';
import { storiesOf } from '@storybook/react';

import { CheckBox, Image } from 'react-native-elements';
import CheckBoxContainer from './CheckBoxContainer';

const renderImage = source => (
  <Image
    source={require(`../../../assets/${source}.png`)}
    style={{ width: 20, height: 20 }}
  />
)

storiesOf('CheckBox|CheckBox', module)

  .add('Default', () => (
    <CheckBoxContainer>
      {(checked, onPress) => (
        <CheckBox
          title='Click Here'
          checked={checked}
          onPress={onPress}
        />
      )}
    </CheckBoxContainer>
  ))

  .add('Align checkbox to center', () => (
    <CheckBoxContainer>
      {(checked, onPress) => (
        <CheckBox
          center
          title='Click Here'
          checked={checked}
          onPress={onPress}
        />
      )}
    </CheckBoxContainer>
  ))

  .add('Change default icon', () => (
    <CheckBoxContainer>
      {(checked, onPress) => (
        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={checked}
          onPress={onPress}
        />
      )}
    </CheckBoxContainer>
  ))

  .add('Move icon to right of text', () => (
    <CheckBoxContainer>
      {(checked, onPress) => (
        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
          checked={checked}
          onPress={onPress}
        />
      )}
    </CheckBoxContainer>
  ))

  .add('Use image as the icons', () => (
    <CheckBoxContainer>
      {(checked, onPress) => (
        <CheckBox
          title='Click Here to Toggle the Icon'
          checkedIcon={renderImage('checked')}
          uncheckedIcon={renderImage('unchecked')}
          checked={checked}
          onPress={onPress}
        />
      )}
    </CheckBoxContainer>
  ));
