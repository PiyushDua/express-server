function Equilateral(n)
{
    let flag = 0;
    for(let i=1; i<=n; i++)
    {
        let pattern = '';
        for(let j=1; j<=(2*n-1); j++)
        {
            if((j >= (n+1)- i) && (j <= (n-1) + i) && flag == 0)
            {
                pattern += '*';
                flag = 1;
            }
            else
            {
                pattern += ' ';
                flag = 0;
            }
        }
        console.log(pattern);
    }
}

Equilateral(5);
Equilateral(6);
Equilateral(8);