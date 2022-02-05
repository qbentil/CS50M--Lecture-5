# LECTURE 5 - Lists & User input

## Lists
● In web, browsers will automatically become scrollable for content with heights taller than the window <br>
●  In mobile, we need to do that manually. We can do that using the following Components from React Native  <br>
&nbsp; &nbsp; &nbsp; ○ ScrollView <br>
&nbsp; &nbsp; &nbsp; ○ ListView (deprecated) <br>
&nbsp; &nbsp; &nbsp; ○ FlatList, SectionList<br>

### ScrollView
● The most basic scrolling view <br>
● I renders all of its children before appearing <br>
● To render an array of data, we can use .map() <br>
&nbsp; &nbsp; &nbsp;○ Components in an array need a unique key prop <br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/scrollview.html <br>

### FlatList
● A performant scrolling view for rendering data <br>
● “Virtualized:” only renders what’s needed at a time<br>
&nbsp; &nbsp; &nbsp;○ Only the visible rows are rendered in first cycle<br>
&nbsp; &nbsp; &nbsp;○ Rows are recycled, and rows that leave visibility may be unmounted<br>
● Pass an array of data and a renderItem function as props<br>
● Only updates if props are changed<br>
&nbsp; &nbsp; &nbsp;○ Immutability is important<br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/flatlist.html<br>

### SectionList
● Like FlatList with additional support for sections<br>
● Instead of data prop, define sections<br>
&nbsp; &nbsp; &nbsp;○ Each section has its own data array<br>
&nbsp; &nbsp; &nbsp;○ Each section can override the renderItem function with their own custom renderer<br>
● Pass a renderSectionHeader function for section headers <br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/sectionlist.html <br>


# CONTINUES TO LECTURE 5 - User input & Debugging

### User Input
● Controlled vs uncontrolled components <br>
&nbsp; &nbsp; &nbsp;○ Where is the source of truth for the value of an input? <br>
● React recommends always using controlled components <br>
● Pass value and onChangeText props <br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/textinput.html <br>


<!-- Demo -->
## Live Demo 
This simple phone book App has been hosted in my Expo snacks

⚙️   Project page: https://snack.expo.dev/@qbentil/lecture-5---contacts