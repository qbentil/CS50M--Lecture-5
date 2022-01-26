# Lists & User input

## Lists
● In web, browsers will automatically become scrollable for content with heights taller than the window <br>
●  In mobile, we need to do that manually. We can do that using the following Components from React Native
    ○ ScrollView
    ○ ListView (deprecated)
    ○ FlatList, SectionList

### ScrollView
● The most basic scrolling view
● I renders all of its children before appearing
● To render an array of data, we can use .map()
    ○ Components in an array need a unique key prop
**REF**  👉🏿 https://facebook.github.io/react-native/docs/scrollview.html

### FlatList
● A performant scrolling view for rendering data
● “Virtualized:” only renders what’s needed at a time
    ○ Only the visible rows are rendered in first cycle
    ○ Rows are recycled, and rows that leave visibility may be unmounted
● Pass an array of data and a renderItem function as props
● Only updates if props are changed
    ○ Immutability is important
**REF**  👉🏿 https://facebook.github.io/react-native/docs/flatlist.html

