

function myint()
{
    
    this.value = 0
}

function increment(data)
{
    console.log(data)
    if(data !=null && data instanceof myint)
    data.value++
}

function main()
{
    var i = new myint()
    increment(i)
    console.log(i.value)

}

main()

