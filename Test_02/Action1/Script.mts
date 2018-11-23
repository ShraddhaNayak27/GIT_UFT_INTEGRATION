Print "Test 02 has started"

DataTable.SetCurrentRow(2)
Dim userName:userName = DataTable.Value("A","Action1")
Dim passWord:passWord = DataTable.Value("B","Action1")
Dim Phone:Phone = DataTable.Value("C","Action1")

Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set userName @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure passWord @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Sync
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("Hotels").Click
Wait 3
Browser("Welcome: Mercury Tours").Page("Under Construction: Mercury").sync
Wait 5

Dim oPages
Dim oDesc
Dim i

Set oDesc = Description.create
oDesc("micclass").value = "Browser"
Set oPages = Desktop.ChildObjects(oDesc)
Dim pagetitle
For i=0 to oPages.Count -1
Print oPages(i).getROProperty("title")
pagetitle = oPages(i).getROProperty("title")
print "*******"&pagetitle
If (Instr(pagetitle,"Under Construction: Mercury Tours") > 0) Then
	oPages(i).Close
End If
	
Next


Print "Test 02 has Ended"

