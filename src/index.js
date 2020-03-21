module.exports = function check(str, bracketsConfig) {
  let arr=str.split(''),N=0;
  if(arr[arr.length-1]>=6) {return false;}
   for (let i=0;i<arr.length;i++)
   {
       if (arr[i]==")")
       {
           for (let j=i-1;j>=0;j--)
           {
               if (arr[j]=="(" && N!=1) {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="[" || arr[j]=="{" || arr[j]=="]" || arr[j]=="}") {return false;} else if (arr[j]=="|") {N++;} else if (j==0) {return false;}
           }
       }
       N=0;
       if (arr[i]=="]")
       {
           for (let j=i-1;j>=0;j--)
           {
               if (arr[j]=="[" && N!=1) {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="(" || arr[j]=="{" || arr[j]==")" || arr[j]=="}") {return false;} else if (arr[j]=="|") {N++;} else if (j==0) {return false;}
           }
       }
       N=0;
       if (arr[i]=="}")
       {
           for (let j=i-1;j>=0;j--)
           {
               if (arr[j]=="{" && N!=1) {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="[" || arr[j]=="(" || arr[j]=="]" || arr[j]==")") {return false;} else if (arr[j]=="|") {N++;} else if (j==0) {return false;}
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
            if (arr[j]=="|") {arr[j]="*";arr[i]="*";break;} else if (arr[j]=="[" || arr[j]=="(" || arr[j]=="]" || arr[j]==")" || arr[j]=="{" || arr[j]=="}") {return false;} else if (j==arr.length) {return false;}
        }
    }
   }
   for (let i=0;i<arr.length;i++)
   {
       if (arr[i]!="*") {return false;}
   }
   if (arr.length==0) {return false;}
   return true;
}
