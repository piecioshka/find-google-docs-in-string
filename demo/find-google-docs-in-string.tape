Output demo/find-google-docs-in-string.gif

Require find-google-docs-in-string

Set Shell "bash"
Set Framerate 60
Set FontSize 12
Set Width 800
Set Height 400
Set Padding 20
Set Margin 5
Set MarginFill "#212830"
Set BorderRadius 10

Hide
Type 'cd /tmp/find-google-docs-in-string-demo && clear' Enter
Show

Type "cat docs.txt" Sleep 200ms Enter
Wait Sleep 1500ms

Enter Enter Type "# extract only the Google Docs links from a text file" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "find-google-docs-in-string docs.txt" Sleep 500ms Enter
Wait Sleep 2000ms

Sleep 3s
