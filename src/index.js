module.exports = function check(str, bracketsConfig) {
  let arr=str.split(''),N=0;
   for (let i=0;i<arr.length;i++)
   {
       if (arr[i]==")")
       {
           for (let j=i-1;j>=0;j--)
           {
               if (arr[j]=="(" && N!=1) {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="[" || arr[j]=="{" || arr[j]=="]" || arr[j]=="}") {document.write("Fail");return false;} else if (arr[j]=="|") {N++;} else if (j==0) {document.write("Fail");return false;}
           }
       }
       N=0;
       if (arr[i]=="]")
       {
           for (let j=i-1;j>=0;j--)
           {
               if (arr[j]=="[" && N!=1) {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="(" || arr[j]=="{" || arr[j]==")" || arr[j]=="}") {document.write("Fail");return false;} else if (arr[j]=="|") {N++;} else if (j==0) {document.write("Fail");return false;}
           }
       }
       N=0;
       if (arr[i]=="}")
       {
           for (let j=i-1;j>=0;j--)
           {
               if (arr[j]=="{" && N!=1) {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="[" || arr[j]=="(" || arr[j]=="]" || arr[j]==")") {document.write("Fail");return false;} else if (arr[j]=="|") {N++;} else if (j==0) {document.write("Fail");return false;}
           }
       }
       N=0;
   }

   for (let i=0;i<arr.length;i++)
   {
    if (arr[i]=="|")
    {
        for (let j=i+1;j<=arr.length;j++)
        {
            if (arr[j]=="|") {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="[" || arr[j]=="(" || arr[j]=="]" || arr[j]==")" || arr[j]=="{" || arr[j]=="}") {document.write("Fail");return false;} else if (j==arr.length) {document.write("Fail");return false;}
        }
    }
   }
   for (let i=0;i<arr.length;i++)
   {
       if (arr[i]!="*") {document.write("Fail");return false;}
   }
   document.write("Arbeiten!");
   return true;
}
