Rem Attribute VBA_ModuleType=VBAModule
Option VBASupport 1
Sub autoyear()

Dim ws3 As Worksheet
Dim yr As Integer
Dim n As Integer
Set ws3 = ThisWorkbook.Sheets("Sheet3")
ws3.Activate
yr = Range("B5")

ws3.Range(Cells(3, 5), Cells(12, 100)).ClearContents
For n = 1 To yr
Cells(3, 4 + n) = Range("B6") + n - 1
Next n

Dim ws1 As Worksheet
Dim ws2 As WorksheetFunction
Set ws1 = ThisWorkbook.Sheets("Sheet1")
Set ws2 = ThisWorkbook.Sheets("Sheet2")

Dim yr0 As Integer
Dim yr1 As Integer
Dim mvdown As Integer
yr0 = ws1.Range("A7")
yr1 = ws3.Range("B6")
mvdown = yr1 - yr0

Dim rng0 As Range
Dim rng1 As Range
Set rng0 = ws1.Range("B7:J7")
Set rng1 = rng0.Offset(mvdown, 0)

Dim cons As Range
Dim bal As Range
Dim grs As Range
Dim cho1 As Range
Dim cho2 As Range
Set cons = ws2.Range("B2:J2")
Set bal = cons.Offset(1, 0)
Set grs = cons.Offset(2, 0)
Set cho1 = cons.Offset(3, 0)
Set cho2 = cons.Offset(4, 0)

ws3.Activate
If ws3.Range("B10") = "NO" Then

For n = 1 To yr
Cells(4, 4 + n) = WorksheetFunction.SumProduct(rng1.Offset(n - 1, 0), cons)

Next n
End If

Dim m As Integer
Dim k As Integer
Dim mid As Integer
mid = ws3.Range("b11")
If ws3.Range("B10") = "YES" Then
For n = 1 To yr
Cells(4, 4 + n) = WorksheetFunction.SumProduct(rng1.Offset(n - 1, 0), cons)
Cells(5, 4 + n) = WorksheetFunction.SumProduct(rng1.Offset(n - 1, 0), bal)
Cells(6, 4 + n) = WorksheetFunction.SumProduct(rng1.Offset(n - 1, 0), grs)
Next n

For m = 1 To mid - 1
Cells(7, 4 + m) = WorksheetFunction.SumProduct(rng1.Offset(m - 1, 0), cho1)
Next m
For k = mid To yr
Cells(7, 4 + k) = WorksheetFunction.SumProduct(rng1.Offset(k - 1, 0), cho2)
Next k
End If


ws3.Activate
Dim w As Integer
For w = 1 To yr
If w = 1 Then
Cells(8, 4 + w) = Range("B7")
Cells(9, 4 + w) = Cells(8, 4 + w) * (1 + Cells(4, 4 + w) / 100)
Cells(10, 4 + w) = Cells(8, 4 + w) * (1 + Cells(5, 4 + w) / 100)
Cells(11, 4 + w) = Cells(8, 4 + w) * (1 + Cells(6, 4 + w) / 100)
Cells(12, 4 + w) = Cells(8, 4 + w) * (1 + Cells(7, 4 + w) / 100)

Else: Cells(8, 4 + w) = Range("B8")
Cells(9, 4 + w) = (Cells(9, 3 + w) + Cells(8, 4 + w)) * (1 + Cells(4, 4 + w) / 100)
Cells(10, 4 + w) = (Cells(10, 3 + w) + Cells(8, 4 + w)) * (1 + Cells(5, 4 + w) / 100)
Cells(11, 4 + w) = (Cells(11, 3 + w) + Cells(8, 4 + w)) * (1 + Cells(6, 4 + w) / 100)
Cells(12, 4 + w) = (Cells(12, 3 + w) + Cells(8, 4 + w)) * (1 + Cells(7, 4 + w) / 100)
End If
Next w

End Sub