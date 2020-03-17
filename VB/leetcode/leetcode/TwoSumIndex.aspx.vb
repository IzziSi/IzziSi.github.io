Public Class TwoSumIndex
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
        '        The Function() twoSum should Return indices Of the two numbers such that they add up To the target, where index1 must be less than index2.
        'Note:
        '        Your returned answers (both index1 And index2) are Not zero-based.
        'You may assume that each input would have exactly one solution And you may Not use the same element twice.
        'Example:

        'Input:  numbers = [2,7,11,15], target = 9
        'Output: [1,2]
        'Explanation: The sum Of 2 And 7 Is 9. Therefore index1 = 1, index2 = 2.

        Dim sortedarray As Integer() = {2, 7, 11, 15}
        Dim num As Integer = 9
        FindArraySumIndex(sortedarray, num)

    End Sub

    Protected Sub FindArraySumIndex(ByVal sortArray As Integer(), ByVal num As Integer)
        Dim index1 As Integer
        Dim index2 As Integer



    End Sub
End Class