using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication3
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public bool solution(String S)
        {
            bool doesContainUpperAlphabet = false;
            bool doesContainSpecialCharacter = false;
            bool doesContainLowerAlphabet = false;
            bool doesContainNumber = false;
            if (S.Length < 6 || S.Length > 100)
            {
                return false;
            }
            if (S.Contains(" "))
            { 
                return false;
            }
            string[] lowerAlphabet = new string[] { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" };
            string[] upperAlphabet = new string[] { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" };
            string[] specialCharacters = new string[] { "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_" };
            string[] nums = new string[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"};

            foreach (string i in upperAlphabet)
            {
                if (S.Contains(i))
                {
                    doesContainUpperAlphabet = true;
                }
            }

            foreach (string i in specialCharacters)
            {
                if (S.Contains(i))
                {
                    doesContainSpecialCharacter = true;
                }
            }
            foreach (string i in nums)
            {
                if (S.Contains(i))
                {
                    doesContainNumber = true;
                }
            }
            foreach (string i in lowerAlphabet)
            {
                if (S.Contains(i))
                {
                    doesContainLowerAlphabet = true;
                }
            }

            if (doesContainSpecialCharacter && doesContainUpperAlphabet && doesContainNumber && doesContainLowerAlphabet)
            {
                return true;
            }
            return false;
        }
    }
}