console.log('Debugging message')

function someFunction ()
{
    return undefinedVar;
}

function notDefined ()
{
    console.trace();
    try
    {
	someFunction();
    }
    catch (e)
    {
	console.error(e);
    }
}

notDefined();