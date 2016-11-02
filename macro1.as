Rem Attribute VBA_ModuleType=VBAFormModule
Option VBASupport 1


Private Sub CommandButton1_Click()
UserForm1.Show
End Sub




Private Sub AddData_Click()
Dim rng As Range
Dim rng2 As Range
Dim n As Integer
Dim x As Integer
Dim i As Integer
Dim y As Double
Dim weigh As Range
Dim k As String
Dim t As String
Dim q As Integer

ThisWorkbook.Sheets("WorkSheet").Activate
ActiveSheet.Range("A13:A200").ClearContents
ActiveSheet.Range("C13:C200").ClearContents
ThisWorkbook.Sheets("WorkSheet").Range("b13:b50").ClearContents

Set rng = ThisWorkbook.Sheets("WorkSheet").Range("B13")

For n = 0 To Me.ListBox.ListCount - 1
If Me.ListBox.Selected(n) Then
rng = Me.ListBox.List(n)
Set rng = rng.Offset(1, 0)
Else
End If
Next n


For n = o To ListBox.ListCount - 1
If ListBox.Selected(n) Then
x = x + 1
End If
Next n

For n = o To Me.ListBox.ListCount - 1
If Me.ListBox.Selected(n) Then Me.ListBox.Selected(n) = False
Next n





ThisWorkbook.Sheets("Worksheet").Activate

MsgBox ("You have selected " & x & " assets!")

For i = 1 To x
Cells(12 + i, 1).Value = "Asset" & i
Next i

t = MsgBox("Do you want to proceed with the current selection?", vbYesNo)
If vbYes Then
ElseIf vbNo Then
MsgBox ("Please reselect the asset!")
Exit Sub
End If

retry:
For i = 1 To x
Cells(12 + i, 3).Value = InputBox("What is the weight% of " & Cells(12 + i, 2).Value & " in your portfolio?")
Set rng2 = Range("C13", "C" & (12 + i))
q = Application.WorksheetFunction.Sum(rng2)
MsgBox ("You have Selected " & q & "% of assets in your portfolio.")
Next i

Set Weight = Range("c13:c21")
y = Application.WorksheetFunction.Sum(Weight)

If y <> 100 Then
k = MsgBox("Please re-enter the weight of each investment", vbYesNo)

    Select Case k
    
    Case vbYes
    GoTo retry
    
    Case vbNo
    Exit Sub
    
    End Select

Else
End If

Dim s As Double
s = Range("F13")
w = FormatPercent(s, 2)
MsgBox ("The expected return of your portfolio is " & w)
End Sub