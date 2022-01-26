# Lists & User input

## Lists
● In web, browsers will automatically become scrollable for content with heights taller than the window <br>
●  In mobile, we need to do that manually. We can do that using the following Components from React Native  <br>
&nbsp; &nbsp; ○ ScrollView <br>
&nbsp; &nbsp; ○ ListView (deprecated) <br>
&nbsp; &nbsp; ○ FlatList, SectionList<br>

### ScrollView
● The most basic scrolling view <br>
● I renders all of its children before appearing <br>
● To render an array of data, we can use .map() <br>
&nbsp; &nbsp;○ Components in an array need a unique key prop <br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/scrollview.html <br>

### FlatList
● A performant scrolling view for rendering data <br>
● “Virtualized:” only renders what’s needed at a time<br>
&nbsp; &nbsp;○ Only the visible rows are rendered in first cycle<br>
&nbsp; &nbsp;○ Rows are recycled, and rows that leave visibility may be unmounted<br>
● Pass an array of data and a renderItem function as props<br>
● Only updates if props are changed<br>
&nbsp; &nbsp;○ Immutability is important<br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/flatlist.html<br>

### SectionList
● Like FlatList with additional support for sections<br>
● Instead of data prop, define sections<br>
&nbsp; &nbsp;○ Each section has its own data array<br>
&nbsp; &nbsp;○ Each section can override the renderItem function with their own custom renderer<br>
● Pass a renderSectionHeader function for section headers <br>
**REF**  👉🏿 https://facebook.github.io/react-native/docs/sectionlist.html <br>

