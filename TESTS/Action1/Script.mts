Print "Test 01 has started"

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

print "Test 01 has ended"

