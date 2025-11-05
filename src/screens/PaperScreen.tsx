import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Appbar,
  Button,
  TextInput,
  Text,
  Card,
  List,
  Checkbox,
  Switch,
  useTheme,
} from 'react-native-paper';

const PaperScreen: React.FC = () => {
  const theme = useTheme();

  const [text, setText] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState<boolean>(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Appbar.Header>
        <Appbar.Content title="Paper TS Project" />
        <Appbar.Action icon="cog" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Card style={styles.card}>
          <Card.Title
            title="Welcome"
            subtitle="A simple example"
            left={props => <List.Icon {...props} icon="home" />}
          />
          <Card.Content>
            <Text variant="bodyMedium" style={styles.text}>
              This project demonstrates various React Native Paper components
              using TypeScript.
            </Text>
          </Card.Content>
        </Card>

        <TextInput
          label="Enter Text"
          value={text}
          onChangeText={setText}
          mode="outlined"
          style={styles.input}
        />

        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Button pressed')}
          style={styles.button}
        >
          Press Me
        </Button>

        <List.Section style={styles.listSection}>
          <List.Subheader>Options List</List.Subheader>
          <List.Item
            title="List Item 1"
            description="With an icon"
            left={props => <List.Icon {...props} icon="folder" />}
          />
          <List.Item
            title="List Item 2"
            description="Another item"
            left={props => <List.Icon {...props} icon="play" />}
          />
        </List.Section>

        <View style={styles.row}>
          <Text>Checkbox Status: {checked ? 'Checked' : 'Unchecked'}</Text>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
        </View>

        <View style={styles.row}>
          <Text>Switch Status: {isSwitchOn ? 'On' : 'Off'}</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  text: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  listSection: {
    backgroundColor: 'white',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default PaperScreen;
