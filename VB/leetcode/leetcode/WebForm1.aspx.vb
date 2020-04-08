Public Class WebForm1
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim a As Integer() = {1, 2, 3}
        solution(a)
    End Sub
    Private Function solution(A As Integer()) As Integer
        ' write your code in VB.NET 4.0 (Mono)
        'Write A function

        'Private Function solution(A As Integer()) As Integer

        'that, given an array A Of N integers, returns the smallest positive integer (greater than 0) that does Not occur in A.

        'For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

        'Given A = [1, 2, 3], the function should return 4.

        'Given A = [−1, −3], the function should return 1.

        'Write an efficient algorithm for the following assumptions

        'N Is an Integer within the range [1..100, 0];
        'each element of array A Is an integer within the range [−1,000,000..1,000,000].
        Dim largestInt As Integer = A.Max()
        Dim missingInt As Integer = 0
        Dim turnInInt As Integer = 0
        For i As Integer = 0 To A.Length - 1

            For Each item As Integer In A
                If A(i) > 1 And (A(i) + 1 <> item And A(i) - 1 <> item And A(i + 1) <> item) Then
                    missingInt = missingInt + 1
                End If
                If missingInt = A.Length - 2 Then
                    turnInInt = missingInt + 1
                End If
            Next

        Next
        If turnInInt = 0 Then
            Return largestInt
        Else
            Return turnInInt
        End If


    End Function
End Class
