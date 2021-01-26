import React from "react";
import { storiesOf } from "@storybook/react";

import { View } from "react-native";
import { Divider } from "react-native-elements";

storiesOf("Navbar|Navbar", module)
  .add("usage", () => <Divider style={{ backgroundColor: "blue" }} />)

  .add("with height", () => (
    <View style={{ margin: 10 }}>
      <Divider style={{ height: 3, backgroundColor: "#e1e8ee" }} />
    </View>
  ));
