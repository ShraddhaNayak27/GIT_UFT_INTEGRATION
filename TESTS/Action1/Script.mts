﻿Print "Test 01 has begun"

DataTable.SetCurrentRow(2)
Dim userName:userName = DataTable.Value("A","Action1")
Dim passWord:passWord = DataTable.Value("B","Action1")
Dim Phone:Phone = DataTable.Value("C","Action1")

Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set userName
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure passWord
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Sync

Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("Link_Cruises").Click
Wait 3
Browser("Welcome: Mercury Tours").Page("Cruises: Mercury Tours").Sync
Wait 3

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
If (Instr(pagetitle,"Cruises: Mercury Tours") > 0) Then
	oPages(i).Close
End If
	
Next
print "Test 01 has ended"

